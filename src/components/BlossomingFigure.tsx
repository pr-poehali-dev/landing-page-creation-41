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
        viewBox="0 0 400 500"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
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

          <clipPath id="revealClip">
            <rect x="0" y="0" width="400" height="500">
              <animate
                attributeName="y"
                values="500;0"
                dur="3s"
                fill="freeze"
                begin="0s"
                calcMode="spline"
                keySplines="0.4 0 0.2 1"
              />
            </rect>
          </clipPath>
        </defs>

        {/* ЭЛЕМЕНТ 1: ВОЛНЫ (внизу) */}
        {isVisible && (
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
        )}

        {/* ЭЛЕМЕНТ 2: ЛЕПЕСТОК (слева от талии) */}
        {isVisible && (
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
        )}

        {/* ЭЛЕМЕНТ 3: ЗВЁЗДОЧКА (справа вверху от головы) */}
        {isVisible && (
          <g filter="url(#starGlow)" opacity="0">
            <animate attributeName="opacity" values="0;0" dur="1.5s" fill="freeze" />
            <animate attributeName="opacity" values="0;0.3" dur="1s" begin="1.5s" fill="freeze" />

            {/* Гало */}
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

            {/* Звезда */}
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

            {/* Центральная точка */}
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
        )}

        {/* ГЛАВНЫЙ ЭЛЕМЕНТ: СИЛУЭТ ЖЕНЩИНЫ */}
        {isVisible && (
          <g 
            filter="url(#silhouetteGlow)"
            clipPath="url(#revealClip)"
          >
            {/* Гало вокруг фигуры */}
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

            {/* Основной силуэт */}
            <g>
              {/* Дыхание и вибрация */}
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

              {/* Голова */}
              <ellipse
                cx="200"
                cy="120"
                rx="40"
                ry="50"
                fill="url(#silhouetteGradient)"
              />

              {/* Шея */}
              <rect
                x="190"
                y="165"
                width="20"
                height="25"
                fill="url(#silhouetteGradient)"
                rx="5"
              />

              {/* Торс */}
              <ellipse
                cx="200"
                cy="240"
                rx="60"
                ry="80"
                fill="url(#silhouetteGradient)"
              />

              {/* Талия */}
              <ellipse
                cx="200"
                cy="280"
                rx="45"
                ry="30"
                fill="url(#silhouetteGradient)"
              />

              {/* Бёдра */}
              <ellipse
                cx="200"
                cy="330"
                rx="55"
                ry="50"
                fill="url(#silhouetteGradient)"
              />

              {/* Левая нога */}
              <rect
                x="165"
                y="370"
                width="25"
                height="90"
                fill="url(#silhouetteGradient)"
                rx="12"
              />

              {/* Правая нога */}
              <rect
                x="210"
                y="370"
                width="25"
                height="90"
                fill="url(#silhouetteGradient)"
                rx="12"
              />

              {/* Левая рука */}
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

              {/* Правая рука */}
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

              {/* Левая ступня */}
              <ellipse
                cx="175"
                cy="465"
                rx="18"
                ry="10"
                fill="url(#silhouetteGradient)"
              />

              {/* Правая ступня */}
              <ellipse
                cx="225"
                cy="465"
                rx="18"
                ry="10"
                fill="url(#silhouetteGradient)"
              />
            </g>
          </g>
        )}
      </svg>
    </div>
  );
};

export default BlossomingFigure;
