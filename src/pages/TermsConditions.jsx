import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { Link } from 'react-router-dom';
import { ROUTES } from '../config';


const TERMS_SECTIONS = [
  {
    number: '01',
    title: 'Use of Our Services',
    content:
      'Online Class Writers provides professional academic assistance, including but not limited to online class help, tutoring, homework help, essay writing, and exam taking. Our services are designed to help busy college students in managing their academic workload.',
  },
  {
    number: '02',
    title: 'Privacy and Confidentiality',
    content:
      'Your privacy is our top priority. We do not sell, rent, or share your personal information with third parties. All interactions, files, academic records, and tutoring services are fully encrypted and kept strictly confidential. Your data is used solely to deliver the requested services, respond to quote requests, and improve your academic help experience.',
  },
  {
    number: '03',
    title: 'Payments, Quotes, and Refunds',
    content:
      'All services require a custom quote based on the specific requirements of your coursework. We offer flexible payment options, typically requiring a small upfront deposit to begin work. The Student Promise (Refund Policy): We guarantee a B grade or higher on the coursework we handle. If this standard is not met, you are entitled to a 100% refund, provided all agreed-upon conditions for the requested service were met and all necessary materials were provided on time.',
  },
  {
    number: '04',
    title: 'Client Responsibilities',
    content:
      'To ensure the best possible results and timely delivery, clients must provide accurate course syllabi, clear assignment instructions, grading rubrics, and any special requirements at the start of the project. Timely communication is essential. Failure to provide necessary materials or respond to critical inquiries may impact our ability to deliver services effectively and could void the refund guarantee.',
  },
];

const TermsConditions = () => {

  useSEO({
    title: 'Terms & Conditions | Online Class Writers',
    description:
      'Read the Terms and Conditions for Online Class Writers services, including privacy, refunds, and client responsibilities.',
    keywords: ['terms and conditions', 'refund policy', 'privacy', 'online class help'],
  });

  return (
    <div className=" py-14 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a202c] mb-5">
          Terms & Conditions
        </h1>
        <p className="text-[#4a5568] text-base md:text-lg leading-relaxed mb-10">
          Welcome to Online Class Writers. By accessing or using our online class help services,
          you agree to be bound by the following Terms and Conditions. Please read them carefully.
        </p>

        <div className="space-y-6">
          {TERMS_SECTIONS.map((section, index) => (
            <section
              key={section.number}
              className="bg-[#FFF7F2] border border-[#FFE3CC] rounded-lg p-5 md:p-6"
              data-reveal="card"
              style={{ '--reveal-delay': `${100 + index * 50}ms` }}
            >
              <h2 className="text-xl md:text-2xl font-semibold text-[#1a202c] mb-3">
                {section.number}. {section.title}
              </h2>
              <p className="text-[#3C3C43D9] leading-relaxed">{section.content}</p>
            </section>
          ))}
        </div>

        <p className="mt-10 text-base md:text-lg text-[#2d3748]" data-reveal="text" style={{ '--reveal-delay': '320ms' }}>
          If you have any questions about these Terms and Conditions, please{' '}
          <Link to={ROUTES.CONTACT} className="text-primary font-medium hover:underline">
            contact us
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default TermsConditions;