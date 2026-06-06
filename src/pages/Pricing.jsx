import React from 'react';
import FeatureGrid from '../components/pricing/FeatureGrid';
import PricingHeaderSection from '../components/pricing/PricingHeaderSection';
import PricingMainSection from '../components/pricing/PricingMainSection';
import CTASection from '../components/CTASection';


const Pricing = () => {
  return (
    <div className="min-h-screen bg-[#fafbfc]">

      <PricingHeaderSection />
      <PricingMainSection />
      <FeatureGrid />
      <CTASection/>

    </div>
  );
};

export default Pricing;