interface FemaleSilhouetteProps {
  isVisible: boolean;
}

const FemaleSilhouette = ({ isVisible }: FemaleSilhouetteProps) => {
  if (!isVisible) return null;

  return (
    <g 
      filter="url(#silhouetteGlow)"
      clipPath="url(#revealClip)"
    >
      <ellipse
        cx="200"
        cy="250"
        rx="100"
        ry="180"
        fill="url(#silhouetteGradient)"
        opacity="0"
      >
        <animate attributeName="opacity" values="0;0;0.3;0.5;0.3" dur="7s" begin="3s" repeatCount="indefinite" />
      </ellipse>

      <g>
        <animateTransform
          attributeName="transform"
          type="scale"
          values="0.98;1.02;0.98"
          dur="2s"
          begin="0s"
          repeatCount="indefinite"
          additive="sum"
        />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0; 0,-1; 0,-2; 0,-1; 0,0"
          dur="3s"
          begin="4s"
          repeatCount="indefinite"
          additive="sum"
        />

        <ellipse
          cx="200"
          cy="120"
          rx="40"
          ry="50"
          fill="url(#silhouetteGradient)"
        />

        <rect
          x="190"
          y="165"
          width="20"
          height="25"
          fill="url(#silhouetteGradient)"
          rx="5"
        />

        <ellipse
          cx="200"
          cy="240"
          rx="60"
          ry="80"
          fill="url(#silhouetteGradient)"
        />

        <ellipse
          cx="200"
          cy="280"
          rx="45"
          ry="30"
          fill="url(#silhouetteGradient)"
        />

        <ellipse
          cx="200"
          cy="330"
          rx="55"
          ry="50"
          fill="url(#silhouetteGradient)"
        />

        <rect
          x="165"
          y="370"
          width="25"
          height="90"
          fill="url(#silhouetteGradient)"
          rx="12"
        />

        <rect
          x="210"
          y="370"
          width="25"
          height="90"
          fill="url(#silhouetteGradient)"
          rx="12"
        />

        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 160 190;0 160 190;-15 160 190"
            dur="2s"
            begin="1.5s"
            fill="freeze"
          />
          <rect
            x="135"
            y="190"
            width="20"
            height="80"
            fill="url(#silhouetteGradient)"
            rx="10"
          />
          <ellipse
            cx="145"
            cy="275"
            rx="12"
            ry="15"
            fill="url(#silhouetteGradient)"
          />
        </g>

        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 240 190;0 240 190;15 240 190"
            dur="2s"
            begin="1.5s"
            fill="freeze"
          />
          <rect
            x="245"
            y="190"
            width="20"
            height="80"
            fill="url(#silhouetteGradient)"
            rx="10"
          />
          <ellipse
            cx="255"
            cy="275"
            rx="12"
            ry="15"
            fill="url(#silhouetteGradient)"
          />
        </g>

        <ellipse
          cx="175"
          cy="465"
          rx="18"
          ry="10"
          fill="url(#silhouetteGradient)"
        />

        <ellipse
          cx="225"
          cy="465"
          rx="18"
          ry="10"
          fill="url(#silhouetteGradient)"
        />
      </g>
    </g>
  );
};

export default FemaleSilhouette;
