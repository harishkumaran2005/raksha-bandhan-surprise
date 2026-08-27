import React from 'react';
import { Heart, Sparkles, Lock, Camera, MessageCircle, Calendar, Scroll, Music } from 'lucide-react';
import CountdownTimer from './components/CountdownTimer';
import LetterVault from './components/LetterVault';
import RakhiRitual from './components/RakhiRitual';
import PhotoGallery from './components/PhotoGallery';
import LoveNotes from './components/LoveNotes';
import MusicPlayer from './components/MusicPlayer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans relative selection:bg-yellow-500 selection:text-black">
      {/* Decorative ambient lighting elements */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-rose-500/10 rounded-full filter blur-[120px] pointer-events-none" />

      {/* Header Navigation */}
      <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-yellow-500/20 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-400 flex items-center justify-center text-slate-950 font-black text-sm shadow-md">
              ✨
            </div>
            <span className="font-cinzel font-bold text-lg text-white tracking-wide">
              Thangoo <span className="gold-gradient-text">Surprise</span> 💖
            </span>
          </div>

          <nav className="hidden sm:flex items-center gap-6 text-xs font-medium text-yellow-200/80">
            <a href="#letter-vault" className="hover:text-yellow-400 transition-colors">Hidden Letter</a>
            <a href="#rakhi-ritual" className="hover:text-yellow-400 transition-colors">Rakhi Ritual</a>
            <a href="#gallery" className="hover:text-yellow-400 transition-colors">Memories</a>
            <a href="#love-notes" className="hover:text-yellow-400 transition-colors">Promises</a>
          </nav>
        </div>
      </header>

      {/* Hero Banner Section */}
      <section className="relative pt-12 pb-16 px-4 max-w-5xl mx-auto text-center overflow-hidden">
        {/* Tamil Headline Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-amber-500/20 via-rose-500/20 to-amber-500/20 border border-yellow-500/40 text-yellow-300 mb-6 shadow-xl animate-float">
          <Sparkles className="w-4 h-4 text-yellow-400 animate-spin" style={{ animationDuration: '6s' }} />
          <span className="font-tamil font-bold text-xs sm:text-sm">
            "என் உடன் பிறவா, என் உடன்பிறப்பே... என் இதயம் சேர்த்த சொந்தமே!!"
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl font-black font-cinzel text-white leading-tight mb-4 tracking-tight">
          Happy Raksha Bandhan, <br />
          <span className="gold-gradient-text drop-shadow-lg">Thangoo! 💖✨</span>
        </h1>

        <p className="text-base sm:text-lg text-yellow-100/90 max-w-2xl mx-auto leading-relaxed mb-6 font-light">
          A dedicated surprise web space crafted with brotherly love by <strong className="text-yellow-400 font-semibold">Harish</strong>. 
          Featuring 819+ days (70,794,000+ seconds) of memories, a virtual Rakhi ritual, and a hidden letter unlocking on September 5th!
        </p>

        {/* Memory Stats Banner */}
        <div className="flex flex-wrap items-center justify-center gap-4 max-w-xl mx-auto mb-8">
          <div className="px-4 py-2 rounded-xl bg-black/50 border border-yellow-500/30 text-xs text-yellow-200">
            <span className="font-bold text-yellow-400 font-cinzel text-base block">819+ Days</span>
            Shared Memories
          </div>
          <div className="px-4 py-2 rounded-xl bg-black/50 border border-yellow-500/30 text-xs text-yellow-200">
            <span className="font-bold text-rose-400 font-cinzel text-base block">70,794,000+</span>
            Seconds of Love
          </div>
          <div className="px-4 py-2 rounded-xl bg-black/50 border border-yellow-500/30 text-xs text-yellow-200">
            <span className="font-bold text-emerald-400 font-cinzel text-base block">Sept 5, 2026</span>
            Reunion Date 🤝
          </div>
        </div>

        {/* Action Button */}
        <div className="flex justify-center gap-4">
          <a
            href="#letter-vault"
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-yellow-400 via-amber-500 to-rose-500 text-slate-950 font-black text-sm uppercase tracking-wider hover:brightness-110 shadow-xl shadow-amber-500/20 transform hover:-translate-y-1 transition-all flex items-center gap-2"
          >
            <Scroll className="w-5 h-5" /> View Letter Vault ✉️
          </a>
        </div>
      </section>

      {/* Countdown Timer Section */}
      <CountdownTimer targetDate="2026-09-05T10:00:00" />

      {/* Letter Vault Section */}
      <LetterVault />

      {/* Interactive Rakhi Ritual Section */}
      <RakhiRitual />

      {/* Photo Gallery Section */}
      <PhotoGallery />

      {/* Promises & Quotes Section */}
      <LoveNotes />

      {/* Audio Player Control playing Aasa Orave */}
      <MusicPlayer />

      {/* Footer */}
      <footer className="mt-20 py-8 px-4 border-t border-yellow-500/20 bg-slate-950 text-center text-xs text-yellow-200/60">
        <div className="max-w-4xl mx-auto space-y-3">
          <p className="font-cinzel text-sm text-yellow-300 font-semibold">
            Crafted with Eternal Love by Harish for Thangoo ❤️
          </p>
          <p className="font-tamil text-xs text-yellow-400/80">
            "உன் அன்புள்ள, ஹரீஷ் • 27/08/2026"
          </p>
          <p className="text-[11px] text-slate-500">
            Happy Raksha Bandhan 2026 • Song: Aasa Orave • Reunion & Full Letter Reading on September 5th, 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
