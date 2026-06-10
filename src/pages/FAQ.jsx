import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useRevealAnimation from '../hooks/useRevealAnimation';
import { ROUTES } from '../config';

const faqData = [
  {
    question: "Can I really pay someone to take my online class?",
    answer: "Yes! Our elite class taker service assigns a subject expert to manage your entire syllabus securely and confidentially."
  },
  {
    question: "Is this service confidential?",
    answer: "Yes, our services are strictly confidential. We prioritize your privacy and ensure your personal information is protected."
  },
  {
    question: "What happens if I don't get a good grade?",
    answer: "We offer satisfaction guarantees and work closely with you to ensure top academic performance. Please refer to our refund policy for details."
  },
  {
    question: "How does the process work?",
    answer: "Simply submit your coursework details, receive a quote, make a payment, and our experts will handle the rest."
  },
  {
    question: "Can you help with urgent deadlines or a test due tonight?",
    answer: "Yes, we have a dedicated team for urgent requests to ensure you never miss a deadline."
  },
  {
    question: "How is pricing determined?",
    answer: "Pricing is based on the complexity, length, and deadline of your coursework or class."
  },
  {
    question: "Can you help with everything, including discussion posts?",
    answer: "Absolutely. We cover all aspects of online classes, including homework, quizzes, exams, and discussion posts."
  },
  {
    question: "Do you offer full course support packages?",
    answer: "Yes, we offer comprehensive packages where our experts manage your entire course from start to finish."
  },
  {
    question: "Will my school see a different IP address?",
    answer: "We use advanced VPN technologies to match your location, ensuring your login activity appears completely normal."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  useRevealAnimation();

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full flex flex-col font-sans">
      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 py-14 md:py-16 lg:py-20 w-full">
        <div className="text-center mb-10" data-reveal="text" style={{ '--reveal-delay': '40ms' }}>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#1a202c] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#4a5568] text-base px-4">
            Everything you need to know about our services, pricing, and how we ensure<br className="hidden md:block"/> your academic success.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className="bg-[#FFF0E6] rounded-sm overflow-hidden"
              data-reveal="card"
              style={{ '--reveal-delay': `${80 + index * 45}ms` }}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
              >
                <span className="text-black font-medium text-base">
                  {faq.question}
                </span>
                <span className="text-[#464E46] ml-4 transition-transform duration-200 shrink-0">
                  {openIndex === index ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-40 opacity-100 pb-4' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-4 text-base text-[#3C3C43D9] leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Bottom Section */}
      <div 
        className="relative w-full py-24 bg-cover bg-center flex items-center justify-center"
        data-reveal="card"
        style={{ 
          '--reveal-delay': '120ms',
          // Replace this URL with your actual background image
          backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* CTA Content */}
        <div className="relative z-10 text-center px-4" data-reveal="text" style={{ '--reveal-delay': '180ms' }}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Ready to Get Started?
          </h2>
          <p className="text-gray-200 text-sm md:text-base mb-8">
            Stop stressing over coursework. Let our experts handle it.
          </p>
          <Link
            to={ROUTES.CONTACT}
            className="bg-[#FF6B00] hover:bg-[#e56000] text-white font-medium py-3 px-8 rounded transition duration-300 shadow-lg hover:scale-105 transform inline-block"
          >
            Get Help Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQ;