import React from 'react';

export default function Marquee({ items, speed = 20 }) {
  return (
    <div className="w-full overflow-hidden whitespace-nowrap bg-navy-mid border-y border-navy-soft py-4 flex items-center">
      <div 
        className="inline-flex animate-marquee items-center gap-16 px-8"
        style={{ animationDuration: `${speed}s` }}
      >
        {items.map((item, i) => (
          <span key={`a-${i}`} className="text-xl font-bold text-white/80 shrink-0">
            {item}
          </span>
        ))}
        {/* Duplicate for seamless loop */}
        {items.map((item, i) => (
          <span key={`b-${i}`} className="text-xl font-bold text-white/80 shrink-0">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
