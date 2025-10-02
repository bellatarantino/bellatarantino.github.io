import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: (
      <>
        <p>
          What <HighlightedWord>qualifications</HighlightedWord> do you have?
        </p>
      </>
    ),
    answer: (
      <>
        <p>
          My academic and professional background combines scientific training,
          tech industry experience, and almost a decade of tutoring experience.
          I hold a B.A. in Physics from Harvard University, where I also
          completed a minor in Computer Science and a language citation in{' '}
          Mandarin. <br />
          <br /> During my time at Harvard, I interned with Google as a
          STEP intern, focusing on web development, and conducted
          research on the New Small Wheel (NSW) at the{' '}
          ATLAS experiment at CERN. I also served as a{' '}
          strategy and analytics intern at the New York City Department
          of Small Business Services. <br />
          <br /> In addition to these roles, I have accumulated{' '}
          nine years of experience as a tutor, working with students
          across a wide range of subjects and educational levels. Now, I am a
          tutor and full-time assistant language teacher in English at a senior
          high school in Akita, Japan. For more information about client
          satisfaction, check out testimonials on my homepage.
        </p>
      </>
    )
  },
  {
    question: (
      <>
        <p>
          What <HighlightedWord>subjects</HighlightedWord> do you tutor?
        </p>
      </>
    ),
    answer: (
      <>
        <p>
          I tutor lower and middle school science along with{' '}
          all levels of physics up until and including Quantum Mechanics.{' '}
          <br />
          <br /> In mathematics, I tutor all levels up until and
          including proof-based linear algebra. <br />
          <br /> I also prepare students for a variety of competitive math and
          entrance exams such as the SAT, ACT, SSAT, ISEE, AMC 8/10/12,
          and all levels of the SASMO competition. <br />
          <br /> My computer science instruction includes Python, C++,
          web development, and introductory data science, suitable for both high
          school and college students. <br />
          <br /> In addition, I support English language learners across
          all age groups, from elementary school children to adult learners.
        </p>
      </>
    )
  },
  {
    question: (
      <>
        <p>
          What grade <HighlightedWord>levels</HighlightedWord> are you
          comfortable working with?
        </p>
      </>
    ),
    answer: (
      <>
        <p>
          I am comfortable working with students from kindergarten through
          adults in their 50s. In most cases, I tutor content up to the{' '}
          undergraduate level.
        </p>
      </>
    )
  },
  {
    question: (
      <>
        <p>
          Can you support students with extra{' '}
          <HighlightedWord>needs</HighlightedWord>?
        </p>
      </>
    ),
    answer: (
      <>
        <p>
          Yes, I have experience working with students who are English
          language learners, as well as those with anxiety, depression, ADHD,
          autism, or dyslexia. I am here to provide support in any ways
          possible.
        </p>
      </>
    )
  },
  {
    question: (
      <>
        <p>
          Do you help with high school and college{' '}
          <HighlightedWord>applications</HighlightedWord>?
        </p>
      </>
    ),
    answer: (
      <>
        <p>
          Yes, I have assisted both international and U.S.-based students
          in successfully gaining admission to private high schools and top 20
          colleges. I would be pleased to help you navigate this process.
        </p>
      </>
    )
  },
  {
    question: (
      <>
        <p>
          Do you meet <HighlightedWord>in-person</HighlightedWord> or online?
        </p>
      </>
    ),
    answer: (
      <>
        <p>
          I offer both options. I have a dedicated Zoom link for online
          sessions and am also available for in-person meetings at homes,
          libraries, cafes, or other convenient locations. Please note that
          pricing may vary based on the location.
        </p>
      </>
    )
  },
  {
    question: (
      <>
        <p>
          Where are you <HighlightedWord>based</HighlightedWord>?
        </p>
      </>
    ),
    answer: (
      <>
        <p>I am based in Akita Prefecture, Japan.</p>
      </>
    )
  },
  {
    question: (
      <>
        <p>
          What will my student <HighlightedWord>need</HighlightedWord> for
          sessions?
        </p>
      </>
    ),
    answer: (
      <>
        <p>
          For in-person sessions, your student will need a notebook, a pencil,
          and a willingness to learn. For online sessions, a laptop, desktop, or
          tablet is ideal (headphones are recommended). I suggest avoiding
          phones, and having the ability to annotate can be very helpful.
        </p>
      </>
    )
  },
  {
    question: (
      <>
        <p>
          Do you <HighlightedWord>record</HighlightedWord> online sessions?
        </p>
      </>
    ),
    answer: (
      <>
        <p>
          Yes, I can record online sessions if requested. Some students
          find it helpful to review recordings later. I will send you a secure
          link and delete the recordings upon your request. Rest assured, they
          are never shared with anyone.
        </p>
      </>
    )
  },
  {
    question: (
      <>
        <p>
          Do you provide <HighlightedWord>materials</HighlightedWord>?
        </p>
      </>
    ),
    answer: (
      <>
        <p>
          Yes, I provide materials as needed. If I determine that your
          student requires a textbook that they do not have, I will do my best
          to provide a digital copy. If not, you may need to purchase it. I also
          provide homework, notes, study plans, cheat sheets, written solutions,
          and curricula tailored to your needs.
        </p>
      </>
    )
  },
  {
    question: (
      <>
        <p>
          Do you provide <HighlightedWord>homework</HighlightedWord> and notes?
        </p>
      </>
    ),
    answer: (
      <>
        <p>
          Yes, I always provide notes and am happy to assign homework if
          desired. I tailor any extra practice to align with class content and
          specific needs. After each session, I send notes, homework, and
          feedback to parents via email.
        </p>
      </>
    )
  },
  {
    question: (
      <>
        <p>
          How can I <HighlightedWord>schedule</HighlightedWord>?
        </p>
      </>
    ),
    answer: (
      <>
        <p>
          You can schedule by emailing me at{' '}
          <a
            href='mailto:beetarantino@gmail.com?subject=Request%20for%20Tutoring'
            className='text-blue-500'
          >
            beetarantino@gmail.com
          </a>
          . For first-time clients, a consultation is required. After that, you
          can book recurring sessions via text, email, or through Calendly,
          which I will provide after our consultation.
        </p>
      </>
    )
  },
  {
    question: (
      <>
        <p>
          How much <HighlightedWord>notice</HighlightedWord> do you need for
          scheduling?
        </p>
      </>
    ),
    answer: (
      <>
        <p>
          I typically request at least 24 hours of notice. To ensure
          availability, I recommend scheduling at least 3 days in advance.
        </p>
      </>
    )
  },
  {
    question: (
      <>
        <p>
          How do you handle <HighlightedWord>cancellations</HighlightedWord>,
          no-shows, and lateness?
        </p>
      </>
    ),
    answer: (
      <>
        <p>
          Cancellations made within 12 hours and no-shows will incur a fee
          totaling the full session price. <br />
          <br /> For cancellations made between 24 and 12 hours in advance, a
          charge of 50% will apply. <br />
          <br /> I do my best to accommodate up to 10 minutes of lateness by
          lengthening sessions, but I do often have other clients and
          commitments after sessions, so this cannot be guaranteed. Time lost to
          lateness is lost.
        </p>
      </>
    )
  },
  {
    question: (
      <>
        <p>
          What are your <HighlightedWord>rates</HighlightedWord>?
        </p>
      </>
    ),
    answer: (
      <>
        <p>
          For online sessions, I charge $100 per hour. For in-person
          sessions, my services start at $130 per hour and vary based on
          the meeting location. If you are interested in group classes, please
          reach out to discuss pricing on a case-by-case basis.
        </p>
      </>
    )
  },
  {
    question: (
      <>
        <p>
          Do you offer <HighlightedWord>discounts</HighlightedWord> or packages
          for groups?
        </p>
      </>
    ),
    answer: (
      <>
        <p>
          Yes, I offer discounts for group sessions. Please contact me
          with details about the course and group size to discuss pricing
          options.
        </p>
      </>
    )
  },
  {
    question: (
      <>
        <p>
          What <HighlightedWord>payment forms</HighlightedWord> do you accept?
        </p>
      </>
    ),
    answer: (
      <>
        <p>
          I prefer payments through Venmo or Zelle. However, I am
          also happy to accept PayPal or cash. I will request payment directly
          before a session, or you can send it.
        </p>
      </>
    )
  }
]

function FAQItem ({ question, answer, isOpen, onClick }) {
  const answerRef = React.useRef(null)

  return (
    <div className='border rounded-lg overflow-hidden scale-[1.05] transition-shadow hover:shadow'>
      <button
        className='w-full flex justify-between items-center px-5 py-4 text-left text-base md:text-lg font-medium'
        onClick={onClick}
      >
        {question}
        <ChevronDown
          className={`w-5 h-5 transform transition-transform ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        />
      </button>
      <div
        ref={answerRef}
        className='px-5 border-t text-base text-gray-600 overflow-hidden transition-all duration-300 ease-in-out'
        style={{
          height: isOpen ? `${answerRef.current?.scrollHeight}px` : '0px',
          opacity: isOpen ? 1 : 0
        }}
      >
        <div className='py-4 space-y-2'>{answer}</div>
      </div>
    </div>
  )
}

function HighlightedWord ({ children }) {
  return (
    <span
      className='px-1'
      style={{
        backgroundImage:
          'linear-gradient(to right, #d9f99d 100%, transparent 0%)',
        backgroundSize: '0% 100%',
        backgroundRepeat: 'no-repeat',
        animation: 'highlightReveal 2s ease-out forwards'
      }}
    >
      {children}
    </span>
  )
}

function Navbar () {
  return (
    <header className='hidden md:flex w-full justify-between items-center px-12 py-10 text-2xl'>
      <a href='/' className='hover:font-bold'>
        HOME
      </a>
      <nav className='flex gap-12'>
        <a href='/faq' className='font-bold'>
          FAQ
        </a>
        <a href='/contact' className='hover:font-bold'>
          CONTACT
        </a>
      </nav>
    </header>
  )
}

export default function FAQPage () {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div
      className='min-h-screen flex flex-col bg-cover bg-no-repeat bg-center'
      // style={{
      //   backgroundImage: "url('/img/bg.png')",
      //   backgroundColor: "rgba(255, 255, 255, 0.1)",
      //   backgroundBlendMode: "lighten"
      // }}
    >
      <Navbar />

      <main className='flex-1 flex justify-center px-10 text-[1.05rem]'>
        <div className='max-w-6xl w-full flex flex-col gap-6'>
          {/* HEADER ROW: Title and Image */}
          <div className='flex flex-col md:flex-row justify-between items-start md:items-center pt-6'>
            <h2 className='text-[2.4rem] md:text-[2.6rem] font-bold leading-snug'>
              <span className='inline-block align-middle'>
                Tutoring
              </span>{' '}
              <span className='align-middle'>with Bella Tarantino</span>
            </h2>

            {/* Image next to heading only */}
            <div className='mt-4 md:mt-0 md:ml-8'>
              <img
                src='/img/faq-illustration-2.png'
                alt='FAQ Graphic'
                className='max-w-[10rem] md:max-w-[10em] h-auto'
              />
            </div>
          </div>

          {/* FAQ SCROLLABLE SECTION */}
          <div className='mt-3 md:overflow-y-auto md:h-[25rem] pr-8 w-full px-10 py-2 '>
            <div className='flex flex-col gap-4'>
              {faqs.map((faq, i) => (
                <FAQItem
                  key={i}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={i === openIndex}
                  onClick={() => setOpenIndex(i === openIndex ? null : i)}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      <footer className='w-full text-center py-3 bg-red-600 text-white text-sm'>
        This website is in development as of April 2025.
      </footer>
    </div>
  )
}
