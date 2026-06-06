import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SectionHeader from '../components/layout/SectionHeader';

export default function About() {
  return (
    <div className="min-h-screen bg-navy text-white flex flex-col">
      <Navbar />
      <main className="pt-32 pb-24 flex-grow">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeader 
            eyebrow="Our Mission"
            title="Empowering the backbone of India."
            subtitle="We believe every small business in India deserves the same technology as big enterprises, at a fraction of the cost."
          />
          <div className="max-w-3xl mx-auto space-y-8 text-lg text-white/80 text-center">
            <p>
              AgentBharat was born out of a simple observation: Small business owners in India work too hard on things that don't matter. You spend hours filing taxes, answering the same WhatsApp queries, and tracking inventory.
            </p>
            <p>
              We built 9 specialized AI agents to take over these repetitive tasks. They work 24/7, don't take leaves, and speak 12 Indian languages.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
