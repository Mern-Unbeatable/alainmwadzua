import React from 'react';

const AboutHeroSection = () => {
  return (
    <section className="relative w-full h-112.5 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
      ></div>
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 text-center px-4">
        <div className="border border-white/30 rounded-lg py-6 px-10 md:px-16 bg-black/20 backdrop-blur-sm">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">
            About Online Class Writers
          </h1>
          <p className="text-gray-200 text-sm md:text-base max-w-2xl mx-auto">
            The trusted safety net for busy college students striving for academic
            <br className="hidden md:block" /> excellence without the burnout.
          </p>
        </div>
      </div>

      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl bg-[#FFF6ED] rounded-xl shadow-lg py-6 px-8 flex flex-wrap justify-between items-center text-center md:text-left z-20">
        <div className="w-full md:w-auto mb-4 md:mb-0">
          <h3 className="text-2xl font-bold text-[#1a2b4c]">10+ Years</h3>
          <p className="text-gray-500 text-xs uppercase tracking-wide mt-1">Industry Leadership</p>
        </div>
        <div className="w-full md:w-auto mb-4 md:mb-0">
          <h3 className="text-2xl font-bold text-[#1a2b4c]">28+ Subjects</h3>
          <p className="text-gray-500 text-xs uppercase tracking-wide mt-1">Expertise Coverage</p>
        </div>
        <div className="w-full md:w-auto">
          <h3 className="text-2xl font-bold text-[#1a2b4c]">100% Confidential</h3>
          <p className="text-gray-500 text-xs uppercase tracking-wide mt-1">Student Protection</p>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;