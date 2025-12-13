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
      {/* Tree trunk */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-28 md:h-32">
        <svg viewBox="0 0 40 120" className="w-full h-full">
          <path
            d="M15 120 Q12 80 18 50 Q20 30 20 20 Q20 30 22 50 Q28 80 25 120 Z"
            fill="hsl(25, 40%, 35%)"
            className="drop-shadow-lg"
          />
          {/* Branches */}
          <path
            d="M18 50 Q5 45 8 35"
            stroke="hsl(25, 40%, 35%)"
            strokeWidth="4"
            fill="none"
            className="animate-sway"
          />
          <path
            d="M22 50 Q35 45 32 35"
            stroke="hsl(25, 40%, 35%)"
            strokeWidth="4"
            fill="none"
            className="animate-sway"
            style={{ animationDelay: "0.5s" }}
          />
          <path
            d="M19 35 Q10 30 12 22"
            stroke="hsl(25, 40%, 35%)"
            strokeWidth="3"
            fill="none"
            className="animate-sway"
            style={{ animationDelay: "0.3s" }}
          />
          <path
            d="M21 35 Q30 30 28 22"
            stroke="hsl(25, 40%, 35%)"
            strokeWidth="3"
            fill="none"
            className="animate-sway"
            style={{ animationDelay: "0.8s" }}
          />
        </svg>
      </div>

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
