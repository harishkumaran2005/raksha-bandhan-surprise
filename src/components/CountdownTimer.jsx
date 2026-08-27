import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Lock, Sparkles } from 'lucide-react';

export default function CountdownTimer({ targetDate = '2026-09-05T10:00:00' }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isReached: false,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        isReached: false,
      };
    } else {
      timeLeft.isReached = true;
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="w-full max-w-3xl mx-auto my-6 p-6 rounded-2xl glass-panel-gold border border-yellow-500/40 shadow-2xl relative overflow-hidden text-center">
      {/* Decorative Shimmer Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-shimmer" />

      <div className="flex items-center justify-center gap-2 mb-3 text-yellow-300">
        <Clock className="w-5 h-5 animate-pulse" />
        <span className="text-sm font-semibold tracking-wider uppercase text-yellow-400">
          Letter Unlock Countdown
        </span>
        <Sparkles className="w-4 h-4 text-yellow-300 animate-spin" style={{ animationDuration: '8s' }} />
      </div>

      <h3 className="text-xl sm:text-2xl font-bold font-cinzel text-white mb-2">
        September 5th, 2026 — The Reunion Day 🤝
      </h3>

      <p className="text-xs sm:text-sm text-yellow-200/80 mb-6 max-w-lg mx-auto">
        Harish's handwritten letter is locked until we meet in person on 5th September!
      </p>

      {timeLeft.isReached ? (
        <div className="py-4 px-6 bg-emerald-500/20 border border-emerald-400/50 rounded-xl text-emerald-200 font-medium animate-pulse">
          🎉 Today is September 5th! The reunion day has arrived. The letter is unlocked!
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md mx-auto">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Mins', value: timeLeft.minutes },
            { label: 'Secs', value: timeLeft.seconds },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-black/60 backdrop-blur-md rounded-xl p-3 sm:p-4 border border-yellow-500/30 shadow-inner flex flex-col items-center justify-center transform hover:scale-105 transition-transform"
            >
              <span className="text-2xl sm:text-4xl font-extrabold font-cinzel gold-gradient-text">
                {String(item.value).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs text-yellow-300/70 uppercase tracking-widest mt-1">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      )}

      <div className="mt-6 flex items-center justify-center gap-2 text-xs text-yellow-300/70">
        <Calendar className="w-4 h-4 text-yellow-400" />
        <span>Meeting Date: September 5, 2026</span>
        <span className="mx-1">•</span>
        <Lock className="w-3.5 h-3.5 text-yellow-400" />
        <span>Sealed with Brotherly Love</span>
      </div>
    </div>
  );
}
