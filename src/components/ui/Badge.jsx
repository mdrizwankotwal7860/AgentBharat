import React from 'react';

export default function Badge({ children, color = 'cyan', className = '' }) {
  const colors = {
    cyan: "bg-cyan/10 text-cyan border-cyan/20",
    amber: "bg-amber/10 text-amber border-amber/20",
    green: "bg-green/10 text-green border-green/20",
    red: "bg-red/10 text-red border-red/20",
    gray: "bg-white/5 text-white/70 border-white/10"
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-mono border ${colors[color] || colors.cyan} ${className}`}>
      {children}
    </span>
  );
}
