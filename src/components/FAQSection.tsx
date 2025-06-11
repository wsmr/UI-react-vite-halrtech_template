import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        className="w-full text-left flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium">{index}. {question}</h3>
        <svg 
          className={`w-6 h-6 transform ${isOpen ? 'rotate-180' : ''} transition-transform`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="mt-3 text-gray-600">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "Why is there an investment to join HalrTech?",
      answer: "The investment covers your initial setup costs including technology, branding, and administrative resources. This ensures you have everything needed to start operating from day one."
    },
    {
      question: "How does the Halr Tech model work?",
      answer: "Our model provides recruiters with 80% commission while handling all back-office operations, technology, and branding. You focus on recruiting while we handle everything else."
    },
    {
      question: "What support do I get from HalrTech?",
      answer: "You receive comprehensive support including admin resources, technology stack, branding & marketing, client acquisition tools, launch support, and ongoing partnership guidance."
    },
    {
      question: "What are the earning opportunities with Halr Tech?",
      answer: "With our 80% commission model, recruiters typically earn significantly more than traditional agency models. Our calculator helps you compare your current earnings with potential earnings through our partnership."
    }
  ];

  return (
    <section className="py-16 bg-[#f5f5f0]">
      <div className="section-container">
        <h2 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg p-8">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
