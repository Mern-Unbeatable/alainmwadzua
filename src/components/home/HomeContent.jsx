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
      <div data-reveal="text" style={{ "--reveal-delay": "40ms" }}>
        <CustomQuoteSection />
      </div>
      <div data-reveal="text" style={{ "--reveal-delay": "90ms" }}>
        <HowItWorksSection />
      </div>
      <div data-reveal="text" style={{ "--reveal-delay": "120ms" }}>
        <WhyChooseSection />
      </div>
      <div data-reveal="card" style={{ "--reveal-delay": "150ms" }}>
        <OnlineHelpCtaSection />
      </div>
      <div data-reveal="text" style={{ "--reveal-delay": "180ms" }}>
        <ServicesSection />
      </div>
      <div data-reveal="text" style={{ "--reveal-delay": "220ms" }}>
        <ExpertTutorsSection />
      </div>
      <div data-reveal="card" style={{ "--reveal-delay": "250ms" }}>
        <DisclaimerSection />
      </div>
    </>
  );
});

HomeContent.displayName = "HomeContent";

export default HomeContent;
