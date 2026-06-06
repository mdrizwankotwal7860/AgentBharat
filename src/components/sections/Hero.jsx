import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import Terminal from '../ui/Terminal';

export default function Hero() {
  const terminalLines = [
    "Initializing TaxAgent v2.0...",
    "Connected to Tally ERP 9",
    "Found 142 new invoices for May 2026",
    "Calculating CGST/SGST/IGST...",
    "Done. Total tax: ₹42,500",
    "Auto-filing GSTR-3B to portal...",
    "Success! Filing ID: GST8391A",
    "WhatsApp sent to owner: 'GST filed successfully.'"
  ];

  return (
    <section className="pt-32 pb-20 overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan/20 blur-[120px] rounded-full pointer-events-none opacity-50"></div>
      
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            className="max-w-2xl"
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-navy-soft border border-navy-soft text-sm font-mono text-cyan mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan"></span>
                </span>
                AgentBharat v1.0 is Live
              </div>
            </motion.div>
            
            <motion.h1 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
            >
              India's <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-green">AI Workforce</span> for Small Business.
            </motion.h1>
            
            <motion.p 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-lg md:text-xl text-white/80 mb-8 max-w-xl"
            >
              Replace costly human roles with 9 specialized AI agents. Starting at just ₹999/month. Works entirely on WhatsApp.
            </motion.p>
            
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <Link to="/trial">
                <Button size="lg" className="w-full sm:w-auto">Start 7-Day Free Trial</Button>
              </Link>
              <Link to="/agents">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">Meet the Agents</Button>
              </Link>
            </motion.div>
            
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="flex items-center gap-4"
            >
              <div className="flex -space-x-3">
                {[11, 5, 33, 44].map((n, i) => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${n}`} alt="User" className="w-10 h-10 rounded-full border-2 border-navy relative" style={{ zIndex: 4 - i }} />
                ))}
              </div>
              <p className="text-sm text-white/70">
                Trusted by <strong className="text-white">500+</strong> businesses across India
              </p>
            </motion.div>
          </motion.div>
          
          {/* Right Terminal */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="relative lg:h-[500px] flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan/10 to-transparent rounded-3xl transform rotate-3"></div>
            <div className="relative w-full z-10 transform -rotate-1 hover:rotate-0 transition-transform duration-500">
              <Terminal lines={terminalLines} speed={800} />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
