import React, { useState, memo } from "react";
import { ChevronLeft } from "lucide-react";

const QUOTE_TOPICS = [
  "Do my online class",
  "Research Paper",
  "Take my proctored exam",
  "Class Project",
  "Take my online test",
  "Academic Essay",
  "Other",
];

const DEADLINES = [
  "Today",
  "24 Hours",
  "2-3 Days",
  "This Week",
  "Flexible Deadline",
];

const CustomQuoteSection = memo(() => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      console.log("Form Submitted!");
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative rounded-lg bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)] border border-slate-100 px-5 py-6 sm:px-8 sm:py-7 min-h-[300px] flex flex-col justify-between">
          
          {step > 1 && (
            <button
              onClick={handleBack}
              className="absolute left-5 top-6 sm:left-8 sm:top-7 flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors"
            >
              <ChevronLeft className="w-4 h-4"  />
              Back
            </button>
          )}

          <div className={step > 1 ? "pt-8 sm:pt-0" : ""}>
            <div className="text-center mt-2 sm:mt-0">
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-800">
                Get Your Free Custom Quote
              </h2>
              <p className="mt-1.5 text-sm text-slate-500">
                Fill out the details below and we&apos;ll get back to you instantly.
              </p>
            </div>

            <div className="mt-8 flex items-center justify-center">
              
              {step === 1 && (
                <div className="flex flex-wrap items-center justify-center gap-2.5">
                  {QUOTE_TOPICS.map((topic) => (
                    <button
                      key={topic}
                      type="button"
                      className="rounded-full border border-primary/60 px-4 py-2 text-sm text-slate-700 hover:bg-primary hover:text-white transition-colors"
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              )}

              {step === 2 && (
                <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-2xl mt-2 pt-4">
                  {DEADLINES.map((time) => (
                    <button
                      key={time}
                      type="button"
                      className="rounded-full border border-primary/60 px-5 py-2 text-sm text-slate-700 hover:bg-primary hover:text-white transition-colors"
                    >
                      {time}
                    </button>
                  ))}
                </div>
              )}

              {step === 3 && (
                <div className="w-full max-w-2xl">
                  <input
                    type="text"
                    placeholder="Subject/course name/course code"
                    className="w-full rounded-full border border-primary/60 px-5 py-3 text-sm text-slate-700 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                  />
                </div>
              )}

              {step === 4 && (
                <div className="w-full max-w-2xl space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full rounded-md border border-primary/60 px-4 py-2.5 text-sm text-slate-700 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                    />
                    <input
                      type="email"
                      placeholder="Email address"
                      className="w-full rounded-md border border-primary/60 px-4 py-2.5 text-sm text-slate-700 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                    />
                  </div>
                  <textarea
                    placeholder="Message/Project details"
                    rows="4"
                    className="w-full resize-none rounded-md border border-primary/60 px-4 py-3 text-sm text-slate-700 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                  ></textarea>
                </div>
              )}

            </div>
          </div>

          <div className="mt-10 flex items-center justify-between gap-3">
            <p className="text-sm font-medium text-slate-600">
              Step {step} of 4
            </p>
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-opacity"
            >
              {step === 4 ? "Submit" : "Next"}
              <span aria-hidden="true">→</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
});

CustomQuoteSection.displayName = "CustomQuoteSection";

export default CustomQuoteSection;