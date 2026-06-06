import React from 'react';
import QuoteForm from './QuoteForm';
import TrustSidebar from './TrustSidebar';

const PricingMainSection = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 pb-20">
      <div className="lg:col-span-8">
        <QuoteForm />
      </div>

      <div className="lg:col-span-4">
        <TrustSidebar />
      </div>
    </main>
  );
};

export default PricingMainSection;