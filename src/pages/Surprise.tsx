import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CalendarHeart, Sparkles } from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { FloatingElements } from "@/components/FloatingElements";
import LoveTree from "@/components/LoveTree";
import DateCountdown from "@/components/DateCountdown";
import { cn } from "@/lib/utils";

const Surprise = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [dateError, setDateError] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleDateSelect = (date: Date | undefined) => {
    if (!date) return;
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (date < today) {
      setDateError("Pick a future date 😌");
      return;
    }
    
    setDateError(null);
    setSelectedDate(date);
    setIsOpen(false);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[hsl(260,40%,15%)] via-[hsl(280,30%,20%)] to-[hsl(300,25%,25%)]">
      <FloatingElements />
      
      {/* Stars background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/60 rounded-full animate-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 container max-w-xl mx-auto px-4 py-8 min-h-screen flex flex-col">
        {/* Header */}
        <header className="text-center mb-6">
          <Link to="/home">
            <Button variant="ghost" size="sm" className="mb-4 text-white/80 hover:text-white hover:bg-white/10 opacity-0 animate-fade-in">
              <ArrowLeft size={16} className="mr-2" />
              Back to Home
            </Button>
          </Link>
        </header>

        {/* Main content */}
        <div className="flex-1 flex flex-col items-center justify-center gap-6">
          {/* Love Tree */}
          <div 
            className="w-full opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <LoveTree glowIntensity={selectedDate ? "bright" : "normal"} />
          </div>

          {/* Date selection or countdown */}
          <div 
            className="w-full text-center opacity-0 animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            {!selectedDate ? (
              <div className="space-y-4">
                <h1 className="font-pacifico text-2xl md:text-3xl text-white/90">
                  When do you want our next date to be?
                </h1>
                
                <Popover open={isOpen} onOpenChange={setIsOpen}>
                  <PopoverTrigger asChild>
                    <Button 
                      variant="romantic" 
                      size="lg"
                      className="group shadow-glow"
                    >
                      <CalendarHeart size={20} className="mr-2" />
                      Pick a date
                      <Sparkles size={16} className="ml-2 opacity-70 group-hover:opacity-100 transition-opacity" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-card border-primary/30" align="center">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={handleDateSelect}
                      initialFocus
                      className={cn("p-3 pointer-events-auto")}
                    />
                    {dateError && (
                      <p className="text-center text-sm text-destructive pb-3 font-nunito">
                        {dateError}
                      </p>
                    )}
                  </PopoverContent>
                </Popover>
              </div>
            ) : (
              <div className="space-y-4">
                <h1 className="font-pacifico text-2xl md:text-3xl text-white/90 animate-fade-in">
                  Counting down to our next date 💖
                </h1>
                <p className="text-white/60 font-nunito text-sm">
                  {format(selectedDate, "EEEE, MMMM do, yyyy")}
                </p>
                <div className="mt-6">
                  <DateCountdown targetDate={selectedDate} />
                </div>
                
                {/* Reset button */}
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setSelectedDate(undefined)}
                  className="text-white/50 hover:text-white/80 hover:bg-white/10 mt-4"
                >
                  Change date
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Next page link */}
        <div 
          className="text-center pt-8 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          <Link to="/ending">
            <Button variant="romantic" size="lg" className="group">
              One last thing...
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Surprise;
