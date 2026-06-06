import React from 'react';
import { MessageSquare, FileCog, Wallet } from 'lucide-react';

const FeatureGrid = () => {
  const features = [
    {
      icon: <MessageSquare className="w-5 h-5 text-indigo-500" />,
      title: "Simplicity & Availability",
      desc: "Need help with an online class? We make the process simple. Our support team is available 7 days a week to review your class details and provide a customized quote based on your specific needs."
    },
    {
      icon: <FileCog className="w-5 h-5 text-indigo-500" />,
      title: "Detailed Customization",
      desc: "Send us your syllabus, assignment details, or course requirements, and we'll get back to you quickly with pricing and options. If you've already completed part of the class, let us know so we can factor that into the cost."
    },
    {
      icon: <Wallet className="w-5 h-5 text-indigo-500" />,
      title: "Flexible Payments",
      desc: "Our rates are flexible and negotiable, and we also offer convenient payment plans to fit your budget. Share as much information as possible for the fastest response, and include your email for a quick response from our team."
    }
  ];

  return (
    <div className="bg-[#F9F9F9] py-14 md:py-16 lg:py-20 ">
      <div className="container px-4 mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row gap-4"
            data-reveal="card"
            style={{ '--reveal-delay': `${70 + index * 80}ms` }}
          >
            <div className="w-12 h-12 rounded-full bg-[#C4D0FD] flex items-center justify-center shrink-0">
              {item.icon}
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">{item.title}</h3>
              <p className="text-base text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureGrid;