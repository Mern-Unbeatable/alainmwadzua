import React, { useState } from 'react';

const QuoteForm = () => {
  const [helpType, setHelpType] = useState('Do my online class');
  const [timeline, setTimeline] = useState('Today');

  const helpOptions = [
    'Do my online class', 'Take my Proctored Exam', 'Research Paper', 
    'Take my Online test', 'Academic Essay', 'Class Project', 'Other'
  ];

  const timelineOptions = [
    'Today', '24 hours', '2-3 days', 'This Week', 'Flexible Academy'
  ];

  return (
    <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-8">
      <form className="space-y-6">
        
        {/* Help Type Options */}
        <div>
          <label className="block text-[14px] font-bold text-gray-800 mb-3">What do you need help with</label>
          <div className="flex flex-wrap gap-2.5">
            {helpOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setHelpType(option)}
                className={`px-4 py-2 text-[13px] rounded-full border transition-all ${
                  helpType === option
                    ? 'bg-[#ff6b00] border-[#ff6b00] text-white font-medium'
                    : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Options */}
        <div>
          <label className="block text-[14px] font-bold text-gray-800 mb-3">How soon do you need help?</label>
          <div className="flex flex-wrap gap-2.5">
            {timelineOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setTimeline(option)}
                className={`px-4 py-2 text-[13px] rounded-full border transition-all ${
                  timeline === option
                    ? 'bg-[#ff6b00] border-[#ff6b00] text-white font-medium'
                    : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Input Fields */}
        <div className="space-y-4 pt-2">
          <div>
            <label className="block text-[11px] font-bold text-gray-500 uppercase mb-1.5">What subject or course is this for?</label>
            <input
              type="text"
              placeholder="subject/course name/course code"
              className="w-full px-4 py-3 bg-[#f8fafc] border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-300 focus:bg-white transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-bold text-gray-500 uppercase mb-1.5">Name</label>
              <input
                type="text"
                placeholder="your name"
                className="w-full px-4 py-3 bg-[#f8fafc] border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-300 focus:bg-white transition-colors"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-gray-500 uppercase mb-1.5">Email Address</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-[#f8fafc] border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-300 focus:bg-white transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-gray-500 uppercase mb-1.5">Phone Number</label>
            <input
              type="tel"
              placeholder="your phone number"
              className="w-full px-4 py-3 bg-[#f8fafc] border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-300 focus:bg-white transition-colors"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-gray-500 uppercase mb-1.5">Message</label>
            <textarea
              rows="4"
              placeholder="Message/Project details"
              className="w-full px-4 py-3 bg-[#f8fafc] border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-300 focus:bg-white transition-colors resize-none"
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3.5 bg-[#ff6b00] hover:bg-[#e66000] text-white font-bold text-[15px] rounded-lg transition-colors"
        >
          Get My Free Quote
        </button>
      </form>
    </div>
  );
};

export default QuoteForm;