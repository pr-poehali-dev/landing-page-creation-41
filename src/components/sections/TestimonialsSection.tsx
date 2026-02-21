import { Card } from "@/components/ui/card";
import { RefObject } from "react";

interface TestimonialsSectionProps {
  sectionRef?: RefObject<HTMLElement>;
}

const TestimonialsSection = ({ sectionRef }: TestimonialsSectionProps) => {
  const testimonials = [
    {
      name: "Анна, 32 года",
      city: "Москва",
      text: "Я впервые позволила себе говорить о своих желаниях без стыда. Благодарю Анну за этот опыт — он изменил мою жизнь.",
      accent: "Я научилась слышать себя",
      avatar: "https://cdn.poehali.dev/projects/1826759d-b015-438c-8385-e4c051567c5b/files/c21cfe04-20b6-408c-9d31-546cdcd9c0a0.jpg"
    },
    {
      name: "Мария, 38 лет",
      city: "Санкт-Петербург",
      text: "Клуб стал пространством, где я почувствовала, что имею право на удовольствие. Это не только про секс — это про жизнь.",
      accent: "Я обрела внутреннюю свободу",
      avatar: "https://cdn.poehali.dev/projects/1826759d-b015-438c-8385-e4c051567c5b/files/ac61ddea-f4fa-4adc-826b-0783beaa14c7.jpg"
    },
    {
      name: "Елена, 29 лет",
      city: "Казань",
      text: "Анна создала атмосферу безопасности и принятия. Каждая встреча — это откровение. Я узнала себя заново.",
      accent: "Я открыла новую себя",
      avatar: "https://cdn.poehali.dev/projects/1826759d-b015-438c-8385-e4c051567c5b/files/d3269778-3104-4d85-8284-76a978019fa2.jpg"
    },
    {
      name: "Ольга, 41 год",
      city: "Новосибирск",
      text: "В 41 я наконец-то поняла, что моё тело и желания — это дар, а не повод для вины. Спасибо Анне за эту трансформацию.",
      accent: "Я приняла себя полностью",
      avatar: "https://cdn.poehali.dev/projects/1826759d-b015-438c-8385-e4c051567c5b/files/054524c2-e439-47c4-accb-1f7e7f22d627.jpg"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#1C2330]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#FFDEB5] mb-4 md:mb-6">
            Голоса участниц
          </h2>
          <p className="text-lg md:text-xl text-[#FFDEB5]/70">
            Женщины, прошедшие путь от стыда к свободе
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="relative p-6 md:p-8 bg-[#111722] border-2 border-[#C89A5A] hover:border-[#F7BA72] transition-all duration-500 overflow-hidden group hover:shadow-[0_0_30px_rgba(247,186,114,0.3)]"
            >
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#C89A5A] opacity-30 golden-line"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#C89A5A] opacity-30 golden-line"></div>
              
              <div className="relative z-10">
                <div className="mb-4">
                  <div className="text-5xl text-[#C89A5A] opacity-30 mb-2">"</div>
                  <p className="text-lg md:text-xl font-semibold text-[#F7BA72] mb-3 italic">
                    {testimonial.accent}
                  </p>
                  <p className="text-[#FFDEB5]/80 leading-relaxed mb-6">
                    {testimonial.text}
                  </p>
                </div>
                
                <div className="flex items-center gap-3 pt-4 border-t border-[#C89A5A]/20">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-[#C89A5A]/50 group-hover:ring-[#F7BA72] transition-all duration-300"
                  />
                  <div>
                    <div className="font-semibold text-[#FFDEB5]">{testimonial.name}</div>
                    <div className="text-sm text-[#FFDEB5]/60">{testimonial.city}</div>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-[#F7BA72]/0 via-[#F7BA72]/0 to-[#F7BA72]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <p className="text-[#FFDEB5]/60 text-sm md:text-base max-w-2xl mx-auto">
            Имена изменены для конфиденциальности. Отзывы основаны на реальном опыте участниц клуба.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
