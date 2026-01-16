import { useEffect, useState } from 'react';

interface BlossomingFigureProps {
  className?: string;
}

const BlossomingFigure = ({ className = '' }: BlossomingFigureProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 800 600"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="shapeGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8a2be2" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#c4b5fd" stopOpacity="0.25" />
          </linearGradient>
          
          <linearGradient id="shapeGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.3" />
          </linearGradient>

          <linearGradient id="shapeGradient3" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#c4b5fd" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#8a2be2" stopOpacity="0.28" />
          </linearGradient>

          <filter id="softBlur">
            <feGaussianBlur stdDeviation="4" />
          </filter>
        </defs>

        {isVisible && (
          <g>
            <circle
              cx="150"
              cy="200"
              r="80"
              fill="url(#shapeGradient1)"
              filter="url(#softBlur)"
              opacity="0"
            >
              <animate 
                attributeName="opacity" 
                values="0;1;1;0" 
                dur="10s" 
                begin="0s" 
                repeatCount="indefinite" 
              />
              <animate 
                attributeName="cy" 
                values="200;180;200" 
                dur="8s" 
                begin="0s" 
                repeatCount="indefinite" 
              />
            </circle>

            <ellipse
              cx="600"
              cy="150"
              rx="100"
              ry="70"
              fill="url(#shapeGradient2)"
              filter="url(#softBlur)"
              opacity="0"
            >
              <animate 
                attributeName="opacity" 
                values="0;0;1;1;0" 
                dur="12s" 
                begin="2s" 
                repeatCount="indefinite" 
              />
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="0 600 150;360 600 150"
                dur="20s"
                begin="2s"
                repeatCount="indefinite"
              />
            </ellipse>

            <path
              d="M 350 400 Q 400 350 450 400 Q 400 450 350 400"
              fill="url(#shapeGradient3)"
              filter="url(#softBlur)"
              opacity="0"
            >
              <animate 
                attributeName="opacity" 
                values="0;0;0;1;1;0" 
                dur="14s" 
                begin="4s" 
                repeatCount="indefinite" 
              />
              <animateTransform
                attributeName="transform"
                type="scale"
                values="1;1.2;1"
                dur="6s"
                begin="4s"
                repeatCount="indefinite"
              />
            </path>

            <rect
              x="100"
              y="450"
              width="120"
              height="120"
              rx="20"
              fill="url(#shapeGradient1)"
              filter="url(#softBlur)"
              opacity="0"
            >
              <animate 
                attributeName="opacity" 
                values="0;1;1;0;0" 
                dur="11s" 
                begin="1s" 
                repeatCount="indefinite" 
              />
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="0 160 510;45 160 510;0 160 510"
                dur="10s"
                begin="1s"
                repeatCount="indefinite"
              />
            </rect>

            <polygon
              points="650,500 700,450 750,500 700,550"
              fill="url(#shapeGradient2)"
              filter="url(#softBlur)"
              opacity="0"
            >
              <animate 
                attributeName="opacity" 
                values="0;0;1;1;0" 
                dur="13s" 
                begin="3s" 
                repeatCount="indefinite" 
              />
              <animate 
                attributeName="points" 
                values="650,500 700,450 750,500 700,550;
                        650,480 700,430 750,480 700,530;
                        650,500 700,450 750,500 700,550" 
                dur="7s" 
                begin="3s" 
                repeatCount="indefinite" 
              />
            </polygon>

            <circle
              cx="400"
              cy="100"
              r="50"
              fill="url(#shapeGradient3)"
              filter="url(#softBlur)"
              opacity="0"
            >
              <animate 
                attributeName="opacity" 
                values="0;0;0;1;1;0" 
                dur="15s" 
                begin="5s" 
                repeatCount="indefinite" 
              />
              <animate 
                attributeName="r" 
                values="50;70;50" 
                dur="9s" 
                begin="5s" 
                repeatCount="indefinite" 
              />
            </circle>

            <path
              d="M 200 300 Q 250 280 300 300 T 400 300"
              stroke="url(#shapeGradient1)"
              strokeWidth="3"
              fill="none"
              opacity="0"
              filter="url(#softBlur)"
            >
              <animate 
                attributeName="opacity" 
                values="0;0.6;0.6;0" 
                dur="12s" 
                begin="2s" 
                repeatCount="indefinite" 
              />
              <animate 
                attributeName="d" 
                values="M 200 300 Q 250 280 300 300 T 400 300;
                        M 200 300 Q 250 320 300 300 T 400 300;
                        M 200 300 Q 250 280 300 300 T 400 300" 
                dur="6s" 
                begin="2s" 
                repeatCount="indefinite" 
              />
            </path>

            <ellipse
              cx="550"
              cy="400"
              rx="60"
              ry="90"
              fill="url(#shapeGradient2)"
              filter="url(#softBlur)"
              opacity="0"
            >
              <animate 
                attributeName="opacity" 
                values="0;0;1;0;0" 
                dur="16s" 
                begin="6s" 
                repeatCount="indefinite" 
              />
              <animateTransform
                attributeName="transform"
                type="skewX"
                values="0;-10;10;0"
                dur="8s"
                begin="6s"
                repeatCount="indefinite"
              />
            </ellipse>
          </g>
        )}
      </svg>
    </div>
  );
};

export default BlossomingFigure;
