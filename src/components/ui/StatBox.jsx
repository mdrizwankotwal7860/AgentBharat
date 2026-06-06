import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import useCountUp from '../../hooks/useCountUp';

export default function StatBox({ value, prefix = '', suffix = '', label, source }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const count = useCountUp(value, 2000, 0, isInView);

  return (
    <div ref={ref} className="flex flex-col">
      <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">
        {prefix}{count}{suffix}
      </div>
      <div className="text-lg font-bold text-cyan mb-1">{label}</div>
      {source && <div className="text-xs font-mono text-muted uppercase">{source}</div>}
    </div>
  );
}
