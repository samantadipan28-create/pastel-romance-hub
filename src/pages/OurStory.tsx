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
      title: "28th September 2025",
      description:
        "Honestly I had no idea that you and I could come this far but I am so glad I asked for your socials that day 😭",
      icon: "sparkle" as const,
    },
    {
      date: "Love at first Sight you could say",
      title: "16th October",
      description:
        "That god damnn radiant emitting photo of yours hit me like a cupid arrow 😩 Also I was kinda thinking that I got no chance since you are so out of my league",
      icon: "heart" as const,
    },
    {
      date: "I realized I am in Love",
      title: "7th November",
      description:
        "I don't remember the exact moment it hit me but that day you slept early and I was missing you so much and I jusy questioned myself why do i miss her so much when she is offline, Why do I wanna meet her and hug her and give her everything she wants and in that process I got the answer 😌",
      icon: "star" as const,
    },
    {
      date: "Our First Date",
      title: "25th December 2025",
      description:
        "Honestly, A lot of things are supposed to happen this day 🤣 but idk.. Let's go with the flow but I am sure that we'll go on a date and we'll hug and I also wanna kiss you",
      icon: "heart" as const,
    },
    {
      date: "Today & Beyond",
      title: "Till ∞",
      description:
        "I know we don't have much yet, this is just the beginning but I am sure that I need to update this thing pretty often because of all the things we planned and I know we're gonna do it one day 🤞🏻.",
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
            <Button
              variant="ghost"
              size="sm"
              className="mb-6 opacity-0 animate-fade-in"
            >
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
              <ArrowRight
                size={18}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
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
