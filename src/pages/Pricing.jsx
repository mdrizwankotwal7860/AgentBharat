import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SectionHeader from '../components/layout/SectionHeader';
import PlanCard from '../components/pricing/PlanCard';
import FeatureRow from '../components/pricing/FeatureRow';
import { plans, features } from '../data/pricing';
import { generalFaqs } from '../data/faqs';

export default function Pricing() {
  return (
    <div className="min-h-screen bg-navy text-white">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeader 
            eyebrow="Pricing"
            title="Simple, Transparent Pricing"
            subtitle="Start with a 7-day free trial. No credit card required. Cancel anytime."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-32">
            {plans.map(plan => (
              <PlanCard key={plan.id} plan={plan} />
            ))}
          </div>

          <SectionHeader 
            title="Compare Features"
            subtitle="See exactly what you get with each plan."
          />
          
          <div className="w-full overflow-x-auto pb-8 mb-24">
            <div className="min-w-[900px]">
              {/* Header Row */}
              <div className="grid grid-cols-6 border-b-2 border-navy-soft pb-4 mb-4">
                <div className="col-span-2 font-bold text-lg pl-4">Features</div>
                <div className="text-center font-bold">Free Trial</div>
                <div className="text-center font-bold">Starter</div>
                <div className="text-center font-bold text-cyan bg-navy-soft py-4 -my-4 rounded-t-lg">Growth</div>
                <div className="text-center font-bold">Business</div>
                <div className="text-center font-bold">Enterprise</div>
              </div>
              
              {/* Feature Rows */}
              {features.map((feat, i) => (
                <FeatureRow key={i} feature={feat} />
              ))}
            </div>
          </div>
          
          <SectionHeader 
            title="Frequently Asked Questions"
          />
          
          <div className="max-w-3xl mx-auto space-y-4">
            {generalFaqs.map((faq, i) => (
              <div key={i} className="bg-navy-mid border border-navy-soft rounded-xl p-6">
                <h4 className="font-bold text-lg mb-2">{faq.question}</h4>
                <p className="text-muted">{faq.answer}</p>
              </div>
            ))}
          </div>
          
        </div>
      </main>
      <Footer />
    </div>
  );
}
