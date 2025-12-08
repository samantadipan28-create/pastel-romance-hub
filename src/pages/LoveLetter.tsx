import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Heart, Mail, MailOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingElements } from "@/components/FloatingElements";

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen gradient-romantic relative overflow-hidden">
      <FloatingElements />
      
      <div className="relative z-10 container max-w-2xl mx-auto px-4 py-8 flex flex-col min-h-screen">
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
            A Letter for You 💌
          </h1>
        </header>

        {/* Letter content */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full">
            {/* Envelope / Open prompt */}
            {!isOpen ? (
              <button
                onClick={() => setIsOpen(true)}
                className="w-full group opacity-0 animate-slide-up"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="bg-card/90 backdrop-blur-sm rounded-3xl p-12 shadow-card border-2 border-border/50 hover:border-primary/50 hover:shadow-glow transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex flex-col items-center gap-6">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-rose/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-rose/30 transition-all">
                      <Mail size={48} className="text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="text-center">
                      <p className="font-pacifico text-2xl text-foreground mb-2">
                        Tap to open
                      </p>
                      <p className="text-muted-foreground font-nunito">
                        A letter written from my heart to yours
                      </p>
                    </div>
                    <Heart 
                      size={24} 
                      className="text-primary animate-pulse-heart" 
                      fill="currentColor"
                    />
                  </div>
                </div>
              </button>
            ) : (
              <div 
                className="bg-card/95 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-card border-2 border-primary/30 animate-fade-in"
              >
                {/* Opened envelope icon */}
                <div className="flex justify-center mb-6">
                  <MailOpen size={32} className="text-primary" />
                </div>

                {/* Letter text */}
                <div className="font-nunito text-foreground space-y-4 leading-relaxed text-lg">
                  <p className="font-pacifico text-2xl text-primary">My Dearest Love,</p>
                  
                  <p>
                    I've been trying to find the right words to tell you how much you mean to me, 
                    but honestly? Words could never be enough.
                  </p>

                  <p>
                    From the moment you came into my life, everything changed. The colors became 
                    brighter, the days felt shorter, and my heart found a reason to beat a little faster.
                  </p>

                  <p>
                    You are my best friend, my confidant, my partner in everything. When I'm with you, 
                    I feel like the luckiest person in the entire world. Your love has shown me what 
                    true happiness feels like.
                  </p>

                  <p>
                    I promise to love you through all our tomorrows. To make you laugh when you're sad, 
                    to hold your hand when you're scared, and to remind you every single day just how 
                    amazing you are.
                  </p>

                  <p>
                    Thank you for choosing me. Thank you for loving me. Thank you for being you.
                  </p>

                  <div className="pt-4">
                    <p className="font-pacifico text-xl text-primary">
                      Forever and always yours,
                    </p>
                    <p className="font-pacifico text-lg text-muted-foreground mt-2">
                      With all my love 💕
                    </p>
                  </div>

                  {/* Hidden easter egg */}
                  <p className="text-xs text-muted-foreground/50 text-center pt-6 hover:text-primary transition-colors cursor-pointer">
                    P.S. You're absolutely adorable when you read this 😘
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Next page link */}
        {isOpen && (
          <div 
            className="text-center py-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <Link to="/surprise">
              <Button variant="romantic" size="lg" className="group">
                I have a surprise for you
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoveLetter;
