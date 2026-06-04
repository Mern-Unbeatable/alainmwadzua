import React from "react";
import { ArrowRight } from "lucide-react";

const GridCards = ({ gridCards }) => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {gridCards.map((card) => (
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
  );
};

export default GridCards;
