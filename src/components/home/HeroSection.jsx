import React, { memo } from "react";
import { ShieldCheck, Zap, CheckCircle } from "lucide-react";

const HERO_BACKGROUND_IMAGE = "/mainHero.webp";
const HERO_RIGHT_IMAGE = "/heroRight.webp";

const HeroSection = memo(() => {
  return (
    <section className="relative isolate overflow-hidden pt-24 sm:pt-28 lg:pt-32">
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-top bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BACKGROUND_IMAGE})` }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center pb-0 sm:pb-0 lg:pb-0">
          <div className="relative z-30 max-w-3xl">
            <p className="inline-flex items-center rounded-full bg-orange-500/10 text-primary px-4 py-2 text-sm font-semibold mb-6">
              Online Class Writers
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-slate-900 leading-[1.05] ">
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
                <ShieldCheck className="w-4 h-4 text-primary" />
                Confidential
              </span>
              <span className="inline-flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary fill-current" />
                Fast Turnaround
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                Reliable Experts
              </span>
            </div>
          </div>

          <div className="relative z-10 flex justify-center lg:justify-end">
            <img
              src={HERO_RIGHT_IMAGE}
              alt="Students holding books"
              className="w-full max-w-140 object-contain drop-shadow-[0_28px_40px_rgba(15,23,42,0.15)]"
            />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-32 bg-gradient-to-t from-white via-white/70 to-transparent sm:h-40 lg:h-48" />
    </section>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;