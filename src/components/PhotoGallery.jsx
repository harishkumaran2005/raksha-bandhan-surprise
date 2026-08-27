import React, { useState } from 'react';
import { Camera, Heart, Maximize2, X, Sparkles, Calendar } from 'lucide-react';

export default function PhotoGallery() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const photos = [
    {
      id: 1,
      src: '/gallery/1787848196424.jpg',
      title: 'Bus Ride Conversations 🚌',
      date: '2026',
      category: 'outings',
      caption: 'Every journey with you feels like home. Endless chats and happy smiles.',
    },
    {
      id: 2,
      src: '/gallery/WhatsApp Image 2026-08-27 at 10.03.22 PM.jpeg',
      title: 'Sister\'s Shoulder Hug 🤗',
      date: '2026',
      category: 'cozy',
      caption: 'Pure comfort and unconditional warmth. The sweetest bond ever.',
    },
    {
      id: 3,
      src: '/gallery/WhatsApp Image 2026-08-27 at 10.03.23 PM (1).jpeg',
      title: 'Night Temple Outing 🛕',
      date: '2026',
      category: 'outings',
      caption: 'Divine blessings and peaceful night walks together.',
    },
    {
      id: 4,
      src: '/gallery/WhatsApp Image 2026-08-27 at 10.03.23 PM (2).jpeg',
      title: 'Temple Courtyard Smiles ✨',
      date: '2026',
      category: 'cozy',
      caption: 'Capturing unforgettable memories that time can never erase.',
    },
    {
      id: 5,
      src: '/gallery/WhatsApp Image 2026-08-27 at 10.03.23 PM (3).jpeg',
      title: 'Unbreakable Hand Hold 🤝',
      date: '2026',
      category: 'special',
      caption: '819+ Days (70,794,000+ seconds) of holding hands and standing strong.',
    },
    {
      id: 6,
      src: '/gallery/WhatsApp Image 2026-08-27 at 10.03.23 PM (4).jpeg',
      title: 'Matching Colors & Laughs 🌸',
      date: '2026',
      category: 'cozy',
      caption: 'Quiet sit-downs, shared jokes, and lifetime companionship.',
    },
    {
      id: 7,
      src: '/gallery/WhatsApp Image 2026-08-27 at 10.03.23 PM.jpeg',
      title: 'Night Breeze Selfies 🌙',
      date: '2026',
      category: 'outings',
      caption: 'Starry skies and bright sister smiles.',
    },
    {
      id: 8,
      src: '/gallery/WhatsApp Image 2026-08-27 at 10.03.24 PM.jpeg',
      title: 'Ice Cream Parlor Hangout 🍦',
      date: '2026',
      category: 'special',
      caption: 'Sweet treats for the sweetest sister, Thangoo!',
    },
  ];

  const filteredPhotos = activeTab === 'all' 
    ? photos 
    : photos.filter(p => p.category === activeTab);

  return (
    <section id="gallery" className="py-12 px-4 max-w-6xl mx-auto">
      {/* Title */}
      <div className="text-center mb-8">
        <span className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-yellow-500/10 border border-yellow-500/30 text-yellow-300 inline-flex items-center gap-1.5 mb-3">
          <Camera className="w-3.5 h-3.5 text-yellow-400" />
          Memories Vault
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold font-cinzel text-white">
          Our Unbreakable Memories 📸
        </h2>
        <p className="text-sm text-yellow-200/80 mt-2 max-w-xl mx-auto">
          Every picture tells a story of 819+ days of affection, support, and laughter.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {[
          { id: 'all', label: 'All Photos (8)' },
          { id: 'outings', label: 'Outings & Trips 🚌' },
          { id: 'cozy', label: 'Cozy Smiles 😊' },
          { id: 'special', label: 'Special Moments 🤝' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-950 shadow-lg shadow-yellow-500/30 scale-105'
                : 'bg-black/40 text-yellow-200/80 hover:bg-black/60 border border-yellow-500/20'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredPhotos.map((photo) => (
          <div
            key={photo.id}
            onClick={() => setSelectedPhoto(photo)}
            className="group relative rounded-2xl glass-panel overflow-hidden border border-yellow-500/30 shadow-xl cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl hover:border-yellow-400/60 transition-all duration-300"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-black/60">
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-yellow-500/40 flex items-center justify-center text-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 size={14} />
              </button>

              <div className="absolute bottom-0 inset-x-0 p-4 text-left">
                <div className="flex items-center gap-1.5 text-[10px] text-yellow-400 font-semibold mb-1">
                  <Calendar size={11} /> {photo.date}
                </div>
                <h4 className="font-bold text-white text-sm line-clamp-1 group-hover:text-yellow-300 transition-colors">
                  {photo.title}
                </h4>
                <p className="text-xs text-yellow-200/80 line-clamp-2 mt-1 font-light">
                  {photo.caption}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-3xl w-full bg-slate-950 border border-yellow-500/40 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/70 border border-yellow-500/40 flex items-center justify-center text-yellow-300 hover:bg-black"
            >
              <X size={18} />
            </button>

            {/* Photo */}
            <div className="md:w-3/5 bg-black flex items-center justify-center max-h-[70vh]">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Metadata */}
            <div className="md:w-2/5 p-6 flex flex-col justify-between bg-gradient-to-b from-purple-950/40 to-slate-950">
              <div>
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 inline-block mb-3">
                  {selectedPhoto.category}
                </span>

                <h3 className="text-xl font-bold font-cinzel text-white mb-2">
                  {selectedPhoto.title}
                </h3>

                <p className="text-xs text-yellow-200/90 leading-relaxed mb-4">
                  {selectedPhoto.caption}
                </p>
              </div>

              <div className="pt-4 border-t border-yellow-500/20 flex items-center justify-between text-xs text-yellow-300">
                <span className="flex items-center gap-1">
                  <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" /> Sister Memory
                </span>
                <span>Harish & Thangoo</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
