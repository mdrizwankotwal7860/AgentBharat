import React from 'react';
import SectionHeader from '../layout/SectionHeader';
import PlanCard from '../pricing/PlanCard';
import { plans } from '../../data/pricing';

export default function PricingPreview() {
  const previewPlans = plans.filter(p => ['starter', 'growth', 'business'].includes(p.id));

  return (
    <section className="py-24 bg-navy-mid border-t border-navy-soft">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeader 
          eyebrow="Simple Pricing"
          title="Pay for software, not salaries."
          subtitle="All plans include a 7-day free trial. No credit card required."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {previewPlans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
