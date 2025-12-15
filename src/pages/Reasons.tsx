import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingElements } from "@/components/FloatingElements";

const reasons = [
  {
    title: "I Live for you",
    description: "It's hard for me to survive without you now, You're mine and just mine, I am shamelessly selfish and posessive about you.",
    emoji: "😊",
  },
  {
    title: "Your Voice",
    description: "Your voice is something I can not describe in words genuinely, I mean it makes me feel like I am high on some drugs yet at the same time it keeps me sane.. idk it's such a weird feeling but I love it and I am addicted to your voice ",
    emoji: "😄",
  },
  {
    title: "The Way you care about me",
    description: "It makes me kinda emotional when I think about that there's someone out there who cares about my existence, Your caring is a little violent but idc I love it honestly!",
    emoji: "💝",
  },
  {
    title: "Your Strength",
    description: "You are such a dedicated person and you so many ambitions it's honestly so inspiring and gives so much motivation to do something in my life so that I can be deserving to have you",
    emoji: "💪",
  },
  {
    title: "Our Little Inside Jokes",
    description: "The silly things we laugh about on calls, like the cat fact joke (scroll at the bottom of the home page in the end), that biohazardous room-mate of yours, we literally laugh on anything and I also just shamelessly joke continously because I wanna hear you laugh and giggle",
    emoji: "🤭",
  },
  {
    title: "How You Make Me Feel",
    description: "The way you make me feel seen, heared, loved.. I feel so much complete with you in my life. You are my Home.",
    emoji: "🏠",
  },
  {
    title: "∞",
    description: "There's so many more things, I could just go on and on about but I think I should save some for our date.",
    emoji: "✨",
  },
];

const Reasons = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);

  const goNext = () => {
    if (currentIndex < reasons.length - 1) {
      setDirection("right");
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
        setDirection(null);
      }, 150);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setDirection("left");
      setTimeout(() => {
        setCurrentIndex(currentIndex - 1);
        setDirection(null);
      }, 150);
    }
  };

  const currentReason = reasons[currentIndex];
  const isLastSlide = currentIndex === reasons.length - 1;

  return (
    <div className="min-h-screen gradient-romantic relative overflow-hidden">
      <FloatingElements />
      
      <div className="relative z-10 container max-w-xl mx-auto px-4 py-8 flex flex-col min-h-screen">
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
            Reasons I Love You 💕
          </h1>
        </header>

        {/* Card */}
        <div className="flex-1 flex items-center justify-center">
          <div 
            className={`
              w-full bg-card/90 backdrop-blur-sm rounded-3xl p-8 md:p-10 
              shadow-card border-2 border-border/50
              transition-all duration-300
              ${direction === "left" ? "opacity-0 -translate-x-8" : ""}
              ${direction === "right" ? "opacity-0 translate-x-8" : ""}
              ${!direction ? "opacity-100 translate-x-0" : ""}
            `}
          >
            {/* Emoji */}
            <div className="text-6xl md:text-7xl text-center mb-6 animate-bounce-gentle">
              {currentReason.emoji}
            </div>

            {/* Title */}
            <h2 className="font-pacifico text-2xl md:text-3xl text-primary text-center mb-4">
              {currentReason.title}
            </h2>

            {/* Description */}
            <p className="text-muted-foreground font-nunito text-center text-lg leading-relaxed">
              {currentReason.description}
            </p>

            {/* Hearts decoration for last slide */}
            {isLastSlide && (
              <div className="flex justify-center gap-2 mt-6">
                {[...Array(5)].map((_, i) => (
                  <Heart 
                    key={i}
                    size={16} 
                    className="text-primary animate-pulse-heart" 
                    fill="currentColor"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between py-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={goPrev}
            disabled={currentIndex === 0}
            className="rounded-full w-12 h-12"
          >
            <ChevronLeft size={24} />
          </Button>

          {/* Dots */}
          <div className="flex gap-2">
            {reasons.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`
                  w-2 h-2 rounded-full transition-all duration-300
                  ${index === currentIndex 
                    ? "bg-primary w-6" 
                    : "bg-border hover:bg-primary/50"
                  }
                `}
              />
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={goNext}
            disabled={currentIndex === reasons.length - 1}
            className="rounded-full w-12 h-12"
          >
            <ChevronRight size={24} />
          </Button>
        </div>

        {/* Next page link */}
        {isLastSlide && (
          <div className="text-center pb-6 opacity-0 animate-fade-in">
            <Link to="/love-letter">
              <Button variant="romantic" size="lg" className="group">
                Read My Love Letter
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reasons;
