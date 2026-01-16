import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import BlossomingFigure from "@/components/BlossomingFigure";

interface HeroSectionProps {
  scrollToForm: () => void;
}

const HeroSection = ({ scrollToForm }: HeroSectionProps) => {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 relative hero-gradient-bg overflow-hidden">
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <BlossomingFigure className="w-[500px] h-[600px] md:w-[600px] md:h-[700px] lg:w-[700px] lg:h-[800px] opacity-30" />
      </div>
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white/90 mb-4 md:mb-6 leading-tight hero-text-glow px-4">
          Верни себе право на удовольствие и близость
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white/80 mb-6 md:mb-8 max-w-3xl mx-auto px-4" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
          Закрытая терапевтическая группа и курс по женской сексуальности. Без стыда. Без давления.
        </p>
        
        <div className="flex flex-wrap gap-2 md:gap-4 justify-center mb-8 text-sm md:text-base">
          <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md px-3 md:px-4 py-2 rounded-full shadow-lg info-badge border border-white/50">
            <Icon name="Calendar" size={20} className="text-[#8a2be2] icon-hover" />
            <span>12 недель работы с телом и психикой</span>
          </div>
          <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md px-3 md:px-4 py-2 rounded-full shadow-lg info-badge border border-white/50">
            <Icon name="Users" size={20} className="text-[#8a2be2] icon-hover" />
            <span>Группа 6-8 женщин</span>
          </div>

          <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md px-3 md:px-4 py-2 rounded-full shadow-lg info-badge border border-white/50">
            <Icon name="Monitor" size={20} className="text-[#8a2be2] icon-hover" />
            <span>Онлайн + материалы</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <Button size="lg" onClick={scrollToForm} className="text-base md:text-lg px-6 md:px-8 py-4 md:py-6 bg-white/95 text-[#8a2be2] shadow-lg hero-cta-button border-2 border-white/50">
            <Icon name="UserPlus" size={20} className="mr-2" />
            Записаться в группу
          </Button>
          <Button size="lg" onClick={scrollToForm} className="text-base md:text-lg px-6 md:px-8 py-4 md:py-6 bg-white/95 text-[#8a2be2] shadow-lg hero-cta-button border-2 border-white/50">
            <Icon name="FileText" size={20} className="mr-2" />
            Получить программу
          </Button>
        </div>

        <p className="text-sm md:text-base text-white/70" style={{ textShadow: '0 1px 5px rgba(0,0,0,0.3)' }}>
          Старт: 20 января • Мест: 8
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
