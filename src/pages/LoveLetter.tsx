import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
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
          <p className="text-muted-foreground font-nunito opacity-0 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Tap the envelope to open it
          </p>
        </header>

        {/* Envelope */}
        <div className="flex-1 flex items-center justify-center">
          <div 
            className="envelope-wrapper relative cursor-pointer opacity-0 animate-slide-up"
            style={{ animationDelay: "0.3s" }}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className={`envelope relative w-[280px] h-[210px] sm:w-[320px] sm:h-[240px] ${isOpen ? 'envelope-open' : ''}`}>
              {/* Letter inside */}
              <div className={`letter absolute right-[15%] w-[70%] bg-card text-left shadow-lg rounded-sm transition-all duration-1000 ease-in-out overflow-hidden ${
                isOpen 
                  ? 'bottom-[80px] sm:bottom-[100px] scale-[1.3] sm:scale-150 z-[3]' 
                  : 'bottom-0 scale-100 z-[1] h-[75%]'
              }`}
              style={{ 
                transitionDelay: isOpen ? '1s' : '0s',
                height: isOpen ? 'auto' : '75%',
                maxHeight: isOpen ? '300px' : '75%',
                padding: isOpen ? '16px 12px' : '12px 8px'
              }}
              >
                <div className="font-nunito text-foreground text-[9px] sm:text-[10px] leading-relaxed">
                  <p className="font-pacifico text-primary text-sm mb-2">My Dearest Love,</p>
                  <p className="mb-1">
                    I know you like to read the things I write for you so I decided to include this thing for you to read. 
                  </p>
                  <p className="mb-1">
                    Before you came into my life, I was genuinely literally moving on autopilot and I had no idea what I was doing. You are the one who brought colour to my life and I am forever grateful for that.
                  </p>
                  <p className="mb-1">
                    When we meet I wanna hold you in my arms and not leave you ever and just kiss you for the longest time and I just wanna be yours forever if possible and be by your side.
                  </p>
                  <p className="mb-2">
                    I promise to love you through all our tomorrows. 💕
                  </p>
                  <p className="font-pacifico text-primary text-xs">
                    Your Dipu ❣️
                  </p>
                </div>
              </div>
            </div>
            {/* Heart seal */}
            <div 
              className={`heart-seal absolute top-1/2 left-1/2 w-[18px] h-[18px] bg-primary z-[4] shadow-lg cursor-pointer transition-all duration-500 ${
                isOpen 
                  ? 'opacity-0 scale-0' 
                  : 'opacity-100 scale-100'
              }`}
              style={{ 
                transform: 'translate(-50%, -20%) rotate(45deg)',
                transitionDelay: isOpen ? '0s' : '1s'
              }}
            >
              <div className="absolute w-[18px] h-[18px] bg-primary rounded-full -top-[9px]" />
              <div className="absolute w-[18px] h-[18px] bg-primary rounded-full -right-[9px]" />
            </div>
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
                Click for the Next page !
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        )}
      </div>

      <style>{`
        .envelope-wrapper {
          background: hsl(var(--card));
          box-shadow: 0 0 40px hsl(var(--primary) / 0.3);
          border-radius: 4px;
        }
        
        .envelope::before {
          content: "";
          position: absolute;
          top: 0;
          z-index: 2;
          border-top: 120px solid hsl(var(--muted));
          border-right: 140px solid transparent;
          border-left: 140px solid transparent;
          transform-origin: top;
          transition: all 0.5s ease-in-out 0.7s;
        }
        
        @media (min-width: 640px) {
          .envelope::before {
            border-top: 140px solid hsl(var(--muted));
            border-right: 160px solid transparent;
            border-left: 160px solid transparent;
          }
        }
        
        .envelope::after {
          content: "";
          position: absolute;
          z-index: 2;
          width: 0px;
          height: 0px;
          border-top: 120px solid transparent;
          border-right: 140px solid hsl(var(--secondary));
          border-bottom: 90px solid hsl(var(--secondary));
          border-left: 140px solid hsl(var(--secondary));
        }
        
        @media (min-width: 640px) {
          .envelope::after {
            border-top: 140px solid transparent;
            border-right: 160px solid hsl(var(--secondary));
            border-bottom: 100px solid hsl(var(--secondary));
            border-left: 160px solid hsl(var(--secondary));
          }
        }
        
        .envelope-open::before {
          transform: rotateX(180deg);
          z-index: 0;
        }
      `}</style>
    </div>
  );
};

export default LoveLetter;
