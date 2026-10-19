import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { postQuoteRequest } from '../../services/quoteService';
import { withErrorBoundary } from '../ErrorBoundary';

const helpTypeMap = {
  'Do my online class': 'DO_MY_ONLINE_CLASS',
  'Take my Proctored Exam': 'TAKE_MY_PROCTORED_EXAM',
  'Take my Online test': 'TAKE_MY_ONLINE_TEST',
  'Research Paper': 'RESEARCH_PAPER',
  'Class Project': 'CLASS_PROJECT',
  'Academic Essay': 'ACADEMIC_ESSAY',
  Other: 'OTHER',
};

const urgencyMap = {
  Today: 'TODAY',
  '24 hours': '24_HOURS',
  '2-3 days': '2_3_DAYS',
  'This Week': 'THIS_WEEK',
  'Flexible Academy': 'FLEXIBLE_DEADLINE',
};

const initialFormData = {
  subject: '',
  name: '',
  email: '',
  phoneNumber: '',
  message: '',
};

const QuoteForm = () => {
  const [helpType, setHelpType] = useState('Do my online class');
  const [timeline, setTimeline] = useState('Today');
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const helpOptions = [
    'Do my online class', 'Take my Proctored Exam', 'Research Paper', 
    'Take my Online test', 'Academic Essay', 'Class Project', 'Other'
  ];

  const timelineOptions = [
    'Today', '24 hours', '2-3 days', 'This Week', 'Flexible Academy'
  ];

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting) return;

    const payload = {
      helpType: helpTypeMap[helpType] || 'OTHER',
      urgency: urgencyMap[timeline] || 'FLEXIBLE_DEADLINE',
      subject: formData.subject.trim(),
      name: formData.name.trim(),
      email: formData.email.trim(),
      ...(formData.phoneNumber.trim() && { phoneNumber: formData.phoneNumber.trim() }),
      message: formData.message.trim(),
    };

    setIsSubmitting(true);
    try {
      const response = await postQuoteRequest(payload);
      await Swal.fire({
        icon: 'success',
        title: 'Submitted',
        text: response?.message,
        confirmButtonColor: '#FF6B00',
      });

      setFormData(initialFormData);
      setHelpType('Do my online class');
      setTimeline('Today');
    } catch (error) {
      await Swal.fire({
        icon: 'error',
        title: 'Submission Failed',
        text: error.message || 'Something went wrong. Please try again.',
        confirmButtonColor: '#FF6B00',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-8">
      <form className="space-y-6" onSubmit={handleSubmit}>
        
        {/* Help Type Options */}
        <div>
          <label className="block text-lg font-semibold text-gray-800 mb-3">What do you need help with</label>
          <div className="flex flex-wrap gap-2.5">
            {helpOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setHelpType(option)}
                className={`px-4 py-2 text-sm rounded-full border transition-all ${
                  helpType === option
                    ? 'bg-[#ff6b00] border-[#ff6b00] text-white font-medium'
                    : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'
                }`}
                disabled={isSubmitting}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Options */}
        <div>
          <label className="block text-lg font-semibold text-gray-800 mb-3">How soon do you need help?</label>
          <div className="flex flex-wrap gap-2.5">
            {timelineOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setTimeline(option)}
                className={`px-4 py-2 text-sm rounded-full border transition-all ${
                  timeline === option
                    ? 'bg-[#ff6b00] border-[#ff6b00] text-white font-medium'
                    : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'
                }`}
                disabled={isSubmitting}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Input Fields */}
        <div className="space-y-4 pt-2">
          <div>
            <label className="block text-base  text-gray-500 uppercase mb-1.5">What subject or course is this for?</label>
            <input
              type="text"
              name="subject"
              placeholder="subject/course name/course code"
              value={formData.subject}
              onChange={handleFieldChange}
              className="w-full px-4 py-3 bg-[#F8F9FC] border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-300 focus:bg-white transition-colors"
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-base  text-gray-500 uppercase mb-1.5">Name</label>
              <input
                type="text"
                name="name"
                placeholder="your name"
                value={formData.name}
                onChange={handleFieldChange}
                className="w-full px-4 py-3 bg-[#F8F9FC] border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-300 focus:bg-white transition-colors"
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label className="block text-base  text-gray-500 uppercase mb-1.5">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleFieldChange}
                className="w-full px-4 py-3 bg-[#F8F9FC] border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-300 focus:bg-white transition-colors"
                required
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div>
            <label className="block text-base  text-gray-500 uppercase mb-1.5">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="your phone number"
              value={formData.phoneNumber}
              onChange={handleFieldChange}
              className="w-full px-4 py-3 bg-[#F8F9FC] border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-300 focus:bg-white transition-colors"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label className="block text-base  text-gray-500 uppercase mb-1.5">Message</label>
            <textarea
              rows="4"
              name="message"
              placeholder="Message/Project details"
              value={formData.message}
              onChange={handleFieldChange}
              className="w-full px-4 py-3 bg-[#F8F9FC] border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-300 focus:bg-white transition-colors resize-none"
              required
              disabled={isSubmitting}
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3.5 bg-primary hover:bg-primary/80 text-white font-bold text-[15px] rounded-lg transition-colors"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Get My Free Quote'}
        </button>
      </form>
    </div>
  );
};

export default withErrorBoundary(QuoteForm);