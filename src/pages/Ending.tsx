import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Heart, Sparkles, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingElements } from "@/components/FloatingElements";
import { Confetti } from "@/components/Confetti";

const Ending = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [tapCount, setTapCount] = useState(0);
  const [showSecret, setShowSecret] = useState(false);

  useEffect(() => {
    // Trigger confetti on page load
    const timer = setTimeout(() => setShowConfetti(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleTap = () => {
    setTapCount(prev => prev + 1);
    if (tapCount >= 4) {
      setShowSecret(true);
    }
  };

  return (
    <div 
      className="min-h-screen gradient-dreamy relative overflow-hidden flex flex-col items-center justify-center p-6"
      onClick={handleTap}
    >
      <FloatingElements />
      <Confetti trigger={showConfetti} />
      
      <div className="relative z-10 text-center max-w-lg mx-auto">
        {/* Decorative sparkles */}
        <div className="flex justify-center gap-4 mb-8 opacity-0 animate-fade-in">
          <Sparkles className="text-lavender animate-sparkle" size={24} />
          <Heart className="text-primary animate-pulse-heart" size={32} fill="currentColor" />
          <Sparkles className="text-lavender animate-sparkle stagger-2" size={24} />
        </div>

        {/* Main message */}
        <h1 
          className="text-4xl md:text-5xl lg:text-6xl font-pacifico text-foreground mb-6 opacity-0 animate-slide-up leading-tight"
          style={{ animationDelay: "0.2s" }}
        >
          Can't wait to see you 😘
        </h1>

        <p 
          className="text-xl text-muted-foreground font-nunito mb-4 opacity-0 animate-slide-up"
          style={{ animationDelay: "0.4s" }}
        >
          This is not the end...
        </p>

        <p 
          className="text-lg text-primary font-pacifico mb-8 opacity-0 animate-slide-up"
          style={{ animationDelay: "0.6s" }}
        >
          It's just a new beginning 💕
        </p>

        {/* Floating hearts row */}
        <div 
          className="flex justify-center gap-3 mb-10 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          {[...Array(7)].map((_, i) => (
            <Heart 
              key={i}
              size={i === 3 ? 28 : 16 + Math.random() * 8}
              className="text-primary animate-float"
              fill="currentColor"
              style={{ 
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Secret message */}
        {showSecret && (
          <div className="mb-8 animate-fade-in">
            <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-6 shadow-glow border-2 border-primary/50">
              <p className="font-pacifico text-lg text-primary">
                You found a secret! 🎉
              </p>
              <p className="text-muted-foreground font-nunito mt-2">
                You're the best thing that's ever happened to me. 
                I love you more than words could ever say.
              </p>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in"
          style={{ animationDelay: "1s" }}
        >
          <Link to="/home">
            <Button variant="outline" size="lg" className="min-w-[160px]">
              <Home size={18} className="mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <Link to="/">
            <Button variant="romantic" size="lg" className="min-w-[160px]">
              <Heart size={18} className="mr-2" fill="currentColor" />
              Start Over
            </Button>
          </Link>
        </div>

        {/* Tap hint */}
        {!showSecret && (
          <p 
            className="mt-8 text-xs text-muted-foreground/50 font-nunito opacity-0 animate-fade-in"
            style={{ animationDelay: "1.5s" }}
          >
            (Tap anywhere to find a surprise...)
          </p>
        )}
      </div>

      {/* Bottom hearts decoration */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 animate-fade-in"
        style={{ animationDelay: "1.2s" }}
      >
        {[...Array(5)].map((_, i) => (
          <Heart 
            key={i} 
            size={10 + i * 2} 
            className="text-primary/40 animate-pulse-heart" 
            fill="currentColor"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
    </div>
  );
};

export default Ending;
