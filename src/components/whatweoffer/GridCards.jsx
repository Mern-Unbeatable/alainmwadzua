import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, ClipboardList, FileText, GraduationCap } from "lucide-react";
import { ROUTES } from "../../config";

const GridCards = () => {
  const cards = [
    {
      id: 1,
      title: "Complete Online Class Help",
      desc: "Say no more to tackle each online class, We handle discussions, assignments, quizzes, even tests, and more. It is finally over for you, so go ahead and hire us today",
      icon: <BookOpen size={26} strokeWidth={2} />,
      bgColor: "bg-[#F3F4F6]", 
      textColor: "text-[#111827]",
      descColor: "text-[#6B7280]",
      iconBg: "bg-primary",
      iconColor: "text-white",
      iconShadow: "shadow-[0_8px_20px_-4px_rgba(255,107,0,0.5)]",
      linkColor: "text-primary",
    },
    {
      id: 2,
      title: "Exam Preparation & Test Taking",
      desc: "Need help revise or understand a test theme. Got exams for a particular test topic you don't know how to work on but must pass- We will prepare you and take those exams for you.",
      icon: <ClipboardList size={26} strokeWidth={2} />,
      bgColor: "bg-[#1C2333]", 
      textColor: "text-white",
      descColor: "text-slate-300",
      iconBg: "bg-primary",
      iconColor: "text-white",
      iconShadow: "shadow-[0_8px_20px_-4px_rgba(255,107,0,0.5)]",
      linkColor: "text-primary",
    },
    {
      id: 3,
      title: "Homework & Assignment Help",
      desc: "Basically any case of academic homework on your plate. This could be a particular assignment, discussion question posting, test review, or any projects we have got you handled at all levels",
      icon: <FileText size={26} strokeWidth={2} />,
      bgColor: "bg-primary", 
      textColor: "text-white",
      descColor: "text-white/90",
      iconBg: "bg-white",
      iconColor: "text-primary",
      iconShadow: "shadow-[0_8px_20px_-4px_rgba(255,255,255,0.3)]",
      linkColor: "text-white",
    },
    {
      id: 4,
      title: "Project & Essay Writing Help",
      desc: "Coursework project, case study project and even essays and papers, you are at the right place to land any kind of essay writing help and revision help from professional service providers",
      icon: <GraduationCap size={26} strokeWidth={2} />,
      bgColor: "bg-[#F3F4F6]",
      textColor: "text-[#111827]",
      descColor: "text-[#6B7280]",
      iconBg: "bg-primary",
      iconColor: "text-white",
      iconShadow: "shadow-[0_8px_20px_-4px_rgba(255,107,0,0.5)]",
      linkColor: "text-primary",
    }
  ];

  return (
    <section className="py-14 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 ">
        {/* Changed layout to a standard grid to align items perfectly horizontally */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {cards.map((card, index) => (
             <CardItem key={card.id} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Reusable component
const CardItem = ({ card, index }) => {
  return (
    <article
      className={`h-full flex flex-col rounded-lg p-8 sm:p-10 ${card.bgColor} shadow-sm border border-slate-100 hover:shadow-lg transition-shadow duration-300`}
      data-reveal="card"
      style={{ '--reveal-delay': `${50 + index * 80}ms` }}
    >
      {/* Icon with glowing shadow */}
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${card.iconBg} ${card.iconColor} ${card.iconShadow}`}>
        {card.icon}
      </div>
      
      {/* Content */}
      <h3 className={`font-bold text-xl sm:text-2xl mb-4 tracking-tight ${card.textColor}`}>
        {card.title}
      </h3>
      <p className={`text-base leading-relaxed ${card.descColor}`}>
        {card.desc}
      </p>
      
      {/* Link Action - mt-auto pushes it to the bottom so buttons align perfectly */}
      <div className="mt-auto pt-8">
        <Link
          to={ROUTES.CONTACT}
          className={`inline-flex items-center gap-2 text-[15px] font-bold ${card.linkColor} hover:opacity-80 transition-opacity`}
        >
          Get Help <ArrowRight size={18} strokeWidth={2.5} />
        </Link>
      </div>
    </article>
  );
};

export default GridCards;