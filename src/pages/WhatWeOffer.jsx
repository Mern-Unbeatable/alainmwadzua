import React from "react";
import WhatWeOfferHeader from "../components/whatweoffer/WhatWeOfferHeader";
import GridCards from "../components/whatweoffer/GridCards";
import CTASection from "../components/CTASection";

const OFFER_ITEMS = [
  { title: "Complete Online Class Help", subtitle: "Full Course Support" },
  { title: "Exam Preparation", subtitle: "Test Taking Services" },
  { title: "Assignment Help", subtitle: "All Academic Levels" },
];

const GRID_CARDS = [
  { title: "Complete Online Class Help", desc: "Say no more to tackle whole online classes. We handle discussions, assignments, quizzes, even tests." , variant: 'light'},
  { title: "Exam Preparation & Test Taking", desc: "Need help revising or understand a test format. Get exam prep support.", variant: 'dark'},
  { title: "Homework & Assignment Help", desc: "We handle coursework and assignment help of all kinds.", variant: 'accent'},
  { title: "Project & Essay Writing Help", desc: "Coursework, case study projects and essays — we cover it.", variant: 'light'},
];

const WhatWeOffer = () => {
  return (
    <div className="bg-white">
      <WhatWeOfferHeader offerItems={OFFER_ITEMS} />
      <GridCards gridCards={GRID_CARDS} />
      <CTASection
        title="Ready to Get Started?"
        description="Stop stressing over coursework. Let our experts handle it."
        buttonText="Get Help Now"
        image="/cta.webp"
      />
    </div>
  );
};

export default WhatWeOffer;
