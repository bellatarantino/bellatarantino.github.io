document.addEventListener('alpine:init', () => {
  const { Alpine, Typewriter } = window

  Alpine.data('home', () => ({
    openEntryId: null, // only one row can be open at a time
    emailCopied: false, // email copy animation init

    async copyEmail () {
      const email = this.$el.dataset.email

      // copy email
      try {
        await navigator.clipboard.writeText(email)
        this.emailCopied = true

        setTimeout(() => {
          this.emailCopied = false
        }, 1500)
      } catch (error) {
        // open in new window if fail
        window.location.href = `mailto:${email}`
      }
    }
  }))

  // Expandable rows
  let nextEntryId = 0

  // only one open @ time
  Alpine.data('entry', () => ({
    entryId: ++nextEntryId,

    get isOpen () {
      return this.openEntryId === this.entryId
    },
    toggle () {
      this.openEntryId = this.isOpen ? null : this.entryId
    }
  }))

  // name animation
  Alpine.data('nameTicker', () => ({
    init () {
      const nameEl = this.$el
      const originalEl = this.$refs.original
      const originalLetters = originalEl.textContent // Isab
      const replacementLetters = nameEl.dataset.to // B

      // Only show cursor while writing
      const showCursor = () => nameEl.classList.add('typing')
      const hideCursor = () => nameEl.classList.remove('typing')

      const typewriter = new Typewriter(this.$refs.typed, {
        delay: 'natural',
        deleteSpeed: 90,
        cursor: '',
        skipAddStyles: true
      })

      // delete isab
      const deleteOriginalLetters = () => {
        for (let i = 0; i < originalLetters.length; i++) {
          typewriter
            .callFunction(() => {
              originalEl.textContent = originalEl.textContent.slice(0, -1)
            })
            .pauseFor(110)
        }
        return typewriter
      }

      // one full cuucle
      const queueCycle = isFirstCycle => {
        typewriter.pauseFor(3000).callFunction(showCursor)

        const afterDeleting = isFirstCycle
          ? deleteOriginalLetters()
          : typewriter.deleteChars(originalLetters.length)

        afterDeleting
          // Isabella -> Bella
          .pauseFor(350)
          .typeString(replacementLetters)
          .callFunction(hideCursor)
          .pauseFor(4500)
          // Bella -> Isabella
          .callFunction(showCursor)
          .deleteChars(replacementLetters.length)
          .pauseFor(350)
          .typeString(originalLetters)
          .callFunction(hideCursor)
          // and again
          .callFunction(() => queueCycle(false))
      }

      queueCycle(true)
      typewriter.start()
    }
  }))
})
