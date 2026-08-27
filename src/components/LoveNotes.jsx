import React from 'react';
import { Quote, Heart, Sparkles, Star } from 'lucide-react';

export default function LoveNotes() {
  const notes = [
    {
      quote: "என் உடன் பிறவா, என் உடன்பிறப்பே, ரத்தம் சேர்க்காத உறவு, என் இதயம் சேர்த்த சொந்தமே!!",
      subtitle: "The most sacred line from Harish's handwritten letter",
      tag: "Tamil Sentiment",
      glimpse: "/glimpses/glimpse4.jpg",
      bg: "from-rose-950/60 to-purple-950/60",
    },
    {
      quote: "You have taught me many lessons and I have changed many things realising that. Athuku nandrigal!",
      subtitle: "Harish's heartfelt appreciation for Thangoo's presence",
      tag: "Gratitude & Growth",
      glimpse: "/glimpses/glimpse1.jpg",
      bg: "from-amber-950/60 to-purple-950/60",
    },
    {
      quote: "819 days (70,794,000 seconds) of pure emotional support, shared memories & laughter.",
      subtitle: "Celebrating every single second of our journey",
      tag: "Memory Milestone",
      glimpse: "/glimpses/glimpse3.jpg",
      bg: "from-purple-950/60 to-slate-950/60",
    },
    {
      quote: "Through any sort of physical or mental situation, I make sure I am there in you by connected or by loved.",
      subtitle: "Unbreakable brotherly protection",
      tag: "Eternal Promise",
      glimpse: "/glimpses/glimpse2.jpg",
      bg: "from-emerald-950/60 to-purple-950/60",
    },
  ];

  return (
    <section id="love-notes" className="py-12 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <span className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-yellow-500/10 border border-yellow-500/30 text-yellow-300 inline-flex items-center gap-1.5 mb-3">
          <Quote className="w-3.5 h-3.5 text-yellow-400" />
          Quotes & Handwriting Glimpses
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold font-cinzel text-white">
          Promises & Sacred Words 📜
        </h2>
        <p className="text-sm text-yellow-200/80 mt-2 max-w-xl mx-auto">
          Snippets extracted directly from the handwritten letter for Thangoo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {notes.map((item, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-2xl bg-gradient-to-br ${item.bg} border border-yellow-500/30 backdrop-blur-md shadow-xl hover:border-yellow-400/60 transition-all group relative overflow-hidden flex flex-col justify-between`}
          >
            <Quote className="w-8 h-8 text-yellow-500/20 absolute top-4 right-4 group-hover:text-yellow-400/40 transition-colors" />

            <div>
              <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 inline-block mb-3">
                {item.tag}
              </span>

              <p className="text-base sm:text-lg font-medium text-yellow-100 italic leading-relaxed mb-4">
                "{item.quote}"
              </p>
            </div>

            {/* Handwriting snippet preview */}
            <div className="mt-4 pt-3 border-t border-yellow-500/20">
              <div className="rounded-lg overflow-hidden border border-yellow-500/30 mb-2 h-20 bg-stone-900">
                <img
                  src={item.glimpse}
                  alt={item.tag}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="flex items-center justify-between text-xs text-yellow-300/80">
                <span className="text-[11px] text-yellow-300/70">{item.subtitle}</span>
                <span className="font-semibold text-yellow-400 flex items-center gap-1 shrink-0">
                  <Heart className="w-3 h-3 fill-yellow-400" /> Harish
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
