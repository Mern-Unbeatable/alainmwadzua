import React, { useEffect } from "react";
import AboutHeroSection from "../components/about/AboutHeroSection";
import AboutStorySection from "../components/about/AboutStorySection";
import AboutFeaturesSection from "../components/about/AboutFeaturesSection";
import StudentPromiseSection from "../components/about/StudentPromiseSection";
import CTASection from "../components/CTASection";

const About = () => {
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
    <div className="w-full bg-white">
      <AboutHeroSection />
      <div data-reveal="text" style={{ "--reveal-delay": "40ms" }}>
        <AboutStorySection />
      </div>
      <div data-reveal="text" style={{ "--reveal-delay": "90ms" }}>
        <AboutFeaturesSection />
      </div>
      <div data-reveal="card" style={{ "--reveal-delay": "120ms" }}>
        <StudentPromiseSection />
      </div>
      <div data-reveal="text" style={{ "--reveal-delay": "150ms" }}>
        <CTASection
          title="Get Help"
          description="Our goal is to help busy students get reliable, confidential online class help
so they can save time, reduce stress, and achieve better grades."
          buttonText="Partner With Us Today"
        />
      </div>
    </div>
  );
};

export default About;
