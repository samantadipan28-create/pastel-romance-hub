import { Heart, BookHeart, Scroll, Gift, Sparkles } from "lucide-react";
import { FloatingElements } from "@/components/FloatingElements";
import { NavigationCard } from "@/components/NavigationCard";

const Home = () => {
  const navigationItems = [
    {
      to: "/our-story",
      title: "Our Story",
      description: "A journey through our beautiful memories together",
      icon: BookHeart,
    },
    {
      to: "/reasons",
      title: "Reasons I Love You",
      description: "All the little and big things that make you special",
      icon: Heart,
    },
    {
      to: "/love-letter",
      title: "Love Letter",
      description: "Words written straight from my heart to yours",
      icon: Scroll,
    },
    {
      to: "/surprise",
      title: "Surprise",
      description: "Something special just for you...",
      icon: Gift,
    },
  ];

  return (
    <div className="min-h-screen gradient-romantic relative overflow-hidden">
      <FloatingElements />
      
      <div className="relative z-10 container max-w-4xl mx-auto px-4 py-12">
        {/* Welcome header */}
        <header className="text-center mb-12">
          <div className="flex justify-center gap-2 mb-4 opacity-0 animate-fade-in">
            <Sparkles className="text-lavender animate-sparkle" size={20} />
            <Heart className="text-primary animate-pulse-heart" size={24} fill="currentColor" />
            <Sparkles className="text-lavender animate-sparkle stagger-2" size={20} />
          </div>
          
          <h1 
            className="text-4xl md:text-5xl font-pacifico text-foreground mb-4 opacity-0 animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            Welcome, My Love! 💖
          </h1>
          
          <p 
            className="text-lg text-muted-foreground font-nunito max-w-md mx-auto opacity-0 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            I'm so glad you're here. Explore these pages I made just for you...
          </p>
        </header>

        {/* Navigation grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {navigationItems.map((item, index) => (
            <NavigationCard
              key={item.to}
              to={item.to}
              title={item.title}
              description={item.description}
              icon={item.icon}
              delay={0.3 + index * 0.1}
            />
          ))}
        </div>

        {/* Bottom message */}
        <div 
          className="text-center opacity-0 animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          <p className="text-sm text-muted-foreground/70 font-nunito flex items-center justify-center gap-2">
            Made with 
            <Heart size={14} className="text-primary animate-pulse-heart" fill="currentColor" />
            just for you
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
