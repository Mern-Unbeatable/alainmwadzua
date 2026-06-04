import React, { memo } from "react";

const QUOTE_TOPICS = [
  "Do my online class",
  "Research Paper",
  "Take my proctored exam",
  "Class Project",
  "Take my online test",
  "Academic Essay",
  "Other",
];

const CustomQuoteSection = memo(() => {
  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-white border ">
      <div className="mx-auto container rounded-lg bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)] border border-slate-100 px-5 py-6 sm:px-8 sm:py-7">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-800">
            Get Your Free Custom Quote
          </h2>
          <p className="mt-1.5 text-sm text-slate-500">
            Fill out the details below and we&apos;ll get back to you instantly.
          </p>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
          {QUOTE_TOPICS.map((topic) => (
            <button
              key={topic}
              type="button"
              className="rounded-full border border-primary/70 px-4 py-2 text-xs sm:text-sm text-slate-700 hover:bg-primary hover:text-white transition-colors"
            >
              {topic}
            </button>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between gap-3">
          <p className="text-sm text-slate-500">Step 1 of 4</p>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2 text-sm font-medium text-white hover:opacity-90 transition-opacity"
          >
            Next
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  );
});

CustomQuoteSection.displayName = "CustomQuoteSection";

export default CustomQuoteSection;