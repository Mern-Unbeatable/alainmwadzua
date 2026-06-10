import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../config';
import { 
  ArrowRight, Landmark, BookOpen, Calculator, Microscope, 
  Gavel, Sigma, FlaskConical, BriefcaseMedical, Megaphone, 
  Shield, TrendingUp, UserCog, BookText, Banknote, Shapes, 
  History, Monitor, Target, Users, Settings, Lightbulb, 
  Atom, Globe, Beaker, UsersRound, BarChart2, Compass, 
  Activity, MoreHorizontal 
} from 'lucide-react';

const SubjectsGrid = () => {
  // Full list of subjects matching the image
  const subjects = [
    { name: "Accounting", icon: <Landmark size={20} strokeWidth={1.5} /> },
    { name: "Theology", icon: <BookOpen size={20} strokeWidth={1.5} /> },
    { name: "Algebra", icon: <Calculator size={20} strokeWidth={1.5} /> },
    { name: "Biology", icon: <Microscope size={20} strokeWidth={1.5} /> },
    { name: "Business Law", icon: <Gavel size={20} strokeWidth={1.5} /> },
    { name: "Calculus", icon: <Sigma size={20} strokeWidth={1.5} /> },
    { name: "Chemistry", icon: <FlaskConical size={20} strokeWidth={1.5} /> },
    { name: "Nursing", icon: <BriefcaseMedical size={20} strokeWidth={1.5} /> },
    { name: "Communication", icon: <Megaphone size={20} strokeWidth={1.5} /> },
    { name: "Criminal Justice", icon: <Shield size={20} strokeWidth={1.5} /> },
    { name: "Economics", icon: <TrendingUp size={20} strokeWidth={1.5} /> },
    { name: "Engineering", icon: <UserCog size={20} strokeWidth={1.5} /> },
    { name: "English", icon: <BookText size={20} strokeWidth={1.5} /> },
    { name: "Finance", icon: <Banknote size={20} strokeWidth={1.5} /> },
    { name: "Geometry", icon: <Shapes size={20} strokeWidth={1.5} /> },
    { name: "History", icon: <History size={20} strokeWidth={1.5} /> },
    { name: "IT", icon: <Monitor size={20} strokeWidth={1.5} /> },
    { name: "Marketing", icon: <Target size={20} strokeWidth={1.5} /> },
    { name: "Management", icon: <Users size={20} strokeWidth={1.5} /> },
    { name: "Operations Management", icon: <Settings size={20} strokeWidth={1.5} /> },
    { name: "Philosophy", icon: <Lightbulb size={20} strokeWidth={1.5} /> },
    { name: "Physics", icon: <Atom size={20} strokeWidth={1.5} /> },
    { name: "Political Science", icon: <Globe size={20} strokeWidth={1.5} /> },
    { name: "Science", icon: <Beaker size={20} strokeWidth={1.5} /> },
    { name: "Sociology", icon: <UsersRound size={20} strokeWidth={1.5} /> },
    { name: "Statistics", icon: <BarChart2 size={20} strokeWidth={1.5} /> },
    { name: "Trigonometry", icon: <Compass size={20} strokeWidth={1.5} /> },
    { name: "Strategic Management", icon: <Activity size={20} strokeWidth={1.5} /> },
    { name: "Others", icon: <MoreHorizontal size={20} strokeWidth={1.5} /> }
  ];

  return (
    <section className="py-14 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 ">
        {/* Centered Header Section */}
        <div
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3"
          data-reveal="text"
          style={{ '--reveal-delay': '40ms' }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Subjects We Support
          </h2>
          <p className="text-base text-slate-500">
            Select your subject below to get a custom quote for your specific needs.
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {subjects.map((subj, index) => (
            <Link 
              to={ROUTES.CONTACT}
              key={index} 
              className="bg-white border border-[#E3BFB133] rounded-2xl p-5 hover:border-orange-200 hover:shadow-md transition-all duration-300 group cursor-pointer flex flex-col text-left"
              data-reveal="card"
              style={{ '--reveal-delay': `${70 + index * 30}ms` }}
            >
              <div className="text-slate-700 mb-3">
                {subj.icon}
              </div>
              
              <h3 className="font-medium text-lg text-slate-800 tracking-tight mb-3">
                {subj.name}
              </h3>
              
              <div className="mt-auto text-sm font-bold text-[#FF6B00] uppercase tracking-wide flex items-center gap-1.5 opacity-90 group-hover:opacity-100">
                Get Help 
                <ArrowRight size={14} className="transform group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubjectsGrid;