import React from 'react';

const inputClassName =
  'w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF6B00] focus:border-[#FF6B00]';

const ContactDetailsFields = () => {
  return (
    <>
      <div data-reveal="text" style={{ '--reveal-delay': '150ms' }}>
        <h3 className="text-2xl font-bold text-[#1a2b4c] mb-4">Course Information</h3>
        <div className="flex flex-col">
          <label htmlFor="courseInfo" className="text-base text-gray-500 mb-1">
            Subject / Course Name / Course Code
          </label>
          <input
            type="text"
            id="courseInfo"
            placeholder="e.g. ECON 101 - Intro to Microeconomics"
            className={inputClassName}
          />
        </div>
      </div>

      <div data-reveal="text" style={{ '--reveal-delay': '190ms' }}>
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
              className={inputClassName}
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
              className={inputClassName}
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
            className={inputClassName}
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
            className={`${inputClassName} resize-y`}
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default ContactDetailsFields;