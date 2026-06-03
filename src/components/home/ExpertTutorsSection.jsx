import React, { memo } from "react";
import { Award, BookOpen, CheckCircle, Clock } from "lucide-react";

const IMAGES = [
  "/tutors/tutor1.jpg",
  "/tutors/tutor2.jpg",
  "/tutors/tutor3.jpg",
  "/tutors/tutor4.jpg",
  "/tutors/tutor5.jpg",
  "/tutors/tutor6.jpg",
];

const ExpertTutorsSection = memo(() => {
  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">
              Expert Tutors Across All Major Disciplines
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Whether you&apos;re struggling with advanced calculus, nursing
              prerequisites, or extensive research papers in history or
              Management, our team of degree-holding specialists is prepared to
              step in. We will perfectly take your Class and get you A–Grades!
            </p>

            <ul className="mt-6 space-y-2 text-sm text-slate-700">
              <li>• Discussion Posts & Replies</li>
              <li>• Full Semester Class Management</li>
              <li>• Homework & Assignments</li>
              <li>• Midterms & Final Exams</li>
            </ul>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm">
                <Award size={16} className="text-primary" /> Exams, Essays & Papers
              </div>
              <div className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm">
                <BookOpen size={16} className="text-primary" /> Entire Online Classes
              </div>
              <div className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm">
                <CheckCircle size={16} className="text-primary" /> Top Grades – A or B
              </div>
              <div className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm">
                <Clock size={16} className="text-primary" /> Fast Delivery
              </div>
            </div>

            <button className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white">
              View All Subjects
            </button>
          </div>

          <div className="flex justify-end">
            <div className="grid grid-cols-1 gap-4">
              <img src={IMAGES[0]} alt="tutor" className="h-40 w-40 rounded-xl object-cover shadow-md" />
              <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-1">
                <img src={IMAGES[1]} alt="tutor" className="h-28 w-28 rounded-xl object-cover shadow-md" />
                <img src={IMAGES[2]} alt="tutor" className="h-28 w-28 rounded-xl object-cover shadow-md" />
              </div>
            </div>

            <div className="ml-4 grid gap-4">
              <img src={IMAGES[3]} alt="tutor" className="h-28 w-28 rounded-xl object-cover shadow-md" />
              <img src={IMAGES[4]} alt="tutor" className="h-28 w-28 rounded-xl object-cover shadow-md" />
              <img src={IMAGES[5]} alt="tutor" className="h-40 w-40 rounded-xl object-cover shadow-md" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

ExpertTutorsSection.displayName = "ExpertTutorsSection";

export default ExpertTutorsSection;