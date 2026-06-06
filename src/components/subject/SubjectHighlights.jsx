import React from 'react';
import { FileText, GraduationCap, Star, Zap } from 'lucide-react';

const SubjectHighlights = () => {
  // Defined the cards data internally with exact styling properties for each specific card
  const highlights = [
    {
      title: "Exams, Essays & Papers",
      desc: "Precision-crafted papers and exam strategies for top marks.",
      icon: <FileText size={22} strokeWidth={2.5} className="text-[#C4704F]" />,
      iconBg: "bg-[#EEF2FF]", // Light periwinkle/blue background
      bg: "bg-white border border-gray-100 shadow-sm",
      textColor: "text-[#111827]",
      descColor: "text-gray-500",
    },
    {
      title: "Entire Online Classes",
      desc: "We handle everything from Week 1 to the final grade.",
      icon: <GraduationCap size={24} strokeWidth={2} className="text-white" />,
      iconBg: "bg-white/20", // Semi-transparent white
      bg: "bg-[#FF6B00] shadow-lg shadow-orange-500/20", // Orange background with soft shadow
      textColor: "text-white",
      descColor: "text-white/95",
    },
    {
      title: "Top Grades – A or B",
      desc: "Guaranteed performance or your money back. 99% success.",
      // Using fill to make the star solid like the image
      icon: <Star size={22} strokeWidth={2.5} className="text-[#A17C2F] fill-[#A17C2F]" />,
      iconBg: "bg-[#FDF1BA]", // Yellow icon background
      bg: "bg-[#FBF8E6] border border-[#F1EBD1] shadow-sm", // Beige card background
      textColor: "text-[#111827]",
      descColor: "text-gray-600",
    },
    {
      title: "Fast Delivery",
      desc: "Last-minute assignments? We deliver high-quality work fast.",
      icon: <Zap size={22} strokeWidth={2.5} className="text-[#C4704F]" />,
      iconBg: "bg-[#EEF2FF]", // Light periwinkle/blue background
      bg: "bg-white border border-gray-100 shadow-sm",
      textColor: "text-[#111827]",
      descColor: "text-gray-500",
    }
  ];

  return (
  <div className="py-14 md:py-16 lg:py-20 bg-gray-50">
      <section className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((card, idx) => (
          <div 
            key={idx} 
            className={`rounded-lg p-8 flex flex-col items-start transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${card.bg}`}
            data-reveal="card"
            style={{ '--reveal-delay': `${60 + idx * 70}ms` }}
          >
            {/* Icon Container */}
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${card.iconBg}`}>
              {card.icon}
            </div>
            
            {/* Text Content */}
            <div className="space-y-3">
              <h3 className={`font-bold text-xl leading-snug ${card.textColor}`}>
                {card.title}
              </h3>
              <p className={`text-[15px] leading-relaxed ${card.descColor}`}>
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
  );
};

export default SubjectHighlights;