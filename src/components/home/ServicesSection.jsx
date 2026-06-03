import React, { memo } from "react";
import { BookOpen, FileText, FileDigit, ClipboardList, Search, Layers, CheckCircle, FileSignature, ClipboardCheck } from "lucide-react";

const SERVICES = [
  { title: "Take My Online Classes", icon: BookOpen },
  { title: "Essay Writing", icon: FileText },
  { title: "Dissertation", icon: FileDigit },
  { title: "Coursework", icon: ClipboardList },
  { title: "Research Proposal", icon: Search },
  { title: "PhD Thesis", icon: Layers },
  { title: "Proofreading", icon: CheckCircle },
  { title: "Literature Review", icon: FileSignature },
  { title: "Do My Assignment", icon: ClipboardCheck },
];

const ServicesSection = memo(() => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-800">Services We Offer</h2>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map(({ title, icon: Icon }) => (
            <div key={title} className="rounded-lg border border-slate-100 bg-orange-50/40 p-6 text-center">
              <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-orange-50 text-primary">
                <Icon size={20} />
              </div>
              <p className="mt-3 text-sm font-medium text-slate-800">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

ServicesSection.displayName = "ServicesSection";

export default ServicesSection;