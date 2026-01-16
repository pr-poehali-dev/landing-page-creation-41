import { useEffect, useState } from 'react';

interface AnimatedIconProps {
  type: 'hero' | 'problem' | 'promise' | 'format' | 'timeline';
  className?: string;
  delay?: number;
}

const AnimatedIcon = ({ type, className = '', delay = 0 }: AnimatedIconProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const renderIcon = () => {
    switch (type) {
      case 'hero':
        return (
          <svg
            className={`animated-icon hero-icon ${isVisible ? 'visible' : ''}`}
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7dd3fc" />
                <stop offset="100%" stopColor="#c4b5fd" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <circle cx="100" cy="100" r="60" fill="url(#heroGradient)" opacity="0.2" filter="url(#glow)" className="pulse-circle" />
            <path
              className="embrace-path"
              d="M100 80 Q70 90 60 110 Q55 125 60 140 L100 160 L140 140 Q145 125 140 110 Q130 90 100 80 Z"
              fill="url(#heroGradient)"
              stroke="#7dd3fc"
              strokeWidth="3"
            />
            <circle cx="85" cy="100" r="4" fill="#fff" className="eye left-eye" />
            <circle cx="115" cy="100" r="4" fill="#fff" className="eye right-eye" />
            <path
              d="M90 115 Q100 120 110 115"
              stroke="#fff"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              className="smile"
            />
          </svg>
        );

      case 'problem':
        return (
          <svg
            className={`animated-icon problem-icon ${isVisible ? 'visible' : ''}`}
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f87171" />
                <stop offset="100%" stopColor="#fbbf24" />
              </linearGradient>
            </defs>
            <g className="heart-left">
              <path
                d="M100 150 L60 110 Q50 95 50 80 Q50 60 65 55 Q80 50 90 65 L100 80"
                fill="url(#heartGradient)"
                stroke="#f87171"
                strokeWidth="3"
              />
            </g>
            <g className="heart-right">
              <path
                d="M100 150 L140 110 Q150 95 150 80 Q150 60 135 55 Q120 50 110 65 L100 80"
                fill="url(#heartGradient)"
                stroke="#f87171"
                strokeWidth="3"
              />
            </g>
            <line
              x1="95"
              y1="60"
              x2="95"
              y2="150"
              stroke="#fff"
              strokeWidth="2"
              strokeDasharray="5,5"
              className="crack crack-1"
            />
            <line
              x1="105"
              y1="60"
              x2="105"
              y2="150"
              stroke="#fff"
              strokeWidth="2"
              strokeDasharray="5,5"
              className="crack crack-2"
            />
            <g className="bandage">
              <rect x="85" y="95" width="30" height="10" fill="#fff" opacity="0.9" rx="2" />
              <rect x="85" y="110" width="30" height="10" fill="#fff" opacity="0.9" rx="2" />
            </g>
          </svg>
        );

      case 'promise':
        return (
          <svg
            className={`animated-icon promise-icon ${isVisible ? 'visible' : ''}`}
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="butterflyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a78bfa" />
                <stop offset="50%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
            </defs>
            <g className="butterfly-body">
              <ellipse cx="100" cy="100" rx="6" ry="20" fill="#6366f1" />
              <line x1="100" y1="80" x2="85" y2="65" stroke="#6366f1" strokeWidth="2" className="antenna antenna-1" />
              <line x1="100" y1="80" x2="115" y2="65" stroke="#6366f1" strokeWidth="2" className="antenna antenna-2" />
              <circle cx="85" cy="65" r="3" fill="#6366f1" />
              <circle cx="115" cy="65" r="3" fill="#6366f1" />
            </g>
            <g className="wing wing-left">
              <path
                d="M94 90 Q60 80 50 100 Q45 120 60 130 Q75 135 94 110 Z"
                fill="url(#butterflyGradient)"
                opacity="0.8"
              />
              <path
                d="M94 110 Q50 120 45 140 Q45 160 65 165 Q80 165 94 130 Z"
                fill="url(#butterflyGradient)"
                opacity="0.6"
              />
            </g>
            <g className="wing wing-right">
              <path
                d="M106 90 Q140 80 150 100 Q155 120 140 130 Q125 135 106 110 Z"
                fill="url(#butterflyGradient)"
                opacity="0.8"
              />
              <path
                d="M106 110 Q150 120 155 140 Q155 160 135 165 Q120 165 106 130 Z"
                fill="url(#butterflyGradient)"
                opacity="0.6"
              />
            </g>
          </svg>
        );

      case 'format':
        return (
          <svg
            className={`animated-icon format-icon ${isVisible ? 'visible' : ''}`}
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="bookGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#a78bfa" />
              </linearGradient>
              <radialGradient id="lightGradient">
                <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
              </radialGradient>
            </defs>
            <g className="book">
              <rect x="60" y="70" width="80" height="60" fill="url(#bookGradient)" rx="3" className="book-cover" />
              <rect x="100" y="70" width="40" height="60" fill="#5b21b6" opacity="0.3" className="book-page" />
              <line x1="100" y1="70" x2="100" y2="130" stroke="#fff" strokeWidth="2" opacity="0.3" />
              <line x1="70" y1="85" x2="90" y2="85" stroke="#fff" strokeWidth="2" opacity="0.6" />
              <line x1="70" y1="95" x2="90" y2="95" stroke="#fff" strokeWidth="2" opacity="0.6" />
              <line x1="70" y1="105" x2="85" y2="105" stroke="#fff" strokeWidth="2" opacity="0.6" />
            </g>
            <circle cx="80" cy="60" r="4" fill="url(#lightGradient)" className="light-particle particle-1" />
            <circle cx="120" cy="55" r="3" fill="url(#lightGradient)" className="light-particle particle-2" />
            <circle cx="95" cy="50" r="3.5" fill="url(#lightGradient)" className="light-particle particle-3" />
            <circle cx="135" cy="65" r="2.5" fill="url(#lightGradient)" className="light-particle particle-4" />
          </svg>
        );

      case 'timeline':
        return (
          <svg
            className={`animated-icon timeline-icon ${isVisible ? 'visible' : ''}`}
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#7dd3fc" />
                <stop offset="50%" stopColor="#a78bfa" />
                <stop offset="100%" stopColor="#f472b6" />
              </linearGradient>
            </defs>
            <path
              d="M30 100 Q60 80 100 100 T170 100"
              stroke="url(#pathGradient)"
              strokeWidth="4"
              fill="none"
              className="path-line"
              strokeLinecap="round"
            />
            <circle cx="30" cy="100" r="8" fill="#7dd3fc" className="milestone milestone-1" />
            <circle cx="30" cy="100" r="12" fill="#7dd3fc" opacity="0.3" className="milestone-glow milestone-glow-1" />
            
            <circle cx="70" cy="90" r="8" fill="#93c5fd" className="milestone milestone-2" />
            <circle cx="70" cy="90" r="12" fill="#93c5fd" opacity="0.3" className="milestone-glow milestone-glow-2" />
            
            <circle cx="100" cy="100" r="8" fill="#a78bfa" className="milestone milestone-3" />
            <circle cx="100" cy="100" r="12" fill="#a78bfa" opacity="0.3" className="milestone-glow milestone-glow-3" />
            
            <circle cx="130" cy="90" r="8" fill="#c084fc" className="milestone milestone-4" />
            <circle cx="130" cy="90" r="12" fill="#c084fc" opacity="0.3" className="milestone-glow milestone-glow-4" />
            
            <circle cx="170" cy="100" r="8" fill="#f472b6" className="milestone milestone-5" />
            <circle cx="170" cy="100" r="12" fill="#f472b6" opacity="0.3" className="milestone-glow milestone-glow-5" />
          </svg>
        );

      default:
        return null;
    }
  };

  return <div className={`animated-icon-wrapper ${className}`}>{renderIcon()}</div>;
};

export default AnimatedIcon;
