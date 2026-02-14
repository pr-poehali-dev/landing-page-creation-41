interface DoubleLayerBackgroundProps {
  variant?: 'default' | 'light' | 'accent';
  className?: string;
}

const DoubleLayerBackground = ({ variant = 'default', className = '' }: DoubleLayerBackgroundProps) => {
  const getColors = () => {
    switch (variant) {
      case 'light':
        return {
          base: '#111722',
          overlay1: '#F7BA72',
          overlay2: '#FFDEB5',
        };
      case 'accent':
        return {
          base: '#111722',
          overlay1: '#C89A5A',
          overlay2: '#F7BA72',
        };
      default:
        return {
          base: '#111722',
          overlay1: '#F7BA72',
          overlay2: '#C89A5A',
        };
    }
  };

  const colors = getColors();

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id={`dots-${variant}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="1.5" fill={colors.overlay1} opacity="0.12" />
          </pattern>
          
          <pattern id={`lines-${variant}`} x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path
              d="M 0 50 Q 25 30, 50 50 T 100 50"
              stroke={colors.overlay2}
              strokeWidth="1"
              fill="none"
              opacity="0.08"
            />
            <path
              d="M 0 80 Q 25 60, 50 80 T 100 80"
              stroke={colors.overlay2}
              strokeWidth="1"
              fill="none"
              opacity="0.08"
            />
          </pattern>

          <radialGradient id={`glow1-${variant}`}>
            <stop offset="0%" stopColor={colors.overlay1} stopOpacity="0.15" />
            <stop offset="100%" stopColor={colors.overlay1} stopOpacity="0" />
          </radialGradient>

          <radialGradient id={`glow2-${variant}`}>
            <stop offset="0%" stopColor={colors.overlay2} stopOpacity="0.12" />
            <stop offset="100%" stopColor={colors.overlay2} stopOpacity="0" />
          </radialGradient>

          <filter id="blur-soft">
            <feGaussianBlur in="SourceGraphic" stdDeviation="80" />
          </filter>
        </defs>

        <rect width="100%" height="100%" fill={colors.base} />

        <rect width="100%" height="100%" fill={`url(#lines-${variant})`} />

        <rect width="100%" height="100%" fill={`url(#dots-${variant})`} />

        <g filter="url(#blur-soft)">
          <ellipse
            cx="25%"
            cy="30%"
            rx="400"
            ry="300"
            fill={`url(#glow1-${variant})`}
            className="animate-float-slow"
          />
          <ellipse
            cx="75%"
            cy="60%"
            rx="450"
            ry="350"
            fill={`url(#glow2-${variant})`}
            className="animate-float-slower"
          />
          <ellipse
            cx="50%"
            cy="80%"
            rx="350"
            ry="280"
            fill={`url(#glow1-${variant})`}
            className="animate-float-medium"
          />
        </g>
      </svg>

      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -30px) scale(1.05); }
        }
        
        @keyframes float-slower {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-40px, 40px) scale(1.08); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, 30px) scale(1.06); }
        }
        
        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }
        
        .animate-float-slower {
          animation: float-slower 25s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float-medium 18s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default DoubleLayerBackground;