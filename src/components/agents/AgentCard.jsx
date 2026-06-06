import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Badge from '../ui/Badge';
import StatusDot from '../ui/StatusDot';

export default function AgentCard({ agent }) {
  return (
    <motion.div 
      whileHover={{ y: -4 }}
      className="group flex flex-col h-full bg-navy-soft border border-navy-soft rounded-2xl p-6 transition-all duration-300 hover:border-cyan/50 hover:shadow-[0_8px_30px_rgba(0,229,255,0.1)]"
    >
      <div className="flex justify-between items-start mb-6">
        <div className="w-16 h-16 rounded-xl bg-navy-mid flex items-center justify-center text-3xl shadow-inner border border-white/5">
          {agent.icon}
        </div>
        <StatusDot status="active" />
      </div>
      
      <div className="mb-4">
        <h3 className="text-2xl font-bold mb-1 group-hover:text-cyan transition-colors">{agent.name}</h3>
        <p className="text-sm font-mono text-amber">{agent.role}</p>
      </div>
      
      <p className="text-muted text-sm mb-6 flex-grow">{agent.description}</p>
      
      <div className="mb-6 space-y-2">
        {agent.tasks.slice(0, 3).map((task, i) => (
          <div key={i} className="flex items-start gap-2 text-sm text-white/80">
            <span className="text-green mt-0.5">✓</span>
            <span>{task}</span>
          </div>
        ))}
      </div>
      
      <div className="pt-6 border-t border-navy-mid mt-auto">
        <Link to={`/agents/${agent.id}`} className="block w-full text-center py-3 rounded-lg bg-navy hover:bg-navy-mid border border-cyan/20 text-cyan font-semibold transition-colors cursor-pointer">
          View Details →
        </Link>
      </div>
    </motion.div>
  );
}
