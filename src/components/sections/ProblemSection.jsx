import React from 'react';
import SectionHeader from '../layout/SectionHeader';

export default function ProblemSection() {
  const problems = [
    { icon: "💸", stat: "₹25,000+", desc: "Average monthly salary for a basic data entry operator." },
    { icon: "⏳", stat: "14 hours", desc: "Time spent per week by owners on repetitive admin work." },
    { icon: "📉", stat: "68%", desc: "Leads lost because businesses don't reply within 5 minutes." },
    { icon: "😴", stat: "0 days", desc: "AI agents never sleep, take leaves, or ask for increments." }
  ];

  return (
    <section className="py-24 bg-navy">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader 
              align="left"
              eyebrow="The Problem"
              title="Running a small business in India is exhausting."
              subtitle="You didn't start a business to spend all day replying to WhatsApps, filing GST, and managing stock."
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {problems.map((p, i) => (
              <div key={i} className="bg-navy-mid border-l-4 border-red rounded-r-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">{p.icon}</div>
                <div className="text-2xl font-bold text-white mb-2">{p.stat}</div>
                <div className="text-sm text-white/70">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
