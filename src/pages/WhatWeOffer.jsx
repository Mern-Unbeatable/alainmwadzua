import React from "react";
import { ArrowRight } from "lucide-react";

const OFFER_ITEMS = [
  { title: "Complete Online Class Help", subtitle: "Full Course Support" },
  { title: "Exam Preparation", subtitle: "Test Taking Services" },
  { title: "Assignment Help", subtitle: "All Academic Levels" },
];

const GRID_CARDS = [
  { title: "Complete Online Class Help", desc: "Say no more to tackle whole online classes. We handle discussions, assignments, quizzes, even tests." , variant: 'light'},
  { title: "Exam Preparation & Test Taking", desc: "Need help revising or understand a test format. Get exam prep support.", variant: 'dark'},
  { title: "Homework & Assignment Help", desc: "We handle coursework and assignment help of all kinds.", variant: 'accent'},
  { title: "Project & Essay Writing Help", desc: "Coursework, case study projects and essays — we cover it.", variant: 'light'},
];

const WhatWeOffer = () => {
  return (
    <div className="bg-white">
      <header className="pt-12 pb-10">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 items-center lg:grid-cols-2">
            <div>
              <span className="inline-block rounded-full bg-orange-50 px-3 py-1 text-sm font-medium text-orange-600">Academic Excellence</span>
              <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900">Academic Services <span className="text-primary">We Offer</span></h1>
              <p className="mt-4 max-w-xl text-slate-600">From complete online class help, exam preparation help and test taking services, homework and assignment help to project and essay writing help, we do it all! A lot more than you might think.</p>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <button className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white">
                  Get Help
                  <ArrowRight size={14} />
                </button>
                <div className="flex items-center gap-3">
                  {OFFER_ITEMS.map((it) => (
                    <div key={it.title} className="rounded-lg border border-slate-100 bg-white px-4 py-3 shadow-sm flex-1">
                      <p className="text-sm font-semibold text-slate-800">{it.title}</p>
                      <p className="mt-1 text-xs text-slate-500">{it.subtitle}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative flex justify-end">
              <div className="w-full max-w-md">
                <div className="rounded-2xl bg-slate-900 p-6 shadow-2xl">
                  {OFFER_ITEMS.map((item, idx) => (
                    <div key={item.title} className="mb-3 rounded-lg bg-slate-800/60 p-3">
                      <p className="text-sm font-semibold text-orange-200">{item.title}</p>
                      <p className="mt-1 text-xs text-slate-300">{item.subtitle}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {GRID_CARDS.map((card) => (
              <article key={card.title} className={`rounded-xl p-6 shadow-sm border ${card.variant === 'dark' ? 'bg-slate-900 text-white border-transparent' : card.variant === 'accent' ? 'bg-orange-50 text-slate-800 border-transparent' : 'bg-white text-slate-800 border-slate-100'}`}>
                <h3 className="font-semibold text-lg">{card.title}</h3>
                <p className="mt-2 text-sm">{card.desc}</p>
                <button className={`mt-4 inline-flex items-center gap-2 text-sm font-medium ${card.variant === 'dark' ? 'text-orange-300' : 'text-primary'}`}>
                  Get Help <ArrowRight size={14} />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-linear-to-r from-white via-orange-50 to-white">
        <div className="container mx-auto px-4">
          <div className="rounded-xl bg-white/95 p-10 text-center shadow-lg">
            <h2 className="text-3xl font-semibold text-slate-900">Ready to Get Started?</h2>
            <p className="mt-2 text-slate-600">Stop stressing over coursework. Let our experts handle it.</p>
            <button className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white">Get Help Now</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeOffer;
