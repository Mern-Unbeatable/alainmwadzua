import React, { useState } from 'react';

const services = [
  'Do My Online Class',
  'Take My Proctored Exam',
  'Take My Online Test',
  'Research Paper',
  'Class Project',
  'Academic Essay',
  'Other',
];

const urgencies = [
  'Today',
  '24 Hours',
  '2-3 Days',
  'This Week',
  'Flexible Deadline',
];

const ContactContent = () => {
  const [selectedService, setSelectedService] = useState('Do My Online Class');
  const [selectedUrgency, setSelectedUrgency] = useState('24 Hours');

  return (
    <div className="w-full min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <div 
        className="relative w-full py-14 md:py-16 lg:py-20 bg-cover h-140 bg-center flex items-center justify-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" 
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Get You the Help You Need
          </h1>
          <p className="text-gray-200 text-base md:text-lg">
            Tell us about your course and our experts will take care of the rest. High-stakes academic safety starts here.
          </p>
        </div>
      </div>

      {/* Main Form Content */}
      <div className="container mx-auto px-4 py-14 md:py-16 lg:py-20">
        <form className="space-y-8">
          
          {/* Select Your Service */}
          <div>
            <h3 className="text-2xl font-bold text-[#1a2b4c] mb-4">Select Your Service</h3>
            <div className="flex flex-wrap gap-3">
              {services.map((service) => (
                <button
                  key={service}
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors border ${
                    selectedService === service
                      ? 'bg-[#FF6B00] text-white border-[#FF6B00]'
                      : 'bg-white text-gray-600 border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>

          {/* How Urgent Is This? */}
          <div>
            <h3 className="text-2xl font-bold text-[#1a2b4c] mb-4">How Urgent Is This?</h3>
            <div className="flex flex-wrap gap-3">
              {urgencies.map((urgency) => (
                <button
                  key={urgency}
                  type="button"
                  onClick={() => setSelectedUrgency(urgency)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors border ${
                    selectedUrgency === urgency
                      ? 'bg-[#FF6B00] text-white border-[#FF6B00]'
                      : 'bg-white text-gray-600 border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {urgency}
                </button>
              ))}
            </div>
          </div>

          {/* Course Information */}
          <div>
            <h3 className="text-2xl font-bold text-[#1a2b4c] mb-4">Course Information</h3>
            <div className="flex flex-col">
              <label htmlFor="courseInfo" className="text-base text-gray-500 mb-1">
                Subject / Course Name / Course Code
              </label>
              <input
                type="text"
                id="courseInfo"
                placeholder="e.g. ECON 101 - Intro to Microeconomics"
                className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF6B00] focus:border-[#FF6B00]"
              />
            </div>
          </div>

          {/* Your Details */}
          <div>
            <h3 className="text-2xl font-bold text-[#1a2b4c] mb-4">Your Details</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex flex-col">
                <label htmlFor="fullName" className="text-base text-gray-500 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="John Doe"
                  className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF6B00] focus:border-[#FF6B00]"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="emailAddress" className="text-base text-gray-500 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="emailAddress"
                  placeholder="john@example.com"
                  className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF6B00] focus:border-[#FF6B00]"
                />
              </div>
            </div>

            <div className="flex flex-col mb-6">
              <label htmlFor="phoneNumber" className="text-base text-gray-500 mb-1">
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                id="phoneNumber"
                placeholder="+1 (555) 000-0000"
                className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF6B00] focus:border-[#FF6B00]"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-base text-gray-500 mb-1">
                Special Requirements or Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Please let us know any specific details about your project or course requirements..."
                className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF6B00] focus:border-[#FF6B00] resize-y"
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="bg-primary hover:bg-[#e56000] text-white font-medium py-3 px-8 rounded transition duration-300 shadow-sm"
            >
              Submit Request & Get Quote
            </button>
          </div>
        </form>

        {/* Features / Guarantees Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 md:mt-16 lg:mt-20">
          
          {/* Card 1 */}
          <div className="bg-[#FFF0E6] rounded-xl p-8 flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h4 className="font-bold text-[#1a2b4c] text-lg mb-2">A or B Grade Guaranteed</h4>
            <p className="text-gray-500 text-sm">Quality results or your money back.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#FFF0E6] rounded-xl p-8 flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h4 className="font-bold text-[#1a2b4c] text-lg mb-2">100% Confidential</h4>
            <p className="text-gray-500 text-sm">Your information is fully encrypted.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#FFF0E6] rounded-xl p-8 flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-[#FF6B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="font-bold text-[#1a2b4c] text-lg mb-2">US-Based Experts</h4>
            <p className="text-gray-500 text-sm">Work with native English speakers.</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactContent;