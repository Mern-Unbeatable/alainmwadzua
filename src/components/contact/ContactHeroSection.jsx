import React from 'react';

const ContactHeroSection = () => {
  return (
    <div
      className="relative w-full py-14 md:py-16 lg:py-20 bg-cover h-140 bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div
        className="relative z-10 text-center px-4 max-w-3xl mx-auto"
        data-reveal="text"
        style={{ '--reveal-delay': '40ms' }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Let's Get You the Help You Need
        </h1>
        <p className="text-gray-200 text-base md:text-lg">
          Tell us about your course and our experts will take care of the rest.
          High-stakes academic safety starts here.
        </p>
      </div>
    </div>
  );
};

export default ContactHeroSection;