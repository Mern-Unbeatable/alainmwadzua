import React, { memo } from "react";
import { AlertTriangle } from "lucide-react";

const DisclaimerSection = memo(() => {
  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl rounded-lg bg-orange-50/80 border border-orange-100 p-5 sm:p-6">
          <div className="flex items-start gap-4">
            <div className="shrink-0 mt-1">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-orange-100 text-orange-600">
                <AlertTriangle size={18} />
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-800">Disclaimer</h3>
              <p className="mt-2 text-sm text-slate-600">
                The services provided by Online Class Writers are intended solely for research,
                study, and reference purposes to support your learning journey. Use responsibly
                and consult your institution's policies before submitting any work.
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