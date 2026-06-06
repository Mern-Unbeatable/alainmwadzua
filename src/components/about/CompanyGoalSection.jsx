import React from 'react';

const CompanyGoalSection = () => {
  return (
    <section className="relative w-full py-28 mt-8 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
      ></div>
      <div className="absolute inset-0 bg-[#1a2b4c]/80 mix-blend-multiply"></div>

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Our Company Goal
        </h2>
        <p className="text-gray-200 text-sm md:text-base mb-8">
          Our goal is to help busy students get reliable, confidential online class help so they can save time, reduce stress, and achieve better grades.
        </p>
        <button className="bg-[#FF6B00] hover:bg-[#e56000] text-white font-semibold py-3 px-8 rounded transition duration-300 shadow-md">
          Get Help Today
        </button>
      </div>
    </section>
  );
};

export default CompanyGoalSection;