import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import AnimatedIcon from "@/components/AnimatedIcon";
import { useState, useCallback, useRef } from "react";

interface ProblemCardData {
  iconName: string;
  title: string;
  text: string;
  hoverText?: string;
}

const problems: ProblemCardData[] = [
  {
    iconName: "Zap",
    title: "Боль вместо удовольствия",
    text: "Секс = страх, боль или онемение",
    hoverText: "Я не жду близости с радостью — я просто терплю, чтобы побыстрее всё закончилось и никого не разочаровать"
  },
  {
    iconName: "UserX",
    title: "Отключенность от тела",
    text: "Тело выключается в близости",
    hoverText: "Я как будто наблюдаю за собой со стороны — моё тело здесь, а я где-то далеко, где безопасно"
  },
  {
    iconName: "ShieldAlert",
    title: "Не можешь расслабиться",
    text: "Даже с тем, кому доверяешь",
    hoverText: "Я хочу довериться, но тело сжимается само — и я ничего не могу с этим сделать"
  },
  {
    iconName: "HeartCrack",
    title: "Стыд и вина",
    text: "Не отпускают, хотя не виновата",
    hoverText: "Я знаю, что не виновата, но внутри всё равно живёт ощущение, что со мной что-то не так"
  },
  {
    iconName: "MessageSquareOff",
    title: "Молчание",
    text: "Не знаешь, с кем разделить боль",
    hoverText: "Я столько лет ношу это в себе — и не могу произнести вслух даже самой близкой подруге"
  },
  {
    iconName: "Ban",
    title: "Избегание близости",
    text: "Или согласие через силу",
    hoverText: "Я или избегаю отношений совсем, или соглашаюсь на близость, чтобы не потерять человека"
  }
];

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  angle: number;
  distance: number;
  delay: number;
}

const PARTICLE_COLORS = ["#F7BA72", "#FFDEB5", "#C89A5A", "#fff", "#FFD700", "#FFA500"];

function ProblemCard({ item }: { item: ProblemCardData }) {
  const [isHovered, setIsHovered] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const particleIdRef = useRef(0);

  const spawnParticles = useCallback(() => {
    const newParticles: Particle[] = [];
    const count = 18;
    for (let i = 0; i < count; i++) {
      newParticles.push({
        id: particleIdRef.current++,
        x: 50 + (Math.random() - 0.5) * 30,
        y: 50 + (Math.random() - 0.5) * 20,
        color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
        size: 3 + Math.random() * 5,
        angle: (360 / count) * i + (Math.random() - 0.5) * 20,
        distance: 40 + Math.random() * 60,
        delay: Math.random() * 0.15,
      });
    }
    setParticles(newParticles);
    setTimeout(() => setParticles([]), 800);
  }, []);

  const handleMouseEnter = () => {
    if (!item.hoverText) return;
    setIsHovered(true);
    spawnParticles();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Card
      className="p-4 md:p-6 border-2 border-[#C89A5A]/30 hover:border-[#F7BA72]/70 transition-all problem-card bg-[#111722]/70 backdrop-blur-sm hover:shadow-[0_0_20px_rgba(247,186,114,0.15)] relative overflow-hidden cursor-default select-none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className="problem-particle"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            "--tx": `${Math.cos((p.angle * Math.PI) / 180) * p.distance}px`,
            "--ty": `${Math.sin((p.angle * Math.PI) / 180) * p.distance}px`,
            animationDelay: `${p.delay}s`,
          } as React.CSSProperties}
        />
      ))}

      <div
        className="transition-all duration-300 ease-out"
        style={{
          opacity: isHovered ? 0 : 1,
          transform: isHovered ? "scale(0.95) translateY(-8px)" : "scale(1) translateY(0)",
          position: isHovered ? "absolute" : "relative",
          pointerEvents: isHovered ? "none" : "auto",
        }}
      >
        <div className="mb-4 flex justify-center">
          <Icon name={item.iconName} className="w-10 h-10 md:w-12 md:h-12 text-[#F7BA72] problem-icon" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-[#FFDEB5]">{item.title}</h3>
        <p className="text-[#FFDEB5]/70">{item.text}</p>
      </div>

      {item.hoverText && (
        <div
          className="transition-all duration-400 ease-out flex items-center justify-center"
          style={{
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? "scale(1) translateY(0)" : "scale(0.9) translateY(12px)",
            minHeight: isHovered ? "100px" : "0",
            maxHeight: isHovered ? "none" : "0",
            overflow: "hidden",
          }}
        >
          <p className="text-[#FFDEB5] text-base md:text-lg leading-relaxed italic text-center font-medium px-2">
            «{item.hoverText}»
          </p>
        </div>
      )}
    </Card>
  );
}

const ProblemSection = () => {
  return (
    <section className="py-20 px-4 bg-[#1C2330] relative backdrop-blur-sm border-t-2 border-[#C89A5A]/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-8">
          <AnimatedIcon type="problem" className="w-28 h-28 md:w-32 md:h-32" />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-center text-[#F7BA72] mb-6">
          Если ты это читаешь, возможно, тебе больно уже слишком долго
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-12">
          {problems.map((item, idx) => (
            <ProblemCard key={idx} item={item} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg md:text-xl text-[#FFDEB5] font-medium bg-[#C89A5A]/15 border border-[#C89A5A]/30 p-4 md:p-6 rounded-lg inline-block">
            Ты не сломана. Это естественная реакция на травму. С этим можно работать.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;