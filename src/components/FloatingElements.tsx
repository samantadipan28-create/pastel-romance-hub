import { Heart, Star, Sparkles } from "lucide-react";
import { useMemo } from "react";

interface FloatingElement {
  id: number;
  type: "heart" | "star" | "sparkle";
  size: number;
  left: number;
  top: number;
  delay: number;
  duration: number;
}

export const FloatingElements = () => {
  const elements = useMemo<FloatingElement[]>(() => {
    return Array.from({ length: 15 }, (_, i) => ({
      id: i,
      type: ["heart", "star", "sparkle"][Math.floor(Math.random() * 3)] as FloatingElement["type"],
      size: Math.random() * 16 + 12,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 4 + 4,
    }));
  }, []);

  const getIcon = (type: FloatingElement["type"], size: number) => {
    const className = "text-primary/30";
    switch (type) {
      case "heart":
        return <Heart size={size} className={className} fill="currentColor" />;
      case "star":
        return <Star size={size} className={className} fill="currentColor" />;
      case "sparkle":
        return <Sparkles size={size} className={className} />;
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((el) => (
        <div
          key={el.id}
          className="absolute animate-float-slow"
          style={{
            left: `${el.left}%`,
            top: `${el.top}%`,
            animationDelay: `${el.delay}s`,
            animationDuration: `${el.duration}s`,
          }}
        >
          {getIcon(el.type, el.size)}
        </div>
      ))}
    </div>
  );
};
