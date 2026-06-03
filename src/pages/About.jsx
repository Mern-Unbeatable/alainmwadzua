import React from 'react';

const features = [
  {
    title: 'Confidential Services',
    description: 'Your privacy is our top priority. We utilize strict protocols and secure systems to ensure your identity and academic records remain completely protected.',
    icon: (
      <svg className="w-5 h-5 text-[#FF6B00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    )
  },
  {
    title: 'Broad Subject Coverage',
    description: 'From nursing prerequisites and advanced engineering practices to complex business case studies, we cover over 28 major subjects to meet your specific needs.',
    icon: (
      <svg className="w-5 h-5 text-[#FF6B00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    title: 'Flexible Help Options',
    description: 'Whether you need support for a single challenging assignment, a midterm exam, or full-semester class management, our solutions adapt to you.',
    icon: (
      <svg className="w-5 h-5 text-[#FF6B00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    title: 'Qualified Tutors',
    description: 'We never outsource your education. Our experts hold advanced degrees, are native English speakers, and have proven track records of academic excellence.',
    icon: (
      <svg className="w-5 h-5 text-[#FF6B00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    )
  },
  {
    title: 'Clear Communication',
    description: 'Stay informed every step of the way with transparent updates, direct feedback loops, and a responsive support team available when you need them.',
    icon: (
      <svg className="w-5 h-5 text-[#FF6B00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    )
  },
  {
    title: 'Student Focus',
    description: 'Our entire process is structured around eliminating your academic stress, giving you the breathing room to balance work, family, and studies.',
    icon: (
      <svg className="w-5 h-5 text-[#FF6B00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

const AboutContent = () => {
  return (
    <div className="w-full font-sans bg-white">
      
      {/* 1. Hero Section */}
      <section className="relative w-full h-[450px] flex items-center justify-center">
        {/* Background Image (Replace URL with your own) */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
        ></div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4">
          <div className="border border-white/30 rounded-lg py-6 px-10 md:px-16 bg-black/20 backdrop-blur-sm">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">
              About Online Class Writers
            </h1>
            <p className="text-gray-200 text-sm md:text-base max-w-2xl mx-auto">
              The trusted safety net for busy college students striving for academic<br className="hidden md:block"/> excellence without the burnout.
            </p>
          </div>
        </div>

        {/* Floating Stats Bar */}
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

      {/* 2. Our Story Section */}
      <section className="max-w-7xl mx-auto px-4 mt-32 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text */}
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

          {/* Right Collage (CSS Grid Approximation of the design) */}
          <div className="grid grid-cols-3 grid-rows-3 gap-3 h-[400px]">
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

      {/* 3. Features Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-[#1a2b4c] mb-4">
              What makes Online Class Writers different?
            </h2>
            <p className="text-gray-500 text-sm md:text-base">
              We don't just complete assignments; we partner with you to secure your degree, here is how we stand out from the rest.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded bg-[#FFF6ED] flex items-center justify-center mb-5">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-bold text-[#1a2b4c] mb-3">{feature.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. The Student Promise Banner */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="bg-[#FF6B00] rounded-2xl p-10 md:p-16 text-center shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            The Student Promise
          </h2>
          <p className="text-white/90 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
            We back our expertise with the ultimate guarantee: you will receive a B grade or higher on the coursework we handle, or we provide a 100% refund. Your success is our shared investment.
          </p>
        </div>
      </section>

      {/* 5. Our Company Goal (CTA Section) */}
      <section className="relative w-full py-28 mt-8 flex items-center justify-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
        ></div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#1a2b4c]/80 mix-blend-multiply"></div>
        
        {/* Content */}
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
      
    </div>
  );  
};

export default AboutContent;