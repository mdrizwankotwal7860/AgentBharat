import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import Button from '../ui/Button';
import logoImage from '../../assets/logo-wide.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Agents', path: '/agents' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy/80 backdrop-blur-md border-b border-navy-soft shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <img 
            src={logoImage} 
            alt="AgentBharat" 
            className="h-10 md:h-12 w-auto object-contain group-hover:scale-105 transition-transform" 
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-cyan ${
                  location.pathname === link.path ? 'text-cyan' : 'text-white/80'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Link to="/trial">
            <Button variant="primary" size="sm">
              Start Free Trial
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-navy-mid border-b border-navy-soft shadow-2xl flex flex-col p-6 gap-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-lg font-medium transition-colors ${
                location.pathname === link.path ? 'text-cyan' : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 mt-2 border-t border-navy-soft">
            <Link to="/trial" className="block w-full">
              <Button variant="primary" size="md" className="w-full justify-center">
                Start Free Trial
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
