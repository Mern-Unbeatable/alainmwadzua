import React, { useState } from 'react';
import ContactHeroSection from '../components/contact/ContactHeroSection';
import SelectionChips from '../components/contact/SelectionChips';
import ContactDetailsFields from '../components/contact/ContactDetailsFields';
import GuaranteesSection from '../components/contact/GuaranteesSection';
import useRevealAnimation from '../hooks/useRevealAnimation';

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

const Contact = () => {
  const [selectedService, setSelectedService] = useState('Do My Online Class');
  const [selectedUrgency, setSelectedUrgency] = useState('24 Hours');

  useRevealAnimation();

  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <ContactHeroSection />

      {/* Main Form Content */}
      <div className="container mx-auto px-4 py-14 md:py-16 lg:py-20">
        <form className="space-y-8">

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

          <ContactDetailsFields />

          {/* Submit Button */}
          <div className="flex justify-end pt-2" data-reveal="text" style={{ '--reveal-delay': '230ms' }}>
            <button
              type="submit"
              className="bg-primary hover:bg-[#e56000] text-white font-medium py-3 px-8 rounded transition duration-300 shadow-sm"
            >
              Submit Request & Get Quote
            </button>
          </div>
        </form>

        <GuaranteesSection />
      </div>
    </div>
  );
};

export default Contact;