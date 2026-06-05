import React from 'react';
import { 
  FileQuestion, DollarSign, Medal, ShieldCheck, 
  Clock, Eye, Star, Lock, Globe, Zap 
} from 'lucide-react';

const TrustSidebar = () => {
  const trustPoints = [
    { icon: <DollarSign className="w-4 h-4 text-blue-500" />, text: "Affordable Services", bg: "bg-blue-50" },
    { icon: <Medal className="w-4 h-4 text-orange-500" />, text: "Experienced Professionals", bg: "bg-orange-50" },
    { icon: <ShieldCheck className="w-4 h-4 text-gray-600" />, text: "Guaranteed Original Content", bg: "bg-gray-100" },
    { icon: <Clock className="w-4 h-4 text-purple-500" />, text: "Timely Submissions", bg: "bg-purple-50" },
    { icon: <Eye className="w-4 h-4 text-green-500" />, text: "Transparent Processes", bg: "bg-green-50" },
    { icon: <Star className="w-4 h-4 text-teal-500" />, text: "A or B Grade Guaranteed", bg: "bg-teal-50" },
    { icon: <Lock className="w-4 h-4 text-blue-600" />, text: "100% Confidential", bg: "bg-blue-50" },
    { icon: <Globe className="w-4 h-4 text-orange-600" />, text: "US Based Academic Experts", bg: "bg-orange-50" },
    { icon: <Zap className="w-4 h-4 text-green-400" />, text: "Fast 30-Min Response", bg: "bg-green-50" },
  ];

  return (
    <div className="space-y-6">
      {/* Support Alert Box */}
      <div className="bg-[#fff8f3] rounded-2xl p-6 relative overflow-hidden">
        {/* Decorative heart watermark background like the image */}
        <div className="absolute -right-4 -top-4 opacity-10">
            <ShieldCheck className="w-24 h-24 text-[#ff6b00]" />
        </div>
        
        <div className="flex gap-4 relative z-10">
          <div className="p-2.5 bg-[#ff6b00] rounded-xl text-white shrink-0 h-fit">
            <FileQuestion className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-medium text-gray-800 text-[15px] mb-1">Need help with an online class?</h4>
            <p className="text-[13px] text-gray-600 leading-relaxed">
              Our support team is available 7 days a week to review your needs and provide a custom quote.
            </p>
          </div>
        </div>
      </div>

      {/* Trust List */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-[0_2px_15px_rgb(0,0,0,0.03)]">
        <h3 className="text-[13px] font-bold tracking-widest text-gray-800 uppercase border-b border-gray-100 pb-4 mb-5">
          WHY STUDENTS TRUST US
        </h3>
        <ul className="space-y-4">
          {trustPoints.map((point, idx) => (
            <li key={idx} className="flex items-center gap-4">
              <div className={`w-8 h-8 rounded-full ${point.bg} flex items-center justify-center shrink-0`}>
                {point.icon}
              </div>
              <span className="text-[14px] text-gray-700">{point.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TrustSidebar;