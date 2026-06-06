import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Agents from './pages/Agents';
import AgentDetail from './pages/AgentDetail';
import Pricing from './pages/Pricing';
import Trial from './pages/Trial';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Contact from './pages/Contact';
import VideoWidget from './components/ui/VideoWidget';

export default function App() {
  return (
    <HashRouter>
      <VideoWidget />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/agents/:slug" element={<AgentDetail />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/trial" element={<Trial />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
}
