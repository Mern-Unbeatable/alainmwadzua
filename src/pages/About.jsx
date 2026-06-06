import React from 'react';
import AboutHeroSection from '../components/about/AboutHeroSection';
import AboutStorySection from '../components/about/AboutStorySection';
import AboutFeaturesSection from '../components/about/AboutFeaturesSection';
import StudentPromiseSection from '../components/about/StudentPromiseSection';
import { Cat } from 'lucide-react';
import CTASection from '../components/CTASection';


const About = () => {
  return (
    <div className="w-full bg-white">

      <AboutHeroSection />
      <AboutStorySection />
      <AboutFeaturesSection />
      <StudentPromiseSection />
      <CTASection/>
    </div>
  );
};

export default About;