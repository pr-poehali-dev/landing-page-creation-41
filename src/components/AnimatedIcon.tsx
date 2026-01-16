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
              <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7dd3fc" />
                <stop offset="50%" stopColor="#a78bfa" />
                <stop offset="100%" stopColor="#c4b5fd" />
              </linearGradient>
            </defs>
            
            <circle 
              cx="100" 
              cy="100" 
              r="50" 
              stroke="url(#heroGrad)" 
              strokeWidth="2.5" 
              opacity="0.3"
              className="line-pulse"
              strokeLinecap="round"
            />
            
            <path
              d="M100 60 Q80 75 70 90 Q65 100 65 115 Q65 130 75 140 Q85 148 100 150 Q115 148 125 140 Q135 130 135 115 Q135 100 130 90 Q120 75 100 60"
              stroke="url(#heroGrad)"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="line-draw embrace-outline"
            />
            
            <circle cx="85" cy="95" r="2" fill="#a78bfa" className="line-pulse-dot" />
            <circle cx="115" cy="95" r="2" fill="#a78bfa" className="line-pulse-dot" style={{ animationDelay: '0.3s' }} />
            
            <path
              d="M90 110 Q100 115 110 110"
              stroke="#7dd3fc"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              className="line-gentle-pulse"
            />
            
            <path
              d="M75 85 Q75 75 85 75"
              stroke="url(#heroGrad)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              opacity="0.6"
              className="line-float"
            />
            
            <path
              d="M125 85 Q125 75 115 75"
              stroke="url(#heroGrad)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              opacity="0.6"
              className="line-float"
              style={{ animationDelay: '0.5s' }}
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
              <linearGradient id="problemGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#c4b5fd" />
                <stop offset="50%" stopColor="#a78bfa" />
                <stop offset="100%" stopColor="#7dd3fc" />
              </linearGradient>
            </defs>
            
            <path
              d="M100 140 C100 140 65 110 65 85 C65 65 75 55 90 55 C98 55 100 60 100 65"
              stroke="url(#problemGrad)"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="line-draw heart-left"
            />
            
            <path
              d="M100 140 C100 140 135 110 135 85 C135 65 125 55 110 55 C102 55 100 60 100 65"
              stroke="url(#problemGrad)"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="line-draw heart-right"
              style={{ animationDelay: '0.2s' }}
            />
            
            <line
              x1="100"
              y1="60"
              x2="100"
              y2="135"
              stroke="#c4b5fd"
              strokeWidth="1.5"
              strokeDasharray="3,4"
              opacity="0.5"
              className="line-heal"
            />
            
            <path
              d="M85 100 L115 100 M100 85 L100 115"
              stroke="#7dd3fc"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.7"
              className="line-appear"
            />
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
              <linearGradient id="promiseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a78bfa" />
                <stop offset="50%" stopColor="#c4b5fd" />
                <stop offset="100%" stopColor="#f0abfc" />
              </linearGradient>
            </defs>
            
            <ellipse 
              cx="100" 
              cy="100" 
              rx="4" 
              ry="15" 
              stroke="#a78bfa" 
              strokeWidth="2"
              fill="none"
              className="line-gentle-pulse"
            />
            
            <line 
              x1="100" 
              y1="85" 
              x2="90" 
              y2="70" 
              stroke="#a78bfa" 
              strokeWidth="2" 
              strokeLinecap="round"
              className="line-antenna"
            />
            <line 
              x1="100" 
              y1="85" 
              x2="110" 
              y2="70" 
              stroke="#a78bfa" 
              strokeWidth="2" 
              strokeLinecap="round"
              className="line-antenna"
              style={{ animationDelay: '0.1s' }}
            />
            <circle cx="90" cy="70" r="2.5" fill="#a78bfa" className="line-pulse-dot" />
            <circle cx="110" cy="70" r="2.5" fill="#a78bfa" className="line-pulse-dot" style={{ animationDelay: '0.1s' }} />
            
            <path
              d="M96 92 Q70 85 55 95 Q45 105 50 120 Q58 130 96 110 Z"
              stroke="url(#promiseGrad)"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="line-draw wing-flap-left"
            />
            
            <path
              d="M96 110 Q60 120 50 135 Q45 150 60 160 Q75 165 96 125 Z"
              stroke="url(#promiseGrad)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.7"
              className="line-draw wing-flap-left"
              style={{ animationDelay: '0.15s' }}
            />
            
            <path
              d="M104 92 Q130 85 145 95 Q155 105 150 120 Q142 130 104 110 Z"
              stroke="url(#promiseGrad)"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="line-draw wing-flap-right"
            />
            
            <path
              d="M104 110 Q140 120 150 135 Q155 150 140 160 Q125 165 104 125 Z"
              stroke="url(#promiseGrad)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.7"
              className="line-draw wing-flap-right"
              style={{ animationDelay: '0.15s' }}
            />
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
              <linearGradient id="formatGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7dd3fc" />
                <stop offset="50%" stopColor="#a78bfa" />
                <stop offset="100%" stopColor="#c4b5fd" />
              </linearGradient>
            </defs>
            
            <rect
              x="65"
              y="75"
              width="70"
              height="50"
              rx="2"
              stroke="url(#formatGrad)"
              strokeWidth="2.5"
              fill="none"
              className="line-draw"
            />
            
            <line
              x1="100"
              y1="75"
              x2="100"
              y2="125"
              stroke="#a78bfa"
              strokeWidth="2"
              opacity="0.4"
              className="line-pulse"
            />
            
            <line x1="75" y1="90" x2="95" y2="90" stroke="#7dd3fc" strokeWidth="2" strokeLinecap="round" opacity="0.6" className="line-appear" />
            <line x1="75" y1="100" x2="92" y2="100" stroke="#7dd3fc" strokeWidth="2" strokeLinecap="round" opacity="0.6" className="line-appear" style={{ animationDelay: '0.2s' }} />
            <line x1="75" y1="110" x2="88" y2="110" stroke="#7dd3fc" strokeWidth="2" strokeLinecap="round" opacity="0.6" className="line-appear" style={{ animationDelay: '0.4s' }} />
            
            <circle cx="85" cy="60" r="3" stroke="#c4b5fd" strokeWidth="1.5" fill="none" className="line-float-particle p-1" />
            <circle cx="115" cy="55" r="2.5" stroke="#a78bfa" strokeWidth="1.5" fill="none" className="line-float-particle p-2" />
            <circle cx="100" cy="50" r="2" stroke="#7dd3fc" strokeWidth="1.5" fill="none" className="line-float-particle p-3" />
            <circle cx="125" cy="65" r="2.5" stroke="#c4b5fd" strokeWidth="1.5" fill="none" className="line-float-particle p-4" />
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
              <linearGradient id="timelineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#7dd3fc" />
                <stop offset="25%" stopColor="#93c5fd" />
                <stop offset="50%" stopColor="#a78bfa" />
                <stop offset="75%" stopColor="#c4b5fd" />
                <stop offset="100%" stopColor="#f0abfc" />
              </linearGradient>
            </defs>
            
            <path
              d="M30 100 Q55 85 80 95 Q105 105 130 90 Q155 80 170 100"
              stroke="url(#timelineGrad)"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="line-draw-path"
              strokeDasharray="250"
              strokeDashoffset="250"
            />
            
            <circle cx="30" cy="100" r="5" stroke="#7dd3fc" strokeWidth="2" fill="none" className="line-milestone m-1" />
            <circle cx="30" cy="100" r="8" stroke="#7dd3fc" strokeWidth="1" fill="none" opacity="0.3" className="line-milestone-glow mg-1" />
            
            <circle cx="65" cy="90" r="5" stroke="#93c5fd" strokeWidth="2" fill="none" className="line-milestone m-2" />
            <circle cx="65" cy="90" r="8" stroke="#93c5fd" strokeWidth="1" fill="none" opacity="0.3" className="line-milestone-glow mg-2" />
            
            <circle cx="100" cy="102" r="5" stroke="#a78bfa" strokeWidth="2" fill="none" className="line-milestone m-3" />
            <circle cx="100" cy="102" r="8" stroke="#a78bfa" strokeWidth="1" fill="none" opacity="0.3" className="line-milestone-glow mg-3" />
            
            <circle cx="135" cy="88" r="5" stroke="#c4b5fd" strokeWidth="2" fill="none" className="line-milestone m-4" />
            <circle cx="135" cy="88" r="8" stroke="#c4b5fd" strokeWidth="1" fill="none" opacity="0.3" className="line-milestone-glow mg-4" />
            
            <circle cx="170" cy="100" r="5" stroke="#f0abfc" strokeWidth="2" fill="none" className="line-milestone m-5" />
            <circle cx="170" cy="100" r="8" stroke="#f0abfc" strokeWidth="1" fill="none" opacity="0.3" className="line-milestone-glow mg-5" />
          </svg>
        );

      default:
        return null;
    }
  };

  return <div className={`animated-icon-wrapper ${className}`}>{renderIcon()}</div>;
};

export default AnimatedIcon;
