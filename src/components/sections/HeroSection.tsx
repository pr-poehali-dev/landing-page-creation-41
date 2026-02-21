import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";

interface HeroSectionProps {
  scrollToForm: () => void;
}

const navLinks = [
  { href: "#program", label: "Программа" },
  { href: "#for-whom", label: "Для кого" },
  { href: "#pricing", label: "Тарифы" },
  { href: "#testimonials", label: "Отзывы" },
  { href: "#about", label: "Обо мне" },
];

const HeroSection = ({ scrollToForm }: HeroSectionProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#111722]/90 backdrop-blur-md shadow-lg shadow-[#C89A5A]/10' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between md:justify-end">
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-[#C89A5A]/40 text-[#F7BA72] hover:bg-[#C89A5A]/20 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Меню"
          >
            <Icon name={mobileOpen ? "X" : "Menu"} size={22} />
          </button>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-[#FFDEB5] hover:text-[#F7BA72] transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-[#111722]/95 backdrop-blur-lg transition-all duration-300 md:hidden ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMobileOpen(false)}
      >
        <div
          className={`flex flex-col items-center justify-center h-full gap-6 transition-transform duration-300 ${mobileOpen ? 'translate-y-0' : '-translate-y-8'}`}
          onClick={(e) => e.stopPropagation()}
        >
          {navLinks.map((link, idx) => (
            <a
              key={link.href}
              href={link.href}
              className="text-2xl font-light text-[#FFDEB5] hover:text-[#F7BA72] transition-colors"
              style={{ transitionDelay: `${idx * 50}ms` }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-4 pt-4 border-t border-[#C89A5A]/30 w-48 text-center">
            <a
              href="https://t.me/Annavetryuk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-lg text-[#F7BA72] hover:text-[#FFDEB5] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              <Icon name="Send" size={18} />
              Telegram
            </a>
          </div>
        </div>
      </div>

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
                  onClick={() => window.open('https://t.me/Annavetryuk', '_blank')}
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
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden">
                <div 
                  className="absolute inset-0 scale-110"
                  style={{
                    backgroundImage: 'url(https://cdn.poehali.dev/projects/1826759d-b015-438c-8385-e4c051567c5b/bucket/b8ae8e3b-4795-4d3e-818b-479a0cf31b90.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center top',
                    filter: 'blur(20px) brightness(0.5) saturate(0.7)',
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#111722]/40 via-transparent to-[#111722]/60"></div>
                <img 
                  src="https://cdn.poehali.dev/projects/1826759d-b015-438c-8385-e4c051567c5b/bucket/b8ae8e3b-4795-4d3e-818b-479a0cf31b90.jpg"
                  alt="Анна"
                  className="relative z-10 w-full h-full object-cover object-top"
                  style={{
                    maskImage: 'radial-gradient(ellipse 85% 90% at 50% 40%, black 60%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 85% 90% at 50% 40%, black 60%, transparent 100%)',
                  }}
                />
                <div className="absolute inset-0 z-20 rounded-3xl shadow-[inset_0_0_60px_rgba(17,23,34,0.6)]"></div>
                <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#111722] via-transparent to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 z-20 h-1/4 bg-gradient-to-t from-[#111722] to-transparent"></div>
              </div>
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#C89A5A]/20 via-transparent to-[#F7BA72]/10 -z-10 blur-xl"></div>
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