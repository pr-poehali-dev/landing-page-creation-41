import { useEffect, useState } from 'react';

interface AnimatedBackgroundProps {
  variant?: 'default' | 'light' | 'accent';
  className?: string;
}

const AnimatedBackground = ({ variant = 'default', className = '' }: AnimatedBackgroundProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const getGradientColors = () => {
    switch (variant) {
      case 'light':
        return {
          start: '#f5f1ed',
          mid1: '#ebe4dc',
          mid2: '#e8dfd5',
          end: '#f0e9e1',
        };
      case 'accent':
        return {
          start: '#c9a882',
          mid1: '#a87c4c',
          mid2: '#8d6a3e',
          end: '#6b4423',
        };
      default:
        return {
          start: '#f5f1ed',
          mid1: '#e8dfd5',
          mid2: '#c9a882',
          end: '#a87c4c',
        };
    }
  };

  const colors = getGradientColors();

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id={`flowGrad-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colors.start}>
              <animate
                attributeName="stop-color"
                values={`${colors.start};${colors.mid1};${colors.start}`}
                dur="8s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="33%" stopColor={colors.mid1}>
              <animate
                attributeName="stop-color"
                values={`${colors.mid1};${colors.mid2};${colors.mid1}`}
                dur="10s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="66%" stopColor={colors.mid2}>
              <animate
                attributeName="stop-color"
                values={`${colors.mid2};${colors.end};${colors.mid2}`}
                dur="12s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor={colors.end}>
              <animate
                attributeName="stop-color"
                values={`${colors.end};${colors.start};${colors.end}`}
                dur="14s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>

          <radialGradient id={`breathGlow-${variant}-1`}>
            <stop offset="0%" stopColor="#a87c4c" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#a87c4c" stopOpacity="0" />
          </radialGradient>

          <radialGradient id={`breathGlow-${variant}-2`}>
            <stop offset="0%" stopColor="#c9a882" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#c9a882" stopOpacity="0" />
          </radialGradient>

          <radialGradient id={`breathGlow-${variant}-3`}>
            <stop offset="0%" stopColor="#8d6a3e" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#8d6a3e" stopOpacity="0" />
          </radialGradient>

          <filter id="blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="60" />
          </filter>
        </defs>

        <rect width="100%" height="100%" fill={`url(#flowGrad-${variant})`} opacity="0.08" />

        <g filter="url(#blur)">
          <ellipse
            cx={`${25 + mousePosition.x}%`}
            cy={`${30 + mousePosition.y}%`}
            rx="320"
            ry="240"
            fill={`url(#breathGlow-${variant}-1)`}
            className="animate-breath-slow"
          />
          <ellipse
            cx={`${70 - mousePosition.x * 0.5}%`}
            cy={`${50 - mousePosition.y * 0.5}%`}
            rx="280"
            ry="300"
            fill={`url(#breathGlow-${variant}-2)`}
            className="animate-breath-medium"
          />
          <ellipse
            cx={`${50 + mousePosition.x * 0.3}%`}
            cy={`${75 + mousePosition.y * 0.3}%`}
            rx="350"
            ry="220"
            fill={`url(#breathGlow-${variant}-3)`}
            className="animate-breath-fast"
          />
        </g>

        <g opacity="0.06">
          <circle cx="15%" cy="20%" r="3" fill="#a87c4c" className="animate-float-1" />
          <circle cx="85%" cy="30%" r="2" fill="#c9a882" className="animate-float-2" />
          <circle cx="30%" cy="70%" r="2.5" fill="#8d6a3e" className="animate-float-3" />
          <circle cx="75%" cy="85%" r="3" fill="#a87c4c" className="animate-float-1" />
          <circle cx="50%" cy="45%" r="2" fill="#c9a882" className="animate-float-2" />
          <circle cx="65%" cy="65%" r="2.5" fill="#8d6a3e" className="animate-float-3" />
        </g>
      </svg>
    </div>
  );
};

export default AnimatedBackground;