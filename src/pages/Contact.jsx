import React, { useState } from 'react';
import Swal from 'sweetalert2';
import ContactHeroSection from '../components/contact/ContactHeroSection';
import SelectionChips from '../components/contact/SelectionChips';
import ContactDetailsFields from '../components/contact/ContactDetailsFields';
import GuaranteesSection from '../components/contact/GuaranteesSection';
import useRevealAnimation from '../hooks/useRevealAnimation';
import { postQuoteRequest } from '../services/quoteService';

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

const helpTypeMap = {
  'Do My Online Class': 'DO_MY_ONLINE_CLASS',
  'Take My Proctored Exam': 'TAKE_MY_PROCTORED_EXAM',
  'Take My Online Test': 'TAKE_MY_ONLINE_TEST',
  'Research Paper': 'RESEARCH_PAPER',
  'Class Project': 'CLASS_PROJECT',
  'Academic Essay': 'ACADEMIC_ESSAY',
  Other: 'OTHER',
};

const urgencyMap = {
  Today: 'TODAY',
  '24 Hours': '24_HOURS',
  '2-3 Days': '2_3_DAYS',
  'This Week': 'THIS_WEEK',
  'Flexible Deadline': 'FLEXIBLE_DEADLINE',
};

const initialFormData = {
  subject: '',
  name: '',
  email: '',
  phoneNumber: '',
  message: '',
};

const Contact = () => {
  const [selectedService, setSelectedService] = useState('Do My Online Class');
  const [selectedUrgency, setSelectedUrgency] = useState('24 Hours');
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting) return;

    const payload = {
      helpType: helpTypeMap[selectedService] || 'OTHER',
      urgency: urgencyMap[selectedUrgency] || 'FLEXIBLE_DEADLINE',
      subject: formData.subject.trim(),
      name: formData.name.trim(),
      email: formData.email.trim(),
      phoneNumber: formData.phoneNumber.trim(),
      message: formData.message.trim(),
    };

    setIsSubmitting(true);
    try {
      const response = await postQuoteRequest(payload);
      await Swal.fire({
        icon: 'success',
        title: 'Submitted',
        text:
          response?.message ||
          'Q',
        confirmButtonColor: '#FF6B00',
      });

      setFormData(initialFormData);
      setSelectedService('Do My Online Class');
      setSelectedUrgency('24 Hours');
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
    <div className="w-full min-h-screen bg-white font-sans">
      <ContactHeroSection />

      {/* Main Form Content */}
      <div className="container mx-auto px-4 py-14 md:py-16 lg:py-20">
        <form className="space-y-8" onSubmit={handleSubmit}>

          <SelectionChips
            title="Select Your Service"
            items={services}
            selectedValue={selectedService}
            onSelect={setSelectedService}
            delay={70}
          />

          <SelectionChips
            title="How Urgent Is This?"
            items={urgencies}
            selectedValue={selectedUrgency}
            onSelect={setSelectedUrgency}
            delay={110}
          />

          <ContactDetailsFields formData={formData} onFieldChange={handleFieldChange} />

          {/* Submit Button */}
          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="bg-primary hover:bg-[#e56000] disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium py-3 px-8 rounded transition duration-300 shadow-sm"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Request & Get Quote'}
            </button>
          </div>
        </form>

        <GuaranteesSection />
      </div>
    </div>
  );
};

export default Contact;