import React from 'react';

export default function AgentCardMini({ agent }) {
  return (
    <div className="flex items-center gap-4 bg-navy-mid p-3 rounded-xl border border-navy-soft">
      <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center text-xl shrink-0">
        {agent.icon}
      </div>
      <div className="min-w-0">
        <h4 className="font-bold text-sm text-white truncate">{agent.name}</h4>
        <p className="text-xs text-muted truncate">{agent.role}</p>
      </div>
    </div>
  );
}
