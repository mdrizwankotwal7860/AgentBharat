import React, { useState, useEffect } from 'react';

export default function Terminal({ lines = [], speed = 800 }) {
  const [visibleLines, setVisibleLines] = useState([]);

  useEffect(() => {
    setVisibleLines([]);
    if (!lines.length) return;

    let index = 0;
    const interval = setInterval(() => {
      if (index < lines.length) {
        setVisibleLines(prev => [...prev, lines[index]]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [lines, speed]);

  return (
    <div className="w-full rounded-xl bg-[#0a111a] border border-navy-soft shadow-2xl overflow-hidden font-mono text-sm">
      <div className="flex items-center gap-2 px-4 py-3 bg-[#111b26] border-b border-navy-soft">
        <div className="w-3 h-3 rounded-full bg-red/80"></div>
        <div className="w-3 h-3 rounded-full bg-amber/80"></div>
        <div className="w-3 h-3 rounded-full bg-green/80"></div>
        <div className="ml-2 text-xs text-white/50">agent-terminal ~ zsh</div>
      </div>
      <div className="p-4 md:p-6 min-h-[250px] flex flex-col gap-2">
        {visibleLines.map((line, i) => (
          <div key={i} className="text-white/90">
            <span className="text-cyan mr-2">❯</span>
            {line}
          </div>
        ))}
        <div className="animate-pulse text-cyan font-bold">_</div>
      </div>
    </div>
  );
}
