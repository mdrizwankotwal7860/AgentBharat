import { useState, useEffect } from 'react';

export default function useCountUp(end, duration = 2000, start = 0, isVisible = true) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing out function
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * (end - start) + start));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [end, duration, start, isVisible]);

  return count;
}
