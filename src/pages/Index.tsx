import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import AnimatedIcon from "@/components/AnimatedIcon";
import AnimatedBackground from "@/components/AnimatedBackground";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useState, useRef } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    city: "",
    request: "",
    contact: ""
  });

  const formRef = useRef<HTMLElement>(null);
  const [formHighlight, setFormHighlight] = useState(false);
  const problemCards = useIntersectionObserver();
  const promiseCards = useIntersectionObserver();
  const formatCards = useIntersectionObserver();
  const timelineCards = useIntersectionObserver();
  const targetCards = useIntersectionObserver();
  const pricingCards = useIntersectionObserver();

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setTimeout(() => {
      setFormHighlight(true);
      setTimeout(() => setFormHighlight(false), 2000);
    }, 600);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 -z-10">
        <AnimatedBackground variant="default" />
      </div>
      
      <section className="py-20 px-4 md:py-32 relative">
        <AnimatedBackground variant="light" className="opacity-40" />
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <AnimatedIcon type="hero" className="w-32 h-32 md:w-40 md:h-40" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight">
            Верни себе право на удовольствие и близость
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Закрытая терапевтическая группа и курс по женской сексуальности. Без стыда. Без давления.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-8 text-sm md:text-base">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-sm info-badge">
              <Icon name="Calendar" size={18} className="text-primary icon-hover" />
              <span>12 недель работы с телом и психикой</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-sm info-badge">
              <Icon name="Users" size={18} className="text-primary icon-hover" />
              <span>Группа 6-8 женщин</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-sm info-badge">
              <Icon name="Heart" size={18} className="text-primary icon-hover" />
              <span>Сексолог и психотерапевт</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-sm info-badge">
              <Icon name="Monitor" size={18} className="text-primary icon-hover" />
              <span>Онлайн + материалы</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button size="lg" onClick={scrollToForm} className="text-lg px-8 py-6 bg-primary hero-button-primary">
              Записаться в группу
            </Button>
            <Button size="lg" onClick={scrollToForm} variant="outline" className="text-lg px-8 py-6 border-2 border-primary text-primary hero-button-secondary">
              Получить программу
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            Старт: 20 января • Мест: 8
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white/95 relative backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-8">
            <AnimatedIcon type="problem" className="w-28 h-28 md:w-32 md:h-32" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-center text-primary mb-6">
            Если ты это читаешь, возможно, тебе больно уже слишком долго
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              { iconName: "Zap", title: "Боль вместо удовольствия", text: "Секс = страх, боль или онемение" },
              { iconName: "UserX", title: "Отключенность от тела", text: "Тело выключается в близости" },
              { iconName: "ShieldAlert", title: "Не можешь расслабиться", text: "Даже с тем, кому доверяешь" },
              { iconName: "HeartCrack", title: "Стыд и вина", text: "Не отпускают, хотя не виновата" },
              { iconName: "MessageSquareOff", title: "Молчание", text: "Не знаешь, с кем разделить боль" },
              { iconName: "Ban", title: "Избегание близости", text: "Или согласие через силу" }
            ].map((item, idx) => (
              <Card key={idx} className="p-6 border-2 hover:border-secondary/50 transition-all problem-card">
                <div className="mb-4 flex justify-center">
                  <Icon name={item.iconName} size={48} className="text-[#8a2be2] problem-icon" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary">{item.title}</h3>
                <p className="text-muted-foreground">{item.text}</p>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg md:text-xl text-primary font-medium bg-secondary/10 p-6 rounded-lg inline-block">
              Ты не сломана. Это естественная реакция на травму. С этим можно работать.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 relative">
        <AnimatedBackground variant="light" />
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-8">
            <AnimatedIcon type="promise" className="w-28 h-28 md:w-32 md:h-32" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-center text-primary mb-12">
            Как может выглядеть твоя жизнь через 12 недель
          </h2>
          
          <div ref={promiseCards.elementRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { iconName: "Shield", title: "Уверенность в границах", text: "Говоришь да/нет, не предавая себя" },
              { iconName: "Sparkles", title: "Восстановление чувствительности", text: "Тело откликается на нежность" },
              { iconName: "HeartHandshake", title: "Безопасность в близости", text: "Место опоры, не поле боя" },
              { iconName: "Star", title: "Свобода от стыда", text: "Не стыдишься чувств и желаний" },
              { iconName: "ShieldCheck", title: "Инструменты для себя", text: "Знаешь, как поддерживать себя" }
            ].map((item, idx) => (
              <Card key={idx} className={`p-6 bg-white border-2 border-white hover:border-accent transition-all hover:shadow-lg fade-in-up modern-icon-card ${promiseCards.isVisible ? 'visible' : ''} stagger-${idx + 1}`}>
                <div className="mb-4 flex justify-center">
                  <Icon name={item.iconName} size={48} className="text-[#8a2be2] modern-animated-icon" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary">{item.title}</h3>
                <p className="text-muted-foreground">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white/95 relative backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-8">
            <AnimatedIcon type="format" className="w-28 h-28 md:w-32 md:h-32" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-center text-primary mb-4">
            Что такое мой курс и закрытая группа
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12">
            Три мощных инструмента для восстановления
          </p>
          
          <div ref={formatCards.elementRef} className="grid md:grid-cols-3 gap-8">
            {[
              { iconName: "BookOpen", title: "Обучающий курс", features: ["12 модулей видео/аудио", "Психоэдукация", "Домашние задания", "Материалы навсегда"] },
              { iconName: "Users", title: "Закрытая группа", features: ["1 встреча/неделю 2ч", "6-8 участниц", "Онлайн + очно Владивосток", "Обсуждение и поддержка"] },
              { iconName: "MessageCircleHeart", title: "Поддержка 24/7", features: ["Telegram-чат", "Ответы на вопросы", "Напоминания", "Доступ после курса"] }
            ].map((card, idx) => (
              <Card key={idx} className={`p-8 border-2 hover:border-accent transition-all hover:shadow-xl bg-gradient-to-b from-white to-secondary/5 fade-in-up modern-format-card ${formatCards.isVisible ? 'visible' : ''} stagger-${idx + 1}`}>
                <div className="mb-6 flex justify-center">
                  <div className="bg-[#8a2be2]/10 p-4 rounded-full">
                    <Icon name={card.iconName} size={56} className="text-[#8a2be2] modern-format-icon" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-6 text-center text-primary">{card.title}</h3>
                <ul className="space-y-3">
                  {card.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-accent mt-0.5 flex-shrink-0 icon-hover" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 relative">
        <AnimatedBackground variant="accent" />
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-8">
            <AnimatedIcon type="timeline" className="w-40 h-28 md:w-48 md:h-32" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-center text-primary mb-16">
            Твой путь: 12 недель шаг за шагом
          </h2>
          
          <div ref={timelineCards.elementRef} className="space-y-8">
            {[
              { weeks: "1-2", title: "Понимание травмы", items: ["Что такое травма", "Почему так реагируешь", "Нормализация"] },
              { weeks: "3-4", title: "Безопасность", items: ["Техники дыхания", "Возврат в тело", "Якорь безопасности"] },
              { weeks: "5-6", title: "Чувствительность", items: ["Телесный контакт", "Желания и границы", "Работа с телом"] },
              { weeks: "7-8", title: "Сексуальность", items: ["Возбуждение и оргазм", "Разбор мифов", "Переобучение тела"] },
              { weeks: "9-10", title: "Партнёрство", items: ["Как говорить о травме", "Правила безопасности", "Восстановление близости"] },
              { weeks: "11-12", title: "Интеграция", items: ["Подведение итогов", "План на 3-6 месяцев", "Ритуал завершения"] }
            ].map((phase, idx) => (
              <Card key={idx} className={`p-6 md:p-8 bg-white border-2 hover:border-secondary transition-all fade-in-up ${timelineCards.isVisible ? 'visible' : ''} stagger-${idx + 1}`}>
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold">
                      {phase.weeks}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold mb-3 text-primary">{phase.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {phase.items.map((item, i) => (
                        <span key={i} className="bg-secondary/20 text-primary px-3 py-1 rounded-full text-sm">
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

      <section className="py-20 px-4 bg-white/95 relative backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-primary mb-12">
            Для кого программа
          </h2>
          
          <div ref={targetCards.elementRef} className="grid md:grid-cols-2 gap-8">
            <Card className={`p-8 border-2 border-accent/30 bg-accent/5 fade-in-up ${targetCards.isVisible ? 'visible' : ''} stagger-1`}>
              <h3 className="text-2xl font-bold mb-6 text-primary flex items-center gap-2">
                <Icon name="Check" size={28} className="text-accent" />
                Подходит
              </h3>
              <ul className="space-y-3">
                {[
                  "Пережила насилие/манипуляции",
                  "Близость даётся тяжело",
                  "Знакомы стыд и вина",
                  "Хочешь восстановить связь с телом",
                  "Готова работать системно"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Icon name="Heart" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className={`p-8 border-2 border-muted fade-in-up ${targetCards.isVisible ? 'visible' : ''} stagger-2`}>
              <h3 className="text-2xl font-bold mb-6 text-primary flex items-center gap-2">
                <Icon name="X" size={28} className="text-muted-foreground" />
                Не подходит
              </h3>
              <ul className="space-y-3">
                {[
                  "Ожидаешь волшебную таблетку",
                  "Не готова к конфиденциальности",
                  "Нужна только теория",
                  "Острые состояния",
                  "Цель - критиковать"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Icon name="Minus" size={20} className="text-muted-foreground mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 relative">
        <AnimatedBackground variant="light" className="opacity-60" />
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 border-2 border-accent/20 shadow-xl">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-5xl font-bold">
                  АВ
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-primary mb-2">Анна Ветрюк</h2>
                <p className="text-xl text-secondary font-medium mb-4">
                  Психолог, психотерапевт, секс-терапевт
                </p>
                <p className="text-muted-foreground mb-4">
                  5+ лет работы с женской сексуальностью и травмой. Десятки женщин прошли путь от 'я сломана' к опоре на себя.
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong className="text-primary">Подход:</strong> КПТ, работа с телом, сексология</p>
                  <p><strong className="text-primary">Ценности:</strong> Уважаю границы и темп каждой. Можно быть собой.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white/95 relative backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-primary mb-16">
            Форматы и стоимость
          </h2>
          
          <div ref={pricingCards.elementRef} className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Лайт", icon: "📚", price: "7 900₽", featured: false, features: ["Все модули курса", "Домашние задания", "Без группы", "Без чата"] },
              { name: "Группа+курс", icon: "👥", price: "15 900₽", installment: "5 300₽×3", featured: true, features: ["12 встреч по 2ч", "Все материалы", "Чат поддержки", "Сообщения между встречами"] },
              { name: "Премиум", icon: "💎", price: "27 900₽", installment: "9 300₽×3", featured: false, features: ["Всё из Группа+курс", "+4 индивидуальные сессии", "Персональная работа", "Приоритет поддержки"] }
            ].map((plan, idx) => (
              <Card 
                key={idx} 
                className={`p-8 pricing-card ${plan.featured ? 'border-4 border-accent shadow-2xl scale-105 bg-gradient-to-b from-white to-accent/5 pricing-card-featured' : 'border-2'} transition-all hover:shadow-xl fade-in-up ${pricingCards.isVisible ? 'visible' : ''} stagger-${idx + 1}`}
              >
                {plan.featured && (
                  <div className="bg-accent text-white text-sm font-bold px-4 py-1 rounded-full inline-block mb-4">
                    Популярный
                  </div>
                )}
                <div className="text-5xl mb-4 text-center">{plan.icon}</div>
                <h3 className="text-2xl font-bold text-center mb-2 text-primary">{plan.name}</h3>
                <p className="text-4xl font-bold text-center mb-2 text-accent">{plan.price}</p>
                {plan.installment && (
                  <p className="text-center text-sm text-muted-foreground mb-6">или {plan.installment}</p>
                )}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className={`w-full pricing-button ${plan.featured ? 'bg-accent hover:bg-accent/90 pricing-button-featured' : 'pricing-button-standard'}`}>
                  Выбрать
                </Button>
              </Card>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-8">
            Рассрочка возможна
          </p>
        </div>
      </section>

      <section className="py-20 px-4 relative">
        <AnimatedBackground variant="default" className="opacity-50" />
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-primary mb-12">
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
              <AccordionItem key={idx} value={`item-${idx}`} className="bg-white border-2 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-primary hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section ref={formRef} className="py-20 px-4 bg-white/95 relative backdrop-blur-sm">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-primary mb-6">
            Если время настало — я буду рядом
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12">
            Оставь заявку, обсудим формат
          </p>
          
          <Card className={`p-8 border-2 border-accent/30 bg-gradient-to-br from-white to-secondary/5 form-highlight ${formHighlight ? 'active' : ''}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-primary">Имя *</label>
                <Input 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Как к тебе обращаться?"
                  className="border-2"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-primary">Возраст</label>
                  <Input 
                    value={formData.age}
                    onChange={(e) => setFormData({...formData, age: e.target.value})}
                    placeholder="Необязательно"
                    className="border-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-primary">Город</label>
                  <Input 
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                    placeholder="Необязательно"
                    className="border-2"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-primary">Запрос</label>
                <Textarea 
                  value={formData.request}
                  onChange={(e) => setFormData({...formData, request: e.target.value})}
                  placeholder="Что привело тебя сюда?"
                  className="border-2 min-h-32"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-primary">Контакт *</label>
                <Input 
                  required
                  value={formData.contact}
                  onChange={(e) => setFormData({...formData, contact: e.target.value})}
                  placeholder="Telegram / WhatsApp / Email"
                  className="border-2"
                />
              </div>

              <Button type="submit" size="lg" className="w-full text-lg py-6 bg-accent hover:bg-accent/90">
                Отправить заявку
              </Button>

              <p className="text-sm text-center text-muted-foreground">
                Это первый шаг к себе. Не обязательство оплатить.
              </p>
            </form>
          </Card>
        </div>
      </section>

      <footer className="bg-primary text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-2">Анна Ветрюк</h3>
          <p className="text-primary-foreground/80 mb-4">
            Психолог, психотерапевт, секс-терапевт
          </p>
          <p className="text-primary-foreground/80 mb-6">Владивосток</p>
          <div className="flex justify-center gap-6">
            <a href="https://t.me/annavetryuk13" target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Icon name="Send" size={20} />
              <span>t.me/annavetryuk13</span>
            </a>
            <a href="https://b17.ru/vetryuk_anna" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Icon name="Globe" size={20} />
              <span>b17.ru/vetryuk_anna</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;