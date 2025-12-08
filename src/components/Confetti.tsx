import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

interface ConfettiPiece {
  id: number;
  left: number;
  delay: number;
  size: number;
  color: string;
}

export const Confetti = ({ trigger }: { trigger: boolean }) => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    if (trigger) {
      const colors = [
        "text-primary",
        "text-rose",
        "text-lavender",
        "text-peach",
        "text-accent",
      ];
      
      const newPieces = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.5,
        size: Math.random() * 16 + 8,
        color: colors[Math.floor(Math.random() * colors.length)],
      }));
      
      setPieces(newPieces);
      
      const timer = setTimeout(() => setPieces([]), 3000);
      return () => clearTimeout(timer);
    }
  }, [trigger]);

  if (pieces.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className={`absolute animate-confetti ${piece.color}`}
          style={{
            left: `${piece.left}%`,
            top: "-20px",
            animationDelay: `${piece.delay}s`,
          }}
        >
          <Heart size={piece.size} fill="currentColor" />
        </div>
      ))}
    </div>
  );
};
