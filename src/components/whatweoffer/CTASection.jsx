import React from "react";

const CTASection = () => {
  return (
    <section className="py-12 bg-linear-to-r from-white via-orange-50 to-white">
      <div className="container mx-auto px-4">
        <div className="rounded-xl bg-white/95 p-10 text-center shadow-lg">
          <h2 className="text-3xl font-semibold text-slate-900">Ready to Get Started?</h2>
          <p className="mt-2 text-slate-600">Stop stressing over coursework. Let our experts handle it.</p>
          <button className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white">Get Help Now</button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
