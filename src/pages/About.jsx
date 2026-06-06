import React from 'react';
import AboutHeroSection from '../components/about/AboutHeroSection';
import AboutStorySection from '../components/about/AboutStorySection';
import AboutFeaturesSection from '../components/about/AboutFeaturesSection';
import StudentPromiseSection from '../components/about/StudentPromiseSection';
import CompanyGoalSection from '../components/about/CompanyGoalSection';

const About = () => {
  return (
    <div className="w-full font-sans bg-white">

      <AboutHeroSection />
      <AboutStorySection />
      <AboutFeaturesSection />
      <StudentPromiseSection />
      <CompanyGoalSection />
    </div>
  );
};

export default About;