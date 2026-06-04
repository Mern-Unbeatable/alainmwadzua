import React, { memo } from "react";

const HELP_TOPICS = [
  "Do my online class",
  "Take my Proctored Exam",
  "Research Paper",
  "Take my Online Test",
  "Academic Essay",
  "Class Project",
  "Other",
];

const HELP_TIMING = [
  "Today",
  "24 hours",
  "2-3 days",
  "This Week",
  "Flexible Academy",
];

const OnlineHelpCtaSection = memo(() => {
  return (
    <section className="relative isolate overflow-hidden bg-[#0F1C3F] py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute left-0 top-0 h-[600px] w-[700px] -translate-x-1/3 -translate-y-1/3 bg-[radial-gradient(circle_closest-side,rgba(255,102,0,0.55),transparent)]" />

      <div className="container relative z-10 mx-auto px-4 ">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div className="max-w-xl text-white">
            <h2 className="text-4xl font-bold leading-[1.35] tracking-tight sm:text-5xl lg:text-[44px]">
              Are You Looking to{" "}
              <span className="text-primary">Hire Someone</span> To Take Your Online Class?
            </h2>

            <ul className="mt-8 space-y-2 pl-5 text-sm sm:text-[15px] font-medium text-white/90 list-disc marker:text-white">
              <li className="uppercase tracking-wide">WE CAN TAKE YOUR ONLINE CLASS!</li>
              <li>We Take Your Online Tests!</li>
              <li>We Take Your Online Exams!</li>
              <li>We Take Your Online Quizzes!</li>
            </ul>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-2xl sm:p-8 lg:p-10">
            <form className="space-y-6">
              <div>
                <p className="mb-3 text-base font-medium text-slate-800">
                  What do you need help with
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {HELP_TOPICS.map((topic, index) => (
                    <button
                      key={topic}
                      type="button"
                      className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors sm:px-5 sm:text-[13px] ${
                        index === 0
                          ? "border-primary bg-primary text-white"
                          : "border-slate-200 bg-white text-slate-500 hover:border-primary hover:text-primary"
                      }`}
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-3 text-base font-medium text-slate-800">
                  How soon do you need help?
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {HELP_TIMING.map((item, index) => (
                    <button
                      key={item}
                      type="button"
                      className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors sm:px-5 sm:text-[13px] ${
                        index === 0
                          ? "border-primary bg-primary text-white"
                          : "border-slate-200 bg-white text-slate-500 hover:border-primary hover:text-primary"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-base text-[#0F1C3F]">
                  What subject or course is this for?
                </label>
                <input
                  type="text"
                  placeholder="subject/course name/course code"
                  className="h-11 w-full rounded-md border border-slate-200 bg-[#F9FAFB] px-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#FF6600] focus:bg-white"
                />
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-base uppercase  text-[#0F1C3F]">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="your name"
                    className="h-11 w-full rounded-md border border-slate-200 bg-[#F9FAFB] px-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#FF6600] focus:bg-white"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-base uppercase  text-[#0F1C3F]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="h-11 w-full rounded-md border border-slate-200 bg-[#F9FAFB] px-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#FF6600] focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-base uppercase  text-[#0F1C3F]">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="your phone number"
                  className="h-11 w-full rounded-md border border-slate-200 bg-[#F9FAFB] px-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#FF6600] focus:bg-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-base uppercase  text-[#0F1C3F]">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Message/Project details"
                  className="w-full resize-none rounded-md border border-slate-200 bg-[#F9FAFB] px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#FF6600] focus:bg-white"
                />
              </div>

              <button
                type="button"
                className="inline-flex py-4 w-full items-center justify-center rounded-md bg-primary text-sm text-white transition-opacity hover:opacity-90"
              >
                Get My Free Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
});

OnlineHelpCtaSection.displayName = "OnlineHelpCtaSection";

export default OnlineHelpCtaSection;