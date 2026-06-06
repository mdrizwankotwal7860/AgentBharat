import React from 'react';
import SectionHeader from '../layout/SectionHeader';
import AgentCard from '../agents/AgentCard';
import { agents } from '../../data/agents';
import { motion } from 'framer-motion';

export default function AgentShowcase() {
  return (
    <section className="py-24 bg-navy">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeader 
          eyebrow="The Workforce"
          title="Meet Your New AI Employees"
          subtitle="9 specialized agents ready to take over your repetitive tasks. Hire one, or hire them all."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent, i) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="h-full"
            >
              <AgentCard agent={agent} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
