import React, { memo } from "react";
import { AlertTriangle } from "lucide-react";

const DisclaimerSection = memo(() => {
  return (
    <section className="pb-14 sm:pb-16 lg:pb-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-7xl rounded-lg bg-[#FBEEE1] border border-orange-100 p-5 sm:p-6">
          <div className="flex items-start gap-4">
            <div className="max-w-3xl">
              <h3 className="text-lg font-semibold text-slate-800 inline-flex items-center gap-2">
                <AlertTriangle size={20} className="text-primary" />
                Disclaimer
              </h3>
              <p className="mt-1 text-base text-slate-600">
              The services provided by Online Class Writers are intended solely for research,
study, and reference purposes to support your learning journey...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

DisclaimerSection.displayName = "DisclaimerSection";

export default DisclaimerSection;
