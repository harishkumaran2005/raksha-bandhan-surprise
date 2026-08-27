import React from 'react';
import { Lock, Heart, Sparkles, FileText, Calendar, EyeOff } from 'lucide-react';

export default function LetterVault() {
  return (
    <section id="letter-vault" className="py-12 px-4 max-w-5xl mx-auto">
      {/* Title */}
      <div className="text-center mb-8">
        <span className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-yellow-500/10 border border-yellow-500/30 text-yellow-300 inline-flex items-center gap-1.5 mb-3">
          <Lock className="w-3.5 h-3.5 text-yellow-400" />
          Sealed & Hidden Letter Vault
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold font-cinzel text-white">
          Harish's Secret Letter to Thangoo ✉️
        </h2>
        <p className="text-sm text-yellow-200/80 mt-2 max-w-xl mx-auto">
          Written on 27/08/2026. The full letter is kept 100% hidden until September 5th reunion!
        </p>
      </div>

      {/* Lock Notice Banner */}
      <div className="mb-8 p-5 rounded-2xl bg-gradient-to-r from-amber-950/90 via-purple-950/90 to-amber-950/90 border border-yellow-500/50 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-yellow-500/20 border border-yellow-400/60 flex items-center justify-center shrink-0 text-yellow-300 shadow-lg">
            <Lock className="w-7 h-7 animate-pulse" />
          </div>
          <div>
            <h4 className="font-bold text-white text-lg font-cinzel">
              Letter Hidden Until We Meet on Sept 5th, 2026 🔒
            </h4>
            <p className="text-xs text-yellow-200/90 mt-1 leading-relaxed max-w-2xl">
              "We are meeting on September 5th! The full handwritten letter will be opened and read together when we meet in person!"
            </p>
          </div>
        </div>

        <div className="shrink-0 px-4 py-2 rounded-xl bg-black/60 border border-yellow-500/30 text-xs text-yellow-300 font-semibold flex items-center gap-1.5">
          <Calendar className="w-4 h-4 text-yellow-400" />
          Reunion: 05/09/2026
        </div>
      </div>

      {/* Main Blurred Envelope container */}
      <div className="relative rounded-3xl glass-panel-gold p-6 sm:p-8 overflow-hidden shadow-2xl border border-yellow-500/40 my-8">
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 rounded-2xl overflow-hidden bg-slate-950/90 p-4 border border-yellow-500/20">
          <div className="relative rounded-xl overflow-hidden min-h-[380px] bg-stone-950 flex items-center justify-center">
            <img
              src="./surprise/1787848165755.jpg"
              alt="Hidden Letter Page 1"
              className="w-full h-full object-cover filter blur-[36px] brightness-30 contrast-150 select-none pointer-events-none"
            />
          </div>

          <div className="relative rounded-xl overflow-hidden min-h-[380px] bg-stone-950 flex items-center justify-center">
            <img
              src="./surprise/1787848165699.jpg"
              alt="Hidden Letter Page 2"
              className="w-full h-full object-cover filter blur-[36px] brightness-30 contrast-150 select-none pointer-events-none"
            />
          </div>

          {/* Heavy Lock Overlay */}
          <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-2xl flex flex-col items-center justify-center p-6 text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-amber-600 via-yellow-400 to-rose-500 p-1 shadow-2xl mb-4 animate-float">
              <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center text-yellow-400 border border-yellow-400/40">
                <EyeOff className="w-9 h-9" />
              </div>
            </div>

            <span className="px-4 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest bg-yellow-500/20 text-yellow-300 border border-yellow-500/40 mb-2">
              Sealed Physical Letter
            </span>

            <h3 className="text-2xl sm:text-3xl font-extrabold font-cinzel text-white mb-2">
              Hidden Until September 5th
            </h3>

            <p className="text-xs sm:text-sm text-yellow-200/80 max-w-md leading-relaxed mb-6">
              Full letter is physically locked until Harish and Thangoo meet in person on <strong className="text-yellow-300 font-bold">Sept 5th, 2026</strong>!
            </p>

            <div className="px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-400/30 text-yellow-300 text-xs font-mono inline-flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-yellow-400 animate-spin" style={{ animationDuration: '8s' }} />
              Locked until our reunion day!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
