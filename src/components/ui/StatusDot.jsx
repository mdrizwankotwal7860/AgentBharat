import React from 'react';

export default function StatusDot({ status = 'active' }) {
  const config = {
    active: { color: 'bg-green', text: 'Active 24/7' },
    trial: { color: 'bg-amber', text: 'Trial Mode' },
    inactive: { color: 'bg-red', text: 'Inactive' }
  };

  const current = config[status] || config.active;

  return (
    <div className="flex items-center gap-2">
      <span className="relative flex h-3 w-3">
        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${current.color}`}></span>
        <span className={`relative inline-flex rounded-full h-3 w-3 ${current.color}`}></span>
      </span>
      <span className="text-xs font-mono text-white/70 uppercase tracking-wider">{current.text}</span>
    </div>
  );
}
