import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import StatsBar from '../components/sections/StatsBar';
import ProblemSection from '../components/sections/ProblemSection';
import AgentShowcase from '../components/sections/AgentShowcase';
import PricingPreview from '../components/sections/PricingPreview';

export default function Home() {
  return (
    <div className="min-h-screen bg-navy text-white">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <ProblemSection />
        <AgentShowcase />
        <PricingPreview />
      </main>
      <Footer />
    </div>
  );
}
