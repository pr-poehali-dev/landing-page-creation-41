import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import AnimatedIcon from "@/components/AnimatedIcon";

const ProblemSection = () => {
  return (
    <section className="py-20 px-4 bg-white/95 relative backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-8">
          <AnimatedIcon type="problem" className="w-28 h-28 md:w-32 md:h-32" />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-center text-primary mb-6">
          Если ты это читаешь, возможно, тебе больно уже слишком долго
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-12">
          {[
            { iconName: "Zap", title: "Боль вместо удовольствия", text: "Секс = страх, боль или онемение" },
            { iconName: "UserX", title: "Отключенность от тела", text: "Тело выключается в близости" },
            { iconName: "ShieldAlert", title: "Не можешь расслабиться", text: "Даже с тем, кому доверяешь" },
            { iconName: "HeartCrack", title: "Стыд и вина", text: "Не отпускают, хотя не виновата" },
            { iconName: "MessageSquareOff", title: "Молчание", text: "Не знаешь, с кем разделить боль" },
            { iconName: "Ban", title: "Избегание близости", text: "Или согласие через силу" }
          ].map((item, idx) => (
            <Card key={idx} className="p-4 md:p-6 border-2 hover:border-[#a87c4c]/50 transition-all problem-card bg-white/70 backdrop-blur-sm">
              <div className="mb-4 flex justify-center">
                <Icon name={item.iconName} className="w-10 h-10 md:w-12 md:h-12 text-[#a87c4c] problem-icon" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">{item.title}</h3>
              <p className="text-muted-foreground">{item.text}</p>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg md:text-xl text-primary font-medium bg-[#a87c4c]/10 p-4 md:p-6 rounded-lg inline-block">
            Ты не сломана. Это естественная реакция на травму. С этим можно работать.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;