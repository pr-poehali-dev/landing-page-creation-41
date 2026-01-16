interface StarElementProps {
  isVisible: boolean;
}

const StarElement = ({ isVisible }: StarElementProps) => {
  if (!isVisible) return null;

  return (
    <g filter="url(#starGlow)" opacity="0">
      <animate attributeName="opacity" values="0;0" dur="1.5s" fill="freeze" />
      <animate attributeName="opacity" values="0;0.3" dur="1s" begin="1.5s" fill="freeze" />

      <circle
        cx="300"
        cy="80"
        r="25"
        fill="#FFE68C"
        opacity="0"
      >
        <animate attributeName="opacity" values="0.6;0.3;0.6" dur="1.5s" begin="2.5s" repeatCount="indefinite" />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0; 5,10; -5,20; 5,30; 0,30"
          dur="10s"
          begin="2.5s"
          repeatCount="indefinite"
        />
      </circle>

      <g>
        {[...Array(8)].map((_, i) => {
          const angle = (i / 8) * Math.PI * 2;
          const x2 = 300 + Math.cos(angle) * 25;
          const y2 = 80 + Math.sin(angle) * 25;
          return (
            <line
              key={i}
              x1="300"
              y1="80"
              x2={x2}
              y2={y2}
              stroke="#FFFFFF"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.9"
            >
              <animate attributeName="opacity" values="0.3;0.8;0.3" dur="1.5s" begin="2.5s" repeatCount="indefinite" />
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0; 5,10; -5,20; 5,30; 0,30"
                dur="10s"
                begin="2.5s"
                repeatCount="indefinite"
              />
            </line>
          );
        })}

        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 300 80;360 300 80"
          dur="6s"
          begin="2.5s"
          repeatCount="indefinite"
        />
      </g>

      <circle
        cx="300"
        cy="80"
        r="4"
        fill="#FFFFFF"
        opacity="0.9"
      >
        <animate attributeName="opacity" values="0.3;0.8;0.3" dur="1.5s" begin="2.5s" repeatCount="indefinite" />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0; 5,10; -5,20; 5,30; 0,30"
          dur="10s"
          begin="2.5s"
          repeatCount="indefinite"
        />
      </circle>
    </g>
  );
};

export default StarElement;
