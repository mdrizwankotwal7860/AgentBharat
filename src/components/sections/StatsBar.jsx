import React from 'react';
import StatBox from '../ui/StatBox';
import Marquee from '../ui/Marquee';

export default function StatsBar() {
  const marqueeItems = [
    "$139B SME Market in India",
    "233% YoY AI Growth",
    "6 Crore+ Registered MSMEs",
    "₹999/mo Average Agent Cost",
    "88% ROI in First Month"
  ];

  return (
    <section className="bg-navy-mid border-y border-navy-soft">
      {/* Stats Ticker */}
      <Marquee items={marqueeItems} speed={30} />
      
      {/* Animated Stats Grid */}
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center md:text-left">
          <StatBox value={139} prefix="$" suffix="B" label="Market Size" source="IBEF 2025" />
          <StatBox value={6} suffix="Cr+" label="Indian SMEs" source="Govt Data" />
          <StatBox value={233} suffix="%" label="AI Adoption Growth" source="NASSCOM" />
          <StatBox value={999} prefix="₹" label="Starting Price/Mo" source="AgentBharat" />
        </div>
      </div>
    </section>
  );
}
