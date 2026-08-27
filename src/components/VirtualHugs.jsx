import React, { useState } from 'react';
import { Heart, Gift, Sparkles, Smile } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function VirtualHugs() {
  const [hugCount, setHugCount] = useState(819);
  const [sweetCount, setSweetCount] = useState(108);
  const [floatingItems, setFloatingItems] = useState([]);

  const addFloatingEmoji = (emoji) => {
    const id = Date.now() + Math.random();
    const newFloating = {
      id,
      emoji,
      left: Math.random() * 80 + 10,
    };

    setFloatingItems((prev) => [...prev, newFloating]);

    setTimeout(() => {
      setFloatingItems((prev) => prev.filter((item) => item.id !== id));
    }, 2000);
  };

  const handleSendHug = () => {
    setHugCount((prev) => prev + 1);
    addFloatingEmoji('🤗');
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#FF6B8B', '#FFD700', '#FFFFFF'],
    });
  };

  const handleSendSweets = () => {
    setSweetCount((prev) => prev + 1);
    addFloatingEmoji('🍬');
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#FDB813', '#FFD700', '#E6AC00'],
    });
  };

  const handleSendLove = () => {
    setHugCount((prev) => prev + 5);
    addFloatingEmoji('💖');
    confetti({
      particleCount: 60,
      spread: 80,
      origin: { y: 0.8 },
    });
  };

  return (
    <section id="hugs" className="py-12 px-4 max-w-4xl mx-auto text-center relative overflow-hidden">
      {/* Floating Emojis Layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
        {floatingItems.map((item) => (
          <div
            key={item.id}
            className="absolute bottom-12 text-3xl animate-bounce transition-all duration-1000"
            style={{ left: `${item.left}%`, opacity: 0.9 }}
          >
            {item.emoji}
          </div>
        ))}
      </div>

      <div className="rounded-3xl glass-panel p-8 border border-yellow-500/30 shadow-2xl relative">
        <span className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-rose-500/10 border border-rose-500/30 text-rose-300 inline-flex items-center gap-1.5 mb-3">
          <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
          Interactive Celebration
        </span>

        <h2 className="text-3xl sm:text-4xl font-extrabold font-cinzel text-white mb-2">
          Send Sweets & Virtual Hugs 🍬🤗
        </h2>
        <p className="text-sm text-yellow-200/80 max-w-md mx-auto mb-8">
          Tap below to shower Harish with virtual laddoos, warm hugs, and festive love!
        </p>

        {/* Counters */}
        <div className="flex justify-center gap-6 mb-8">
          <div className="bg-black/50 px-6 py-4 rounded-2xl border border-yellow-500/30 min-w-[130px]">
            <span className="text-3xl sm:text-4xl font-extrabold font-cinzel text-rose-400 block">
              {hugCount}
            </span>
            <span className="text-xs text-yellow-200/70 font-medium">Virtual Hugs 🤗</span>
          </div>

          <div className="bg-black/50 px-6 py-4 rounded-2xl border border-yellow-500/30 min-w-[130px]">
            <span className="text-3xl sm:text-4xl font-extrabold font-cinzel gold-gradient-text block">
              {sweetCount}
            </span>
            <span className="text-xs text-yellow-200/70 font-medium">Festive Sweets 🍬</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={handleSendHug}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold text-xs uppercase tracking-wider hover:brightness-110 shadow-lg hover:scale-105 transition-all flex items-center gap-2"
          >
            <Heart className="w-4 h-4 fill-white" /> Send Warm Hug 🤗
          </button>

          <button
            onClick={handleSendSweets}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-yellow-500 to-amber-600 text-slate-950 font-bold text-xs uppercase tracking-wider hover:brightness-110 shadow-lg hover:scale-105 transition-all flex items-center gap-2"
          >
            <Gift className="w-4 h-4" /> Share Sweets 🍬
          </button>

          <button
            onClick={handleSendLove}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold text-xs uppercase tracking-wider hover:brightness-110 shadow-lg hover:scale-105 transition-all flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-yellow-300" /> Sister's Blessings 💖
          </button>
        </div>
      </div>
    </section>
  );
}
