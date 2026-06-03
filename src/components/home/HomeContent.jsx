import React, { memo } from "react";
import HeroSection from "./HeroSection";
import CustomQuoteSection from "./CustomQuoteSection";
import HowItWorksSection from "./HowItWorksSection";

const HomeContent = memo(() => {
  return (
    <>
      <HeroSection />
      <CustomQuoteSection />
      <HowItWorksSection />
    </>
  );
});

HomeContent.displayName = "HomeContent";

export default HomeContent;
