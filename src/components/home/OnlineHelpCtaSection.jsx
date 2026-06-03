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
    <section className="relative isolate overflow-hidden bg-[#0f1d4a] py-12 sm:py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,102,0,0.38),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_28%)]" />

      <div className="container mx-auto px-4">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div className="max-w-xl text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/70">
              Online Class Help
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl lg:text-[3.4rem]">
              Are You Looking to <span className="text-primary">Hire Someone</span> To Take Your Online Class?
            </h2>

            <ul className="mt-6 space-y-3 text-sm font-medium uppercase tracking-wide text-white/85 sm:text-[0.95rem]">
              <li>We can take your online class.</li>
              <li>We take your online tests.</li>
              <li>We take your online exams.</li>
              <li>We take your online quizzes.</li>
            </ul>
          </div>

          <div className="rounded-4xl bg-white p-4 shadow-[0_18px_60px_rgba(15,23,42,0.22)] sm:p-6 lg:p-7">
            <form className="space-y-5">
              <div>
                <p className="text-sm font-semibold text-slate-800">
                  What do you need help with
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {HELP_TOPICS.map((topic, index) => (
                    <button
                      key={topic}
                      type="button"
                      className={`rounded-full border px-3 py-1.5 text-[11px] font-medium transition-colors sm:px-3.5 sm:text-xs ${
                        index === 0
                          ? "border-primary bg-primary text-white"
                          : "border-slate-200 bg-white text-slate-600 hover:border-primary hover:text-primary"
                      }`}
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-800">
                  How soon do you need help?
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {HELP_TIMING.map((item, index) => (
                    <button
                      key={item}
                      type="button"
                      className={`rounded-full border px-3 py-1.5 text-[11px] font-medium transition-colors sm:px-3.5 sm:text-xs ${
                        index === 0
                          ? "border-primary bg-primary text-white"
                          : "border-slate-200 bg-white text-slate-600 hover:border-primary hover:text-primary"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500">
                  What subject or course is this for?
                </label>
                <input
                  type="text"
                  placeholder="subject/course name/course code"
                  className="h-11 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-primary focus:bg-white"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="your name"
                    className="h-11 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-primary focus:bg-white"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="h-11 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-primary focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="your phone number"
                    className="h-11 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-primary focus:bg-white"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Deadline
                  </label>
                  <input
                    type="text"
                    placeholder="when do you need it?"
                    className="h-11 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-primary focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Message / Project details"
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-primary focus:bg-white"
                />
              </div>

              <button
                type="button"
                className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-primary text-sm font-semibold text-white transition-colors hover:opacity-90"
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