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
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#111722]/90 backdrop-blur-md shadow-lg shadow-[#C89A5A]/10' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <img 
            src="https://cdn.poehali.dev/projects/1826759d-b015-438c-8385-e4c051567c5b/files/fb8cf0c2-677f-49f5-bab7-9bc6880e4c98.jpg" 
            alt="Камерный клуб" 
            className="h-12 object-contain"
          />
          <div className="hidden md:flex items-center gap-8">
            <a href="#promise" className="text-sm text-[#FFDEB5] hover:text-[#F7BA72] transition-colors">
              О программе
            </a>
            <a href="#format" className="text-sm text-[#FFDEB5] hover:text-[#F7BA72] transition-colors">
              Формат
            </a>
            <a href="#timeline" className="text-sm text-[#FFDEB5] hover:text-[#F7BA72] transition-colors">
              График
            </a>
            <a href="#contact" className="text-sm text-[#FFDEB5] hover:text-[#F7BA72] transition-colors">
              Контакт
            </a>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-5xl md:text-6xl font-light tracking-wide text-[#F7BA72] leading-tight hero-text-glow">
                Камерный клуб<br/>женской сексуальности
              </h1>
              
              <h2 className="text-xl md:text-2xl text-[#FFDEB5] font-light leading-relaxed">
                8 недель закрытых онлайн‑встреч для женщин 25–45:<br/>
                секс, эмоции, жизнь без стыда.
              </h2>
              
              <p className="text-base text-[#FFDEB5]/80 leading-relaxed max-w-xl">
                Программа восстановления женской сексуальности и работы с травмой. 
                Безопасное пространство для исцеления, роста и возвращения к себе.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg"
                  className="hero-gradient-bg hover:brightness-110 text-[#111722] rounded-full px-8 py-6 text-base font-medium transition-all shadow-lg hover:shadow-[0_0_30px_rgba(247,186,114,0.4)] border-2 border-[#C89A5A]"
                  onClick={() => window.open('https://t.me/annavetruk', '_blank')}
                >
                  <Icon name="Send" className="mr-2" size={20} />
                  Написать в Telegram
                </Button>
                
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#C89A5A] text-[#F7BA72] hover:bg-[#C89A5A]/20 hover:text-[#FFDEB5] rounded-full px-8 py-6 text-base transition-all"
                  onClick={scrollToForm}
                >
                  Записаться в группу
                </Button>
              </div>

              <div className="flex flex-wrap gap-3 pt-2 text-sm">
                <div className="flex items-center gap-2 bg-[#1C2330]/80 backdrop-blur-sm px-4 py-2 rounded-full border border-[#C89A5A]/30">
                  <Icon name="Calendar" size={18} className="text-[#F7BA72]" />
                  <span className="text-[#FFDEB5]">8 недель</span>
                </div>
                <div className="flex items-center gap-2 bg-[#1C2330]/80 backdrop-blur-sm px-4 py-2 rounded-full border border-[#C89A5A]/30">
                  <Icon name="Users" size={18} className="text-[#F7BA72]" />
                  <span className="text-[#FFDEB5]">6-8 женщин</span>
                </div>
                <div className="flex items-center gap-2 bg-[#1C2330]/80 backdrop-blur-sm px-4 py-2 rounded-full border border-[#C89A5A]/30">
                  <Icon name="Monitor" size={18} className="text-[#F7BA72]" />
                  <span className="text-[#FFDEB5]">Онлайн</span>
                </div>
              </div>
            </div>

            <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative aspect-[3/4] bg-gradient-to-br from-[#C89A5A]/10 to-[#F7BA72]/5 rounded-3xl overflow-hidden shadow-2xl border-2 border-[#C89A5A]/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-[#C89A5A]/40">
                    <Icon name="User" size={120} />
                    <p className="text-sm mt-4 italic text-[#FFDEB5]/50">Ваше фото будет здесь</p>
                  </div>
                </div>
                <div className="absolute top-4 left-4 w-20 h-20 border-l-2 border-t-2 border-[#C89A5A]/40"></div>
                <div className="absolute bottom-4 right-4 w-20 h-20 border-r-2 border-b-2 border-[#C89A5A]/40"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#C89A5A]/70">
          <span className="text-xs tracking-wider">ПРОКРУТИТЕ ВНИЗ</span>
          <Icon name="ChevronDown" size={20} className="animate-bounce" />
        </div>
      </section>
    </>
  );
};

export default HeroSection;