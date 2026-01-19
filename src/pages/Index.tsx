import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f1ed] via-[#f5f1ed] to-[#ebe4dc] relative overflow-hidden">
      {/* Floating spheres */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-[10%] w-64 h-64 bg-[#a87c4c] rounded-full blur-3xl opacity-10 animate-float-slow"></div>
        <div className="absolute top-[40%] right-[15%] w-96 h-96 bg-[#a87c4c] rounded-full blur-3xl opacity-15 animate-float-slower"></div>
        <div className="absolute bottom-[20%] left-[20%] w-80 h-80 bg-[#c9a882] rounded-full blur-3xl opacity-10 animate-float-medium"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#f5f1ed]/90 backdrop-blur-md shadow-sm' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-light tracking-[0.3em] text-[#2d2d2d]">
            VETRUK
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('program')} className="text-sm text-[#2d2d2d] hover:text-[#a87c4c] transition-colors">
              О программе
            </button>
            <button onClick={() => scrollToSection('program-details')} className="text-sm text-[#2d2d2d] hover:text-[#a87c4c] transition-colors">
              Программа
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-sm text-[#2d2d2d] hover:text-[#a87c4c] transition-colors">
              Отзывы
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-sm text-[#2d2d2d] hover:text-[#a87c4c] transition-colors">
              Контакты
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
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
                  onClick={() => scrollToSection('program')}
                >
                  Узнать подробнее
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#a87c4c]/20 to-transparent rounded-3xl blur-2xl"></div>
                <img 
                  src="https://cdn.poehali.dev/projects/1826759d-b015-438c-8385-e4c051567c5b/files/b2115212-ebde-49c7-9d7d-6b7b8d9bd9e3.jpg"
                  alt="Анна Ветрюк"
                  className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[3/4]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-2">
              <div className="text-5xl font-light text-[#a87c4c]">1000+</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">участниц</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-5xl font-light text-[#a87c4c]">5+</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">лет опыта</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-5xl font-light text-[#a87c4c]">98%</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">положительных отзывов</div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section id="program" className="relative py-24 px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-light text-[#2d2d2d]">О программе</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Моя программа — это путь к восстановлению связи с собой через работу 
              с телом, эмоциями и глубинными убеждениями о сексуальности.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: "Heart",
                title: "Безопасное пространство",
                desc: "Конфиденциальная закрытая группа единомышленниц"
              },
              {
                icon: "Users",
                title: "Групповая поддержка",
                desc: "Работа в формате терапевтической группы с опытным психологом"
              },
              {
                icon: "Sparkles",
                title: "Личная трансформация",
                desc: "Индивидуальный подход к каждой участнице программы"
              },
              {
                icon: "Shield",
                title: "Работа с травмой",
                desc: "Бережная проработка травматичного опыта"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-sm hover:shadow-md transition-all">
                <Icon name={item.icon} className="text-[#a87c4c] mb-4" size={32} />
                <h3 className="text-xl font-normal text-[#2d2d2d] mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section id="program-details" className="relative py-24 px-6 bg-white/50">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-light text-[#2d2d2d]">Что входит в программу</h2>
          </div>

          <div className="space-y-6">
            {[
              "Еженедельные групповые сессии с терапевтом",
              "Практические упражнения и домашние задания",
              "Доступ к закрытому чату участниц",
              "Материалы и рабочие тетради",
              "Индивидуальные консультации при необходимости"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-white/70 backdrop-blur-sm rounded-xl p-6">
                <div className="w-8 h-8 rounded-full bg-[#a87c4c] flex items-center justify-center flex-shrink-0">
                  <Icon name="Check" className="text-white" size={18} />
                </div>
                <p className="text-lg text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative py-24 px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-light text-[#2d2d2d]">Отзывы участниц</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Мария, 32 года",
                text: "Программа помогла мне вернуться к себе. Впервые за много лет я почувствовала, что имею право на удовольствие без стыда."
              },
              {
                name: "Екатерина, 28 лет",
                text: "Безопасное пространство группы и профессионализм Анны позволили мне проработать глубокие травмы. Благодарна за этот опыт."
              },
              {
                name: "Ольга, 35 лет",
                text: "После программы изменилось не только мое отношение к сексуальности, но и к себе в целом. Это был настоящий прорыв."
              },
              {
                name: "Анна, 29 лет",
                text: "Я нашла здесь понимание и поддержку. Группа стала для меня источником силы и вдохновения."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
                <p className="text-gray-700 italic mb-4 leading-relaxed">"{item.text}"</p>
                <p className="text-[#a87c4c] font-normal">— {item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 px-6 bg-gradient-to-br from-[#a87c4c] to-[#8d6a3e]">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-light text-white">Готовы начать?</h2>
          <p className="text-xl text-white/90 leading-relaxed">
            Напишите мне в Telegram, чтобы узнать больше о программе<br/>
            и обсудить участие в ближайшем потоке.
          </p>
          
          <Button 
            size="lg"
            className="bg-white text-[#a87c4c] hover:bg-white/90 rounded-full px-12 py-7 text-lg transition-all shadow-xl hover:shadow-2xl"
            onClick={() => window.open('https://t.me/annavetruk', '_blank')}
          >
            <Icon name="Send" className="mr-2" size={22} />
            Написать в Telegram
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 bg-[#2d2d2d] text-white/70">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <p className="text-sm">© 2025 Анна Ветрюк. Сексолог и психотерапевт.</p>
          <p className="text-xs">Все права защищены</p>
        </div>
      </footer>

      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -30px) scale(1.1); }
        }
        
        @keyframes float-slower {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-40px, 40px) scale(1.15); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, 30px) scale(1.08); }
        }
        
        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }
        
        .animate-float-slower {
          animation: float-slower 25s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float-medium 18s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Index;
