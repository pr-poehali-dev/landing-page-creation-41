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
          rx="35"
          ry="42"
          fill="url(#silhouetteGradient)"
        />

        <path
          d="M 165 95 Q 155 75 160 60 Q 175 45 200 50 Q 225 45 240 60 Q 245 75 235 95 L 200 100 Z"
          fill="url(#silhouetteGradient)"
        />

        <path
          d="M 155 100 Q 145 85 140 70 Q 135 55 145 45 L 155 55 Q 150 70 155 85 Z"
          fill="url(#silhouetteGradient)"
          opacity="0.9"
        />

        <path
          d="M 245 100 Q 255 85 260 70 Q 265 55 255 45 L 245 55 Q 250 70 245 85 Z"
          fill="url(#silhouetteGradient)"
          opacity="0.9"
        />

        <path
          d="M 180 145 Q 185 135 200 135 Q 215 135 220 145"
          fill="url(#silhouetteGradient)"
        />

        <path
          d="M 185 165 Q 190 175 200 175 Q 210 175 215 165 L 215 205 Q 210 215 200 220 Q 190 215 185 205 Z"
          fill="url(#silhouetteGradient)"
        />

        <path
          d="M 185 205 Q 175 210 165 225 Q 155 245 155 270 L 155 305 Q 158 320 165 330 L 185 330 Z"
          fill="url(#silhouetteGradient)"
        />

        <path
          d="M 215 205 Q 225 210 235 225 Q 245 245 245 270 L 245 305 Q 242 320 235 330 L 215 330 Z"
          fill="url(#silhouetteGradient)"
        />

        <path
          d="M 165 330 Q 155 345 155 365 Q 155 380 160 395 L 165 445 Q 165 455 170 465 Q 175 475 185 477 L 190 450 L 185 380 Z"
          fill="url(#silhouetteGradient)"
        />

        <path
          d="M 235 330 Q 245 345 245 365 Q 245 380 240 395 L 235 445 Q 235 455 230 465 Q 225 475 215 477 L 210 450 L 215 380 Z"
          fill="url(#silhouetteGradient)"
        />

        <path
          d="M 185 220 Q 160 230 145 245 Q 130 260 125 275 L 120 285 Q 118 290 120 295 L 130 300 Q 140 290 150 280 Z"
          fill="url(#silhouetteGradient)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 185 220;0 185 220;-20 185 220"
            dur="2s"
            begin="1.5s"
            fill="freeze"
          />
        </path>

        <path
          d="M 215 220 Q 240 230 255 245 Q 270 260 275 275 L 280 285 Q 282 290 280 295 L 270 300 Q 260 290 250 280 Z"
          fill="url(#silhouetteGradient)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 215 220;0 215 220;20 215 220"
            dur="2s"
            begin="1.5s"
            fill="freeze"
          />
        </path>

        <ellipse
          cx="180"
          cy="477"
          rx="20"
          ry="8"
          fill="url(#silhouetteGradient)"
        />

        <ellipse
          cx="220"
          cy="477"
          rx="20"
          ry="8"
          fill="url(#silhouetteGradient)"
        />
      </g>
    </g>
  );
};

export default FemaleSilhouette;
