import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Heart, Gift, Sparkles, Star, Cat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingElements } from "@/components/FloatingElements";

const surpriseItems = [
  { id: 1, icon: Heart, message: "You make my heart so happy! 💕", color: "text-primary" },
  { id: 2, icon: Star, message: "You're my favorite person ever! ⭐", color: "text-lavender" },
  { id: 3, icon: Sparkles, message: "You light up my whole world! ✨", color: "text-rose" },
  { id: 4, icon: Cat, message: "Did you know? Cats purr at a frequency that promotes healing! 🐱", color: "text-peach" },
  { id: 5, icon: Heart, message: "I think about you all the time! 💭", color: "text-primary" },
  { id: 6, icon: Star, message: "You deserve all the happiness! 🌟", color: "text-accent" },
];

const Surprise = () => {
  const [revealedItems, setRevealedItems] = useState<Set<number>>(new Set());
  const [mainGiftOpened, setMainGiftOpened] = useState(false);
  const [floatingHearts, setFloatingHearts] = useState<{ id: number; x: number; y: number }[]>([]);

  const revealItem = (id: number) => {
    setRevealedItems(new Set([...revealedItems, id]));
    
    // Add floating heart at random position
    const newHeart = {
      id: Date.now(),
      x: Math.random() * 100,
      y: Math.random() * 50 + 25,
    };
    setFloatingHearts([...floatingHearts, newHeart]);
    
    setTimeout(() => {
      setFloatingHearts(hearts => hearts.filter(h => h.id !== newHeart.id));
    }, 1500);
  };

  return (
    <div className="min-h-screen gradient-romantic relative overflow-hidden">
      <FloatingElements />
      
      {/* Floating hearts on tap */}
      {floatingHearts.map(heart => (
        <div
          key={heart.id}
          className="fixed pointer-events-none z-50 animate-heart-rise"
          style={{ left: `${heart.x}%`, top: `${heart.y}%` }}
        >
          <Heart size={24} className="text-primary" fill="currentColor" />
        </div>
      ))}
      
      <div className="relative z-10 container max-w-xl mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-8">
          <Link to="/home">
            <Button variant="ghost" size="sm" className="mb-4 opacity-0 animate-fade-in">
              <ArrowLeft size={16} className="mr-2" />
              Back to Home
            </Button>
          </Link>

          <h1 
            className="text-3xl md:text-4xl font-pacifico text-foreground mb-2 opacity-0 animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            Surprise! 🎁
          </h1>
          
          <p 
            className="text-muted-foreground font-nunito opacity-0 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            Tap around to discover hidden messages!
          </p>
        </header>

        {/* Main gift */}
        <div 
          className="mb-8 opacity-0 animate-slide-up"
          style={{ animationDelay: "0.3s" }}
        >
          <button
            onClick={() => setMainGiftOpened(true)}
            disabled={mainGiftOpened}
            className="w-full"
          >
            <div className={`
              bg-card/90 backdrop-blur-sm rounded-3xl p-8 
              shadow-card border-2 transition-all duration-300
              ${mainGiftOpened 
                ? "border-primary/50 shadow-glow" 
                : "border-border/50 hover:border-primary/30 hover:shadow-glow hover:scale-[1.02]"
              }
            `}>
              {!mainGiftOpened ? (
                <div className="flex flex-col items-center gap-4">
                  <Gift 
                    size={64} 
                    className="text-primary animate-bounce-gentle" 
                  />
                  <p className="font-pacifico text-xl text-foreground">
                    Tap me! 🎀
                  </p>
                </div>
              ) : (
                <div className="text-center animate-fade-in">
                  <p className="font-pacifico text-2xl text-primary mb-3">
                    You are my greatest gift! 💝
                  </p>
                  <p className="text-muted-foreground font-nunito">
                    Every day with you feels like unwrapping a present. 
                    You bring so much joy to my life!
                  </p>
                  <div className="flex justify-center gap-2 mt-4">
                    {[...Array(3)].map((_, i) => (
                      <Heart 
                        key={i}
                        size={20} 
                        className="text-primary animate-pulse-heart" 
                        fill="currentColor"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </button>
        </div>

        {/* Hidden items grid */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {surpriseItems.map((item, index) => {
            const Icon = item.icon;
            const isRevealed = revealedItems.has(item.id);
            
            return (
              <button
                key={item.id}
                onClick={() => revealItem(item.id)}
                className={`
                  aspect-square rounded-2xl transition-all duration-300
                  opacity-0 animate-slide-up
                  ${isRevealed 
                    ? "bg-card/90 shadow-card border-2 border-primary/30" 
                    : "bg-card/50 hover:bg-card/80 border-2 border-border/30 hover:border-primary/20 hover:scale-105"
                  }
                `}
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                {isRevealed ? (
                  <div className="p-2 flex flex-col items-center justify-center h-full animate-fade-in">
                    <Icon size={24} className={`${item.color} mb-1`} fill="currentColor" />
                    <p className="text-xs text-muted-foreground font-nunito text-center leading-tight">
                      {item.message}
                    </p>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <Sparkles size={20} className="text-muted-foreground/50 animate-sparkle" />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Progress hint */}
        <p 
          className="text-center text-sm text-muted-foreground/70 font-nunito mb-6 opacity-0 animate-fade-in"
          style={{ animationDelay: "1s" }}
        >
          Found {revealedItems.size} of {surpriseItems.length} surprises! 
          {revealedItems.size === surpriseItems.length && " 🎉 You found them all!"}
        </p>

        {/* Next page link */}
        <div 
          className="text-center opacity-0 animate-fade-in"
          style={{ animationDelay: "1.2s" }}
        >
          <Link to="/ending">
            <Button variant="romantic" size="lg" className="group">
              One last thing...
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Surprise;
