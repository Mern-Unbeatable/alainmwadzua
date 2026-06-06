import React from 'react';

const guarantees = [
  {
    title: 'A or B Grade Guaranteed',
    description: 'Quality results or your money back.',
    iconBg: 'bg-green-100',
    icon: (
      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    title: '100% Confidential',
    description: 'Your information is fully encrypted.',
    iconBg: 'bg-blue-100',
    icon: (
      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    title: 'US-Based Experts',
    description: 'Work with native English speakers.',
    iconBg: 'bg-orange-100',
    icon: (
      <svg className="w-5 h-5 text-[#FF6B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

const GuaranteesSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 md:mt-16 lg:mt-20">
      {guarantees.map((item, index) => (
        <div
          key={item.title}
          className="bg-[#FFF0E6] rounded-xl p-8 flex flex-col items-center text-center"
          data-reveal="card"
          style={{ '--reveal-delay': `${220 + index * 70}ms` }}
        >
          <div className={`w-10 h-10 rounded-full ${item.iconBg} flex items-center justify-center mb-4`}>
            {item.icon}
          </div>
          <h4 className="font-bold text-[#1a2b4c] text-lg mb-2">{item.title}</h4>
          <p className="text-gray-500 text-sm">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default GuaranteesSection;