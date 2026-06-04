import React from "react";
import {
  ArrowRight,
  PencilLine,
  ClipboardList,
  MessageSquare,
  GraduationCap,
} from "lucide-react";

const SubjectHero = ({ image }) => {
  // Sample image fallback to match the layout if no image is provided
  const heroImg =
    image ||
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000";

  const badges = [
    {
      label: "Homework",
      icon: <PencilLine size={16} className="text-[#FF6B00]" />,
    },
    {
      label: "Midterms/Finals",
      icon: <ClipboardList size={16} className="text-[#FF6B00]" />,
    },
    {
      label: "Discussion Posts",
      icon: <MessageSquare size={16} className="text-[#FF6B00]" />,
    },
    {
      label: "Full Semesters",
      icon: <GraduationCap size={16} className="text-[#FF6B00]" />,
    },
  ];

  return (
    <section className="relative bg-white overflow-hidden py-14 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111827] ">
              Expert Tutors <br className="hidden sm:block" />
              Across <span className="text-primary">All Major</span>{" "}
              <br className="hidden sm:block" />
              Disciplines
            </h1>

            <p className="mt-6 text-base text-gray-600 leading-relaxed font-medium">
              Whether you're struggling with advanced calculus, nursing
              prerequisites, or extensive research papers in history or
              management, our team of degree-holding specialists is prepared to
              step in. We will perfectly take your class and get you A-Grades!
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mt-8">
              {badges.map((badge, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-100 rounded-full shadow-sm"
                >
                  {badge.icon}
                  <span className="text-sm font-semibold text-gray-700">
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-10">
              <button className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary hover:bg-primary-dark text-white font-semibold text-sm rounded-lg transition-colors shadow-md">
                Get Help <ArrowRight size={18} strokeWidth={2.5} />
              </button>
            </div>
          </div>

          {/* Right Content / Image */}
          <div className="lg:col-span-7 relative">
            {/* Soft Orange Glow behind the top right of the image */}
            <div className="absolute -top-16 -right-16 w-80 h-80 bg-primary/20 blur-[100px] rounded-full z-0 pointer-events-none"></div>

            {/* Image Container */}
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl shadow-gray-200/50">
              <img
                src={heroImg}
                alt="Students studying together"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubjectHero;
