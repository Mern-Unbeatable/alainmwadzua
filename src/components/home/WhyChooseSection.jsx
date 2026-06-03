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
    <section className="py-14 sm:py-16 lg:py-20 bg-[#f6f6f6]">
      <div className="container mx-auto px-4">
      
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
              Why Choose Online Class <span className="text-[#9a5a24]">Writers?</span>
            </h2>
            <p className="mt-3 max-w-2xl text-sm sm:text-base leading-7 text-slate-600">
              We deliver academic success without stress. We guarantee A or B,
              or you get a 100% refund.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {BENEFITS.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="relative rounded-2xl border border-white/70 bg-white px-5 pb-6 pt-10 text-center shadow-[0_12px_35px_rgba(15,23,42,0.05)]"
              >
                <span className="absolute left-1/2 top-0 inline-flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 rotate-45 items-center justify-center rounded-xl border border-orange-200 bg-orange-50 text-primary shadow-sm">
                  <span className="-rotate-45">
                    <Icon size={18} />
                  </span>
                </span>

                <h3 className="text-lg font-semibold leading-6 text-slate-800">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
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