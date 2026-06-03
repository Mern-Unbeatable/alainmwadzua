import React, { useState } from 'react';
import { 
  Clock, 
  UserCheck, 
  ShieldCheck, 
  Lock, 
  Globe, 
  Zap, 
  GraduationCap, 
  FileText, 
  Sliders, 
  CreditCard,
  ChevronRight
} from 'lucide-react';

const Pricing = () => {
  // Form States
  const [helpType, setHelpType] = useState('Do my online class');
  const [timeline, setTimeline] = useState('Today');
  const [formData, setFormData] = useState({
    subject: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const helpOptions = [
    'Do my online class', 'Tutoring/Proctored Exam', 'Research Paper', 
    'Take my Online test', 'Academic Essay', 'Short Project', 'Other'
  ];

  const timelineOptions = [
    'Today', '24 hours', '2-3 days', 'This Week', 'Flexible/Academy'
  ];

  const trustPoints = [
    { icon: <CreditCard className="w-3.5 h-3.5 text-blue-500" />, text: "Affordable Services" },
    { icon: <UserCheck className="w-3.5 h-3.5 text-amber-500" />, text: "Experienced Professionals" },
    { icon: <ShieldCheck className="w-3.5 h-3.5 text-slate-600" />, text: "Guaranteed Original Content" },
    { icon: <Clock className="w-3.5 h-3.5 text-purple-500" />, text: "Timely Submissions" },
    { icon: <Zap className="w-3.5 h-3.5 text-green-500" />, text: "Transparent Processes" },
    { icon: <GraduationCap className="w-3.5 h-3.5 text-emerald-500" />, text: "A or B Grade Guaranteed" },
    { icon: <Lock className="w-3.5 h-3.5 text-blue-600" />, text: "100% Confidential" },
    { icon: <Globe className="w-3.5 h-3.5 text-orange-500" />, text: "US Based Academic Experts" },
    { icon: <Zap className="w-3.5 h-3.5 text-cyan-500" />, text: "Fast 30-Min Response" },
  ];

  const features = [
    {
      icon: <Clock className="w-5 h-5 text-indigo-600" />,
      title: "Simplicity & Availability",
      desc: "Need help with an online class? We make the process simple. Our support team is available 7 days a week to review your class details and provide a customized quote based on your specific needs."
    },
    {
      icon: <Sliders className="w-5 h-5 text-indigo-600" />,
      title: "Detailed Customization",
      desc: "Send us your syllabus, assignment details, or course requirements, and we'll get back to you quickly with pricing and options. If you've already completed part of the class, let us know so we can factor that into the cost."
    },
    {
      icon: <FileText className="w-5 h-5 text-indigo-600" />,
      title: "Flexible Payments",
      desc: "Our rates are flexible and negotiable, and we also offer convenient payment plans to fit your budget. Share as much information as possible for the fastest response, and include your email for a quick response from our team."
    }
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Quote Request:', { helpType, timeline, ...formData });
  };

  return (
    <div className="w-full bg-[#fcfdfd] font-sans antialiased text-slate-800">
      
      {/* --- HEADER SECTION --- */}
      <header className="text-center pt-16 pb-10 px-4 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight mb-3">
          Get a Fast, Personalized Quote
        </h1>
        <p className="text-sm md:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Every assignment is unique. We provide custom pricing to ensure you get the best value for your specific academic needs.
        </p>
      </header>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start pb-20">
        
        {/* LEFT: QUOTE FORM CONTAINER */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.04)] p-6 md:p-8 border border-slate-100/80">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Help Type Options */}
            <div>
              <label className="block text-xs font-bold text-slate-900 mb-2.5">What do you need help with</label>
              <div className="flex flex-wrap gap-2">
                {helpOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setHelpType(option)}
                    className={`px-3 py-1.5 text-[11px] font-medium rounded-full border transition-all duration-150 ${
                      helpType === option
                        ? 'bg-[#ff5a00] border-[#ff5a00] text-white shadow-sm'
                        : 'border-slate-200 text-slate-500 hover:border-slate-300 bg-white'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Timeline Options */}
            <div>
              <label className="block text-xs font-bold text-slate-900 mb-2.5">How soon do you need help?</label>
              <div className="flex flex-wrap gap-2">
                {timelineOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setTimeline(option)}
                    className={`px-3 py-1.5 text-[11px] font-medium rounded-full border transition-all duration-150 ${
                      timeline === option
                        ? 'bg-[#ff5a00] border-[#ff5a00] text-white shadow-sm'
                        : 'border-slate-200 text-slate-500 hover:border-slate-300 bg-white'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold text-slate-800 uppercase tracking-wider mb-1.5">What subject or course is this for?</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="subject/course name/course code"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 bg-[#f8fafc] border border-slate-200 rounded-md text-xs placeholder:text-slate-400 focus:outline-none focus:border-slate-400 transition-colors"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-800 uppercase tracking-wider mb-1.5">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 bg-[#f8fafc] border border-slate-200 rounded-md text-xs placeholder:text-slate-400 focus:outline-none focus:border-slate-400 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-800 uppercase tracking-wider mb-1.5">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 bg-[#f8fafc] border border-slate-200 rounded-md text-xs placeholder:text-slate-400 focus:outline-none focus:border-slate-400 transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-800 uppercase tracking-wider mb-1.5">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="your phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 bg-[#f8fafc] border border-slate-200 rounded-md text-xs placeholder:text-slate-400 focus:outline-none focus:border-slate-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-800 uppercase tracking-wider mb-1.5">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Message/Project details"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 bg-[#f8fafc] border border-slate-200 rounded-md text-xs placeholder:text-slate-400 focus:outline-none focus:border-slate-400 transition-colors resize-none"
                  required
                ></textarea>
              </div>
            </div>

            {/* CTA Button */}
            <button
              type="submit"
              className="w-full py-3 bg-[#ff5a00] hover:bg-[#e04f00] text-white font-bold text-xs rounded-md shadow-sm transition-colors duration-150 tracking-wide"
            >
              Get My Free Quote
            </button>
          </form>
        </div>

        {/* RIGHT: TRUST SIDEBAR */}
        <div className="space-y-4">
          
          {/* Support Highlight Box */}
          <div className="bg-[#fff4eb] border border-orange-100 rounded-xl p-4 flex items-start gap-3">
            <div className="p-2 bg-[#ff5a00] rounded-lg text-white shrink-0 mt-0.5">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-xs mb-0.5">Need help with an online class?</h4>
              <p className="text-[11px] text-slate-600 leading-normal">
                Our support team is available 7 days a week to review your needs and provide a custom quote.
              </p>
            </div>
          </div>

          {/* Why Students Trust Us List */}
          <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
            <h3 className="text-[10px] font-extrabold tracking-wider text-slate-400 uppercase border-b border-slate-100 pb-3 mb-3">
              Why Students Trust Us
            </h3>
            <ul className="space-y-3.5">
              {trustPoints.map((point, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                    {point.icon}
                  </div>
                  <span className="text-xs font-medium text-slate-700">{point.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </main>

      {/* --- THREE COLUMN FEATURE GRID --- */}
      <section className="bg-[#f8fafc] border-t border-b border-slate-200/60 py-14 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div key={index} className="flex gap-3.5">
              <div className="w-9 h-9 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0 shadow-sm">
                {item.icon}
              </div>
              <div>
                <h3 className="font-bold text-slate-950 text-sm mb-1.5">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- FOOTER CTA BANNER --- */}
      <section 
        className="relative bg-cover bg-center py-20 px-4 text-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(20, 24, 33, 0.75), rgba(20, 24, 33, 0.75)), url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200')` 
        }}
      >
        <div className="relative z-10 max-w-xl mx-auto text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">Ready to Get Started?</h2>
          <p className="text-xs md:text-sm text-slate-300 opacity-95 mb-5 max-w-sm mx-auto font-light">
            Stop stressing over coursework. Let our experts handle it.
          </p>
          <button className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#ff5a00] hover:bg-[#e04f00] text-white font-bold text-[11px] uppercase tracking-wider rounded transition-colors duration-150 shadow-md">
            Get Help Now
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

    </div>
  );
};

export default Pricing;