import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";

interface HeroSectionProps {
  scrollToForm: () => void;
}

const HeroSection = ({ scrollToForm }: HeroSectionProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#f5f1ed]/90 backdrop-blur-md shadow-sm' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-light tracking-[0.3em] text-[#2d2d2d]">
            VETRUK
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#promise" className="text-sm text-[#2d2d2d] hover:text-[#a87c4c] transition-colors">
              О программе
            </a>
            <a href="#format" className="text-sm text-[#2d2d2d] hover:text-[#a87c4c] transition-colors">
              Формат
            </a>
            <a href="#timeline" className="text-sm text-[#2d2d2d] hover:text-[#a87c4c] transition-colors">
              График
            </a>
            <a href="#contact" className="text-sm text-[#2d2d2d] hover:text-[#a87c4c] transition-colors">
              Контакт
            </a>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-6xl md:text-7xl font-light tracking-wider text-[#2d2d2d] leading-tight">
                ВЕТРЮК<br/>АННА
              </h1>
              
              <h2 className="text-2xl text-[#a87c4c] font-normal leading-relaxed">
                Закрытая терапевтическая группа<br/>и курс по женской сексуальности
              </h2>
              
              <p className="text-lg italic text-[#a87c4c] font-light">
                Без стыда. Без давления.
              </p>
              
              <p className="text-base text-gray-600 leading-relaxed max-w-xl">
                Программа восстановления женской сексуальности и работы с травмой. 
                Безопасное пространство для исцеления, роста и возвращения к себе.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-[#a87c4c] to-[#8d6a3e] hover:from-[#8d6a3e] hover:to-[#75562f] text-white rounded-full px-8 py-6 text-base transition-all shadow-lg hover:shadow-xl"
                  onClick={() => window.open('https://t.me/annavetruk', '_blank')}
                >
                  <Icon name="Send" className="mr-2" size={20} />
                  Написать в Telegram
                </Button>
                
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#a87c4c] text-[#a87c4c] hover:bg-[#a87c4c] hover:text-white rounded-full px-8 py-6 text-base transition-all"
                  onClick={scrollToForm}
                >
                  Записаться в группу
                </Button>
              </div>

              <div className="flex flex-wrap gap-3 pt-2 text-sm">
                <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Icon name="Calendar" size={18} className="text-[#a87c4c]" />
                  <span className="text-gray-700">12 недель</span>
                </div>
                <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Icon name="Users" size={18} className="text-[#a87c4c]" />
                  <span className="text-gray-700">6-8 женщин</span>
                </div>
                <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Icon name="Monitor" size={18} className="text-[#a87c4c]" />
                  <span className="text-gray-700">Онлайн</span>
                </div>
              </div>
            </div>

            <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative aspect-[3/4] bg-gradient-to-br from-[#a87c4c]/20 to-[#8d6a3e]/10 rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-[#a87c4c]/30">
                    <Icon name="User" size={120} />
                    <p className="text-sm mt-4 italic">Ваше фото будет здесь</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#a87c4c]/60">
          <span className="text-xs tracking-wider">ПРОКРУТИТЕ ВНИЗ</span>
          <Icon name="ChevronDown" size={20} className="animate-bounce" />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
