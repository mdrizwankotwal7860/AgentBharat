import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function VideoWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300 && !hasScrolled) {
        setHasScrolled(true);
        // Auto-open after a short delay once the user scrolls down a bit
        setTimeout(() => setIsOpen(true), 500);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]);

  if (isDismissed) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="bg-navy border border-cyan/30 rounded-2xl shadow-[0_0_30px_rgba(0,229,255,0.15)] overflow-hidden pointer-events-auto relative mb-4"
          >
            {/* Header / Close button */}
            <div className="bg-navy-mid px-4 py-2 flex justify-between items-center border-b border-navy-soft">
              <span className="text-xs font-bold text-cyan tracking-wide uppercase">Watch Demo</span>
              <button 
                onClick={() => setIsDismissed(true)}
                className="text-white/50 hover:text-white transition-colors text-lg leading-none"
                aria-label="Close video"
              >
                &times;
              </button>
            </div>
            
            {/* Video Container (Assuming portrait based on previous advice) */}
            <div className="w-[280px] aspect-[9/16] relative bg-black">
               <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://app.heygen.com/embeds/f5fe992f706342e982ebdb0d136fc8eb" 
                  title="AgentBharat Advertisement" 
                  style={{ border: 0 }}
                  allow="encrypted-media; fullscreen;" 
                  allowFullScreen
               ></iframe>
            </div>
          </motion.div>
        ) : hasScrolled ? (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={() => setIsOpen(true)}
            className="bg-cyan text-navy rounded-full p-4 shadow-[0_0_20px_rgba(0,229,255,0.4)] pointer-events-auto flex items-center justify-center hover:scale-110 transition-transform font-bold"
          >
            ▶ Watch
          </motion.button>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
