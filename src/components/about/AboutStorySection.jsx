import React from 'react';

const AboutStorySection = () => {
  return (
    <section className="container mx-auto px-4 mt-32 mb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="pr-0 lg:pr-8">
          <h2 className="text-3xl font-bold text-[#1a2b4c] mb-6">Our Story</h2>
          <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed">
            <p>
              Founded on the belief that education should be empowering, not overwhelming, Online Class Writers emerged as a beacon for students juggling the impossible. We understand that your academic journey is often complicated by professional responsibilities, family commitments, and the relentless pressure of modern university life.
            </p>
            <p>
              Our mission is to provide more than just "help," we provide peace of mind. By connecting students with subject-matter experts, we ensure that every assignment, discussion post, and exam is handled with professional precision.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 grid-rows-3 gap-3 h-100">
          <div className="col-span-2 row-span-2 rounded-xl overflow-hidden shadow-sm">
            <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Students" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-xl overflow-hidden shadow-sm">
            <img src="https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Study" className="w-full h-full object-cover" />
          </div>
          <div className="bg-[#FFC999] rounded-xl rounded-tr-[50px] shadow-sm"></div>

          <div className="bg-[#D8E4FF] rounded-xl rounded-bl-[50px] shadow-sm row-start-3"></div>
          <div className="rounded-xl overflow-hidden shadow-sm row-start-3">
            <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Notes" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-xl overflow-hidden shadow-sm row-start-3">
            <img src="https://images.unsplash.com/photo-1571260899304-425dea4cf369?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Online" className="w-full h-full object-cover" />
          </div>
          <div className="bg-[#EAD6EB] rounded-full w-3/4 h-3/4 self-center justify-self-center shadow-sm"></div>
          <div className="bg-[#FFD9C0] rounded-full w-full h-full row-start-4 col-start-3 scale-75 justify-self-start shadow-sm"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutStorySection;