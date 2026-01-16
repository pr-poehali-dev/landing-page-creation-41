const SVGDefs = () => {
  return (
    <defs>
      <linearGradient id="silhouetteGradient" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#8a2be2" stopOpacity="0.9" />
        <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.85" />
        <stop offset="100%" stopColor="#c4b5fd" stopOpacity="0.8" />
      </linearGradient>

      <filter id="silhouetteGlow">
        <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>

      <filter id="petalGlow">
        <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>

      <filter id="starGlow">
        <feGaussianBlur stdDeviation="15" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
  );
};

export default SVGDefs;