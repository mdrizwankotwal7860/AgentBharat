import React from 'react';
import { Link } from 'react-router-dom';
import { FiTwitter, FiLinkedin, FiInstagram, FiGithub } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-navy-mid border-t border-navy-soft pt-16 pb-8">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan to-green flex items-center justify-center text-navy font-bold text-lg">
                AB
              </div>
              <span className="text-xl font-bold tracking-tight">AgentBharat</span>
            </Link>
            <p className="text-muted mb-6 max-w-sm">
              India's first AI Agent platform for small businesses. Automate your work, save costs, and grow faster.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-navy border border-navy-soft text-sm font-mono text-amber">
              <span>🇮🇳</span> Made in India
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="font-bold mb-6 text-white">Agents</h4>
            <ul className="flex flex-col gap-4 text-muted text-sm">
              <li><Link to="/agents/tax-agent" className="hover:text-cyan transition-colors">TaxAgent</Link></li>
              <li><Link to="/agents/support-agent" className="hover:text-cyan transition-colors">SupportAgent</Link></li>
              <li><Link to="/agents/hire-agent" className="hover:text-cyan transition-colors">HireAgent</Link></li>
              <li><Link to="/agents" className="hover:text-cyan transition-colors">View All Agents →</Link></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="font-bold mb-6 text-white">Company</h4>
            <ul className="flex flex-col gap-4 text-muted text-sm">
              <li><Link to="/about" className="hover:text-cyan transition-colors">About Us</Link></li>
              <li><Link to="/pricing" className="hover:text-cyan transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="hover:text-cyan transition-colors">Contact</Link></li>
              <li><a href="#" className="hover:text-cyan transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Links Col 3 */}
          <div>
            <h4 className="font-bold mb-6 text-white">Legal</h4>
            <ul className="flex flex-col gap-4 text-muted text-sm">
              <li><a href="#" className="hover:text-cyan transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-cyan transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-cyan transition-colors">Refund Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-navy-soft pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted text-sm">
            © {new Date().getFullYear()} AgentBharat. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-muted hover:text-cyan transition-colors"><FiTwitter size={20} /></a>
            <a href="#" className="text-muted hover:text-cyan transition-colors"><FiLinkedin size={20} /></a>
            <a href="#" className="text-muted hover:text-cyan transition-colors"><FiInstagram size={20} /></a>
            <a href="#" className="text-muted hover:text-cyan transition-colors"><FiGithub size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
