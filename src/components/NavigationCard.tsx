import { Link } from "react-router-dom";
import { Heart, LucideIcon } from "lucide-react";
import { useState } from "react";

interface NavigationCardProps {
  to: string;
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

export const NavigationCard = ({ to, title, description, icon: Icon, delay = 0 }: NavigationCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={to}
      className="block opacity-0 animate-slide-up"
      style={{ animationDelay: `${delay}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`
        relative bg-card/80 backdrop-blur-sm rounded-3xl p-6 
        shadow-card hover:shadow-glow 
        border-2 border-border/50 hover:border-primary/50
        transition-all duration-300 
        hover:scale-105 hover:-translate-y-1
        group overflow-hidden
      `}>
        {/* Background gradient on hover */}
        <div className={`
          absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 
          opacity-0 group-hover:opacity-100 transition-opacity duration-300
        `} />
        
        {/* Floating hearts on hover */}
        {isHovered && (
          <>
            <Heart 
              size={12} 
              className="absolute top-2 right-8 text-primary/60 animate-heart-rise" 
              fill="currentColor"
            />
            <Heart 
              size={10} 
              className="absolute top-4 right-4 text-rose/60 animate-heart-rise stagger-2" 
              fill="currentColor"
            />
          </>
        )}

        <div className="relative z-10">
          {/* Icon */}
          <div className={`
            w-14 h-14 rounded-2xl 
            bg-gradient-to-br from-primary/20 to-accent/20 
            flex items-center justify-center mb-4
            group-hover:from-primary/30 group-hover:to-accent/30
            transition-all duration-300
          `}>
            <Icon 
              size={28} 
              className={`text-primary transition-transform duration-300 ${isHovered ? "scale-110" : ""}`}
            />
          </div>

          {/* Text */}
          <h3 className="font-pacifico text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground font-nunito text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};
