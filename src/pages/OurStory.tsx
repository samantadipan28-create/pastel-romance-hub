import { Link } from "react-router-dom";
import { ArrowLeft, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingElements } from "@/components/FloatingElements";
import { TimelineNode } from "@/components/TimelineNode";
import moonBackground from "@/assets/moon-september-28.jpg";

const OurStory = () => {
  const storyMilestones = [
    {
      date: "The Beginning",
      title: "When We First Met",
      description: "That magical moment when our paths crossed and everything changed. I knew from that instant that you were someone special.",
      icon: "sparkle" as const,
    },
    {
      date: "First Date",
      title: "Our First Adventure",
      description: "Butterflies, nervous laughter, and the start of something beautiful. Every second with you felt like magic.",
      icon: "heart" as const,
    },
    {
      date: "Special Moment",
      title: "When I Knew",
      description: "There was this one moment when I looked at you and realized - you're the one I want to share every moment with.",
      icon: "star" as const,
    },
    {
      date: "Growing Together",
      title: "Our Journey",
      description: "Through ups and downs, laughter and tears, we've grown stronger together. Every day with you is a gift.",
      icon: "heart" as const,
    },
    {
      date: "Today & Beyond",
      title: "Our Love Story Continues",
      description: "This is just the beginning. I can't wait to create more beautiful memories with you, my love.",
      icon: "sparkle" as const,
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Moon background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${moonBackground})` }}
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />
      <FloatingElements />
      
      <div className="relative z-10 container max-w-3xl mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <Link to="/home">
            <Button variant="ghost" size="sm" className="mb-6 opacity-0 animate-fade-in">
              <ArrowLeft size={16} className="mr-2" />
              Back to Home
            </Button>
          </Link>

          <h1 
            className="text-4xl md:text-5xl font-pacifico text-foreground mb-4 opacity-0 animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            Our Story 💕
          </h1>
          
          <p 
            className="text-lg text-muted-foreground font-nunito max-w-md mx-auto opacity-0 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            A beautiful journey of two hearts becoming one
          </p>
        </header>

        {/* Timeline */}
        <div className="relative">
          {/* Central line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-rose/50 to-lavender/50 -translate-x-1/2 hidden md:block" />
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-rose/50 to-lavender/50 md:hidden" />

          {/* Timeline nodes */}
          <div className="space-y-4 md:space-y-0">
            {storyMilestones.map((milestone, index) => (
              <TimelineNode
                key={index}
                date={milestone.date}
                title={milestone.title}
                description={milestone.description}
                icon={milestone.icon}
                isLeft={index % 2 === 0}
                delay={index * 150}
              />
            ))}
          </div>
        </div>

        {/* Next page link */}
        <div 
          className="text-center mt-12 opacity-0 animate-fade-in"
          style={{ animationDelay: "1s" }}
        >
          <Link to="/reasons">
            <Button variant="romantic" size="lg" className="group">
              Next stop
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              Reasons I Love You
              <Heart size={16} className="ml-2" fill="currentColor" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
