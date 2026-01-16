interface FemaleSilhouetteProps {
  isVisible: boolean;
}

const FemaleSilhouette = ({ isVisible }: FemaleSilhouetteProps) => {
  if (!isVisible) return null;

  return (
    <g filter="url(#silhouetteGlow)">
      <g opacity="0">
        <animate 
          attributeName="opacity" 
          values="0;0;1;1;0;0" 
          dur="12s" 
          begin="0s" 
          repeatCount="indefinite" 
        />

        <animateTransform
          attributeName="transform"
          type="scale"
          values="0.95;1;0.95"
          dur="6s"
          begin="2s"
          repeatCount="indefinite"
          additive="sum"
        />

        <path
          d="M 200 50 
             Q 185 48 175 55 Q 170 65 172 80 Q 174 90 180 95
             L 180 105 Q 178 115 180 125
             Q 182 140 185 150
             L 185 160
             Q 180 165 175 175 Q 170 190 168 210
             L 168 240 Q 168 255 170 265
             Q 172 280 178 295
             L 178 320 Q 176 335 175 350
             L 175 380 Q 175 400 177 415
             L 177 450 Q 178 465 182 475
             Q 185 480 190 482
             L 192 485
             
             L 200 485
             
             L 208 485
             Q 215 480 218 475 Q 222 465 223 450
             L 223 415 Q 225 400 225 380
             L 225 350 Q 224 335 222 320
             L 222 295 Q 228 280 230 265 Q 232 255 232 240
             L 232 210 Q 230 190 225 175 Q 220 165 215 160
             L 215 150 Q 218 140 220 125 Q 222 115 220 105
             L 220 95 Q 226 90 228 80 Q 230 65 225 55 Q 215 48 200 50 Z"
          fill="url(#silhouetteGradient)"
        />

        <ellipse
          cx="200"
          cy="70"
          rx="22"
          ry="28"
          fill="url(#silhouetteGradient)"
        />

        <path
          d="M 178 60 Q 165 58 158 52 Q 150 45 148 35 Q 148 25 155 20 Q 165 18 172 25 Q 175 35 176 45 Z"
          fill="url(#silhouetteGradient)"
        />

        <path
          d="M 222 60 Q 235 58 242 52 Q 250 45 252 35 Q 252 25 245 20 Q 235 18 228 25 Q 225 35 224 45 Z"
          fill="url(#silhouetteGradient)"
        />

        <path
          d="M 155 30 Q 145 35 138 32 Q 130 28 128 20 Q 130 12 140 15 Q 148 20 152 25 Z"
          fill="url(#silhouetteGradient)"
          opacity="0.8"
        />

        <path
          d="M 245 30 Q 255 35 262 32 Q 270 28 272 20 Q 270 12 260 15 Q 252 20 248 25 Z"
          fill="url(#silhouetteGradient)"
          opacity="0.8"
        />

        <path
          d="M 185 165 Q 165 175 150 190 Q 135 205 130 222 Q 128 235 132 245 L 138 250 Q 145 245 155 235 Q 165 220 172 210 Z"
          fill="url(#silhouetteGradient)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="-5 185 165;-25 185 165;-5 185 165"
            dur="4s"
            begin="3s"
            repeatCount="indefinite"
          />
        </path>

        <path
          d="M 215 165 Q 235 175 250 190 Q 265 205 270 222 Q 272 235 268 245 L 262 250 Q 255 245 245 235 Q 235 220 228 210 Z"
          fill="url(#silhouetteGradient)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="5 215 165;25 215 165;5 215 165"
            dur="4s"
            begin="3s"
            repeatCount="indefinite"
          />
        </path>

        <ellipse
          cx="188"
          cy="485"
          rx="14"
          ry="6"
          fill="url(#silhouetteGradient)"
        />

        <ellipse
          cx="212"
          cy="485"
          rx="14"
          ry="6"
          fill="url(#silhouetteGradient)"
        />

        <path
          d="M 200 265 Q 185 268 175 275 Q 170 282 172 290 Q 175 298 185 300 Q 195 300 200 295 Z"
          fill="url(#silhouetteGradient)"
          opacity="0.6"
        />

        <path
          d="M 200 265 Q 215 268 225 275 Q 230 282 228 290 Q 225 298 215 300 Q 205 300 200 295 Z"
          fill="url(#silhouetteGradient)"
          opacity="0.6"
        />
      </g>
    </g>
  );
};

export default FemaleSilhouette;
