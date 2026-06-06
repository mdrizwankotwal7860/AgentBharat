import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Terminal from '../components/ui/Terminal';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import StatusDot from '../components/ui/StatusDot';
import { agents } from '../data/agents';
import { motion } from 'framer-motion';

export default function AgentDetail() {
  const { slug } = useParams();
  const agent = agents.find(a => a.id === slug);

  if (!agent) {
    return <div className="min-h-screen bg-navy text-white flex items-center justify-center">Agent not found</div>;
  }

  // Generate fake terminal logs based on agent tasks
  const terminalLines = [
    `Initializing ${agent.name}...`,
    `Loading context for ${agent.category}...`,
    `Connected to: ${agent.tools.join(', ')}`,
    ...agent.tasks.map(t => `Executing: ${t}... [OK]`),
    "Standing by for next task."
  ];

  return (
    <div className="min-h-screen bg-navy text-white flex flex-col">
      <Navbar />
      <main className="pt-32 pb-24 flex-grow">
        <div className="container mx-auto px-6 lg:px-12">
          
          {/* Hero */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 rounded-2xl bg-navy-mid flex items-center justify-center text-4xl shadow-inner border border-white/5">
                  {agent.icon}
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-extrabold mb-2">{agent.name}</h1>
                  <p className="text-xl font-mono text-amber">{agent.role}</p>
                </div>
              </div>
              
              <div className="mb-6"><StatusDot status="active" /></div>
              
              <p className="text-lg text-white/80 mb-8 max-w-xl">{agent.description}</p>
              
              <Link to="/trial">
                <Button size="lg" className="w-full sm:w-auto">Deploy {agent.name} Now</Button>
              </Link>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <Terminal lines={terminalLines} speed={600} />
            </motion.div>
          </div>

          {/* Details Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-navy-mid border border-navy-soft rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Autonomous Tasks</h3>
              <ul className="space-y-4">
                {agent.tasks.map((task, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-green text-xl mt-0.5">✓</span>
                    <span className="text-white/90">{task}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-navy-mid border border-navy-soft rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Connected Tools</h3>
              <div className="flex flex-wrap gap-3">
                {agent.tools.map((tool, i) => (
                  <div key={i} className="px-4 py-2 bg-navy rounded-lg border border-navy-soft text-sm font-semibold">
                    {tool}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-navy-mid border border-navy-soft rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {agent.languages.map((lang, i) => (
                  <Badge key={i} color="cyan">{lang}</Badge>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </main>
      <Footer />
    </div>
  );
}
