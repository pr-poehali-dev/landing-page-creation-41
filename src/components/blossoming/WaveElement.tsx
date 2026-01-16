interface WaveElementProps {
  isVisible: boolean;
}

const WaveElement = ({ isVisible }: WaveElementProps) => {
  if (!isVisible) return null;

  return (
    <g className="wave-group">
      <path
        d="M 50 420 Q 90 410 130 420 Q 170 430 210 420 Q 250 410 290 420 Q 330 430 370 420"
        fill="none"
        stroke="#7DDDC7"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0"
      >
        <animate attributeName="opacity" values="0;0.7" dur="1.5s" begin="0.5s" fill="freeze" />
        <animate 
          attributeName="d" 
          values="
            M 50 420 Q 90 410 130 420 Q 170 430 210 420 Q 250 410 290 420 Q 330 430 370 420;
            M 30 420 Q 70 410 110 420 Q 150 430 190 420 Q 230 410 270 420 Q 310 430 350 420;
            M 10 420 Q 50 410 90 420 Q 130 430 170 420 Q 210 410 250 420 Q 290 430 330 420;
            M 50 420 Q 90 410 130 420 Q 170 430 210 420 Q 250 410 290 420 Q 330 430 370 420
          "
          dur="2s"
          begin="2s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0; 0,-5; 0,0"
          dur="3s"
          begin="2s"
          repeatCount="indefinite"
        />
      </path>

      <path
        d="M 60 440 Q 100 432 140 440 Q 180 448 220 440 Q 260 432 300 440 Q 340 448 380 440"
        fill="none"
        stroke="#7DDDC7"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0"
      >
        <animate attributeName="opacity" values="0;0.6" dur="1.5s" begin="0.7s" fill="freeze" />
        <animate 
          attributeName="d" 
          values="
            M 60 440 Q 100 432 140 440 Q 180 448 220 440 Q 260 432 300 440 Q 340 448 380 440;
            M 40 440 Q 80 432 120 440 Q 160 448 200 440 Q 240 432 280 440 Q 320 448 360 440;
            M 20 440 Q 60 432 100 440 Q 140 448 180 440 Q 220 432 260 440 Q 300 448 340 440;
            M 60 440 Q 100 432 140 440 Q 180 448 220 440 Q 260 432 300 440 Q 340 448 380 440
          "
          dur="2s"
          begin="2.3s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0; 0,-4; 0,0"
          dur="3s"
          begin="2.3s"
          repeatCount="indefinite"
        />
      </path>

      <path
        d="M 70 460 Q 110 454 150 460 Q 190 466 230 460 Q 270 454 310 460 Q 350 466 390 460"
        fill="none"
        stroke="#7DDDC7"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0"
      >
        <animate attributeName="opacity" values="0;0.5" dur="1.5s" begin="0.9s" fill="freeze" />
        <animate 
          attributeName="d" 
          values="
            M 70 460 Q 110 454 150 460 Q 190 466 230 460 Q 270 454 310 460 Q 350 466 390 460;
            M 50 460 Q 90 454 130 460 Q 170 466 210 460 Q 250 454 290 460 Q 330 466 370 460;
            M 30 460 Q 70 454 110 460 Q 150 466 190 460 Q 230 454 270 460 Q 310 466 350 460;
            M 70 460 Q 110 454 150 460 Q 190 466 230 460 Q 270 454 310 460 Q 350 466 390 460
          "
          dur="2s"
          begin="2.6s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0; 0,-3; 0,0"
          dur="3s"
          begin="2.6s"
          repeatCount="indefinite"
        />
      </path>
    </g>
  );
};

export default WaveElement;
