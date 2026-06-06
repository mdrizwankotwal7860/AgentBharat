import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

export default function PlanCard({ plan }) {
  return (
    <motion.div 
      whileHover={{ y: -4 }}
      className={`relative flex flex-col h-full rounded-2xl p-8 border ${
        plan.highlighted 
          ? 'bg-navy-soft border-cyan shadow-[0_0_40px_rgba(0,229,255,0.15)]' 
          : 'bg-navy-mid border-navy-soft hover:border-cyan/30'
      } transition-all duration-300`}
    >
      {plan.badge && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-amber text-navy text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
            {plan.badge}
          </span>
        </div>
      )}
      
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
        <div className="flex items-baseline gap-1 mb-2">
          <span className="text-4xl font-extrabold">{plan.price}</span>
          {plan.period && <span className="text-muted">{plan.period}</span>}
        </div>
        <p className="text-cyan font-mono text-sm">{plan.agents}</p>
      </div>
      
      <p className="text-muted text-sm mb-8 flex-grow">{plan.idealFor}</p>
      
      <div className="mb-8 space-y-3">
        {plan.features.map((feature, i) => (
          <div key={i} className="flex items-start gap-3 text-sm text-white/90">
            <span className="text-green shrink-0">✓</span>
            <span>{feature}</span>
          </div>
        ))}
      </div>
      
      <div className="mt-auto pt-6">
        <Link to="/trial" className="block w-full">
          <Button 
            variant={plan.highlighted ? 'primary' : 'secondary'} 
            className="w-full justify-center"
          >
            Start {plan.trialDays}-Day Free Trial
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}
