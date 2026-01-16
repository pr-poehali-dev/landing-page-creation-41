interface PetalElementProps {
  isVisible: boolean;
}

const PetalElement = ({ isVisible }: PetalElementProps) => {
  if (!isVisible) return null;

  return (
    <g filter="url(#petalGlow)" opacity="0">
      <animate attributeName="opacity" values="0;0" dur="1s" fill="freeze" />
      <animate attributeName="opacity" values="0;1" dur="1s" begin="1s" fill="freeze" />
      
      <path
        d="M 80 280 Q 60 260 50 230 Q 45 200 55 180 Q 70 200 75 230 Q 78 260 80 280 Z"
        fill="#F0C4D9"
        fillOpacity="0.15"
        stroke="#F0C4D9"
        strokeWidth="2"
        strokeOpacity="0.8"
      >
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0; 0,0"
          dur="1s"
          begin="0s"
          fill="freeze"
        />
        <animateTransform
          attributeName="transform"
          type="scale"
          values="0.3;1"
          dur="1s"
          begin="1s"
          fill="freeze"
          additive="sum"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="-45 65 230;0 65 230"
          dur="1s"
          begin="1s"
          fill="freeze"
          additive="sum"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 65 230;360 65 230"
          dur="8s"
          begin="2s"
          repeatCount="indefinite"
          additive="sum"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 65 230;-10 65 230;10 65 230;0 65 230"
          dur="4s"
          begin="2s"
          repeatCount="indefinite"
          additive="sum"
        />
      </path>

      <ellipse
        cx="65"
        cy="230"
        rx="40"
        ry="60"
        fill="#F0C4D9"
        opacity="0"
      >
        <animate attributeName="opacity" values="0.3;0.4;0.2;0.4;0.3" dur="3s" begin="2s" repeatCount="indefinite" />
      </ellipse>
    </g>
  );
};

export default PetalElement;
