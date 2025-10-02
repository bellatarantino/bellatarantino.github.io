import React, { useEffect, useMemo, useRef, useState } from 'react'
import { db, ensureAnonAuth, auth } from '../firebase'
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
import {
  ref,
  push,
  onValue,
  update,
  runTransaction,
  query,
  limitToLast,
  get,
  child,
  set
} from 'firebase/database'
import { Helmet, HelmetProvider } from "react-helmet-async";

function uid () {
  return Math.random().toString(36).slice(2) + Date.now().toString(36)
}

const defaultReactions = [
  { key: 'like', label: '👍' },
  { key: 'love', label: '❤️' },
  { key: 'wow', label: '😮' },
  { key: 'sad', label: '😢' }
]

const ROOM_CODES = [
  { label: '1-1', code: 'YKS-11-X7P4Q2' },
  { label: '1-2', code: 'YKS-12-M4Q8D9' },
  { label: '1-3', code: 'YKS-13-R9Z2T5' },
  { label: '1-4', code: 'YKS-14-T6H7C3' },
  { label: '1-5', code: 'YKS-15-B3N5Q8' },
  { label: '1-6', code: 'YKS-16-W8K1L4' }
]

function roomLabelFromCode (code) {
  const m = ROOM_CODES.find(r => r.code === code)
  return m ? `${m.label} (${code})` : code
}

function countWords (t) {
  return (t.trim().match(/[^\s]+/g) || []).length
}
function clamp (n, a, b) {
  return Math.max(a, Math.min(b, n))
}

export default function YokoteNet () {
  const [room, setRoom] = useState('')
  const [joined, setJoined] = useState(false)

  const [author, setAuthor] = useState('')
  const [text, setText] = useState('')
  const [hashtag, setHashtag] = useState('')
  const [posts, setPosts] = useState([])

  const [sortBy, setSortBy] = useState('new') // "new" | "reactions"
  const [filter, setFilter] = useState('')
  const [settings, setSettings] = useState({
    allowPosting: true,
    allowReactions: true,
    allowComments: true
  })
  const [isAdmin, setIsAdmin] = useState(false)

  const activeUnsub = useRef({ posts: null, settings: null })
  const [joinedRoom, setJoinedRoom] = useState(null)
  const [joining, setJoining] = useState(false)
  const [banner, setBanner] = useState(null) // { type: 'success'|'error', text: string }

  const goalMin = 80,
    goalMax = 100
  const wordCount = useMemo(() => countWords(text), [text])
  const goalPct = clamp(
    ((wordCount - goalMin) / (goalMax - goalMin)) * 100,
    0,
    100
  )

  async function verifyRoomAllowed (code) {
    try {
      await ensureAnonAuth()
    } catch (_) {
      // Ignore; we'll still try lightweight checks
    }
    if (!code) return false

    // If the code is one of the known class codes, accept immediately (no DB read required)
    if (ROOM_CODES.some(r => r.code === code)) return true

    // Otherwise, try to verify via DB, but never throw on permission errors
    const root = ref(db)
    let allow = false
    let exists = false
    try {
      const s = await get(child(root, `allowedRooms/${code}`))
      allow = !!(s.exists() && s.val() === true)
    } catch (e) {
      // permission denied or offline — ignore
    }
    try {
      const s2 = await get(child(root, `rooms/${code}`))
      exists = s2.exists()
    } catch (e) {
      // ignore
    }
    return allow || exists
  }

  async function joinRoom () {
    const code = room?.trim()
    if (!code) return
    try {
      setJoining(true)
      await ensureAnonAuth()
      const allowed = await verifyRoomAllowed(code)
      if (!allowed) {
        setJoined(false)
        setJoinedRoom(null)
        setPosts([])
        setBanner({
          type: 'error',
          text: 'Room code not recognized. Ask your teacher.'
        })
        return
      }

      // Unsubscribe previous listeners if any
      if (activeUnsub.current.posts) {
        activeUnsub.current.posts()
        activeUnsub.current.posts = null
      }
      if (activeUnsub.current.settings) {
        activeUnsub.current.settings()
        activeUnsub.current.settings = null
      }

      // Mark as joined immediately so UI reflects state
      setJoined(true)
      setJoinedRoom(code)
      setPosts([])
      localStorage.setItem('sns.joinedRoom', code)
      setBanner({ type: 'success', text: `Joined ${roomLabelFromCode(code)}` })

      // Subscribe to posts
      const postsRef = ref(db, `rooms/${code}/posts`)
      const qPosts = query(postsRef, limitToLast(300))
      const unsubPosts = onValue(
        qPosts,
        snap => {
          const val = snap.val() || {}
          const arr = Object.entries(val).map(([id, p]) => ({ id, ...p }))
          arr.sort((a, b) => b.createdAt - a.createdAt)
          setPosts(arr)
        },
        err => {
          console.error('Posts subscribe failed:', err)
          setBanner({
            type: 'error',
            text: 'Could not load posts for this room.'
          })
        }
      )

      // Subscribe to settings
      const settingsRef = ref(db, `rooms/${code}/settings`)
      const unsubSettings = onValue(
        settingsRef,
        snap => {
          const s = snap.val() || {}
          setSettings({
            allowPosting: true,
            allowReactions: true,
            allowComments: true,
            ...s
          })
        },
        err => {
          console.error('Settings subscribe failed:', err)
        }
      )

      activeUnsub.current.posts = unsubPosts
      activeUnsub.current.settings = unsubSettings
    } catch (e) {
      console.error('Failed to join room', e)
      setBanner({
        type: 'error',
        text: 'Could not join room (network or permissions). Try again or check DB rules.'
      })
    } finally {
      setJoining(false)
    }
  }

  useEffect(() => {
    // auto-join default room on mount
    let mounted = true
    ;(async () => {
      // Do not auto-join; wait for teacher/student to enter a valid code.
      // If you want to auto-fill a default for testing, set room state before calling joinRoom().
      if (mounted && room) {
        // Attempt join only if the default is actually whitelisted
        if (await verifyRoomAllowed(room)) await joinRoom()
      }
    })()
    return () => {
      mounted = false
      if (activeUnsub.current.posts) activeUnsub.current.posts()
      if (activeUnsub.current.settings) activeUnsub.current.settings()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    // Show admin UI for teachers even if admins/<uid> node is unreadable
    const authUser = auth.currentUser
    if (!authUser) {
      setIsAdmin(false)
      return
    }
    const isPwd = !!authUser.providerData?.some(
      p => p.providerId === 'password'
    )
    // Baseline: teacher login implies admin UI
    setIsAdmin(isPwd)

    // Try to read admins/<uid>; if readable and true, also grant admin
    const adminRef = ref(db, `admins/${authUser.uid}`)
    const unsub = onValue(
      adminRef,
      snap => {
        const dbFlag = snap.val() === true
        setIsAdmin(isPwd || dbFlag)
      },
      err => {
        // Permission denied or offline — keep baseline isPwd
        console.warn('admins flag read failed', err?.code || err)
        setIsAdmin(isPwd)
      }
    )
    return () => unsub()
  }, [auth.currentUser])

  const sortedFilteredPosts = useMemo(() => {
    let list = Array.isArray(posts) ? [...posts] : []

    // Text/hashtag filter
    if (filter && filter.trim()) {
      const q = filter.trim().toLowerCase()
      list = list.filter(p => {
        const authorText = (p.author || '').toLowerCase()
        const bodyText = (p.text || '').toLowerCase()
        const tagText = Array.isArray(p.hashtags)
          ? p.hashtags.join(' ').toLowerCase() // new array field
          : (p.hashtag || '').toLowerCase() // legacy single-string
        return (
          authorText.includes(q) || bodyText.includes(q) || tagText.includes(q)
        )
      })
    }

    // Sort
    if (sortBy === 'reactions') {
      list.sort(
        (a, b) =>
          totalReactions(b) - totalReactions(a) || // primary: most reactions
          (b.createdAt || 0) - (a.createdAt || 0) // tiebreaker: newest first
      )
    } else {
      list.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0)) // newest first
    }

    return list
  }, [posts, sortBy, filter])

  function totalReactions (p) {
    return Object.values(p.reactions || {}).reduce((s, n) => s + (n || 0), 0)
  }

  async function onSubmitPost (e) {
    e.preventDefault()
    if (!settings.allowPosting && !isAdmin) return
    if (!author.trim() || !text.trim()) return
    const code = joinedRoom || room
    if (!code) {
      alert('Join a room first.')
      return
    }
    // Ensure hashtags are stored in lowercase
    // Parse comma-separated hashtags → lowercase, trimmed, de-duped
    const rawTags = (hashtag || '')
      .split(',')
      .map(t => t.trim().toLowerCase())
      .filter(Boolean)
    const tags = Array.from(new Set(rawTags))

    const newPost = {
      authorId: auth.currentUser?.uid || '(anon)',
      author: author.trim(),
      text: text.trim(),
      // legacy single string for older clients
      hashtag: tags.join(', '),
      // new multi-tag array
      hashtags: tags,
      createdAt: Date.now(),
      reactions: Object.fromEntries(defaultReactions.map(r => [r.key, 0])),
      comments: {}
    }
    await push(ref(db, `rooms/${code}/posts`), newPost)
    setText('')
    setHashtag('')
  }

  async function toggleReaction (postId, key) {
    if (!settings.allowReactions && !isAdmin) return
    const code = joinedRoom || room
    if (!code) return
    const countRef = ref(db, `rooms/${code}/posts/${postId}/reactions/${key}`)
    await runTransaction(countRef, curr => (curr || 0) + 1)
  }

  async function addComment (postId, author, content) {
    if (!settings.allowComments && !isAdmin) return
    if (!content.trim()) return
    const code = joinedRoom || room
    if (!code) return
    const c = {
      authorId: auth.currentUser?.uid || '(anon)',
      author: author?.trim() || '(anon)',
      content: content.trim(),
      at: Date.now()
    }
    await push(ref(db, `rooms/${code}/posts/${postId}/comments`), c)
  }

  function totalCount (p) {
    return totalReactions(p)
  }

  function csvEscape (val) {
    const s = String(val ?? '')
    return '"' + s.replace(/"/g, '""') + '"'
  }

  async function downloadPostsCsv (code) {
    try {
      const snap = await get(ref(db, `rooms/${code}/posts`))
      const val = snap.val() || {}
      const arr = Object.entries(val).map(([id, p]) => ({ id, ...p }))
      const headers = [
        'id',
        'authorId',
        'author',
        'text',
        'hashtags',
        'createdAt',
        'like',
        'love',
        'wow',
        'sad',
        'commentsCount'
      ]
      const lines = [headers.join(',')]
      for (const p of arr) {
        const created = p.createdAt ? new Date(p.createdAt).toISOString() : ''
        const reactions = p.reactions || {}
        const commentsCount = p.comments ? Object.keys(p.comments).length : 0
        const row = [
          p.id,
          p.authorId || '',
          p.author || '',
          p.text || '',
          (Array.isArray(p.hashtags) ? p.hashtags.join("|") : (p.hashtag || "")),
          created,
          reactions.like ?? 0,
          reactions.love ?? 0,
          reactions.wow ?? 0,
          reactions.sad ?? 0,
          commentsCount
        ]
          .map(csvEscape)
          .join(',')
        lines.push(row)
      }
      const blob = new Blob([lines.join('\n')], {
        type: 'text/csv;charset=utf-8;'
      })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `${code}-posts.csv`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    } catch (e) {
      console.error('CSV download failed', e)
      alert('Could not download CSV.')
    }
  }

  // Admin helpers
  async function updateRoomSetting (code, key, value) {
    try {
      await set(ref(db, `rooms/${code}/settings/${key}`), value)
      setBanner({ type: 'success', text: `${key} set to ${String(value)}` })
    } catch (e) {
      console.error('Failed to update setting', key, e)
      setBanner({
        type: 'error',
        text: `Could not update ${key}. Check database rules.`
      })
    }
  }

  async function deleteAllPosts (code) {
    try {
      await set(ref(db, `rooms/${code}/posts`), null) // equivalent to remove
      setBanner({ type: 'success', text: 'All posts deleted for this room.' })
    } catch (e) {
      console.error('Failed to delete posts', e)
      setBanner({
        type: 'error',
        text: 'Could not delete posts. Check database rules.'
      })
    }
  }

  // ——— UI ———
  return (
    <>
        <HelmetProvider>
          <Helmet>
        <title>Yokote-Net</title>
        <link rel="icon" href="/img/yokote.png" />
      </Helmet>
        </HelmetProvider>
      

    <div className='min-h-screen bg-slate-50 text-slate-800'>
      <header className='sticky top-0 z-10 backdrop-blur bg-white/70 border-b border-slate-200'>
        <div className='max-w-5xl mx-auto px-4 py-3 flex flex-col gap-3 md:flex-row md:items-center md:justify-between'>
          <h1 className='text-2xl font-bold'>Yokote Net</h1>

          <div className='flex flex-wrap items-center gap-2'>
            <input
              type='text'
              autoComplete='off'
              className='px-3 py-2 rounded-xl border border-slate-300 bg-white'
              value={room}
              onChange={e => setRoom(e.target.value)}
              placeholder='Enter secret room code'
              title='Enter the secret code your teacher gave you'
            />
            <button
              type='button'
              className='px-3 py-2 rounded-xl border border-slate-300 hover:bg-slate-100'
              onClick={async () => {
                await joinRoom()
              }}
            >
              Join Room
            </button>
            {joinedRoom && (
              <span className='text-sm text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1'>
                Joined ✓{' '}
                <span className='font-semibold'>
                  {roomLabelFromCode(joinedRoom)}
                </span>
              </span>
            )}
            <div className='flex items-center gap-2'>
              <AdminAuthBadge />
            </div>

            <select
              className='px-3 py-2 rounded-xl border border-slate-300 bg-white'
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
            >
              <option value='new'>Sort: Newest</option>
              <option value='reactions'>Sort: Most Reactions</option>
            </select>

            <input
              className='px-3 py-2 rounded-xl border border-slate-300 bg-white'
              placeholder='Search posts…'
              value={filter}
              onChange={e => setFilter(e.target.value)}
            />
          </div>
          {banner && (
            <div
              className={`mt-2 text-sm rounded-md px-3 py-2 border ${
                banner.type === 'success'
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                  : 'bg-rose-50 text-rose-800 border-rose-200'
              }`}
            >
              {banner.text}
            </div>
          )}
        </div>
      </header>

      <main className='max-w-5xl mx-auto px-4 py-6 grid md:grid-cols-3 gap-6'>
        <section className='md:col-span-1'>
          <div className='bg-white rounded-2xl shadow p-4 space-y-4'>
            <h2 className='text-lg font-semibold'>Write a Post</h2>
            <input
              className='w-full px-3 py-2 rounded-xl border border-slate-300'
              placeholder='Your name (e.g., Hana)'
              value={author}
              onChange={e => setAuthor(e.target.value)}
            />
            <textarea
              className='w-full h-40 resize-y px-3 py-2 rounded-xl border border-slate-300'
              placeholder='Write your 80–100 word message to the world…'
              value={text}
              onChange={e => setText(e.target.value)}
            />
            <WordGoalBar wordCount={wordCount} min={goalMin} max={goalMax} />
            {/* <input
              className="w-full px-3 py-2 rounded-xl border border-slate-300"
              placeholder="#hashtag (optional)"
              value={hashtag}
              onChange={(e) => setHashtag(e.target.value)}
            /> */}
            <input
              className='w-full px-3 py-2 rounded-xl border border-slate-300'
              placeholder='#hashtags (comma-separated, optional)'
              title='Use commas to add multiple hashtags, e.g., nabekko,help'
              value={hashtag}
              onChange={e => setHashtag(e.target.value)}
            />
            <button
              onClick={onSubmitPost}
              disabled={(!settings.allowPosting && !isAdmin) || !joinedRoom}
              className={`w-full px-4 py-2 rounded-2xl font-semibold shadow ${
                (settings.allowPosting || isAdmin) && joinedRoom
                  ? 'bg-slate-900 text-white hover:bg-slate-800'
                  : 'bg-slate-200 text-slate-500'
              }`}
            >
              Post
            </button>

            {isAdmin && (
              <div className='pt-3 border-t border-slate-200 space-y-2'>
                {!joinedRoom && (
                  <p className='text-xs text-slate-500'>
                    Join a room to manage its settings.
                  </p>
                )}

                {/* 1. Disable Posting */}
                <label className='flex items-center gap-2'>
                  <input
                    type='checkbox'
                    checked={!settings.allowPosting}
                    onChange={e => {
                      if (!joinedRoom) return
                      updateRoomSetting(
                        joinedRoom,
                        'allowPosting',
                        !e.target.checked
                      )
                    }}
                  />
                  <span>Disable Posting</span>
                </label>

                {/* 2. Disable Comments */}
                <label className='flex items-center gap-2'>
                  <input
                    type='checkbox'
                    checked={!settings.allowComments}
                    onChange={e => {
                      if (!joinedRoom) return
                      updateRoomSetting(
                        joinedRoom,
                        'allowComments',
                        !e.target.checked
                      )
                    }}
                  />
                  <span>Disable Comments</span>
                </label>

                {/* 3. Disable Reactions */}
                <label className='flex items-center gap-2'>
                  <input
                    type='checkbox'
                    checked={!settings.allowReactions}
                    onChange={e => {
                      if (!joinedRoom) return
                      updateRoomSetting(
                        joinedRoom,
                        'allowReactions',
                        !e.target.checked
                      )
                    }}
                  />
                  <span>Disable Reactions</span>
                </label>

                <div className="space-y-2 pt-2">
                  {/* 4. Trash Button — Delete All Posts */}
                  <button
                    disabled={!joinedRoom}
                    className={`w-full px-4 py-2 rounded-2xl font-semibold shadow flex items-center justify-center gap-2 ${
                      joinedRoom ? 'bg-rose-600 text-white hover:bg-rose-500' : 'bg-slate-200 text-slate-500'
                    }`}
                    onClick={() => {
                      if (!joinedRoom) return
                      if (!confirm('Delete ALL posts in this room?')) return
                      deleteAllPosts(joinedRoom)
                    }}
                  >
                    <span>🗑️</span>
                    <span>Delete All Posts</span>
                  </button>

                  {/* 5. Download Button — CSV */}
                  <button
                    disabled={!joinedRoom}
                    className={`w-full px-4 py-2 rounded-2xl font-semibold shadow flex items-center justify-center gap-2 ${
                      joinedRoom ? 'bg-sky-600 text-white hover:bg-sky-500' : 'bg-slate-200 text-slate-500'
                    }`}
                    onClick={async () => {
                      if (!joinedRoom) return
                      await downloadPostsCsv(joinedRoom)
                    }}
                  >
                    <span>⬇️</span>
                    <span>Download CSV</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className='md:col-span-2 space-y-4'>
          {sortedFilteredPosts.length === 0 ? (
            <EmptyState />
          ) : (
            sortedFilteredPosts.map(p => (
              <PostCard
                key={p.id}
                post={p}
                onReact={toggleReaction}
                onComment={addComment}
                allowReactions={settings.allowReactions || isAdmin}
                allowComments={settings.allowComments || isAdmin}
                total={totalCount(p)}
              />
            ))
          )}
        </section>
      </main>

      <footer className='max-w-5xl mx-auto px-4 pb-10 text-center text-sm text-slate-500'>
        <p>
          Enter the secret class code to join. All devices in the same code see
          the same live feed.
        </p>
      </footer>
    </div>
    </>

  )
}

function WordGoalBar ({ wordCount, min, max }) {
  const pct = clamp(((wordCount - min) / (max - min)) * 100, 0, 100)
  const color =
    wordCount < min
      ? 'bg-sky-400'
      : wordCount <= max
      ? 'bg-emerald-500'
      : 'bg-rose-500'
  return (
    <div className='text-sm flex items-center gap-2'>
      <div className='flex-1 h-2 bg-slate-200 rounded-full overflow-hidden'>
        <div className={`h-full ${color}`} style={{ width: `${pct}%` }} />
      </div>
      <span className='tabular-nums'>{wordCount} words</span>
    </div>
  )
}

function EmptyState () {
  return (
    <div className='bg-white rounded-2xl shadow p-8 text-center text-slate-500'>
      <p className='text-lg'>
        No posts yet. Invite students to write their 80–100 word message.
      </p>
      <p className='mt-2'>
        You can temporarily disable reactions until everyone has posted.
      </p>
    </div>
  )
}

function PostCard ({
  post,
  onReact,
  onComment,
  allowReactions,
  allowComments,
  total
}) {
  const [commenter, setCommenter] = useState('')
  const [comment, setComment] = useState('')

  async function submit () {
    if (!allowComments) return
    if (!comment.trim()) return
    await onComment(post.id, commenter, comment)
    setComment('')
  }

  return (
    <article className='bg-white rounded-2xl shadow p-4'>
      <header className='flex items-start justify-between'>
        <div>
          <h3 className='font-semibold text-slate-900'>{post.author}</h3>
          <time className='text-xs text-slate-500'>
            {post.createdAt ? new Date(post.createdAt).toLocaleString() : ''}
          </time>
        </div>
        {/* {post.hashtag && (
          <div className="text-sm text-sky-700 bg-sky-50 border border-sky-200 rounded-full px-3 py-1">
            {post.hashtag}
          </div>
        )} */}
        {Array.isArray(post.hashtags) && post.hashtags.length > 0 ? (
          <div className='flex flex-wrap gap-2'>
            {post.hashtags.map((t, i) => (
              <span
                key={i}
                className='text-sm text-sky-700 bg-sky-50 border border-sky-200 rounded-full px-3 py-1'
              >
                {t}
              </span>
            ))}
          </div>
        ) : post.hashtag ? (
          <div className='text-sm text-sky-700 bg-sky-50 border border-sky-200 rounded-full px-3 py-1'>
            {post.hashtag}
          </div>
        ) : null}
      </header>

      <p className='mt-3 leading-relaxed whitespace-pre-wrap'>{post.text}</p>

      <div className='mt-4 flex flex-wrap items-center gap-3'>
        {defaultReactions.map(r => (
          <button
            key={r.key}
            onClick={() => onReact(post.id, r.key)}
            disabled={!allowReactions}
            className={`px-3 py-1 rounded-full border shadow-sm ${
              allowReactions
                ? 'hover:bg-slate-50'
                : 'opacity-50 cursor-not-allowed'
            }`}
            title={r.key}
          >
            <span className='mr-1'>{r.label}</span>
            <span className='tabular-nums text-slate-700'>
              {post.reactions?.[r.key] ?? 0}
            </span>
          </button>
        ))}
        <span className='text-sm text-slate-500 ml-auto'>Total: {total}</span>
      </div>

      <div className='mt-4 border-t pt-3'>
        <h4 className='font-medium text-slate-900 mb-2'>Comments</h4>
        {post.comments ? (
          <ul className='space-y-2 mb-3'>
            {Object.entries(post.comments).map(([id, c]) => (
              <li key={id} className='text-sm'>
                <span className='font-semibold'>{c.author}</span>: {c.content}
              </li>
            ))}
          </ul>
        ) : (
          <p className='text-sm text-slate-500 mb-3'>No comments yet.</p>
        )}

        <div className='flex gap-2'>
          <input
            className={`w-36 px-3 py-2 rounded-xl border border-slate-300 ${
              !allowComments ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            placeholder='Your name'
            value={commenter}
            onChange={e => setCommenter(e.target.value)}
            disabled={!allowComments}
          />
          <input
            className={`flex-1 px-3 py-2 rounded-xl border border-slate-300 ${
              !allowComments ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            placeholder='Write a comment…'
            value={comment}
            onChange={e => setComment(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && submit()}
            disabled={!allowComments}
          />
          <button
            onClick={submit}
            disabled={!allowComments}
            className={`px-4 py-2 rounded-xl font-semibold shadow ${
              allowComments
                ? 'bg-slate-900 text-white hover:bg-slate-800'
                : 'bg-slate-200 text-slate-500'
            }`}
          >
            Comment
          </button>
        </div>
      </div>
    </article>
  )
}

function AdminAuthBadge () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(() => auth.currentUser || null)

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(u => setUser(u))
    return () => unsub()
  }, [])

  if (user && user.providerData?.some(p => p.providerId === 'password')) {
    return (
      <div className='flex items-center gap-2'>
        <span className='text-sm text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1'>
          Admin logged in
        </span>
        <button
          className='px-3 py-1 rounded-xl border border-slate-300 hover:bg-slate-100 text-sm'
          onClick={() => signOut(auth)}
        >
          Logout
        </button>
      </div>
    )
  }

  return (
    <details className='ml-2'>
      <summary className='cursor-pointer text-sm text-slate-600'>
        Admin login
      </summary>
      <div className='mt-2 flex flex-wrap gap-2 items-center'>
        <input
          className='px-2 py-1 rounded border border-slate-300 text-sm'
          placeholder='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          className='px-2 py-1 rounded border border-slate-300 text-sm'
          placeholder='password'
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button
          className='px-3 py-1 rounded-xl border border-slate-300 hover:bg-slate-100 text-sm'
          onClick={async () => {
            try {
              await signInWithEmailAndPassword(auth, email, password)
            } catch (e) {
              alert('Login failed: ' + (e?.message || e))
            }
          }}
        >
          Login
        </button>
      </div>
    </details>
  )
}
