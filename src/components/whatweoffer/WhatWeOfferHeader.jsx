import React from "react";
import { ArrowRight, BookOpen, ClipboardList, FileText } from "lucide-react";

const WhatWeOfferHeader = () => {
  // Define the items internally with their specific icons to match the design
  const offerItems = [
    {
      title: "Complete Class Help",
      subtitle: "Full Course Support",
      icon: <BookOpen size={24} className="text-white" />
    },
    {
      title: "Exam Preparation",
      subtitle: "Test Taking Services",
      icon: <ClipboardList size={24} className="text-white" />
    },
    {
      title: "Assignment Help",
      subtitle: "All Academic Levels",
      icon: <FileText size={24} className="text-white" />
    }
  ];

  return (
    <section className="py-16 lg:py-20" style={{ backgroundColor: "#FEFAFA" }}>
      <div className="container mx-auto px-4 ">
        <div className="grid gap-12 lg:grid-cols-2">
          
          {/* Left Content */}
          <div
            className="max-w-3xl pr-4 "
            data-reveal="text"
            style={{ '--reveal-delay': '40ms' }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FFEDD4] px-3 py-1.5 text-sm font-medium text-primary mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
              Academic Excellence
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111827] leading-tight mb-4">
              Academic Services <span className="text-primary">We Offer</span>
            </h1>
            
            <p className="text-[#4B5563] text-base mb-12  font-medium">
              From complete online class help, exam preparation help and test taking services, 
              homework and assignment help to project and essay writing help, we do it all! A 
              lot more than you might think!
            </p>
            
            <button className="inline-flex items-center gap-2 rounded-md bg-primary hover:bg-primary transition-colors px-6 py-3.5 text-sm  text-white shadow-md">
              Get Help
              <ArrowRight size={18} strokeWidth={2.5} />
            </button>
          </div>

          {/* Right Content (Gradient Card) */}
          <div
            className="relative w-full max-w-2xl justify-self-end "
            data-reveal="card"
            style={{ '--reveal-delay': '120ms' }}
          >
            {/* Soft background glow shadow seen in the image */}
            <div className="absolute -inset-6 bg-primary blur-[80px] opacity-10 rounded-l z-0"></div>

            {/* Main Gradient Card */}
            <div 
              className="relative z-10 rounded-lg p-6 sm:p-8 shadow-2xl"
              style={{ backgroundImage: 'linear-gradient(to bottom right, #101828, #1E2939)' }}
            >
              <div className="flex flex-col gap-4">
                {offerItems.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-5 rounded-xl bg-[#2A3546] p-4 sm:p-5 hover:bg-[#323d4e] transition-colors"
                    data-reveal="card"
                    style={{ '--reveal-delay': `${160 + index * 70}ms` }}
                  >
                    {/* Orange Icon Container */}
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#FF6B00] shadow-sm">
                      {item.icon}
                    </div>
                    
                    {/* Text Details */}
                    <div>
                      <h3 className="text-base font-bold text-white mb-0.5">
                        {item.title}
                      </h3>
                      <p className="text-sm font-medium text-slate-400">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatWeOfferHeader;