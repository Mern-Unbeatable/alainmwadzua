import React, { memo } from "react";
import { BookOpen, GraduationCap, Star, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../config";

const RIGHT_SIDE_IMAGE = "/expertise.webp";

const ExpertTutorsSection = memo(() => {
  return (
    <section className="pb-14 sm:pb-16 lg:pb-20 bg-white">
      <div className="container mx-auto px-4 ">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-slate-900 leading-[1.2]">
              Expert Tutors Across All Major Disciplines
            </h2>

            <p className="mt-5 text-base text-slate-600 leading-relaxed">
              Whether you&apos;re struggling with advanced calculus, nursing
              prerequisites, or extensive research papers in history or
              Management, our team of degree- holding specialists is prepared to
              step in. We will perfectly take your Class and get you A-Grades!
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Discussion Posts & Replies",
                "Full Semester Class Management",
                "Homework & Assignments",
                "Midterms & Final Exams",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-base font-semibold text-slate-800"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-800 shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
                <BookOpen
                  size={20}
                  strokeWidth={1.5}
                  className="text-primary shrink-0"
                />
                <span className="text-sm font-semibold text-slate-700 leading-tight">
                  Exams, Essays &<br />
                  Papers
                </span>
              </div>

              <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
                <GraduationCap
                  size={20}
                  strokeWidth={1.5}
                  className="text-primary shrink-0"
                />
                <span className="text-sm font-semibold text-slate-700 leading-tight">
                  Entire Online
                  <br />
                  Classes
                </span>
              </div>

              <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
                <Star
                  size={20}
                  strokeWidth={1.5}
                  className="text-primary shrink-0"
                />
                <span className="text-sm font-semibold text-slate-700 leading-tight">
                  Top Grades-
                  <br />A or B
                </span>
              </div>

              <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
                <Zap
                  size={20}
                  strokeWidth={1.5}
                  className="text-primary shrink-0"
                />
                <span className="text-sm font-semibold text-slate-700 leading-tight">
                  Fast
                  <br />
                  Delivery
                </span>
              </div>
            </div>

            <Link
              to={ROUTES.SUBJECTS}
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
            >
              View All Subjects
              <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src={RIGHT_SIDE_IMAGE}
              alt="Expert Tutors Grid"
              className="w-full max-w-[550px] object-contain drop-shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
});

ExpertTutorsSection.displayName = "ExpertTutorsSection";

export default ExpertTutorsSection;
