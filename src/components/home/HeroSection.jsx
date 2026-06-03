import React, { memo } from "react";

const HERO_BACKGROUND_IMAGE = "/mainHero.webp";
const HERO_RIGHT_IMAGE = "/heroRight.webp";

const HeroSection = memo(() => {
  return (
    <section>
      <div
        className="absolute inset-0 bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BACKGROUND_IMAGE})` }}
        aria-hidden="true"
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-10 sm:py-14 lg:py-16">
        <div className="max-w-3xl">
          <p className="inline-flex items-center rounded-full bg-orange-500/10 text-primary px-4 py-2 text-sm font-semibold mb-6">
            Online Class Writers
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-slate-900 leading-[1.05]">
            Pay Someone to Take My Online Classes For Me
          </h1>

          <div className="mt-5 space-y-2 text-xl sm:text-3xl font-medium text-primary">
            <p>Pay Someone to Take My Online Classes For Me?</p>
            <p>Yes, we can perfectly take your Online Classes.</p>
          </div>

          <p className="mt-5 max-w-xl text-base text-slate-700 leading-8">
            Online Class Writers provides reliable online class help for busy
            students who need help with coursework, homework, projects, exam
            preparation, and academic writing. We are committed to helping
            students succeed by delivering timely, high-quality academic
            assistance.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:opacity-90"
            >
              Get Help Now
              <span aria-hidden="true">→</span>
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-md bg-slate-800 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-700"
            >
              Request a free quote
              <span aria-hidden="true">→</span>
            </button>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-700">
            <span className="inline-flex items-center gap-2">
              <span className="text-primary">▣</span>
              Confidential
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="text-primary">⚡</span>
              Fast Turnaround
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="text-primary">✔</span>
              Reliable Experts
            </span>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <img
            src={HERO_RIGHT_IMAGE}
            alt="Students holding books"
            className="w-full max-w-140 object-contain drop-shadow-[0_28px_40px_rgba(15,23,42,0.15)]"
          />
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;