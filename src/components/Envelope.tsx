import { useState } from "react";
import { Heart } from "lucide-react";

interface EnvelopeProps {
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

const Envelope = ({ isOpen, onToggle, children }: EnvelopeProps) => {
  return (
    <div className="grid place-items-center">
      <div 
        className="envelope-wrapper relative cursor-pointer"
        onClick={onToggle}
      >
        <div className={`envelope relative w-[300px] h-[230px] ${isOpen ? 'envelope-open' : ''}`}>
          {/* Letter inside */}
          <div className={`letter absolute right-[20%] w-[54%] h-[80%] bg-card text-left shadow-md p-5 transition-all duration-1000 ${isOpen ? 'bottom-[100px] scale-150 delay-1000' : 'bottom-0 scale-100'}`}>
            <div className="font-nunito text-foreground text-[10px] leading-relaxed">
              {children}
            </div>
          </div>
        </div>
        {/* Heart seal */}
        <div 
          className={`heart-seal absolute top-1/2 left-1/2 w-[15px] h-[15px] bg-primary z-[4] shadow-md cursor-pointer transition-transform duration-500 ${isOpen ? 'rotate-90 delay-[400ms]' : '-translate-x-1/2 -translate-y-[20%] rotate-45 delay-1000'}`}
          style={{ transform: isOpen ? 'rotate(90deg)' : 'translate(-50%, -20%) rotate(45deg)' }}
        >
          <div className="absolute w-[15px] h-[15px] bg-primary rounded-full -top-[7.5px]" />
          <div className="absolute w-[15px] h-[15px] bg-primary rounded-full -right-[7.5px]" />
        </div>
      </div>

      <style>{`
        .envelope-wrapper {
          background: hsl(var(--card));
          box-shadow: 0 0 40px hsl(var(--primary) / 0.2);
        }
        
        .envelope::before {
          content: "";
          position: absolute;
          top: 0;
          z-index: 2;
          border-top: 130px solid hsl(var(--muted));
          border-right: 150px solid transparent;
          border-left: 150px solid transparent;
          transform-origin: top;
          transition: all 0.5s ease-in-out 0.7s;
        }
        
        .envelope::after {
          content: "";
          position: absolute;
          z-index: 2;
          width: 0px;
          height: 0px;
          border-top: 130px solid transparent;
          border-right: 150px solid hsl(var(--secondary));
          border-bottom: 100px solid hsl(var(--secondary));
          border-left: 150px solid hsl(var(--secondary));
        }
        
        .envelope-open::before {
          transform: rotateX(180deg);
          z-index: 0;
        }
        
        .letter {
          z-index: 1;
        }
        
        .envelope-open .letter {
          z-index: 3;
        }
      `}</style>
    </div>
  );
};

export default Envelope;
