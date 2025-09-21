import React, { useState, useEffect } from 'react';

const ScrollProgressIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const calculateScrollProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement?.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      setScrollProgress(Math.min(Math.max(scrollPercent, 0), 100));
      setIsVisible(scrollTop > 100);
    };

    const handleScroll = () => {
      requestAnimationFrame(calculateScrollProgress);
    };

    window.addEventListener('scroll', handleScroll);
    calculateScrollProgress(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      className={`fixed top-0 left-0 right-0 z-navigation transition-professional ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="h-1 bg-border">
        <div 
          className="h-full bg-gradient-to-r from-primary to-portfolio-accent transition-professional duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </div>
  );
};

export default ScrollProgressIndicator;