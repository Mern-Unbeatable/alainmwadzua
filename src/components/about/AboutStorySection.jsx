import React from 'react';

const AboutStorySection = () => {
  return (
    <div className="w-full bg-white py-14 md:py-16 lg:py-20">
      <section className="container mx-auto px-4  ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Text Content */}
        <div className="pr-0 lg:pr-2">
          <h2 className="text-4xl font-bold text-black mb-6">Our Story</h2>
          <div className="space-y-4 text-[#5A4136] text-base ">
            <p>
              Founded on the belief that education should be empowering, not overwhelming, Online Class Writers emerged as a beacon for students juggling the impossible. We understand that your academic journey is often complicated by professional responsibilities, family commitments, and the relentless pressure of modern university life.
            </p>
            <p>
              Our mission is to provide more than just "help," we provide peace of mind. By connecting students with subject-matter experts, we ensure that every assignment, discussion post, and exam is handled with professional precision.
            </p>
          </div>
        </div>

        {/* Right Side: Single Image Container */}
        <div >
          <img 
            src="/aboutGrid.webp" /* <-- Add your image path here */
            alt="Our Story" 
            className="w-full h-full object-cover" 
          />
        </div>

      </div>
    </section>
    </div>
  );
};

export default AboutStorySection;