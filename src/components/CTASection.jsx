


import React from "react";

const CTASection = ({ image }) => {
  // Using a sample study image if none is passed via props to match the vibe
  const bgImage = image || "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2000";

  return (
    <section
      className="relative flex items-center justify-center py-16 md:py-20 bg-cover bg-center bg-no-repeat"
      style={{
        // Applied the exact #00000099 overlay color over the image
        backgroundImage: `linear-gradient(#00000099, #00000099), url(${bgImage})`
      }}
    >
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
          Need help with your academic workload?
        </h2>
        
        <p className="text-sm md:text-base text-gray-200 max-w-2xl mx-auto mb-8 font-medium">
          Send us your subject, deadline, and requirements. We will handle the rest with the right support for your course.
        </p>
        
        <button className="inline-flex items-center justify-center rounded-md bg-[#FF6B00] hover:bg-[#e66000] px-8 py-3.5 text-[15px] font-bold text-white transition-colors shadow-sm">
          Get Help Now
        </button>
      </div>
    </section>
  );
};

export default CTASection;