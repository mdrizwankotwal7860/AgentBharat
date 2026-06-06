import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SectionHeader from '../components/layout/SectionHeader';
import AgentCard from '../components/agents/AgentCard';
import { agents } from '../data/agents';
import { motion } from 'framer-motion';

export default function Agents() {
  const [filter, setFilter] = useState('all');
  
  const categories = ['all', ...new Set(agents.map(a => a.category.toLowerCase()))];
  
  const filteredAgents = filter === 'all' 
    ? agents 
    : agents.filter(a => a.category.toLowerCase() === filter);

  return (
    <div className="min-h-screen bg-navy text-white">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeader 
            eyebrow="Agent Directory"
            title="Explore All 9 AI Agents"
            subtitle="Filter by department to find the perfect AI employee for your business needs."
          />
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(c => (
              <button 
                key={c}
                onClick={() => setFilter(c)}
                className={`px-6 py-2 rounded-full font-semibold capitalize transition-colors ${
                  filter === c 
                    ? 'bg-cyan text-navy' 
                    : 'bg-navy-mid border border-navy-soft text-white hover:border-cyan/50'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAgents.map((agent, i) => (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
              >
                <AgentCard agent={agent} />
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
