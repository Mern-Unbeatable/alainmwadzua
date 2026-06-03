import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  UserCheck, 
  Lock, 
  Globe, 
  Zap, 
  GraduationCap, 
  FileText, 
  Sliders, 
  CreditCard 
} from 'lucide-react';

const Subject = () => {
  const [formData, setFormData] = useState({
    helpType: 'Taking online class',
    timeline: 'Today',
    subject: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const helpOptions = [
    'Taking online class', 'Take my Proctored Exam', 'Research Paper', 
    'Take my Online test', 'Academic Essay', 'Class Project', 'Other'
  ];

  const timelineOptions = [
    'Today', '24 hours', '2-3 days', 'This Week', 'Flexible Academic'
  ];

  const trustPoints = [
    { icon: <CreditCard className="w-4 h-4 text-blue-500" />, text: "Affordable Services" },
    { icon: <UserCheck className="w-4 h-4 text-amber-500" />, text: "Experienced Professionals" },
    { icon: <ShieldCheck className="w-4 h-4 text-slate-500" />, text: "Guaranteed Original Content" },
    { icon: <Clock className="w-4 h-4 text-purple-500" />, text: "Timely Submissions" },
    { icon: <Zap className="w-4 h-4 text-green-500" />, text: "Transparent Processes" },
    { icon: <GraduationCap className="w-4 h-4 text-emerald-500" />, text: "A or B Grade Guaranteed" },
    { icon: <Lock className="w-4 h-4 text-blue-600" />, text: "100% Confidential" },
    { icon: <Globe className="w-4 h-4 text-orange-500" />, text: "US Based Academic Experts" },
    { icon: <Zap className="w-4 h-4 text-cyan-500" />, text: "Fast 30-Min Response" },
  ];

  const featureCards = [
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
  };

  return (
    <div className="w-full bg-slate-50 font-sans text-slate-800">
      
      {/* 1. Header Section */}
      <section className="text-center pt-16 pb-12 px-4 max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Get a Fast, Personalized Quote
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Every assignment is unique. We provide custom pricing to ensure you get the best value for your specific academic needs.
        </p>
      </section>

      {/* 2. Main content: Form & Trust Badges */}
      <section className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start pb-20">
        
        {/* Left Side: Form (Spans 2 columns on large screens) */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl shadow-slate-100 p-6 md:p-8 border border-slate-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* What do you need help with */}
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-3">What do you need help with?</label>
              <div className="flex flex-wrap gap-2">
                {helpOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setFormData({ ...formData, helpType: option })}
                    className={`px-4 py-2 text-xs font-medium rounded-full border transition-all duration-200 ${
                      formData.helpType === option
                        ? 'bg-orange-600 border-orange-600 text-white shadow-sm'
                        : 'border-slate-200 text-slate-600 hover:border-slate-300 bg-white'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* How soon do you need help */}
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-3">How soon do you need help?</label>
              <div className="flex flex-wrap gap-2">
                {timelineOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setFormData({ ...formData, timeline: option })}
                    className={`px-4 py-2 text-xs font-medium rounded-full border transition-all duration-200 ${
                      formData.timeline === option
                        ? 'bg-orange-600 border-orange-600 text-white shadow-sm'
                        : 'border-slate-200 text-slate-600 hover:border-slate-300 bg-white'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Input fields */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold tracking-wide text-slate-700 uppercase mb-2">What subject or course is this for?</label>
                <input
                  type="text"
                  placeholder="subject/course name/course code"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-colors"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold tracking-wide text-slate-700 uppercase mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="your name"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-colors"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold tracking-wide text-slate-700 uppercase mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-colors"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold tracking-wide text-slate-700 uppercase mb-2">Phone Number</label>
                <input
                  type="tel"
                  placeholder="your phone number"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-colors"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-xs font-bold tracking-wide text-slate-700 uppercase mb-2">Message</label>
                <textarea
                  rows="4"
                  placeholder="Message/Project details"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-colors resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-200 uppercase tracking-wider"
            >
              Get My Free Quote
            </button>
          </form>
        </div>

        {/* Right Side: Sidebar Info */}
        <div className="space-y-6">
          {/* Top Info Box */}
          <div className="bg-orange-50 border border-orange-100 rounded-2xl p-5 flex items-start gap-4">
            <div className="p-2 bg-orange-600 rounded-lg text-white shrink-0 mt-0.5">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm mb-1">Need help with an online class?</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our support team is available 7 days a week to review your needs and provide a custom quote.
              </p>
            </div>
          </div>

          {/* Trust List Container */}
          <div className="bg-white border border-orange-100 rounded-2xl p-6 shadow-sm">
            <h3 className="text-xs font-extrabold tracking-wider text-slate-900 uppercase border-b border-slate-100 pb-4 mb-4">
              Why Students Trust Us
            </h3>
            <ul className="space-y-4">
              {trustPoints.map((point, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 shrink-0">
                    {point.icon}
                  </div>
                  <span className="text-xs font-semibold text-slate-700">{point.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </section>

      {/* 3. Features Grid Section */}
      <section className="bg-slate-100/60 border-t border-b border-slate-200/50 py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {featureCards.map((card, index) => (
            <div key={index} className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0">
                {card.icon}
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base mb-2">{card.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CTA Banner Section with Background Image */}
      <section 
        className="relative bg-cover bg-center py-24 px-4 text-center overflow-hidden"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200')` 
        }}
      >
        <div className="relative z-10 max-w-2xl mx-auto text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">Ready to Get Started?</h2>
          <p className="text-sm text-slate-200 opacity-90 mb-6 max-w-md mx-auto">
            Stop stressing over coursework. Let our experts handle it.
          </p>
          <button className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs uppercase tracking-wider rounded transition-all duration-200 shadow-lg">
            Get Help Now
          </button>
        </div>
      </section>

    </div>
  );
};

export default Subject;