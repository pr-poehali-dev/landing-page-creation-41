import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import AnimatedIcon from "@/components/AnimatedIcon";
import AnimatedBackground from "@/components/AnimatedBackground";
import AnimatedCounter from "@/components/AnimatedCounter";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const ContentSections = () => {
  const promiseCards = useIntersectionObserver();
  const formatCards = useIntersectionObserver();
  const timelineCards = useIntersectionObserver();
  const targetCards = useIntersectionObserver();
  const pricingCards = useIntersectionObserver();

  return (
    <>
      <section id="promise" className="py-12 md:py-20 px-4 relative bg-[#111722] border-t-2 border-[#C89A5A]/20">
        <AnimatedBackground variant="light" />
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-8">
            <AnimatedIcon type="promise" className="w-28 h-28 md:w-32 md:h-32" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-center text-[#F7BA72] mb-12">
            Как может выглядеть твоя жизнь через 8 недель
          </h2>
          
          <div ref={promiseCards.elementRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { iconName: "Shield", title: "Уверенность в границах", text: "Говоришь да/нет, не предавая себя" },
              { iconName: "Sparkles", title: "Восстановление чувствительности", text: "Тело откликается на нежность" },
              { iconName: "HeartHandshake", title: "Безопасность в близости", text: "Место опоры, не поле боя" },
              { iconName: "Star", title: "Свобода от стыда", text: "Не стыдишься чувств и желаний" },
              { iconName: "ShieldCheck", title: "Инструменты для себя", text: "Знаешь, как поддерживать себя" }
            ].map((item, idx) => (
              <Card key={idx} className={`p-4 md:p-6 bg-[#1C2330]/80 backdrop-blur-sm border-2 border-[#C89A5A]/30 hover:border-[#F7BA72] transition-all hover:shadow-[0_0_25px_rgba(247,186,114,0.2)] fade-in-up modern-icon-card ${promiseCards.isVisible ? 'visible' : ''} stagger-${idx + 1}`}>
                <div className="mb-4 flex justify-center relative">
                  <div className="absolute top-0 left-0 w-8 h-8 border-l border-t border-[#C89A5A]/40"></div>
                  <Icon name={item.iconName} className="w-10 h-10 md:w-12 md:h-12 text-[#F7BA72] modern-animated-icon" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-[#FFDEB5]">{item.title}</h3>
                <p className="text-sm md:text-base text-[#FFDEB5]/70">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="format" className="py-12 md:py-20 px-4 bg-[#1C2330] relative backdrop-blur-sm border-t-2 border-[#C89A5A]/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-8">
            <AnimatedIcon type="format" className="w-28 h-28 md:w-32 md:h-32" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-center text-[#F7BA72] mb-4">
            Что такое мой курс и закрытая группа
          </h2>
          <p className="text-xl text-center text-[#FFDEB5]/80 mb-12">
            Три мощных инструмента для восстановления
          </p>
          
          <div ref={formatCards.elementRef} className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              { iconName: "BookOpen", title: "Обучающий курс", features: ["8 модулей видео/аудио", "Психоэдукация", "Домашние задания", "Материалы навсегда"] },
              { iconName: "Users", title: "Закрытая группа", features: ["1 встреча/неделю 2ч", "6-8 участниц", "Онлайн + очно Владивосток", "Обсуждение и поддержка"] },
              { iconName: "MessageCircleHeart", title: "Поддержка 24/7", features: ["Telegram-чат", "Ответы на вопросы", "Напоминания", "Доступ после курса"] }
            ].map((card, idx) => (
              <Card key={idx} className={`p-6 md:p-8 border-2 border-[#C89A5A]/40 hover:border-[#F7BA72] transition-all hover:shadow-[0_0_30px_rgba(247,186,114,0.25)] bg-gradient-to-b from-[#111722]/80 to-[#C89A5A]/10 fade-in-up modern-format-card ${formatCards.isVisible ? 'visible' : ''} stagger-${idx + 1}`}>
                <div className="mb-4 md:mb-6 flex justify-center">
                  <div className="hero-gradient-bg p-3 md:p-4 rounded-full shadow-[0_0_20px_rgba(247,186,114,0.3)]">
                    <Icon name={card.iconName} className="w-12 h-12 md:w-14 md:h-14 text-[#111722] modern-format-icon" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-6 text-center text-[#FFDEB5]">{card.title}</h3>
                <ul className="space-y-3">
                  {card.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-[#F7BA72] mt-0.5 flex-shrink-0 icon-hover" />
                      <span className="text-[#FFDEB5]/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="timeline" className="py-12 md:py-20 px-4 relative bg-[#111722] border-t-2 border-[#C89A5A]/20">
        <AnimatedBackground variant="accent" />
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-8">
            <AnimatedIcon type="timeline" className="w-40 h-28 md:w-48 md:h-32" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-center text-[#F7BA72] mb-8">
            Твой путь: <AnimatedCounter end={8} suffix=" недель" className="text-[#FFDEB5]" /> шаг за шагом
          </h2>
          
          <div className="flex justify-center gap-6 md:gap-8 lg:gap-16 mb-12 md:mb-16 flex-wrap">
            <div className="text-center">
              <div className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#F7BA72] mb-2 hero-text-glow">
                <AnimatedCounter end={8} />
              </div>
              <p className="text-sm md:text-base text-[#FFDEB5]/70">встреч в группе</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#F7BA72] mb-2 hero-text-glow">
                <AnimatedCounter end={6} suffix="-8" />
              </div>
              <p className="text-sm md:text-base text-[#FFDEB5]/70">участниц</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#F7BA72] mb-2 hero-text-glow">
                <AnimatedCounter end={16} />
              </div>
              <p className="text-sm md:text-base text-[#FFDEB5]/70">часов работы</p>
            </div>
          </div>
          
          <div ref={timelineCards.elementRef} className="space-y-8">
            {[
              { weeks: "1-2", title: "Понимание травмы", items: ["Что такое травма", "Почему так реагируешь", "Нормализация"] },
              { weeks: "3-4", title: "Безопасность", items: ["Техники дыхания", "Возврат в тело", "Якорь безопасности"] },
              { weeks: "5-6", title: "Чувствительность", items: ["Телесный контакт", "Желания и границы", "Работа с телом"] },
              { weeks: "7-8", title: "Сексуальность и интеграция", items: ["Возбуждение и оргазм", "План поддержки", "Ритуал завершения"] }
            ].map((phase, idx) => (
              <Card key={idx} className={`p-6 md:p-8 bg-[#1C2330]/80 backdrop-blur-sm border-2 border-[#C89A5A]/30 hover:border-[#F7BA72] transition-all fade-in-up timeline-card hover:shadow-[0_0_25px_rgba(247,186,114,0.2)] ${timelineCards.isVisible ? 'visible' : ''} stagger-${idx + 1} relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-16 h-16 border-r border-t border-[#C89A5A]/30"></div>
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full hero-gradient-bg flex items-center justify-center text-lg font-bold timeline-badge text-[#111722] shadow-[0_0_20px_rgba(247,186,114,0.4)]">
                      {phase.weeks}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold mb-3 text-[#FFDEB5]">{phase.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {phase.items.map((item, i) => (
                        <span key={i} className="bg-[#C89A5A]/20 text-[#FFDEB5] px-3 py-1 rounded-full text-sm border border-[#C89A5A]/30">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 bg-[#1C2330] relative backdrop-blur-sm border-t-2 border-[#C89A5A]/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-[#F7BA72] mb-8 md:mb-12">
            Для кого программа
          </h2>
          
          <div ref={targetCards.elementRef} className="grid md:grid-cols-2 gap-6 md:gap-8">
            <Card className={`p-6 md:p-8 border-2 border-[#C89A5A]/40 bg-[#C89A5A]/10 fade-in-up hover:shadow-[0_0_25px_rgba(247,186,114,0.2)] ${targetCards.isVisible ? 'visible' : ''} stagger-1`}>
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-[#FFDEB5] flex items-center gap-2">
                <Icon name="Check" size={24} className="text-[#F7BA72]" />
                Подходит
              </h3>
              <ul className="space-y-2 md:space-y-3">
                {[
                  "Пережила насилие/манипуляции",
                  "Близость даётся тяжело",
                  "Знакомы стыд и вина",
                  "Хочешь восстановить связь с телом",
                  "Готова работать системно"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Icon name="Heart" size={20} className="text-[#F7BA72] mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-base text-[#FFDEB5]">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className={`p-6 md:p-8 border-2 border-[#C89A5A]/20 bg-[#111722]/70 fade-in-up ${targetCards.isVisible ? 'visible' : ''} stagger-2`}>
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-[#FFDEB5]/70 flex items-center gap-2">
                <Icon name="X" size={24} className="text-[#FFDEB5]/50" />
                Не подходит
              </h3>
              <ul className="space-y-2 md:space-y-3">
                {[
                  "Ожидаешь волшебную таблетку",
                  "Не готова к конфиденциальности",
                  "Нужна только теория",
                  "Острые состояния",
                  "Цель - критиковать"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Icon name="Minus" size={20} className="text-[#FFDEB5]/40 mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-base text-[#FFDEB5]/60">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 relative bg-[#111722] border-t-2 border-[#C89A5A]/20">
        <AnimatedBackground variant="light" className="opacity-60" />
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#1C2330] rounded-2xl p-6 md:p-8 lg:p-12 border-2 border-[#C89A5A]/40 shadow-[0_0_40px_rgba(247,186,114,0.15)]">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full hero-gradient-bg flex items-center justify-center text-[#111722] text-4xl md:text-5xl font-bold shadow-[0_0_30px_rgba(247,186,114,0.4)]">
                  АВ
                </div>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#F7BA72] mb-2">Анна Ветрюк</h2>
                <p className="text-lg md:text-xl text-[#FFDEB5] font-medium mb-4">
                  Психолог, психотерапевт, секс-терапевт
                </p>
                <p className="text-sm md:text-base text-[#FFDEB5]/80 mb-4">
                  5+ лет работы с женской сексуальностью и травмой. Десятки женщин прошли путь от 'я сломана' к опоре на себя.
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-[#FFDEB5]/90"><strong className="text-[#F7BA72]">Подход:</strong> КПТ, работа с телом, сексология</p>
                  <p className="text-[#FFDEB5]/90"><strong className="text-[#F7BA72]">Ценности:</strong> Уважаю границы и темп каждой. Можно быть собой.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 bg-[#1C2330] relative backdrop-blur-sm border-t-2 border-[#C89A5A]/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-[#F7BA72] mb-8 md:mb-16">
            Форматы и стоимость
          </h2>
          
          <div ref={pricingCards.elementRef} className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              { name: "Лайт", icon: "📚", price: "7 900₽", featured: false, features: ["Все модули курса", "Домашние задания", "Без группы", "Без чата"] },
              { name: "Группа+курс", icon: "👥", price: "15 900₽", installment: "5 300₽×3", featured: true, features: ["8 встреч по 2ч", "Все материалы", "Чат поддержки", "Сообщения между встречами"] },
              { name: "Премиум", icon: "💎", price: "27 900₽", installment: "9 300₽×3", featured: false, features: ["Всё из Группа+курс", "+4 индивидуальные сессии", "Персональная работа", "Приоритет поддержки"] }
            ].map((plan, idx) => (
              <Card 
                key={idx} 
                className={`p-6 md:p-8 pricing-card ${plan.featured ? 'border-4 border-[#F7BA72] shadow-[0_0_40px_rgba(247,186,114,0.3)] md:scale-105 bg-gradient-to-b from-[#1C2330] to-[#C89A5A]/10 pricing-card-featured' : 'border-2 border-[#C89A5A]/30 bg-[#111722]/80'} transition-all hover:shadow-[0_0_30px_rgba(247,186,114,0.2)] fade-in-up ${pricingCards.isVisible ? 'visible' : ''} stagger-${idx + 1} relative overflow-hidden`}
              >
                {plan.featured && (
                  <div className="hero-gradient-bg text-[#111722] text-sm font-bold px-4 py-1 rounded-full inline-block mb-4 shadow-[0_0_15px_rgba(247,186,114,0.4)]">
                    Популярный
                  </div>
                )}
                <div className="absolute top-0 right-0 w-12 h-12 border-r-2 border-t-2 border-[#C89A5A]/30"></div>
                <div className="text-4xl md:text-5xl mb-4 text-center">{plan.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold text-center mb-2 text-[#FFDEB5]">{plan.name}</h3>
                <p className="text-3xl md:text-4xl font-bold text-center mb-2 text-[#F7BA72] hero-text-glow">{plan.price}</p>
                {plan.installment && (
                  <p className="text-center text-xs md:text-sm text-[#FFDEB5]/70 mb-4 md:mb-6">или {plan.installment}</p>
                )}
                <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-[#F7BA72] mt-0.5 flex-shrink-0" />
                      <span className="text-sm md:text-base text-[#FFDEB5]">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className={`w-full pricing-button ${plan.featured ? 'hero-gradient-bg text-[#111722] hover:brightness-110 pricing-button-featured shadow-[0_0_20px_rgba(247,186,114,0.4)]' : 'pricing-button-standard bg-[#C89A5A]/20 text-[#FFDEB5] hover:bg-[#C89A5A]/30 border border-[#C89A5A]/40'}`}>
                  Выбрать
                </Button>
              </Card>
            ))}
          </div>

          <p className="text-center text-[#FFDEB5]/70 mt-8">
            Рассрочка возможна
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 relative">
        <AnimatedBackground variant="default" className="opacity-50" />
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-primary mb-8 md:mb-12">
            Частые вопросы
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {[
              { q: "Не готова делиться деталями?", a: "Норма. Делись только комфортным. Даже наблюдение помогает." },
              { q: "Стыдно, что нужна группа?", a: "Стыд - частая реакция. В группе увидишь: ты не одна." },
              { q: "Заменяет терапию?", a: "Дополняет. Можно комбинировать (есть премиум-тариф)." },
              { q: "Нет партнера?", a: "Подходит всем. Работаем с отношениями с собой." },
              { q: "Конфиденциально?", a: "100%. Соглашение, псевдонимы возможны." },
              { q: "Станет тяжело?", a: "Упражнения на регуляцию. Можешь взять паузу." }
            ].map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="bg-white border-2 rounded-lg px-4 md:px-6">
                <AccordionTrigger className="text-base md:text-lg font-semibold text-primary hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default ContentSections;