import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Button from '../components/ui/Button';
import AgentCardMini from '../components/agents/AgentCardMini';
import { agents } from '../data/agents';

export default function Trial() {
  const [step, setStep] = useState(1);
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [businessType, setBusinessType] = useState('');
  const navigate = useNavigate();

  const handleStartTrial = () => {
    setTimeout(() => {
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-navy text-white flex flex-col">
      <Navbar />
      <main className="pt-32 pb-24 flex-grow flex items-center justify-center">
        <div className="w-full max-w-2xl bg-navy-mid border border-navy-soft rounded-2xl p-8 shadow-2xl mx-6">
          
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-extrabold mb-2">Start 7-Day Free Trial</h2>
            <p className="text-muted">No credit card required. Setup takes 2 minutes.</p>
          </div>

          {step === 1 && (
            <div>
              <h3 className="text-xl font-bold mb-4">Select an Agent to Try</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 h-80 overflow-y-auto pr-2">
                {agents.map(agent => (
                  <div 
                    key={agent.id}
                    onClick={() => setSelectedAgent(agent)}
                    className={`cursor-pointer transition-all ${selectedAgent?.id === agent.id ? 'ring-2 ring-cyan shadow-[0_0_15px_rgba(0,229,255,0.2)] rounded-xl' : 'opacity-70 hover:opacity-100'}`}
                  >
                    <AgentCardMini agent={agent} />
                  </div>
                ))}
              </div>
              <Button 
                className="w-full" 
                disabled={!selectedAgent}
                onClick={() => setStep(2)}
              >
                Continue
              </Button>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 className="text-xl font-bold mb-4">Tell us about your business</h3>
              <div className="mb-6 bg-navy-soft p-4 rounded-xl border border-navy-soft flex items-center gap-4">
                <div className="text-3xl">{selectedAgent?.icon}</div>
                <div>
                  <div className="text-sm text-muted">Selected Agent</div>
                  <div className="font-bold">{selectedAgent?.name}</div>
                </div>
              </div>
              
              <div className="mb-8">
                <label className="block text-sm font-medium mb-2 text-white/80">Business Type</label>
                <select 
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  className="w-full bg-navy border border-navy-soft rounded-lg px-4 py-3 focus:outline-none focus:border-cyan text-white"
                >
                  <option value="">Select your industry...</option>
                  <option value="coaching">Coaching Centre / Education</option>
                  <option value="restaurant">Restaurant / Cafe</option>
                  <option value="retail">Retail Shop / E-commerce</option>
                  <option value="healthcare">Clinic / Healthcare</option>
                  <option value="agency">Agency / Services</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="flex gap-4">
                <Button variant="secondary" onClick={() => setStep(1)} className="w-1/3">Back</Button>
                <Button 
                  className="w-2/3" 
                  disabled={!businessType}
                  onClick={() => setStep(3)}
                >
                  Configure Agent
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-green/20 rounded-full flex items-center justify-center text-green text-4xl mx-auto mb-6">
                ✓
              </div>
              <h3 className="text-2xl font-bold mb-4">{selectedAgent?.name} is Ready!</h3>
              <p className="text-muted mb-8">
                Your agent has been configured for your {businessType} business. 
                Your 7-day free trial starts now.
              </p>
              <Button size="lg" className="w-full" onClick={handleStartTrial}>
                Go to Dashboard
              </Button>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}
