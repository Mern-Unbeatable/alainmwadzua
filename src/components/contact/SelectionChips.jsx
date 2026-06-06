import React from 'react';

const SelectionChips = ({ title, items, selectedValue, onSelect, delay = 0 }) => {
  return (
    <div data-reveal="text" style={{ '--reveal-delay': `${delay}ms` }}>
      <h3 className="text-2xl font-bold text-[#1a2b4c] mb-4">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => onSelect(item)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors border ${
              selectedValue === item
                ? 'bg-[#FF6B00] text-white border-[#FF6B00]'
                : 'bg-white text-gray-600 border-gray-300 hover:border-gray-400'
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectionChips;