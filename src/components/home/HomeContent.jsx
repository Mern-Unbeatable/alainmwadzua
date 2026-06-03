import React, { memo } from "react";
import HeroSection from "./HeroSection";
import CustomQuoteSection from "./CustomQuoteSection";

const HomeContent = memo(() => {
  return (
    <>
      <HeroSection />
      <CustomQuoteSection />
    </>
  );
});

HomeContent.displayName = "HomeContent";

export default HomeContent;
