import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What are your rates?",
    answer: "For online sessions, I charge $100 per hour. \n For in-person sessions, my services start at $130 per hour and vary based on the meeting location. \n If you are interested in group classes, please reach out to discuss pricing on a case-by-case basis."
  },
  {
    question: "What payment forms do you accept?",
    answer: "I prefer payments through Venmo or Zelle. However, I am also happy to accept PayPal or cash."
  },
  {
    question: "When is payment due?",
    answer: "Payment is typically requested within 5 business days of our session. Many clients find it convenient to send payment themselves right before or after our meetings. If payment is not received, I will request it."
  },
  {
    question: "How do you handle cancellations, no-shows, and lateness?",
    answer: "Cancellations made within 12 hours and no-shows will incur a fee totaling the full session price. \n For cancellations made between 24 and 12 hours in advance, a charge of 50% will apply. \n I do my best to accommodate up to 10 minutes of lateness by lengthening sessions, but I do often have other clients and commitments after sessions, so this cannot be guaranteed. Time lost to lateness is lost."
  },
  {
    question: "Do you offer discounts or packages for groups?",
    answer: "Yes, I offer discounts for group sessions. Please contact me with details about the course and group size to discuss pricing options."
  },
  {
    question: "What subjects do you tutor?",
    answer: "I tutor a wide range of academic subjects. \n I teach lower and middle school science along with all levels of physics up until and including Quantum Mechanics. \n In mathematics, I tutor all levels up until and including proof-based linear algebra. \n I also prepare students for a variety of competitive math and entrance exams such as the SAT, ACT, SSAT, ISEE, AMC 8/10/12, and all levels of the SASMO competition. \n My computer science instruction includes Python, C++, web development, and introductory data science, suitable for both high school and college students. \n In addition, I support English language learners across all age groups, from elementary school children to adult learners."
  },
  {
    question: "What qualifications do you have?",
    answer: "My academic and professional background combines scientific training, tech industry experience, and almost a decade of teaching experience. I hold a B.A. in Physics from Harvard University, where I also completed a minor in Computer Science and a language citation in Mandarin. \n During my time at Harvard, I interned with Google as a STEP intern, focusing on web development, and conducted research on the New Small Wheel (NSW) at the ATLAS experiment at CERN. I also served as a strategy and analytics intern at the New York City Department of Small Business Services. \n In addition to these roles, I have accumulated nine years of experience as a tutor, working with students across a wide range of subjects and educational levels. For more information about client satisfaction, check out testimonials on my homepage."
  },
  {
    question: "What grade levels are you comfortable working with?",
    answer: "I am comfortable working with students from kindergarten through adults in their 50s. In most cases, I tutor content up to the undergraduate level."
  },
  {
    question: "Can you support students with extra learning needs?",
    answer: "Yes, I have experience working with students who are English language learners, as well as those with anxiety, depression, ADHD, autism, or dyslexia. I am here to provide support in any ways possible."
  },
  {
    question: "Do you help with high school and college applications?",
    answer: "Yes, I have assisted both international and U.S.-based students in successfully gaining admission to private high schools and top 20 colleges. I would be pleased to help you navigate this process."
  },
  {
    question: "Do you provide materials?",
    answer: "Yes, I provide materials as needed. If I determine that your student requires a textbook that they do not have, I will do my best to provide a digital copy. If not, you may need to purchase it. I also provide homework, notes, study plans, cheat sheets, written solutions, and curricula tailored to your needs."
  },
  {
    question: "What will my student need for sessions?",
    answer: "For in-person sessions, your student will need a notebook, a pencil, and a willingness to learn. For online sessions, a laptop, desktop, or tablet is ideal (headphones are recommended). I suggest avoiding phones, and having the ability to annotate can be very helpful."
  },
  {
    question: "What does an average session look like?",
    answer: "Our sessions typically begin with a 5-minute check-in. We will then review any prior content or warm up with relevant problems. The main portion of the session will vary based on your needs, whether that involves corrections, a lecture, or practice. We will conclude with a recap and discuss any homework assignments."
  },
  {
    question: "How long until my child sees improvement?",
    answer: "The timeline for improvement varies by individual, but most clients begin to notice progress within a month, often shortly after the first unit or test. Consistent practice is beneficial."
  },
  {
    question: "Do you meet in-person or online?",
    answer: "I offer both options. I have a dedicated Zoom link for online sessions and am also available for in-person meetings at homes, libraries, cafes, or other convenient locations. Please note that pricing may vary based on the location."
  },
  {
    question: "Where are you based?",
    answer: "I am based in the Bronx, NY."
  },
  {
    question: "How can I schedule?",
    answer: "You can schedule by emailing me. For first-time clients, a consultation is required. After that, you can book recurring sessions via text, email, or through Calendly, which I will provide after our consultation."
  },
  {
    question: "What is your cancellation policy?",
    answer: "For no-shows or cancellations within 12 hours, a 100% fee applies. Cancellations made between 24 to 12 hours in advance incur a 50% fee. Cancellations made earlier do not incur any fees."
  },
  {
    question: "Can we schedule recurring sessions each week?",
    answer: "Yes, I prefer scheduling recurring sessions. I will recommend a schedule based on your student’s goals; this may involve meeting twice a week if they are trying to catch up, or typically once a week otherwise."
  },
  {
    question: "How much notice do you need for scheduling?",
    answer: "I typically request at least 24 hours of notice. To ensure availability, I recommend scheduling at least 3 days in advance."
  },
  {
    question: "Do you provide homework and notes?",
    answer: "Yes, I always provide notes and am happy to assign homework if desired. I tailor any extra practice to align with class content and specific needs. I send notes and feedback via email and can also provide recordings if requested."
  },
  {
    question: "Do you record online sessions?",
    answer: "Yes, I can record online sessions if requested. Some students find it helpful to review recordings later. I will send you a secure link and delete the recordings upon your request. Rest assured, they are never shared with anyone."
  },
  {
    question: "How do you keep parents informed?",
    answer: "I provide feedback after each session using your preferred method, whether that is through email or text."
  },
  {
    question: "Can you coordinate with my child’s other tutors?",
    answer: "Yes, if you provide me with their contact information, I would be happy to coordinate with them."
  },
  {
    question: "Can you coordinate with my child’s school?",
    answer: "Yes, please share their contact information with me, and I will handle the rest."
  }
];

function FAQItem({ question, answer, isOpen, onClick }) {
  const answerRef = React.useRef(null);

  return (
    <div className="border rounded-lg overflow-hidden scale-[1.05] transition-shadow hover:shadow">
      <button
        className="w-full flex justify-between items-center px-5 py-4 text-left text-lg font-medium"
        onClick={onClick}
      >
        {question}
        <ChevronDown
          className={`w-5 h-5 transform transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
        />
      </button>
      <div
        ref={answerRef}
        className="px-5 border-t text-base text-gray-600 overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          height: isOpen ? `${answerRef.current?.scrollHeight}px` : '0px',
          opacity: isOpen ? 1 : 0
        }}
      >
        <div className="py-4 space-y-2">
          {answer.split('\n').map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <header className="w-full flex justify-between items-center px-12 py-10 text-2xl">
      <a href="#" className="hover:font-bold">HOME</a>
      <nav className="flex gap-12">
        <a href="#" className="font-bold">FAQ</a>
        <a href="#" className="hover:font-bold">CONTACT</a>
      </nav>
    </header>
  );
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-1 flex justify-center items-center px-10 text-[1.05rem]">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          <div className="h-full flex flex-col">
            <h2 className="text-[2.6rem] font-bold">
              <span className="text-teal-600">Frequently</span> <br /> Asked Questions
            </h2>

            <div className="mt-3 overflow-y-auto pr-8 w-full px-4 py-2 h-[22rem]">
            <div className="flex flex-col gap-4">
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

          <div className="hidden md:flex justify-center items-center">
            <img
              src="/img/faq-illustration.png"
              alt="Tutor and student illustration"
              className="max-w-full h-auto scale-[1.05]"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
