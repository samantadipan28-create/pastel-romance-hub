import { useEffect, useState } from "react";

interface LoveTreeProps {
  glowIntensity?: "normal" | "bright";
}

const LoveTree = ({ glowIntensity = "normal" }: LoveTreeProps) => {
  const [leaves, setLeaves] = useState<{ id: number; x: number; y: number; size: number; delay: number }[]>([]);

  useEffect(() => {
    // Generate heart leaves positions on the tree crown
    const generatedLeaves = [];
    for (let i = 0; i < 24; i++) {
      // Distribute leaves in an oval/crown shape
      const angle = (i / 24) * Math.PI * 2;
      const radiusX = 80 + Math.random() * 40;
      const radiusY = 60 + Math.random() * 30;
      const x = 50 + Math.cos(angle) * radiusX / 2 + (Math.random() - 0.5) * 30;
      const y = 25 + Math.sin(angle) * radiusY / 3 + (Math.random() - 0.5) * 20;
      
      generatedLeaves.push({
        id: i,
        x: Math.max(10, Math.min(90, x)),
        y: Math.max(5, Math.min(50, y)),
        size: 12 + Math.random() * 10,
        delay: Math.random() * 3,
      });
    }
    setLeaves(generatedLeaves);
  }, []);

  const glowClass = glowIntensity === "bright" 
    ? "drop-shadow-[0_0_12px_rgba(244,114,182,0.9)]" 
    : "drop-shadow-[0_0_6px_rgba(244,114,182,0.6)]";

  return (
    <div className="relative w-full max-w-sm mx-auto h-80 md:h-96">
      {/* Tree trunk and branches */}
      <svg 
        viewBox="0 0 200 300" 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-64 md:w-56 md:h-72"
      >
        {/* Main trunk */}
        <path
          d="M90 300 Q85 250 92 180 Q95 140 100 100 Q105 140 108 180 Q115 250 110 300 Z"
          fill="hsl(25, 35%, 30%)"
          className="drop-shadow-lg"
        />
        {/* Trunk texture */}
        <path
          d="M95 280 Q97 260 94 240"
          stroke="hsl(25, 30%, 25%)"
          strokeWidth="2"
          fill="none"
          opacity="0.5"
        />
        <path
          d="M103 270 Q105 250 102 230"
          stroke="hsl(25, 30%, 25%)"
          strokeWidth="2"
          fill="none"
          opacity="0.5"
        />
        
        {/* Main branches */}
        <path
          d="M95 160 Q60 150 40 120"
          stroke="hsl(25, 35%, 30%)"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          className="animate-sway"
        />
        <path
          d="M105 160 Q140 150 160 120"
          stroke="hsl(25, 35%, 30%)"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          className="animate-sway"
          style={{ animationDelay: "0.5s" }}
        />
        <path
          d="M98 130 Q70 110 50 80"
          stroke="hsl(25, 35%, 30%)"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          className="animate-sway"
          style={{ animationDelay: "0.3s" }}
        />
        <path
          d="M102 130 Q130 110 150 80"
          stroke="hsl(25, 35%, 30%)"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          className="animate-sway"
          style={{ animationDelay: "0.8s" }}
        />
        
        {/* Smaller branches */}
        <path
          d="M100 110 Q85 90 70 60"
          stroke="hsl(25, 35%, 30%)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          className="animate-sway"
          style={{ animationDelay: "0.2s" }}
        />
        <path
          d="M100 110 Q115 90 130 60"
          stroke="hsl(25, 35%, 30%)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          className="animate-sway"
          style={{ animationDelay: "0.6s" }}
        />
        <path
          d="M100 90 Q100 70 100 50"
          stroke="hsl(25, 35%, 30%)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          className="animate-sway"
          style={{ animationDelay: "0.4s" }}
        />
      </svg>

      {/* Heart leaves */}
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className={`absolute transition-all duration-1000 ${glowClass}`}
          style={{
            left: `${leaf.x}%`,
            top: `${leaf.y}%`,
            transform: "translate(-50%, -50%)",
            animation: `pulse-heart 2s ease-in-out infinite, float-gentle 4s ease-in-out infinite`,
            animationDelay: `${leaf.delay}s, ${leaf.delay + 0.5}s`,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            style={{ width: leaf.size, height: leaf.size }}
            className="text-primary"
          >
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill="currentColor"
            />
          </svg>
        </div>
      ))}

      {/* Sparkle effects around the tree */}
      {[...Array(6)].map((_, i) => (
        <div
          key={`sparkle-${i}`}
          className="absolute w-2 h-2 bg-lavender rounded-full animate-sparkle opacity-60"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${10 + Math.random() * 40}%`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}
    </div>
  );
};

export default LoveTree;
