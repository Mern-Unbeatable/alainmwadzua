import React, { memo } from "react";
import {
  BadgeCheck,
  Gift,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  BadgeDollarSign,
  Lock,
  MessageCircleMore,
  Clock3,
} from "lucide-react";

const BENEFITS = [
  {
    title: "Money Back Guarantee",
    description:
      "We stand by our quality. If we don’t meet our promises, you’re protected by our hassle-free money-back guarantee.",
    icon: ShieldCheck,
  },
  {
    title: "Free Unlimited Revisions",
    description:
      "Need changes? We offer unlimited revisions at no extra cost until your assignment is absolutely perfect.",
    icon: RotateCcw,
  },
  {
    title: "A OR B or its 100% Refund",
    description:
      "We strictly guarantee an A or B grade for your class, or you get a full 100% refund of your money.",
    icon: BadgeCheck,
  },
  {
    title: "Free Plagiarism & AI Report",
    description:
      "Every paper comes with complimentary detailed Turnitin plagiarism and AI detection reports for peace of mind.",
    icon: Sparkles,
  },
  {
    title: "100% Success Guarantee",
    description:
      "With thousands of completed classes, our proven experts ensure your academic goals are met successfully.",
    icon: Gift,
  },
  {
    title: "Affordable Pricing",
    description:
      "Premium academic assistance structured around student budgets with flexible payment options available.",
    icon: BadgeDollarSign,
  },
  {
    title: "Secure Domestic Access",
    description:
      "We use safe, U.S.-based access methods to help keep your online class help request private, consistent, and confidential.",
    icon: Lock,
  },
  {
    title: "Good communication",
    description:
      "We maintain open lines of communication to keep you updated on your class progress and answer any questions promptly.",
    icon: MessageCircleMore,
  },
  {
    title: "Zero Deadlines Missed",
    description:
      "Every submission is done at least 2 days before the actual deadline, sometimes even earlier.",
    icon: Clock3,
  },
];

const WhyChooseSection = memo(() => {
  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-[#FAFAFA]">
      <div className="container mx-auto px-4 l">
        <div className="max-w-3xl mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#222222] to-[#FF6600] bg-clip-text text-transparent">
            Why Choose <span>Online Class Writers?</span>
          </h2>
          <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-600">
            We deliver academic success without stress. We guarantee A or B, or
            you get a 100% Refund.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14 sm:gap-y-16">
          {BENEFITS.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="relative rounded-lg border border-slate-100 bg-white px-6 pb-8 pt-12 text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
            >
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                <div className="relative flex h-16 w-16 items-center justify-center">
                  <div className="absolute -translate-y-2 h-10.5 w-10.5 rotate-45 rounded-sm border-[1.5px] border-orange-300"></div>
                  <div className="absolute translate-y-1 z-10 flex h-10.5 w-10.5 rotate-45 items-center justify-center rounded-sm bg-[#FFDCC3]">
                    <Icon
                      size={20}
                      className="-rotate-45 text-[#F97316]"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-bold leading-tight text-slate-800">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-500">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
});

WhyChooseSection.displayName = "WhyChooseSection";

export default WhyChooseSection;
