import { useEffect, useState } from 'react';

interface ParallaxBackgroundProps {
  speed?: number;
  className?: string;
  children?: React.ReactNode;
}

const ParallaxBackground = ({ speed = 0.5, className = '', children }: ParallaxBackgroundProps) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className="absolute inset-0 transition-transform duration-100 ease-out"
        style={{
          transform: `translateY(${offsetY * speed}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
        
        <svg
          className="absolute inset-0 w-full h-full opacity-30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="dots"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1" fill="currentColor" className="text-primary/20" />
            </pattern>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#c4b5fd" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
          <circle cx="20%" cy="30%" r="200" fill="url(#grad1)" className="animate-pulse" />
          <circle cx="80%" cy="60%" r="150" fill="url(#grad1)" className="animate-pulse" style={{ animationDelay: '1s' }} />
          <circle cx="50%" cy="80%" r="180" fill="url(#grad1)" className="animate-pulse" style={{ animationDelay: '2s' }} />
        </svg>
      </div>
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ParallaxBackground;
