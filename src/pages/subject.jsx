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
import SubjectHero from '../components/subject/SubjectHero';
import SubjectHighlights from '../components/subject/SubjectHighlights';
import SubjectsGrid from '../components/subject/SubjectsGrid';

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
      <SubjectHero
        titleMain={"Expert Tutors"}
        titleHighlight={"All Major Disciplines"}
        description={"Whether you're struggling with advanced calculus, nursing prerequisites, or intensive research papers in history or management, our team of degree-holding specialists is prepared to step in. We will perfectly take your class and get you A+ grades!"}
        badges={[
          { icon: <FileText className="w-3.5 h-3.5 text-slate-700" />, label: "Homework" },
          { icon: <Monitor className="w-3.5 h-3.5 text-slate-700" />, label: "Midterms/Finals" },
          { icon: <BookOpen className="w-3.5 h-3.5 text-slate-700" />, label: "Discussion Posts" },
          { icon: <Zap className="w-3.5 h-3.5 text-slate-700" />, label: "Full Semesters" },
        ]}
        image={"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000"}
      />

      {/* SECTION 2: 4-COLUMN HIGHLIGHT CARDS */}
      <SubjectHighlights highlights={highlights} />

      {/* SECTION 3: SUBJECTS GRID DISPLAY */}
      <SubjectsGrid subjects={subjects} />

      {/* SECTION 4: DARK LANDSCAPE OVERLAY BANNER */}
      <CTASection />

    </div>
  );
};

export default Subject;