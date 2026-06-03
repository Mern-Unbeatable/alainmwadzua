import React, { memo } from "react";
import { Mail, WalletCards, Rocket, CircleCheck } from "lucide-react";

const STEPS = [
  {
    title: "Email Your Course Syllabus",
    description:
      "Send us your course syllabus along with assignment instructions or special requirements.",
    icon: Mail,
  },
  {
    title: "Receive Your Quote",
    description:
      "To get started, simply pay a small upfront deposit using our secure payment methods.",
    icon: WalletCards,
  },
  {
    title: "Pay a Small Deposit",
    description:
      "Once your deposit is confirmed, our team will begin working on your assignments right away.",
    icon: Rocket,
  },
  {
    title: "We Start Immediately",
    description:
      "Our team will review your class details and send you a customized quote with flexible payment options.",
    icon: CircleCheck,
  },
];

const HowItWorksSection = memo(() => {
  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="pointer-events-none absolute inset-0 " />

        <div className="relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">
            How It Works
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Getting help with your coursework is quick, simple, and stress-free.
            Just follow these 4 easy steps:
          </p>
        </div>

        <div className="relative z-10 mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {STEPS.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="rounded-xl border border-slate-200/80 bg-white/95 p-4 sm:p-5 shadow-sm"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon size={18} />
              </span>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-slate-800">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
});

HowItWorksSection.displayName = "HowItWorksSection";

export default HowItWorksSection;