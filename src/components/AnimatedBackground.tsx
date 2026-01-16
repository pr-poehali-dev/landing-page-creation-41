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
          start: '#e0f2fe',
          mid1: '#ddd6fe',
          mid2: '#fae8ff',
          end: '#fef3c7',
        };
      case 'accent':
        return {
          start: '#7dd3fc',
          mid1: '#a78bfa',
          mid2: '#c4b5fd',
          end: '#f0abfc',
        };
      default:
        return {
          start: '#bae6fd',
          mid1: '#c4b5fd',
          mid2: '#e9d5ff',
          end: '#fed7aa',
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
                dur="12s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="33%" stopColor={colors.mid1}>
              <animate
                attributeName="stop-color"
                values={`${colors.mid1};${colors.mid2};${colors.mid1}`}
                dur="15s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="66%" stopColor={colors.mid2}>
              <animate
                attributeName="stop-color"
                values={`${colors.mid2};${colors.end};${colors.mid2}`}
                dur="18s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor={colors.end}>
              <animate
                attributeName="stop-color"
                values={`${colors.end};${colors.start};${colors.end}`}
                dur="20s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>

          <radialGradient id={`breathGlow-${variant}-1`}>
            <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#7dd3fc" stopOpacity="0" />
          </radialGradient>

          <radialGradient id={`breathGlow-${variant}-2`}>
            <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
          </radialGradient>

          <radialGradient id={`breathGlow-${variant}-3`}>
            <stop offset="0%" stopColor="#c4b5fd" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#c4b5fd" stopOpacity="0" />
          </radialGradient>

          <filter id="blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="60" />
          </filter>
        </defs>

        <rect width="100%" height="100%" fill={`url(#flowGrad-${variant})`} opacity="0.15" />

        <g filter="url(#blur)">
          <ellipse
            cx={`${25 + mousePosition.x}%`}
            cy={`${30 + mousePosition.y}%`}
            rx="250"
            ry="180"
            fill={`url(#breathGlow-${variant}-1)`}
            className="animate-breath-slow"
          />
          <ellipse
            cx={`${70 - mousePosition.x * 0.5}%`}
            cy={`${50 - mousePosition.y * 0.5}%`}
            rx="200"
            ry="220"
            fill={`url(#breathGlow-${variant}-2)`}
            className="animate-breath-medium"
          />
          <ellipse
            cx={`${50 + mousePosition.x * 0.3}%`}
            cy={`${75 + mousePosition.y * 0.3}%`}
            rx="280"
            ry="160"
            fill={`url(#breathGlow-${variant}-3)`}
            className="animate-breath-fast"
          />
        </g>

        <g opacity="0.08">
          <circle cx="15%" cy="20%" r="3" fill="#7dd3fc" className="animate-float-1" />
          <circle cx="85%" cy="30%" r="2" fill="#a78bfa" className="animate-float-2" />
          <circle cx="30%" cy="70%" r="2.5" fill="#c4b5fd" className="animate-float-3" />
          <circle cx="75%" cy="85%" r="3" fill="#f0abfc" className="animate-float-1" />
          <circle cx="50%" cy="45%" r="2" fill="#7dd3fc" className="animate-float-2" />
          <circle cx="65%" cy="65%" r="2.5" fill="#a78bfa" className="animate-float-3" />
        </g>
      </svg>
    </div>
  );
};

export default AnimatedBackground;
