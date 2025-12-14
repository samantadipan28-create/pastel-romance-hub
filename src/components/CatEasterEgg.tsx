import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const privateFacts = [
  "You know cats eat their owner after they are dead 🤷🏻‍♂️",
  "My favourite thing about you is when you call me every morning and wake me up... Always a good day 😌",
  "I am very jealous of your pillow btw😒",
];

const CuteCat = () => (
  <svg viewBox="0 0 100 80" className="w-16 h-14">
    {/* Tail */}
    <motion.path
      d="M85 55 Q95 45 90 35 Q88 30 85 32"
      fill="none"
      stroke="hsl(var(--primary))"
      strokeWidth="4"
      strokeLinecap="round"
      animate={{ d: ["M85 55 Q95 45 90 35 Q88 30 85 32", "M85 55 Q100 50 95 38 Q93 33 90 35", "M85 55 Q95 45 90 35 Q88 30 85 32"] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    />
    
    {/* Body */}
    <ellipse cx="55" cy="55" rx="30" ry="20" fill="hsl(var(--primary))" />
    
    {/* Head */}
    <circle cx="28" cy="40" r="22" fill="hsl(var(--primary))" />
    
    {/* Left ear */}
    <path d="M12 25 L8 8 L22 18 Z" fill="hsl(var(--primary))" />
    <path d="M14 22 L12 12 L20 18 Z" fill="hsl(var(--lavender))" />
    
    {/* Right ear */}
    <path d="M38 18 L48 8 L44 25 Z" fill="hsl(var(--primary))" />
    <path d="M40 18 L46 12 L42 22 Z" fill="hsl(var(--lavender))" />
    
    {/* Face details */}
    <ellipse cx="20" cy="38" rx="4" ry="5" fill="hsl(var(--card))" />
    <ellipse cx="36" cy="38" rx="4" ry="5" fill="hsl(var(--card))" />
    
    {/* Pupils */}
    <motion.ellipse 
      cx="20" cy="39" rx="2" ry="3" fill="hsl(var(--foreground))"
      animate={{ cy: [39, 38, 39] }}
      transition={{ duration: 3, repeat: Infinity }}
    />
    <motion.ellipse 
      cx="36" cy="39" rx="2" ry="3" fill="hsl(var(--foreground))"
      animate={{ cy: [39, 38, 39] }}
      transition={{ duration: 3, repeat: Infinity }}
    />
    
    {/* Nose */}
    <path d="M28 44 L25 48 L31 48 Z" fill="hsl(var(--lavender))" />
    
    {/* Mouth */}
    <path d="M28 48 Q28 52 24 52" fill="none" stroke="hsl(var(--foreground))" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M28 48 Q28 52 32 52" fill="none" stroke="hsl(var(--foreground))" strokeWidth="1.5" strokeLinecap="round" />
    
    {/* Whiskers */}
    <line x1="8" y1="42" x2="18" y2="44" stroke="hsl(var(--foreground))" strokeWidth="1" />
    <line x1="8" y1="48" x2="18" y2="48" stroke="hsl(var(--foreground))" strokeWidth="1" />
    <line x1="38" y1="44" x2="48" y2="42" stroke="hsl(var(--foreground))" strokeWidth="1" />
    <line x1="38" y1="48" x2="48" y2="48" stroke="hsl(var(--foreground))" strokeWidth="1" />
    
    {/* Front paws */}
    <ellipse cx="35" cy="70" rx="6" ry="4" fill="hsl(var(--primary))" />
    <ellipse cx="50" cy="70" rx="6" ry="4" fill="hsl(var(--primary))" />
  </svg>
);

export const CatEasterEgg = () => {
  const [showFact, setShowFact] = useState(false);
  const [currentFact, setCurrentFact] = useState("");

  const handleClick = () => {
    const randomFact = privateFacts[Math.floor(Math.random() * privateFacts.length)];
    setCurrentFact(randomFact);
    setShowFact(true);
    setTimeout(() => setShowFact(false), 3000);
  };

  return (
    <div className="relative flex flex-col items-center">
      <AnimatePresence>
        {showFact && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            className="absolute -top-16 bg-card/95 backdrop-blur-sm border border-border/50 rounded-2xl px-4 py-3 shadow-lg max-w-[250px] text-center"
          >
            <p className="text-sm font-nunito text-foreground">{currentFact}</p>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-3 h-3 bg-card/95 border-r border-b border-border/50" />
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.button
        onClick={handleClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="cursor-pointer"
        aria-label="Secret cat facts"
      >
        <CuteCat />
      </motion.button>
      <span className="text-xs text-muted-foreground/50 font-nunito">psst... click me</span>
    </div>
  );
};
