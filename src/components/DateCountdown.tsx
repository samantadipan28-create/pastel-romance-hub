import { useState, useEffect } from "react";

interface DateCountdownProps {
  targetDate: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  total: number;
}

const DateCountdown = ({ targetDate }: DateCountdownProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0, total: 1 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
        total: difference,
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (timeLeft.total <= 0) {
    return (
      <div className="text-center animate-fade-in">
        <p className="font-pacifico text-3xl md:text-4xl text-primary mb-2">
          It's date time! 💖
        </p>
        <p className="text-muted-foreground font-nunito">
          Have the most amazing time together!
        </p>
      </div>
    );
  }

  return (
    <div className="text-center">
      <div className="flex flex-wrap justify-center gap-3 md:gap-4">
        <TimeUnit value={timeLeft.days} label="days" />
        <TimeUnit value={timeLeft.hours} label="hours" />
        <TimeUnit value={timeLeft.minutes} label="minutes" />
        <TimeUnit value={timeLeft.seconds} label="seconds" />
      </div>
    </div>
  );
};

const TimeUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-3 md:p-4 min-w-[70px] md:min-w-[80px] shadow-card border border-primary/20">
    <div className="font-pacifico text-2xl md:text-3xl text-primary">
      {value}
    </div>
    <div className="text-xs md:text-sm text-muted-foreground font-nunito">
      {label}
    </div>
  </div>
);

export default DateCountdown;
