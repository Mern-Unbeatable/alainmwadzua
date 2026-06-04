// import React from "react";

// const DEFAULT_TITLE = "Ready to Get Started?";
// const DEFAULT_DESCRIPTION = "Stop stressing over coursework. Let our experts handle it.";
// const DEFAULT_BUTTON_TEXT = "Get Help Now";

// const CTASection = ({

// }) => {
//   const sectionStyle = image
//     ? { backgroundImage: `linear-gradient(rgba(15, 28, 63, 0.68), rgba(15, 28, 63, 0.68)), url(${image})` }
//     : undefined;

//   return (
//     <section
//       className={`py-16 ${image ? "bg-cover bg-center bg-no-repeat" : "bg-linear-to-r from-white via-orange-50 to-white"}`}
//       style={sectionStyle}
//     >
//       <div className="container mx-auto px-4">
//         <div className={`rounded-xl p-10 text-center shadow-lg ${image ? "bg-transparent text-white" : "bg-white/95"}`}>
//           <h2 className={`text-3xl font-semibold ${image ? "text-white" : "text-slate-900"}`}>{title}</h2>
//           <p className={`mt-2 ${image ? "text-white/85" : "text-slate-600"}`}>{description}</p>
//           <button className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white">
//             {buttonText}
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CTASection;





import React from "react";


const DEFAULT_TITLE = "Ready to Get Started?";
const DEFAULT_DESCRIPTION = "Stop stressing over coursework. Let our experts handle it.";
const DEFAULT_BUTTON_TEXT = "Get Help Now";

const CTASection = ({   title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  buttonText = DEFAULT_BUTTON_TEXT,
  image }) => {
  // Using a sample study image if none is passed via props to match the vibe
  const bgImage = image || "/cta.webp";

  return (
    <section
      className="relative flex items-center justify-center py-16 md:py-20  bg-cover bg-center bg-no-repeat"
      style={{
        // Applied the exact #00000099 overlay color over the image
        backgroundImage: `linear-gradient(#00000099, #00000099), url(${bgImage})`
      }}
    >
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
          {title}
        </h2>
        
        <p className="text-sm md:text-base text-gray-200 max-w-2xl mx-auto mb-8 font-medium">
          {description}
        </p>
        
        <button className="inline-flex items-center justify-center rounded-md bg-[#FF6B00] hover:bg-[#e66000] px-8 py-3.5 text-[15px] font-bold text-white transition-colors shadow-sm">
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default CTASection;