import React from 'react';
import QuoteForm from '../components/pricing/QuoteForm';
import TrustSidebar from '../components/pricing/TrustSidebar';
import FeatureGrid from '../components/pricing/FeatureGrid';


const Pricing = () => {
  return (
    <div className="min-h-screen bg-[#fafbfc]">
      
      {/* Header Section */}
      <header className="text-center pt-20 pb-12 px-4 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-[42px] font-extrabold text-gray-900 mb-4 tracking-tight">
          Get a Fast, Personalized Quote
        </h1>
        <p className="text-gray-500 text-[15px] max-w-2xl mx-auto">
          Every assignment is unique. We provide custom pricing to ensure you get the best value for your specific academic needs.
        </p>
      </header>

      {/* Main Content (Form & Sidebar) */}
      <main className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 pb-20">
        
        {/* Left Side: Form (Takes up 8 columns on large screens) */}
        <div className="lg:col-span-8">
          <QuoteForm />
        </div>

        {/* Right Side: Sidebar (Takes up 4 columns on large screens) */}
        <div className="lg:col-span-4">
          <TrustSidebar />
        </div>

      </main>

      {/* Bottom Features Grid */}
      <FeatureGrid />

    </div>
  );
};

export default Pricing;