import { useEffect, useState } from 'react';

interface BlossomingFigureProps {
  className?: string;
}

const BlossomingFigure = ({ className = '' }: BlossomingFigureProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const stars = [
    { size: 45, x: 120, y: 100, dur: 9, rotate: 360, translateX: 20, translateY: -15 },
    { size: 38, x: 680, y: 80, dur: 7, rotate: -270, translateX: -25, translateY: 18 },
    { size: 42, x: 400, y: 50, dur: 10, rotate: 180, translateX: 15, translateY: 22 },
    { size: 36, x: 250, y: 150, dur: 8, rotate: -360, translateX: -18, translateY: -12 },
    { size: 40, x: 550, y: 120, dur: 11, rotate: 270, translateX: 22, translateY: -20 },
    { size: 44, x: 150, y: 450, dur: 9, rotate: -180, translateX: -20, translateY: 25 },
    { size: 37, x: 650, y: 500, dur: 10, rotate: 360, translateX: 18, translateY: -22 },
    { size: 41, x: 350, y: 520, dur: 8, rotate: -270, translateX: -15, translateY: 20 },
    { size: 39, x: 500, y: 480, dur: 11, rotate: 180, translateX: 25, translateY: -18 },
    { size: 43, x: 100, y: 280, dur: 7, rotate: -360, translateX: -22, translateY: 15 },
    { size: 36, x: 720, y: 300, dur: 9, rotate: 270, translateX: 20, translateY: -25 },
    { size: 45, x: 300, y: 350, dur: 10, rotate: -180, translateX: -18, translateY: 20 },
    { size: 38, x: 600, y: 280, dur: 8, rotate: 360, translateX: 22, translateY: -15 },
    { size: 40, x: 450, y: 200, dur: 11, rotate: -270, translateX: -25, translateY: 18 },
    { size: 42, x: 200, y: 550, dur: 9, rotate: 180, translateX: 18, translateY: -20 }
  ];

  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 800 600"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="starGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8a2be2" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#c4b5fd" stopOpacity="0.3" />
          </linearGradient>
          
          <linearGradient id="starGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.35" />
          </linearGradient>

          <linearGradient id="starGradient3" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#c4b5fd" stopOpacity="0.28" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.58" />
            <stop offset="100%" stopColor="#8a2be2" stopOpacity="0.28" />
          </linearGradient>

          <filter id="starGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {isVisible && (
          <g>
            {stars.map((star, idx) => {
              const gradients = ['starGradient1', 'starGradient2', 'starGradient3'];
              const gradient = gradients[idx % 3];
              
              return (
                <g key={idx}>
                  <polygon
                    points={`${star.x},${star.y - star.size/2} 
                             ${star.x + star.size/5},${star.y - star.size/6} 
                             ${star.x + star.size/2},${star.y} 
                             ${star.x + star.size/5},${star.y + star.size/6} 
                             ${star.x},${star.y + star.size/2} 
                             ${star.x - star.size/5},${star.y + star.size/6} 
                             ${star.x - star.size/2},${star.y} 
                             ${star.x - star.size/5},${star.y - star.size/6}`}
                    fill={`url(#${gradient})`}
                    filter="url(#starGlow)"
                    opacity="0.7"
                    style={{
                      transformOrigin: `${star.x}px ${star.y}px`,
                      animation: `starMove${idx} ${star.dur}s ease-in-out infinite`
                    }}
                  />
                  <style>
                    {`
                      @keyframes starMove${idx} {
                        0%, 100% {
                          transform: translate(0, 0) rotate(0deg);
                          opacity: 0.5;
                        }
                        50% {
                          transform: translate(${star.translateX}px, ${star.translateY}px) rotate(${star.rotate}deg);
                          opacity: 0.9;
                        }
                      }
                    `}
                  </style>
                </g>
              );
            })}
          </g>
        )}
      </svg>
    </div>
  );
};

export default BlossomingFigure;
