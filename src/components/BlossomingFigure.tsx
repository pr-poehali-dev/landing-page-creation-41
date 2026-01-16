import { useEffect, useState } from 'react';

interface BlossomingFigureProps {
  className?: string;
}

const BlossomingFigure = ({ className = '' }: BlossomingFigureProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMousePosition({ x, y });
  };

  return (
    <div 
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <svg
        viewBox="0 0 400 500"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="figureStroke" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.8">
              <animate attributeName="stopColor" values="#7dd3fc;#a78bfa;#7dd3fc" dur="6s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stopColor="#8a2be2" stopOpacity="0.9">
              <animate attributeName="stopColor" values="#8a2be2;#c4b5fd;#8a2be2" dur="6s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#c4b5fd" stopOpacity="0.8">
              <animate attributeName="stopColor" values="#c4b5fd;#7dd3fc;#c4b5fd" dur="6s" repeatCount="indefinite" />
            </stop>
          </linearGradient>

          <linearGradient id="petalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.8" />
          </linearGradient>

          <radialGradient id="glowCircle">
            <stop offset="0%" stopColor="#8a2be2" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#8a2be2" stopOpacity="0" />
          </radialGradient>

          <filter id="softGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        <circle
          cx="200"
          cy="250"
          r="180"
          fill="url(#glowCircle)"
          className="transition-all duration-1000"
          style={{
            opacity: isHovered ? 0.6 : 0.3,
          }}
        />

        <g 
          filter="url(#softGlow)"
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        >
          <ellipse
            cx="200"
            cy="120"
            rx="45"
            ry="55"
            fill="none"
            stroke="url(#figureStroke)"
            strokeWidth="3"
            strokeLinecap="round"
            className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{
              strokeDasharray: '400',
              strokeDashoffset: isVisible ? '0' : '400',
              transitionDelay: '0.5s',
            }}
          />

          <path
            d="M 200 175 Q 180 200 170 240 L 170 340 M 200 175 Q 220 200 230 240 L 230 340"
            fill="none"
            stroke="url(#figureStroke)"
            strokeWidth="3"
            strokeLinecap="round"
            className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{
              strokeDasharray: '400',
              strokeDashoffset: isVisible ? '0' : '400',
              transitionDelay: '0.8s',
            }}
          />

          <path
            d="M 200 200 L 130 280 M 200 200 L 270 280"
            fill="none"
            stroke="url(#figureStroke)"
            strokeWidth="3"
            strokeLinecap="round"
            className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{
              strokeDasharray: '300',
              strokeDashoffset: isVisible ? '0' : '300',
              transitionDelay: '1s',
            }}
          />

          <path
            d="M 170 340 L 150 420 M 230 340 L 250 420"
            fill="none"
            stroke="url(#figureStroke)"
            strokeWidth="3"
            strokeLinecap="round"
            className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{
              strokeDasharray: '200',
              strokeDashoffset: isVisible ? '0' : '200',
              transitionDelay: '1.2s',
            }}
          />
        </g>

        {isVisible && (
          <g className={`transition-opacity duration-1000 ${isHovered ? 'opacity-100' : 'opacity-70'}`}>
            {[...Array(8)].map((_, i) => {
              const angle = (i / 8) * Math.PI * 2;
              const radius = 100;
              const cx = 200 + Math.cos(angle) * radius;
              const cy = 250 + Math.sin(angle) * radius;
              
              return (
                <g key={i}>
                  <path
                    d={`M ${cx} ${cy} Q ${cx + 10} ${cy - 15} ${cx + 20} ${cy - 10} Q ${cx + 15} ${cy} ${cx + 10} ${cy + 10} Q ${cx} ${cy + 5} ${cx} ${cy}`}
                    fill="url(#petalGradient)"
                    opacity="0"
                    className="flower-petal"
                    style={{
                      animation: `blossomPetal 2s ease-out ${1.5 + i * 0.15}s forwards`,
                      transformOrigin: `${cx}px ${cy}px`,
                    }}
                  />
                </g>
              );
            })}
          </g>
        )}

        {isVisible && (
          <g>
            {[...Array(20)].map((_, i) => {
              const angle = (i / 20) * Math.PI * 2;
              const radius = 120 + Math.sin(i * 0.8) * 30;
              const startX = 200 + Math.cos(angle) * 20;
              const startY = 300;
              const endX = 200 + Math.cos(angle) * radius;
              const endY = 250 + Math.sin(angle) * radius;
              
              return (
                <circle
                  key={i}
                  r="2"
                  fill="#fff"
                  opacity="0"
                  className="light-particle"
                  style={{
                    animation: `particleRise 2s ease-out ${1.2 + i * 0.1}s forwards`,
                  }}
                >
                  <animateMotion
                    dur={`${2 + i * 0.1}s`}
                    begin={`${1.2 + i * 0.1}s`}
                    fill="freeze"
                    path={`M ${startX} ${startY} Q ${(startX + endX) / 2} ${startY - 50} ${endX} ${endY}`}
                  />
                </circle>
              );
            })}
          </g>
        )}

        {isVisible && (
          <g className="wave-elements">
            <path
              d="M 100 300 Q 150 290 200 300 Q 250 310 300 300"
              fill="none"
              stroke="#7dd3fc"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0"
              className="wave-line"
              style={{
                strokeDasharray: '400',
                strokeDashoffset: '400',
                animation: 'waveFlow 2s ease-out 1.5s forwards',
              }}
            >
              <animate
                attributeName="d"
                dur="3s"
                repeatCount="indefinite"
                values="
                  M 100 300 Q 150 290 200 300 Q 250 310 300 300;
                  M 100 300 Q 150 310 200 300 Q 250 290 300 300;
                  M 100 300 Q 150 290 200 300 Q 250 310 300 300
                "
              />
            </path>
            <path
              d="M 80 350 Q 140 340 200 350 Q 260 360 320 350"
              fill="none"
              stroke="#a78bfa"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0"
              className="wave-line"
              style={{
                strokeDasharray: '400',
                strokeDashoffset: '400',
                animation: 'waveFlow 2s ease-out 1.7s forwards',
              }}
            >
              <animate
                attributeName="d"
                dur="3.5s"
                repeatCount="indefinite"
                values="
                  M 80 350 Q 140 340 200 350 Q 260 360 320 350;
                  M 80 350 Q 140 360 200 350 Q 260 340 320 350;
                  M 80 350 Q 140 340 200 350 Q 260 360 320 350
                "
              />
            </path>
          </g>
        )}
      </svg>

      <style>{`
        @keyframes blossomPetal {
          0% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
          }
          50% {
            opacity: 0.8;
          }
          100% {
            opacity: 0.7;
            transform: scale(1) rotate(360deg);
          }
        }

        @keyframes particleRise {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            opacity: 0.4;
          }
        }

        @keyframes waveFlow {
          to {
            stroke-dashoffset: 0;
            opacity: 0.6;
          }
        }

        .flower-petal {
          filter: drop-shadow(0 0 4px currentColor);
        }

        .light-particle {
          filter: drop-shadow(0 0 3px #fff);
        }
      `}</style>
    </div>
  );
};

export default BlossomingFigure;
