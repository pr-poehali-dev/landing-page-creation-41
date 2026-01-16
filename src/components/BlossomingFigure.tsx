import { useEffect, useState } from 'react';
import SVGDefs from './blossoming/SVGDefs';
import WaveElement from './blossoming/WaveElement';
import PetalElement from './blossoming/PetalElement';
import StarElement from './blossoming/StarElement';
import FemaleSilhouette from './blossoming/FemaleSilhouette';

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
        <SVGDefs />
        <WaveElement isVisible={isVisible} />
        <PetalElement isVisible={isVisible} />
        <StarElement isVisible={isVisible} />
        <FemaleSilhouette isVisible={isVisible} />
      </svg>
    </div>
  );
};

export default BlossomingFigure;
