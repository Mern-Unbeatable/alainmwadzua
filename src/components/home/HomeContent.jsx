import React, { memo, useEffect } from "react";
import HeroSection from "./HeroSection";
import OnlineHelpCtaSection from "./OnlineHelpCtaSection";
import CustomQuoteSection from "./CustomQuoteSection";
import WhyChooseSection from "./WhyChooseSection";
import ServicesSection from "./ServicesSection";
import ExpertTutorsSection from "./ExpertTutorsSection";
import DisclaimerSection from "./DisclaimerSection";
import HowItWorksSection from "./HowItWorksSection";

const HomeContent = memo(() => {
  useEffect(() => {
    const revealElements = document.querySelectorAll("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -40px 0px" },
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <HeroSection />

      <CustomQuoteSection />

      <HowItWorksSection />

      <WhyChooseSection />

      <OnlineHelpCtaSection />

      <ServicesSection />

      <ExpertTutorsSection />

      <DisclaimerSection />
    </>
  );
});

HomeContent.displayName = "HomeContent";

export default HomeContent;
