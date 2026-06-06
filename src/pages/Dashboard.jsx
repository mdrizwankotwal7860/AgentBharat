import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Button from '../components/ui/Button';
import StatusDot from '../components/ui/StatusDot';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-navy text-white flex flex-col">
      <Navbar />
      <main className="pt-24 pb-24 flex-grow bg-navy">
        {/* Trial Banner */}
        <div className="bg-amber text-navy py-2 px-6 text-center text-sm font-bold shadow-md relative z-10">
          Your free trial ends in 7 days. <Link to="/pricing" className="underline ml-2">Upgrade now to keep your agent running.</Link>
        </div>
        
        <div className="container mx-auto px-6 lg:px-12 mt-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h1 className="text-3xl font-extrabold mb-1">Dashboard</h1>
              <p className="text-muted">Welcome back! Here's what your agents are doing.</p>
            </div>
            <Link to="/agents">
              <Button variant="outline" size="sm">+ Add New Agent</Button>
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Active Agents */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-navy-mid border border-navy-soft rounded-2xl p-6">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-navy flex items-center justify-center text-2xl">
                      🧾
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">TaxAgent</h3>
                      <p className="text-xs text-muted">Trial • Day 1 of 7</p>
                    </div>
                  </div>
                  <StatusDot status="active" />
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-navy rounded-lg p-4 text-center border border-navy-soft">
                    <div className="text-2xl font-bold text-cyan">14</div>
                    <div className="text-xs text-muted">Invoices Processed</div>
                  </div>
                  <div className="bg-navy rounded-lg p-4 text-center border border-navy-soft">
                    <div className="text-2xl font-bold text-cyan">₹2,400</div>
                    <div className="text-xs text-muted">Tax Computed</div>
                  </div>
                  <div className="bg-navy rounded-lg p-4 text-center border border-navy-soft">
                    <div className="text-2xl font-bold text-green">100%</div>
                    <div className="text-xs text-muted">Accuracy</div>
                  </div>
                </div>
                
                <Button variant="secondary" className="w-full">View Detailed Report</Button>
              </div>
            </div>

            {/* Recent Activity */}
            <div>
              <div className="bg-navy-mid border border-navy-soft rounded-2xl p-6 h-full">
                <h3 className="font-bold text-lg mb-6">Live Activity Log</h3>
                <div className="space-y-4">
                  {[
                    "Read invoice INV-2026-042 from Tally",
                    "Calculated CGST (9%) and SGST (9%)",
                    "Found missing HSN code. Used fallback.",
                    "Saved to GSTR-1 draft.",
                    "Sent WhatsApp confirmation to owner."
                  ].map((log, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <div className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-cyan"></div>
                      <div className="text-xs text-white/80">
                        {log}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </main>
    </div>
  );
}
