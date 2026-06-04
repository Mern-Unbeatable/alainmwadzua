import React from 'react';
import { 
  ArrowRight, 
  FileText, 
  Monitor, 
  Award, 
  Zap,
  Calculator, 
  BookOpen, 
  Activity, 
  Cpu, 
  Scale, 
  Globe, 
  LineChart, 
  Layers, 
  Sigma, 
  FlaskConical, 
  MessageSquare, 
  ShieldAlert, 
  BarChart3, 
  HeartHandshake, 
  Users, 
  Compass, 
  Atom, 
  Network, 
  Binary 
} from 'lucide-react';
import CTASection from '../components/CTASection';

const Subject = () => {

  // Highlights / Features underneath intro
  const highlights = [
    {
      icon: <FileText className="w-5 h-5 text-indigo-600" />,
      title: "Exams, Essays & Papers",
      desc: "Precision-crafted papers and exam strategies for top marks.",
      bg: "bg-white border border-slate-100 shadow-xs",
      textColor: "text-slate-900",
      descColor: "text-slate-500"
    },
    {
      icon: <Monitor className="w-5 h-5 text-white" />,
      title: "Entire Online Classes",
      desc: "We handle everything from Week 1 to the final grade.",
      bg: "bg-orange-600 text-white shadow-lg shadow-orange-600/10",
      textColor: "text-white",
      descColor: "text-orange-100"
    },
    {
      icon: <Award className="w-5 h-5 text-amber-600" />,
      title: "Top Grades – A or B",
      desc: "Guaranteed performance or your money back. 100% success.",
      bg: "bg-amber-50/70 border border-amber-100",
      textColor: "text-slate-900",
      descColor: "text-slate-500"
    },
    {
      icon: <Zap className="w-5 h-5 text-cyan-600" />,
      title: "Fast Delivery",
      desc: "Last-minute assignments? We deliver high-quality work fast.",
      bg: "bg-white border border-slate-100 shadow-xs",
      textColor: "text-slate-900",
      descColor: "text-slate-500"
    }
  ];

  // 29 Subjects Grid Data mapped from image_e85efb.png
  const subjects = [
    { name: "Accounting", icon: <BarChart3 className="w-4 h-4 text-slate-700" /> },
    { name: "Theology", icon: <BookOpen className="w-4 h-4 text-slate-700" /> },
    { name: "Algebra", icon: <Calculator className="w-4 h-4 text-slate-700" /> },
    { name: "Biology", icon: <Activity className="w-4 h-4 text-slate-700" /> },
    { name: "Business Law", icon: <Scale className="w-4 h-4 text-slate-700" /> },
    { name: "Calculus", icon: <Sigma className="w-4 h-4 text-slate-700" /> },
    { name: "Chemistry", icon: <FlaskConical className="w-4 h-4 text-slate-700" /> },
    { name: "Nursing", icon: <HeartHandshake className="w-4 h-4 text-slate-700" /> },
    { name: "Communication", icon: <MessageSquare className="w-4 h-4 text-slate-700" /> },
    { name: "Criminal Justice", icon: <ShieldAlert className="w-4 h-4 text-slate-700" /> },
    { name: "Economics", icon: <LineChart className="w-4 h-4 text-slate-700" /> },
    { name: "Engineering", icon: <Cpu className="w-4 h-4 text-slate-700" /> },
    { name: "English", icon: <BookOpen className="w-4 h-4 text-slate-700" /> },
    { name: "Finance", icon: <BarChart3 className="w-4 h-4 text-slate-700" /> },
    { name: "Geometry", icon: <Layers className="w-4 h-4 text-slate-700" /> },
    { name: "History", icon: <Compass className="w-4 h-4 text-slate-700" /> },
    { name: "IT", icon: <Binary className="w-4 h-4 text-slate-700" /> },
    { name: "Marketing", icon: <LineChart className="w-4 h-4 text-slate-700" /> },
    { name: "Management", icon: <Users className="w-4 h-4 text-slate-700" /> },
    { name: "Operations Management", icon: <Network className="w-4 h-4 text-slate-700" /> },
    { name: "Philosophy", icon: <Compass className="w-4 h-4 text-slate-700" /> },
    { name: "Physics", icon: <Atom className="w-4 h-4 text-slate-700" /> },
    { name: "Political Science", icon: <Globe className="w-4 h-4 text-slate-700" /> },
    { name: "Science", icon: <FlaskConical className="w-4 h-4 text-slate-700" /> },
    { name: "Sociology", icon: <Users className="w-4 h-4 text-slate-700" /> },
    { name: "Statistics", icon: <BarChart3 className="w-4 h-4 text-slate-700" /> },
    { name: "Trigonometry", icon: <Sigma className="w-4 h-4 text-slate-700" /> },
    { name: "Strategic Management", icon: <Layers className="w-4 h-4 text-slate-700" /> },
    { name: "Others", icon: <BookOpen className="w-4 h-4 text-slate-700" /> }
  ];

  return (
    <div className="w-full bg-white font-sans text-slate-800 antialiased">

      {/* SECTION 1: HERO INTRO AREA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-5 space-y-6">
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-none">
              Expert Tutors <br />
              Across <span className="text-orange-600">All Major <br />Disciplines</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-md">
              Whether you're struggling with advanced calculus, nursing prerequisites, or intensive research papers in history or management, our team of degree-holding specialists is prepared to step in. We will perfectly take your class and get you A+ grades!
            </p>
            
            {/* Minimal Pill Badges from image */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-[10px] font-bold text-slate-600">
                📝 Homework
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-[10px] font-bold text-slate-600">
                💻 Midterms/Finals
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-[10px] font-bold text-slate-600">
                📚 Discussion Posts
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-[10px] font-bold text-slate-600">
                🚀 Full Semesters
              </span>
            </div>

            <div className="pt-2">
              <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs uppercase tracking-widest rounded transition-all duration-200">
                Get Help <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Image Grid Column */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000" 
                alt="Students studying together" 
                className="w-full h-[360px] object-cover"
              />
              {/* Subtle visual glow backdrop modifier */}
              <div className="absolute inset-0 bg-linear-to-tr from-orange-600/10 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: 4-COLUMN HIGHLIGHT CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {highlights.map((card, idx) => (
            <div 
              key={idx} 
              className={`rounded-xl p-6 flex flex-col justify-between min-h-[160px] transition-all duration-200 ${card.bg}`}
            >
              <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-slate-50/10 border border-white/10 shrink-0">
                {card.icon}
              </div>
              <div className="mt-4 space-y-1">
                <h3 className={`font-extrabold text-sm tracking-tight ${card.textColor}`}>
                  {card.title}
                </h3>
                <p className={`text-[11px] leading-normal ${card.descColor}`}>
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: SUBJECTS GRID DISPLAY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        
        {/* Section Heading Header */}
        <div className="max-w-xl mx-auto mb-12 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Subjects We Support
          </h2>
          <p className="text-xs text-slate-500 tracking-wide">
            Select your subject below to get a custom quote for your specific needs.
          </p>
        </div>

        {/* 4 Column Dense Responsive Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-left">
          {subjects.map((subj, index) => (
            <div 
              key={index}
              className="bg-white border border-slate-100 hover:border-orange-200 rounded-xl p-4 flex flex-col justify-between h-[90px] shadow-2xs hover:shadow-md transition-all duration-200 group cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-md bg-slate-50 group-hover:bg-orange-50 flex items-center justify-center border border-slate-100 transition-colors">
                  {subj.icon}
                </div>
                <span className="font-bold text-xs sm:text-sm text-slate-800 tracking-tight group-hover:text-orange-600 transition-colors">
                  {subj.name}
                </span>
              </div>
              
              <div className="text-[10px] font-bold text-orange-600/70 group-hover:text-orange-600 tracking-wider flex items-center gap-1 mt-2">
                Get Help <ArrowRight className="w-2.5 h-2.5 transform group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: DARK LANDSCAPE OVERLAY BANNER */}
 <CTASection/>

    </div>
  );
};

export default Subject;