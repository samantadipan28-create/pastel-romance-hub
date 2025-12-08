import { useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Heart, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingElements } from "@/components/FloatingElements";
import { Confetti } from "@/components/Confetti";

const Landing = () => {
  const navigate = useNavigate();
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [showConfetti, setShowConfetti] = useState(false);
  const [isYesHovered, setIsYesHovered] = useState(false);
  const noButtonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const moveNoButton = useCallback(() => {
    if (!containerRef.current || !noButtonRef.current) return;

    const container = containerRef.current.getBoundingClientRect();
    const button = noButtonRef.current.getBoundingClientRect();
    
    const maxX = container.width - button.width - 40;
    const maxY = container.height - button.height - 40;
    
    const newX = Math.random() * maxX - maxX / 2;
    const newY = Math.random() * maxY - maxY / 2;
    
    setNoPosition({ x: newX, y: newY });
  }, []);

  const handleYesClick = () => {
    setShowConfetti(true);
    setTimeout(() => {
      navigate("/home");
    }, 1000);
  };

  return (
    <div 
      ref={containerRef}
      className="min-h-screen gradient-romantic flex flex-col items-center justify-center p-6 relative overflow-hidden"
    >
      <FloatingElements />
      <Confetti trigger={showConfetti} />
      
      {/* Main content */}
      <div className="relative z-10 text-center max-w-lg mx-auto">
        {/* Decorative hearts */}
        <div className="flex justify-center gap-2 mb-6 opacity-0 animate-fade-in">
          <Heart className="text-primary animate-bounce-gentle" size={24} fill="currentColor" />
          <Heart className="text-rose animate-bounce-gentle stagger-1" size={32} fill="currentColor" />
          <Heart className="text-primary animate-bounce-gentle stagger-2" size={24} fill="currentColor" />
        </div>

        {/* Main heading */}
        <h1 
          className="text-4xl md:text-5xl lg:text-6xl font-pacifico text-foreground mb-4 opacity-0 animate-slide-up leading-tight"
          style={{ animationDelay: "0.2s" }}
        >
          Do you wanna go on a date with me?
        </h1>

        {/* Subtext */}
        <p 
          className="text-lg text-muted-foreground mb-12 font-nunito opacity-0 animate-slide-up"
          style={{ animationDelay: "0.4s" }}
        >
          I promise it'll be the best one ever 💖
        </p>

        {/* Buttons */}
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-slide-up"
          style={{ animationDelay: "0.6s" }}
        >
          <Button
            variant="romantic"
            size="xl"
            onClick={handleYesClick}
            onMouseEnter={() => setIsYesHovered(true)}
            onMouseLeave={() => setIsYesHovered(false)}
            className={`min-w-[160px] ${isYesHovered ? "animate-wiggle" : ""}`}
          >
            <Heart className="mr-1" size={20} fill="currentColor" />
            Yes
            <Heart className="ml-1" size={20} fill="currentColor" />
          </Button>

          <Button
            ref={noButtonRef}
            variant="no"
            size="xl"
            onMouseEnter={moveNoButton}
            onClick={moveNoButton}
            className="min-w-[160px] transition-all duration-300"
            style={{
              transform: `translate(${noPosition.x}px, ${noPosition.y}px)`,
            }}
          >
            <X size={20} />
            No
          </Button>
        </div>

        {/* Hint text */}
        <p 
          className="mt-8 text-sm text-muted-foreground/70 font-nunito opacity-0 animate-fade-in"
          style={{ animationDelay: "1s" }}
        >
          (There's really only one answer here... 😉)
        </p>
      </div>

      {/* Bottom decorative element */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-1 opacity-0 animate-fade-in" style={{ animationDelay: "1.2s" }}>
        {[...Array(5)].map((_, i) => (
          <Heart 
            key={i} 
            size={12} 
            className="text-primary/40 animate-pulse-heart" 
            fill="currentColor"
            style={{ animationDelay: `${i * 0.1}s` }}
          />
        ))}
      </div>
    </div>
  );
};

export default Landing;
