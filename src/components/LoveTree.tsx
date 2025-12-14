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
    
    // Blossoms clustered around branch endpoints and along branches
    const blossomPositions = [
      // Left main branch area - dense clusters
      { x: 35, y: 85 }, { x: 25, y: 75 }, { x: 40, y: 70 }, { x: 32, y: 78 },
      { x: 30, y: 65 }, { x: 20, y: 80 }, { x: 45, y: 80 }, { x: 28, y: 72 },
      { x: 28, y: 55 }, { x: 38, y: 60 }, { x: 22, y: 70 }, { x: 35, y: 68 },
      { x: 18, y: 85 }, { x: 42, y: 75 }, { x: 33, y: 82 }, { x: 26, y: 62 },
      { x: 48, y: 72 }, { x: 15, y: 78 }, { x: 38, y: 88 }, { x: 24, y: 68 },
      // Right main branch area - dense clusters
      { x: 165, y: 85 }, { x: 175, y: 75 }, { x: 160, y: 70 }, { x: 168, y: 78 },
      { x: 170, y: 65 }, { x: 180, y: 80 }, { x: 155, y: 80 }, { x: 172, y: 72 },
      { x: 172, y: 55 }, { x: 162, y: 60 }, { x: 178, y: 70 }, { x: 165, y: 68 },
      { x: 182, y: 85 }, { x: 158, y: 75 }, { x: 167, y: 82 }, { x: 174, y: 62 },
      { x: 152, y: 72 }, { x: 185, y: 78 }, { x: 162, y: 88 }, { x: 176, y: 68 },
      // Upper left branch - more blossoms
      { x: 50, y: 50 }, { x: 45, y: 40 }, { x: 55, y: 45 }, { x: 52, y: 55 },
      { x: 40, y: 45 }, { x: 60, y: 55 }, { x: 48, y: 35 }, { x: 58, y: 48 },
      { x: 42, y: 52 }, { x: 65, y: 58 }, { x: 38, y: 48 }, { x: 55, y: 38 },
      { x: 35, y: 42 }, { x: 62, y: 52 }, { x: 47, y: 42 }, { x: 53, y: 32 },
      // Upper right branch - more blossoms
      { x: 150, y: 50 }, { x: 155, y: 40 }, { x: 145, y: 45 }, { x: 148, y: 55 },
      { x: 160, y: 45 }, { x: 140, y: 55 }, { x: 152, y: 35 }, { x: 142, y: 48 },
      { x: 158, y: 52 }, { x: 135, y: 58 }, { x: 162, y: 48 }, { x: 145, y: 38 },
      { x: 165, y: 42 }, { x: 138, y: 52 }, { x: 153, y: 42 }, { x: 147, y: 32 },
      // Top center area - dense crown
      { x: 100, y: 30 }, { x: 95, y: 25 }, { x: 105, y: 25 }, { x: 100, y: 35 },
      { x: 90, y: 35 }, { x: 110, y: 35 }, { x: 100, y: 20 }, { x: 97, y: 28 },
      { x: 85, y: 40 }, { x: 115, y: 40 }, { x: 103, y: 22 }, { x: 92, y: 30 },
      { x: 108, y: 30 }, { x: 88, y: 28 }, { x: 112, y: 28 }, { x: 100, y: 15 },
      { x: 95, y: 18 }, { x: 105, y: 18 }, { x: 82, y: 35 }, { x: 118, y: 35 },
      // Fill middle gaps - connect branches
      { x: 70, y: 60 }, { x: 130, y: 60 }, { x: 80, y: 50 }, { x: 120, y: 50 },
      { x: 75, y: 55 }, { x: 125, y: 55 }, { x: 85, y: 45 }, { x: 115, y: 45 },
      { x: 72, y: 65 }, { x: 128, y: 65 }, { x: 78, y: 58 }, { x: 122, y: 58 },
      { x: 68, y: 52 }, { x: 132, y: 52 }, { x: 90, y: 42 }, { x: 110, y: 42 },
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
