import { Heart, Star, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface TimelineNodeProps {
  date: string;
  title: string;
  description: string;
  icon?: "heart" | "star" | "sparkle";
  isLeft?: boolean;
  delay?: number;
}

export const TimelineNode = ({ 
  date, 
  title, 
  description, 
  icon = "heart", 
  isLeft = true,
  delay = 0 
}: TimelineNodeProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const IconComponent = {
    heart: Heart,
    star: Star,
    sparkle: Sparkles,
  }[icon];

  return (
    <div 
      ref={nodeRef}
      className={`
        flex items-center gap-4 md:gap-8 mb-8
        ${isLeft ? "flex-row" : "flex-row-reverse"}
      `}
    >
      {/* Content card */}
      <div 
        className={`
          flex-1 max-w-sm
          ${isVisible ? "opacity-100" : "opacity-0"}
          transition-all duration-700
          ${isLeft ? "translate-x-0" : "translate-x-0"}
        `}
        style={{ 
          transitionDelay: `${delay}ms`,
          transform: isVisible ? "translateX(0)" : `translateX(${isLeft ? "-30px" : "30px"})`,
        }}
      >
        <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-5 shadow-card border-2 border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow group">
          <span className="text-xs font-nunito text-primary font-semibold uppercase tracking-wider">
            {date}
          </span>
          <h3 className="font-pacifico text-lg text-foreground mt-1 mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground font-nunito leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Center icon */}
      <div 
        className={`
          relative z-10 w-12 h-12 rounded-full 
          bg-gradient-to-br from-primary to-rose
          flex items-center justify-center shadow-glow
          ${isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"}
          transition-all duration-500
        `}
        style={{ transitionDelay: `${delay + 100}ms` }}
      >
        <IconComponent size={20} className="text-primary-foreground" fill="currentColor" />
      </div>

      {/* Spacer for alignment */}
      <div className="flex-1 max-w-sm hidden md:block" />
    </div>
  );
};
