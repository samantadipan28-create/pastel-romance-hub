import { useEffect, useState } from "react";

interface LoveTreeProps {
  glowIntensity?: "normal" | "bright";
}

interface Blossom {
  id: number;
  cx: number;
  cy: number;
  size: number;
  delay: number;
  opacity: number;
}

const LoveTree = ({ glowIntensity = "normal" }: LoveTreeProps) => {
  const [blossoms, setBlossoms] = useState<Blossom[]>([]);

  useEffect(() => {
    // Generate cherry blossoms along the branches
    const generatedBlossoms: Blossom[] = [];
    
    // Blossoms clustered along entire branch lengths
    const blossomPositions = [
      // Left main branch - from trunk outward
      { x: 90, y: 100 }, { x: 85, y: 98 }, { x: 80, y: 96 }, { x: 75, y: 94 },
      { x: 70, y: 92 }, { x: 65, y: 90 }, { x: 60, y: 88 }, { x: 55, y: 86 },
      { x: 50, y: 84 }, { x: 45, y: 82 }, { x: 40, y: 80 }, { x: 35, y: 78 },
      { x: 30, y: 76 }, { x: 25, y: 75 }, { x: 20, y: 78 }, { x: 18, y: 82 },
      // Left branch upper edge
      { x: 88, y: 95 }, { x: 82, y: 92 }, { x: 75, y: 88 }, { x: 68, y: 85 },
      { x: 60, y: 82 }, { x: 52, y: 78 }, { x: 45, y: 75 }, { x: 38, y: 72 },
      // Left branch lower edge  
      { x: 85, y: 102 }, { x: 78, y: 100 }, { x: 70, y: 96 }, { x: 62, y: 92 },
      { x: 55, y: 90 }, { x: 48, y: 88 }, { x: 42, y: 85 }, { x: 35, y: 82 },
      
      // Right main branch - from trunk outward
      { x: 110, y: 100 }, { x: 115, y: 98 }, { x: 120, y: 96 }, { x: 125, y: 94 },
      { x: 130, y: 92 }, { x: 135, y: 90 }, { x: 140, y: 88 }, { x: 145, y: 86 },
      { x: 150, y: 84 }, { x: 155, y: 82 }, { x: 160, y: 80 }, { x: 165, y: 78 },
      { x: 170, y: 76 }, { x: 175, y: 75 }, { x: 180, y: 78 }, { x: 182, y: 82 },
      // Right branch upper edge
      { x: 112, y: 95 }, { x: 118, y: 92 }, { x: 125, y: 88 }, { x: 132, y: 85 },
      { x: 140, y: 82 }, { x: 148, y: 78 }, { x: 155, y: 75 }, { x: 162, y: 72 },
      // Right branch lower edge
      { x: 115, y: 102 }, { x: 122, y: 100 }, { x: 130, y: 96 }, { x: 138, y: 92 },
      { x: 145, y: 90 }, { x: 152, y: 88 }, { x: 158, y: 85 }, { x: 165, y: 82 },
      
      // Upper left branch - from trunk outward
      { x: 95, y: 92 }, { x: 92, y: 88 }, { x: 88, y: 82 }, { x: 84, y: 76 },
      { x: 80, y: 70 }, { x: 75, y: 65 }, { x: 70, y: 60 }, { x: 65, y: 55 },
      { x: 60, y: 50 }, { x: 55, y: 45 }, { x: 50, y: 42 }, { x: 45, y: 40 },
      // Upper left edges
      { x: 90, y: 85 }, { x: 85, y: 78 }, { x: 78, y: 68 }, { x: 72, y: 62 },
      { x: 66, y: 56 }, { x: 58, y: 48 }, { x: 52, y: 44 }, { x: 48, y: 38 },
      { x: 98, y: 90 }, { x: 95, y: 82 }, { x: 88, y: 72 }, { x: 82, y: 66 },
      
      // Upper right branch - from trunk outward
      { x: 105, y: 92 }, { x: 108, y: 88 }, { x: 112, y: 82 }, { x: 116, y: 76 },
      { x: 120, y: 70 }, { x: 125, y: 65 }, { x: 130, y: 60 }, { x: 135, y: 55 },
      { x: 140, y: 50 }, { x: 145, y: 45 }, { x: 150, y: 42 }, { x: 155, y: 40 },
      // Upper right edges
      { x: 110, y: 85 }, { x: 115, y: 78 }, { x: 122, y: 68 }, { x: 128, y: 62 },
      { x: 134, y: 56 }, { x: 142, y: 48 }, { x: 148, y: 44 }, { x: 152, y: 38 },
      { x: 102, y: 90 }, { x: 105, y: 82 }, { x: 112, y: 72 }, { x: 118, y: 66 },
      
      // Top center branch - from trunk upward
      { x: 100, y: 95 }, { x: 100, y: 88 }, { x: 100, y: 80 }, { x: 100, y: 72 },
      { x: 100, y: 65 }, { x: 100, y: 58 }, { x: 100, y: 50 }, { x: 100, y: 42 },
      { x: 100, y: 35 }, { x: 100, y: 28 }, { x: 100, y: 22 }, { x: 100, y: 18 },
      // Top center edges
      { x: 95, y: 90 }, { x: 105, y: 90 }, { x: 93, y: 75 }, { x: 107, y: 75 },
      { x: 92, y: 60 }, { x: 108, y: 60 }, { x: 94, y: 45 }, { x: 106, y: 45 },
      { x: 95, y: 32 }, { x: 105, y: 32 }, { x: 92, y: 25 }, { x: 108, y: 25 },
      
      // Twig endpoints - extra clusters
      { x: 30, y: 70 }, { x: 25, y: 68 }, { x: 35, y: 72 }, { x: 28, y: 65 },
      { x: 170, y: 70 }, { x: 175, y: 68 }, { x: 165, y: 72 }, { x: 172, y: 65 },
      { x: 45, y: 38 }, { x: 42, y: 35 }, { x: 48, y: 42 }, { x: 40, y: 40 },
      { x: 155, y: 38 }, { x: 158, y: 35 }, { x: 152, y: 42 }, { x: 160, y: 40 },
      { x: 80, y: 42 }, { x: 78, y: 38 }, { x: 120, y: 42 }, { x: 122, y: 38 },
    ];

    blossomPositions.forEach((pos, i) => {
      generatedBlossoms.push({
        id: i,
        cx: pos.x + (Math.random() - 0.5) * 8,
        cy: pos.y + (Math.random() - 0.5) * 8,
        size: 6 + Math.random() * 4,
        delay: Math.random() * 2,
        opacity: 0.7 + Math.random() * 0.3,
      });
    });

    setBlossoms(generatedBlossoms);
  }, []);

  const glowFilter = glowIntensity === "bright" 
    ? "drop-shadow(0 0 8px rgba(244,114,182,0.8)) drop-shadow(0 0 15px rgba(244,114,182,0.5))" 
    : "drop-shadow(0 0 4px rgba(244,114,182,0.5))";

  return (
    <div className="relative w-full flex justify-center">
      <svg 
        viewBox="0 0 200 220" 
        className="w-64 h-56 md:w-80 md:h-72"
        style={{ filter: glowIntensity === "bright" ? "drop-shadow(0 0 20px rgba(244,114,182,0.3))" : "none" }}
      >
        {/* Tree trunk */}
        <path
          d="M95 220 Q90 180 94 140 Q97 120 100 100 Q103 120 106 140 Q110 180 105 220 Z"
          fill="hsl(25, 30%, 25%)"
        />
        
        {/* Main branches */}
        <g className="animate-sway" style={{ transformOrigin: "100px 100px" }}>
          {/* Left main branch */}
          <path
            d="M98 105 Q70 95 40 80"
            stroke="hsl(25, 30%, 28%)"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
          />
          {/* Right main branch */}
          <path
            d="M102 105 Q130 95 160 80"
            stroke="hsl(25, 30%, 28%)"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
          />
          {/* Upper left branch */}
          <path
            d="M96 95 Q75 75 55 50"
            stroke="hsl(25, 30%, 28%)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
          {/* Upper right branch */}
          <path
            d="M104 95 Q125 75 145 50"
            stroke="hsl(25, 30%, 28%)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
          {/* Top branch */}
          <path
            d="M100 100 Q100 70 100 40"
            stroke="hsl(25, 30%, 28%)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          
          {/* Smaller twigs */}
          <path d="M55 70 Q40 65 30 70" stroke="hsl(25, 30%, 28%)" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M145 70 Q160 65 170 70" stroke="hsl(25, 30%, 28%)" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M65 55 Q55 45 45 40" stroke="hsl(25, 30%, 28%)" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M135 55 Q145 45 155 40" stroke="hsl(25, 30%, 28%)" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M95 60 Q85 50 80 40" stroke="hsl(25, 30%, 28%)" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M105 60 Q115 50 120 40" stroke="hsl(25, 30%, 28%)" strokeWidth="2" fill="none" strokeLinecap="round" />
        </g>

        {/* Cherry blossoms */}
        <g style={{ filter: glowFilter }}>
          {blossoms.map((blossom) => (
            <g 
              key={blossom.id}
              style={{
                animation: `pulse-blossom 2s ease-in-out infinite`,
                animationDelay: `${blossom.delay}s`,
              }}
            >
              {/* 5-petal cherry blossom */}
              {[0, 72, 144, 216, 288].map((angle, i) => (
                <ellipse
                  key={i}
                  cx={blossom.cx + Math.cos((angle * Math.PI) / 180) * (blossom.size * 0.4)}
                  cy={blossom.cy + Math.sin((angle * Math.PI) / 180) * (blossom.size * 0.4)}
                  rx={blossom.size * 0.35}
                  ry={blossom.size * 0.5}
                  fill="hsl(340, 80%, 80%)"
                  opacity={blossom.opacity}
                  transform={`rotate(${angle + 90} ${blossom.cx + Math.cos((angle * Math.PI) / 180) * (blossom.size * 0.4)} ${blossom.cy + Math.sin((angle * Math.PI) / 180) * (blossom.size * 0.4)})`}
                />
              ))}
              {/* Center of blossom */}
              <circle
                cx={blossom.cx}
                cy={blossom.cy}
                r={blossom.size * 0.2}
                fill="hsl(45, 90%, 70%)"
                opacity={blossom.opacity}
              />
            </g>
          ))}
        </g>

        {/* Falling petals */}
        {[...Array(5)].map((_, i) => (
          <ellipse
            key={`petal-${i}`}
            cx={60 + i * 25}
            cy={180 + (i % 2) * 20}
            rx="3"
            ry="4"
            fill="hsl(340, 75%, 85%)"
            opacity="0.6"
            style={{
              animation: `fall-petal 4s ease-in-out infinite`,
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}
      </svg>

      <style>{`
        @keyframes pulse-blossom {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.85; transform: scale(1.05); }
        }
        @keyframes fall-petal {
          0% { transform: translateY(0) rotate(0deg); opacity: 0.6; }
          50% { transform: translateY(15px) rotate(180deg) translateX(10px); opacity: 0.4; }
          100% { transform: translateY(0) rotate(360deg); opacity: 0.6; }
        }
      `}</style>
    </div>
  );
};

export default LoveTree;
