import { useState } from "react";
import { Cat } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const privateFacts = [
  "You always steal my hoodie 🥹",
  "Your laugh is my favorite sound 💕",
  "You can't sleep without holding my hand 🤭",
  "You pretend to be mad but smile anyway 😏",
  "You eat all my fries but say you're not hungry 🍟",
  "Your morning voice is so cute 🥰",
  "You get jealous of my pillow 😂",
  "You dance when you think no one's watching 💃",
];

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
        className="p-3 rounded-full bg-lavender/30 hover:bg-lavender/50 transition-colors cursor-pointer"
        aria-label="Secret cat facts"
      >
        <Cat className="text-primary" size={24} />
      </motion.button>
      <span className="text-xs text-muted-foreground/50 mt-1 font-nunito">psst... click me</span>
    </div>
  );
};
