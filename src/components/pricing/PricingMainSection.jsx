import React from 'react';
import QuoteForm from './QuoteForm';
import TrustSidebar from './TrustSidebar';

const PricingMainSection = () => {
  return (
    <main className= "container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 pb-20">
      <div
        className="lg:col-span-7"
        data-reveal="card"
        style={{ '--reveal-delay': '70ms' }}
      >
        <QuoteForm />
      </div>

      <div
        className="lg:col-span-5"
        data-reveal="card"
        style={{ '--reveal-delay': '130ms' }}
      >
        <TrustSidebar />
      </div>
    </main>
  );
};

export default PricingMainSection;