import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music, Play, Pause } from 'lucide-react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Create audio element for Aasa Orave song with relative path
    const audio = new Audio('./song/Aasa Orave.mp3');
    audio.loop = true;
    audio.volume = 0.6;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.log("Audio playback error:", err);
          setIsPlaying(false);
        });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-black/80 backdrop-blur-md p-3 rounded-full border border-yellow-500/40 shadow-2xl hover:border-yellow-500/80 transition-all">
      <button
        onClick={togglePlay}
        className={`w-11 h-11 rounded-full flex items-center justify-center transition-all ${
          isPlaying 
            ? 'bg-gradient-to-r from-amber-500 to-yellow-400 text-black shadow-lg shadow-yellow-500/50 animate-pulse' 
            : 'bg-white/10 text-yellow-300 hover:bg-white/20'
        }`}
        title={isPlaying ? "Pause Aasa Orave" : "Play Aasa Orave Song"}
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-0.5" />}
      </button>

      <div className="hidden sm:flex items-center gap-2 pr-2">
        <Music size={16} className={`text-yellow-400 ${isPlaying ? 'animate-bounce' : ''}`} />
        <div className="flex flex-col text-left">
          <span className="text-xs text-yellow-200 font-semibold tracking-wide">
            {isPlaying ? "Playing: Aasa Orave" : "Play: Aasa Orave 🎵"}
          </span>
          <span className="text-[10px] text-yellow-400/70">Sister's Special Song</span>
        </div>
      </div>
    </div>
  );
}
