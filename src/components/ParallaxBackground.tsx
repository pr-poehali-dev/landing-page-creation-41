import { useEffect, useState } from 'react';

interface ParallaxBackgroundProps {
  speed?: number;
  className?: string;
  children?: React.ReactNode;
}

const ParallaxBackground = ({ speed = 0.5, className = '', children }: ParallaxBackgroundProps) => {
  const [offsetY, setOffsetY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className="absolute inset-0 transition-transform duration-300 ease-out"
        style={{
          transform: `translateY(${offsetY * speed}px) translateX(${mousePosition.x * 0.3}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#8a2be2]/5 via-secondary/5 to-accent/5" />
        
        <svg
          className="absolute inset-0 w-full h-full opacity-40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="modernDots"
              x="0"
              y="0"
              width="30"
              height="30"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1.5" fill="#8a2be2" opacity="0.15" />
            </pattern>
            <linearGradient id="violetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8a2be2" stopOpacity="0.15" />
              <stop offset="50%" stopColor="#9370db" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#ba55d3" stopOpacity="0.15" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <rect width="100%" height="100%" fill="url(#modernDots)" />
          <g filter="url(#glow)">
            <circle 
              cx={`${20 + mousePosition.x * 0.5}%`} 
              cy={`${30 + mousePosition.y * 0.5}%`} 
              r="250" 
              fill="url(#violetGrad)" 
              className="animate-pulse" 
            />
            <circle 
              cx={`${80 - mousePosition.x * 0.3}%`} 
              cy={`${60 - mousePosition.y * 0.3}%`} 
              r="200" 
              fill="url(#violetGrad)" 
              className="animate-pulse" 
              style={{ animationDelay: '1.5s' }} 
            />
            <circle 
              cx={`${50 + mousePosition.x * 0.2}%`} 
              cy={`${80 + mousePosition.y * 0.2}%`} 
              r="220" 
              fill="url(#violetGrad)" 
              className="animate-pulse" 
              style={{ animationDelay: '3s' }} 
            />
          </g>
        </svg>
      </div>
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ParallaxBackground;