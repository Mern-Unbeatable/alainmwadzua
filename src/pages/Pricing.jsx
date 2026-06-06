import React from 'react';
import FeatureGrid from '../components/pricing/FeatureGrid';
import PricingHeaderSection from '../components/pricing/PricingHeaderSection';
import PricingMainSection from '../components/pricing/PricingMainSection';
import CTASection from '../components/CTASection';
import useRevealAnimation from '../hooks/useRevealAnimation';


const Pricing = () => {
  useRevealAnimation();

  return (
    <div className="min-h-screen bg-[#fafbfc]">

      <PricingHeaderSection />
      <PricingMainSection />
      <FeatureGrid />
      <div data-reveal="text" style={{ '--reveal-delay': '120ms' }}>
        <CTASection />
      </div>

    </div>
  );
};

export default Pricing;