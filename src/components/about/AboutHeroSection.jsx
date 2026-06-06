import React from 'react';

const AboutHeroSection = () => {
  return (
    <section className="relative w-full h-[500px] flex items-center justify-center mb-24">
      {/* Background Image & Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
      ></div>
      <div className="absolute inset-0 bg-[#0B1521]/75"></div>

      {/* Center Content Box with Custom Border */}
      <div className="relative z-10 w-full max-w-4xl px-4 md:px-8 mt-[-40px]">
        <div className="relative border-b-2 border-l-2 border-r-2 border-[#F4A261] px-4 md:px-12 pb-10 pt-8">
          
          {/* Top Border Segments (Creates the gap for the title) */}
          <div className="absolute top-0 left-0 w-8 md:w-24 h-[2px] bg-[#F4A261]"></div>
          <div className="absolute top-0 right-0 w-8 md:w-24 h-[2px] bg-[#F4A261]"></div>

          {/* Floating Title */}
          <h1 className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max max-w-[90vw] px-4 text-2xl md:text-[44px] font-bold text-white whitespace-nowrap">
            About Online Class Writers
          </h1>

          {/* Description Text */}
          <p className="text-gray-100 text-sm md:text-lg mt-6 max-w-2xl mx-auto text-center font-light leading-relaxed">
            The trusted safety net for busy college students striving for academic
            <br className="hidden md:block" /> excellence without the burnout.
          </p>
        </div>
      </div>

      {/* Overlapping Bottom Stats Card */}
      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl bg-[#FFF6ED] rounded-xl shadow-xl py-10 px-8 z-20">
        <div className="flex flex-col md:flex-row justify-around items-center md:items-start gap-8">
          {/* Stat Item 1 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-[#14213D] mb-1.5">10+ Years</h3>
            <p className="text-[#4B5563] text-sm font-medium">Industry Leadership</p>
          </div>
          
          {/* Stat Item 2 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-[#14213D] mb-1.5">28+ Subjects</h3>
            <p className="text-[#4B5563] text-sm font-medium">Expertise Coverage</p>
          </div>
          
          {/* Stat Item 3 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-[#14213D] mb-1.5">100% Confidential</h3>
            <p className="text-[#4B5563] text-sm font-medium">Student Protection</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;