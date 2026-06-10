// import React, { memo } from "react";
// import { ShieldCheck, Zap, CheckCircle } from "lucide-react";

// const HERO_BACKGROUND_IMAGE = "/mainHero.webp";
// const HERO_RIGHT_IMAGE = "/heroRight.webp"; // Desktop Image
// const HERO_MOBILE_IMAGE = "/mobileHero.png"; // Add your mobile/tab image path here

// const HeroSection = memo(() => {
//   return (
//     <section className="relative isolate overflow-hidden pt-4 sm:pt-10 lg:pt-32">
//       {/* Background Image - Only visible/relevant on desktop based on original design */}
//       <div
//         className="pointer-events-none absolute inset-0 z-0 bg-top bg-cover bg-no-repeat hidden lg:block"
//         style={{ backgroundImage: `url(${HERO_BACKGROUND_IMAGE})` }}
//         aria-hidden="true"
//       />

//       {/* FIXED: Removed 'px-4' from here for mobile. 
//         We only apply 'lg:px-4' for desktop so the mobile image can touch the edges.
//       */}
//       <div className="container mx-auto lg:px-4">
//         <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-10 items-center pb-0 sm:pb-0 lg:pb-0">
          
//           {/* Image Container - Ordered 1st on Mobile, 2nd on Desktop */}
//           {/* Removed the negative margin hacks so it naturally fills 100% of the screen */}
//           <div className="relative z-10 flex justify-center lg:justify-end order-1 lg:order-2 w-full lg:w-auto">
//             {/* Desktop Image */}
//             <img
//               src={HERO_RIGHT_IMAGE}
//               alt="Students holding books"
//               className="hidden lg:block w-full max-w-[560px] object-contain drop-shadow-[0_28px_40px_rgba(15,23,42,0.15)]"
//             />
//             {/* Mobile/Tablet Image */}
//             <img
//               src={HERO_MOBILE_IMAGE}
//               alt="Students holding books mobile"
//               className="block lg:hidden w-full object-cover" 
//             />
//           </div>

//           {/* Text Content - Ordered 2nd on Mobile, 1st on Desktop */}
//           {/* FIXED: Added 'px-4' here so the text still has padding on mobile devices */}
//           <div className="relative z-30 w-full max-w-3xl order-2 lg:order-1 px-4 lg:px-0">
//             {/* Hidden on mobile, visible on desktop */}
//             <p className="hidden lg:inline-flex items-center rounded-full bg-orange-500/10 text-[#FF6B00] lg:text-primary px-4 py-2 text-sm font-semibold mb-6">
//               Online Class Writers
//             </p>

//             <h1 className="text-[32px] sm:text-5xl lg:text-6xl font-bold lg:font-medium tracking-tight text-[#1a2b4c] lg:text-slate-900 leading-[1.15] lg:leading-[1.05]">
//               Pay Someone to Take My Online Classes For Me
//             </h1>

//             <div className="mt-4 lg:mt-5 space-y-1 lg:space-y-2 text-[17px] sm:text-3xl font-bold lg:font-medium text-[#FF6B00] lg:text-primary">
//               <p>Pay Someone to Take My Online Classes For Me?</p>
//               <p>Yes, we can perfectly take your Online Classes.</p>
//             </div>

//             <p className="mt-4 lg:mt-5 max-w-xl text-[14px] lg:text-base text-slate-700 leading-[1.6] lg:leading-8">
//               Online Class Writers provides reliable online class help for busy
//               students who need help with coursework, homework, projects, exam
//               preparation, and academic writing. We are committed to helping
//               students succeed by delivering timely, high-quality academic
//               assistance.
//             </p>

//             {/* Buttons - Stacked on mobile, row on desktop */}
//             <div className="mt-6 lg:mt-8 flex flex-col sm:flex-row flex-wrap items-center gap-3">
//               <button
//                 type="button"
//                 className="w-full sm:w-auto justify-center inline-flex items-center gap-2 rounded-md bg-[#FF6B00] lg:bg-primary px-5 py-3.5 lg:py-3 text-[15px] lg:text-sm font-semibold text-white transition-colors hover:opacity-90"
//               >
//                 Get Help Now
//                 <span aria-hidden="true">→</span>
//               </button>
//               <button
//                 type="button"
//                 className="w-full sm:w-auto justify-center inline-flex items-center gap-2 rounded-md bg-[#1a2b4c] lg:bg-slate-800 px-5 py-3.5 lg:py-3 text-[15px] lg:text-sm font-semibold text-white transition-colors hover:bg-slate-700"
//               >
//                 Request a free quote
//                 <span aria-hidden="true">→</span>
//               </button>
//             </div>

//             {/* Checklist items - 2 columns on mobile, row on desktop */}
//             <div className="mt-6 lg:mt-7 flex flex-wrap items-center gap-x-4 lg:gap-x-6 gap-y-3 text-[13px] lg:text-sm font-medium lg:font-normal text-slate-800 lg:text-slate-700">
//               <div className="flex items-center gap-4 w-full sm:w-auto">
//                 <span className="inline-flex items-center gap-1.5 lg:gap-2 w-[48%] sm:w-auto">
//                   <ShieldCheck className="w-4 h-4 text-slate-800 lg:text-primary" />
//                   Confidential
//                 </span>
//                 <span className="inline-flex items-center gap-1.5 lg:gap-2 w-[48%] sm:w-auto">
//                   <Zap className="w-4 h-4 text-slate-800 lg:text-primary fill-transparent lg:fill-current" />
//                   Fast Turnaround
//                 </span>
//               </div>
//               <span className="inline-flex items-center gap-1.5 lg:gap-2 w-full sm:w-auto">
//                 <CheckCircle className="w-4 h-4 text-slate-800 lg:text-primary" />
//                 Reliable Experts
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Desktop Gradient Overlay */}
//       <div className="hidden lg:block pointer-events-none absolute inset-x-0 bottom-0 z-20 h-32 bg-gradient-to-t from-white via-white/70 to-transparent sm:h-40 lg:h-48" />
//     </section>
//   );
// });

// HeroSection.displayName = "HeroSection";

// export default HeroSection;






import React, { memo } from "react";
import { ShieldCheck, Zap, CheckCircle } from "lucide-react";

const HERO_BACKGROUND_IMAGE = "/mainHero.webp";
const HERO_RIGHT_IMAGE = "/heroRight.webp"; 
const HERO_MOBILE_IMAGE = "/mobileHero.png";

const HeroSection = memo(() => {
  const handleScrollToCta = () => {
    const element = document.getElementById("online-help-cta");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative isolate overflow-hidden pt-0 lg:pt-32">
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-top bg-cover bg-no-repeat hidden lg:block"
        style={{ backgroundImage: `url(${HERO_BACKGROUND_IMAGE})` }}
        aria-hidden="true"
      />

      <div className="container mx-auto lg:px-4">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-10 items-center pb-0 sm:pb-0 lg:pb-0">
          <div className="relative z-10 flex justify-center lg:justify-end order-1 lg:order-2 w-full lg:w-auto">
            <img
              src={HERO_RIGHT_IMAGE}
              alt="Students holding books"
              className="hidden lg:block w-full max-w-[560px] object-contain drop-shadow-[0_28px_40px_rgba(15,23,42,0.15)]"
            />
            <img
              src={HERO_MOBILE_IMAGE}
              alt="Students holding books mobile"
              className="block lg:hidden w-full object-cover" 
            />
          </div>
          <div className="relative z-30 w-full max-w-3xl order-2 lg:order-1 px-4 lg:px-0">
            <p className="hidden lg:inline-flex items-center rounded-full bg-orange-500/10 text-[#FF6B00] lg:text-primary px-4 py-2 text-sm font-semibold mb-6">
              Online Class Writers
            </p>
            <h1 className="text-[32px] sm:text-5xl lg:text-6xl font-bold lg:font-medium tracking-tight text-[#1a2b4c] lg:text-slate-900 leading-[1.15] lg:leading-[1.05]">
              Pay Someone to Take My Online Classes For Me
            </h1>
            <div className="mt-4 lg:mt-5 space-y-1 lg:space-y-2 text-[17px] sm:text-3xl font-bold lg:font-medium text-[#FF6B00] lg:text-primary">
              <p>Pay Someone to Take My Online Classes For Me?</p>
              <p>Yes, we can perfectly take your Online Classes.</p>
            </div>
            <p className="mt-4 lg:mt-5 max-w-xl text-[14px] lg:text-base text-slate-700 leading-[1.6] lg:leading-8">
              Online Class Writers provides reliable online class help for busy
              students who need help with coursework, homework, projects, exam
              preparation, and academic writing. We are committed to helping
              students succeed by delivering timely, high-quality academic
              assistance.
            </p>
            <div className="mt-6 lg:mt-8 flex flex-col sm:flex-row flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={handleScrollToCta}
                className="w-full sm:w-auto justify-center inline-flex items-center gap-2 rounded-md bg-[#FF6B00] lg:bg-primary px-5 py-3.5 lg:py-3 text-[15px] lg:text-sm font-semibold text-white transition-colors hover:opacity-90"
              >
                Get Help Now
                <span aria-hidden="true">→</span>
              </button>
              <button
                type="button"
                onClick={handleScrollToCta}
                className="w-full sm:w-auto justify-center inline-flex items-center gap-2 rounded-md bg-[#1a2b4c] lg:bg-slate-800 px-5 py-3.5 lg:py-3 text-[15px] lg:text-sm font-semibold text-white transition-colors hover:bg-slate-700"
              >
                Request a free quote
                <span aria-hidden="true">→</span>
              </button>
            </div>
            <div className="mt-6 lg:mt-7 flex flex-wrap items-center gap-x-4 lg:gap-x-6 gap-y-3 text-[13px] lg:text-sm font-medium lg:font-normal text-slate-800 lg:text-slate-700">
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <span className="inline-flex items-center gap-1.5 lg:gap-2 w-[48%] sm:w-auto">
                  <ShieldCheck className="w-4 h-4 text-slate-800 lg:text-primary" />
                  Confidential
                </span>
                <span className="inline-flex items-center gap-1.5 lg:gap-2 w-[48%] sm:w-auto">
                  <Zap className="w-4 h-4 text-slate-800 lg:text-primary fill-transparent lg:fill-current" />
                  Fast Turnaround
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 lg:gap-2 w-full sm:w-auto">
                <CheckCircle className="w-4 h-4 text-slate-800 lg:text-primary" />
                Reliable Experts
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block pointer-events-none absolute inset-x-0 bottom-0 z-20 h-32 bg-gradient-to-t from-white via-white/70 to-transparent sm:h-40 lg:h-48" />
    </section>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;