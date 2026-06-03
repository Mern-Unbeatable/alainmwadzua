import React, { memo } from "react";
import HeroSection from "./HeroSection";
import OnlineHelpCtaSection from "./OnlineHelpCtaSection";
import CustomQuoteSection from "./CustomQuoteSection";
import WhyChooseSection from "./WhyChooseSection";
import ServicesSection from "./ServicesSection";
import ExpertTutorsSection from "./ExpertTutorsSection";
import HowItWorksSection from "./HowItWorksSection";

const HomeContent = memo(() => {
  return (
    <>
      <HeroSection />
      <CustomQuoteSection />
      <HowItWorksSection />
      <WhyChooseSection />
      <OnlineHelpCtaSection />
      <ServicesSection />
         <ExpertTutorsSection />
    </>
  );
});

HomeContent.displayName = "HomeContent";

export default HomeContent;
