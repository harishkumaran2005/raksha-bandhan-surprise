import React, { useState } from 'react';
import { Heart, Sparkles, Award, ShieldCheck, CheckCircle, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function RakhiRitual() {
  const [isTied, setIsTied] = useState(false);
  const [blessing, setBlessing] = useState('');

  const blessings = [
    "May your life be filled with endless joy, happiness, and peace! Harish will always be by your side. 💖",
    "No matter where life takes us, my love and protection for you will remain eternal! 🛡️✨",
    "To my sweet Thangoo: Thank you for being my constant strength and best friend forever! 🌸",
    "என் உடன் பிறவா, என் உடன்பிறப்பே, ரத்தம் சேர்க்காத உறவு, என் இதயம் சேர்த்த சொந்தமே!! ❤️"
  ];

  const handleTieRakhi = () => {
    setIsTied(true);
    const randomBlessing = blessings[Math.floor(Math.random() * blessings.length)];
    setBlessing(randomBlessing);

    // Fire fireworks / confetti burst
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.65 },
      colors: ['#FFD700', '#FF6B8B', '#FDB813', '#FFFFFF', '#E6AC00']
    });
  };

  const handleReset = () => {
    setIsTied(false);
    setBlessing('');
  };

  return (
    <section id="rakhi-ritual" className="py-12 px-4 max-w-4xl mx-auto">
      <div className="rounded-3xl glass-panel-gold p-8 border border-yellow-500/40 shadow-2xl text-center relative overflow-hidden">
        {/* Background glow orb */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-amber-500/10 rounded-full filter blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-rose-500/10 rounded-full filter blur-3xl" />

        <span className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-rose-500/10 border border-rose-500/30 text-rose-300 inline-flex items-center gap-1.5 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
          Interactive Festive Ritual
        </span>

        <h2 className="text-3xl sm:text-4xl font-extrabold font-cinzel text-white mb-2">
          Virtual Rakhi Ritual 🧵✨
        </h2>
        <p className="text-sm text-yellow-200/80 max-w-lg mx-auto mb-8">
          Tap to tie the sacred thread of love and protection onto Harish's wrist!
        </p>

        {/* Interactive Rakhi Plate */}
        <div className="relative max-w-md mx-auto my-6 p-6 rounded-2xl bg-black/50 border border-yellow-500/30 shadow-inner flex flex-col items-center">
          {/* Wrist & Rakhi Illustration */}
          <div className="relative w-48 h-48 flex items-center justify-center mb-6">
            {/* Wrist */}
            <div className="w-36 h-12 bg-gradient-to-r from-amber-800 to-amber-700 rounded-full shadow-lg border border-amber-600/40 flex items-center justify-center relative">
              <span className="text-[10px] text-amber-200/60 font-semibold tracking-wider">
                HARISH'S WRIST
              </span>
            </div>

            {/* Rakhi Thread Overlay */}
            <div
              className={`absolute inset-x-0 h-4 bg-gradient-to-r from-yellow-400 via-rose-500 to-yellow-400 transition-all duration-700 rounded-full shadow-md ${
                isTied ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}
            />

            {/* Center Rakhi Ornament */}
            <div
              className={`absolute w-20 h-20 rounded-full bg-gradient-to-tr from-yellow-400 via-amber-500 to-rose-500 p-1 shadow-2xl transition-all duration-700 ${
                isTied ? 'scale-110 rotate-180 animate-pulse-glow' : 'scale-90 opacity-80 hover:scale-100'
              }`}
            >
              <div className="w-full h-full rounded-full bg-red-950 flex flex-col items-center justify-center border-2 border-yellow-300">
                <Heart className={`w-8 h-8 text-yellow-300 ${isTied ? 'fill-rose-500 animate-bounce' : 'fill-yellow-400'}`} />
                <span className="text-[9px] font-bold font-cinzel text-yellow-200 mt-0.5">
                  THANGOO
                </span>
              </div>
            </div>
          </div>

          {/* Action Button */}
          {!isTied ? (
            <button
              onClick={handleTieRakhi}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-yellow-400 via-amber-500 to-rose-500 text-slate-950 font-black text-sm uppercase tracking-widest hover:brightness-110 shadow-xl transform hover:scale-105 transition-all flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Tie Sacred Rakhi Now 🧵
            </button>
          ) : (
            <div className="w-full space-y-4 animate-fade-in">
              <div className="p-4 rounded-xl bg-gradient-to-r from-rose-950/80 to-amber-950/80 border border-yellow-400/50 text-yellow-100 shadow-xl">
                <div className="flex items-center justify-center gap-2 text-yellow-300 font-bold text-sm mb-1">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  Rakhi Tied with Love!
                </div>
                <p className="text-xs sm:text-sm font-medium italic mt-2 text-yellow-200">
                  "{blessing}"
                </p>
              </div>

              <button
                onClick={handleReset}
                className="px-4 py-2 rounded-full bg-yellow-500/20 text-yellow-300 text-xs font-semibold hover:bg-yellow-500/30 transition-all inline-flex items-center gap-1.5"
              >
                <RefreshCw className="w-3.5 h-3.5" /> Tie Again
              </button>
            </div>
          )}
        </div>

        {/* Festive Promises */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          {[
            {
              icon: ShieldCheck,
              title: "Always Protected",
              desc: "Through any sort of physical or mental situation, I am there for you.",
            },
            {
              icon: Award,
              title: "Unconditional Support",
              desc: "I will be part of your decisions always, guiding and supporting you.",
            },
            {
              icon: Heart,
              title: "Eternal Sister Bond",
              desc: "Ratham Serkathe Uravu, En Idhayam Sertha Sonthame!! 💖",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-black/40 border border-yellow-500/20 hover:border-yellow-400/50 transition-all"
            >
              <item.icon className="w-6 h-6 text-yellow-400 mb-2" />
              <h4 className="font-bold text-white text-sm mb-1">{item.title}</h4>
              <p className="text-xs text-yellow-200/70 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
