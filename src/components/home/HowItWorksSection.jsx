import React, { memo } from "react";
import { Mail, WalletCards, Rocket, CircleCheck } from "lucide-react";

const BACKGROUND_IMAGE = "/howitworks.webp";

const STEPS = [
  {
    title: "Email Your Course Syllabus",
    description:
      "Send us your course syllabus along with any assignment instructions or special requirements.",
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
    <section
      className="relative isolate py-14 sm:py-16 lg:py-20 bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${BACKGROUND_IMAGE})` }}
    >
      <div className="absolute inset-0 -z-10 bg-[#FFFFFFF2]" />

      <div className="relative z-10 container mx-auto px-4 ">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#222222] to-[#FF6600] bg-clip-text text-transparent">
            How It <span>Works</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#545454] leading-relaxed">
            Getting help with your coursework is quick, simple,
            <br className="hidden sm:block" /> and stress-free. Just follow
            these 4 easy steps:
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {STEPS.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="flex flex-col rounded-lg border border-[#00000038] bg-white p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
            >
              <span className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon size={24} strokeWidth={1.5} />
              </span>
              <h3 className="mb-3 text-xl font-bold leading-tight text-slate-900">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
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
