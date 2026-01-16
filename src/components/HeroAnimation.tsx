import { useEffect, useState } from 'react';

interface HeroAnimationProps {
  className?: string;
}

const HeroAnimation = ({ className = '' }: HeroAnimationProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const progress = Math.min(window.scrollY / 300, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="figureGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#c4b5fd" stopOpacity="0.6" />
          </linearGradient>

          <radialGradient id="glowGradient">
            <stop offset="0%" stopColor="#8a2be2" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#8a2be2" stopOpacity="0" />
          </radialGradient>

          <filter id="softGlow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          <filter id="dropShadow">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="0" dy="2" result="offsetblur"/>
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.3"/>
            </feComponentTransfer>
            <feMerge>
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        <circle
          cx="200"
          cy="200"
          r="150"
          fill="url(#glowGradient)"
          className={`transition-all duration-1000 ${isHovered || scrollProgress > 0.5 ? 'animate-pulse' : ''}`}
        />

        <g filter="url(#dropShadow)">
          <ellipse
            cx="200"
            cy="180"
            rx="50"
            ry="70"
            fill="url(#figureGradient)"
            className="animate-breathSlow"
          />
          
          <ellipse
            cx="200"
            cy="260"
            rx="60"
            ry="90"
            fill="url(#figureGradient)"
            className="animate-breathMedium"
          />
          
          <circle
            cx="200"
            cy="150"
            r="35"
            fill="url(#figureGradient)"
            className="animate-breathFast"
          />
        </g>

        <g 
          className={`transition-all duration-700 ${isHovered || scrollProgress > 0.3 ? 'opacity-100' : 'opacity-60'}`}
          filter="url(#softGlow)"
        >
          <path
            d="M 80 200 Q 80 150 120 150 Q 150 150 150 180 Q 150 150 180 150 Q 220 150 220 200"
            fill="none"
            stroke="#7dd3fc"
            strokeWidth="3"
            strokeLinecap="round"
            className={`hero-petal ${isHovered ? 'hero-element-active' : ''}`}
            opacity="0.8"
          />
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 150 175"
            to="360 150 175"
            dur="20s"
            repeatCount="indefinite"
          />
        </g>

        <g 
          className={`transition-all duration-700 ${isHovered || scrollProgress > 0.3 ? 'opacity-100' : 'opacity-60'}`}
          filter="url(#softGlow)"
        >
          <path
            d="M 290 220 Q 310 220 320 200 Q 330 180 320 160 Q 310 140 290 140"
            fill="none"
            stroke="#a78bfa"
            strokeWidth="3"
            strokeLinecap="round"
            className={`hero-wave ${isHovered ? 'hero-element-active' : ''}`}
            opacity="0.8"
          >
            <animate
              attributeName="d"
              dur="3s"
              repeatCount="indefinite"
              values="
                M 290 220 Q 310 220 320 200 Q 330 180 320 160 Q 310 140 290 140;
                M 290 220 Q 315 215 325 200 Q 335 180 325 160 Q 315 145 290 140;
                M 290 220 Q 310 220 320 200 Q 330 180 320 160 Q 310 140 290 140
              "
            />
          </path>
        </g>

        <g 
          className={`transition-all duration-700 ${isHovered || scrollProgress > 0.3 ? 'opacity-100' : 'opacity-60'}`}
          filter="url(#softGlow)"
        >
          <path
            d="M 200 80 L 210 95 L 225 100 L 210 110 L 210 125 L 200 115 L 190 125 L 190 110 L 175 100 L 190 95 Z"
            fill="#c4b5fd"
            className={`hero-heart ${isHovered ? 'hero-element-active' : ''}`}
            opacity="0.8"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="scale"
              values="1;1.1;1"
              dur="2s"
              repeatCount="indefinite"
              additive="sum"
            />
          </path>
        </g>

        <g 
          className={`transition-all duration-700 ${isHovered || scrollProgress > 0.3 ? 'opacity-100' : 'opacity-60'}`}
          filter="url(#softGlow)"
        >
          <circle cx="90" cy="130" r="4" fill="#7dd3fc" className={`hero-key ${isHovered ? 'hero-element-active' : ''}`} opacity="0.9">
            <animate attributeName="cy" values="130;120;130" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <rect x="86" y="135" width="8" height="15" rx="2" fill="#7dd3fc" className={`hero-key ${isHovered ? 'hero-element-active' : ''}`} opacity="0.9">
            <animate attributeName="y" values="135;125;135" dur="2.5s" repeatCount="indefinite" />
          </rect>
          <rect x="92" y="140" width="4" height="3" fill="#7dd3fc" className={`hero-key ${isHovered ? 'hero-element-active' : ''}`} opacity="0.9">
            <animate attributeName="y" values="140;130;140" dur="2.5s" repeatCount="indefinite" />
          </rect>
          <rect x="92" y="145" width="4" height="3" fill="#7dd3fc" className={`hero-key ${isHovered ? 'hero-element-active' : ''}`} opacity="0.9">
            <animate attributeName="y" values="145;135;145" dur="2.5s" repeatCount="indefinite" />
          </rect>
        </g>

        <g className={`transition-all duration-700 ${isHovered || scrollProgress > 0.3 ? 'opacity-100' : 'opacity-40'}`}>
          {[...Array(12)].map((_, i) => {
            const angle = (i / 12) * Math.PI * 2;
            const radius = 120 + Math.sin(i * 0.5) * 20;
            const cx = 200 + Math.cos(angle) * radius;
            const cy = 200 + Math.sin(angle) * radius;
            
            return (
              <circle
                key={i}
                cx={cx}
                cy={cy}
                r="2"
                fill="#fff"
                className={`hero-particle ${isHovered ? 'hero-element-active' : ''}`}
                opacity="0.6"
              >
                <animate
                  attributeName="opacity"
                  values="0.3;0.8;0.3"
                  dur={`${2 + i * 0.2}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="r"
                  values="2;3;2"
                  dur={`${2 + i * 0.2}s`}
                  repeatCount="indefinite"
                />
              </circle>
            );
          })}
        </g>
      </svg>
    </div>
  );
};

export default HeroAnimation;
