import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, Sparkles } from 'lucide-react';

const memories = [
  { 
    id: 1, 
    type: 'image', 
    src: '/memories/WhatsApp Image 2026-04-10 at 9.34.00 AM.jpeg', 
    title: 'Happy Memories', 
    desc: 'Capturing moments that last forever.',
    isPortrait: true 
  },
  { 
    id: 2, 
    type: 'image', 
    src: '/memories/WhatsApp Image 2026-04-10 at 9.34.02 AM.jpeg', 
    title: 'Special Times', 
    desc: 'The best parts of our journey together.',
    isPortrait: true 
  },
];

const videoMemory = {
  src: '/memories/WhatsApp Video 2026-04-10 at 9.34.25 AM.mp4',
  title: 'A Magical Surprise',
  desc: 'A moment of pure joy captured on film.'
};

const finalMemory = {
  src: '/memories/WhatsApp Image 2026-04-10 at 10.27.18 AM.jpeg',
  title: 'Guess the artist', 
  desc: 'A performance that leaves us all in awe!'
};

const MemoryGallery = () => {
  return (
    <section id="gallery" className="py-24 px-8 bg-brand-cream min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block p-4 bg-brand-lavender/20 rounded-2xl mb-4"
          >
            <Star className="text-brand-purple fill-brand-purple" />
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-brand-purple mb-4">Our Cherished Gallery</h2>
          <div className="w-24 h-1 bg-brand-blue mx-auto mt-6 rounded-full" />
        </div>

        {/* Dynamic Grid for Top Memories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 max-w-4xl mx-auto">
          {memories.map((memory, index) => (
            <motion.div
              key={memory.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              transition={{ delay: index * 0.1 }}
              className="magic-card group h-full flex flex-col"
            >
              <div className="relative overflow-hidden rounded-t-2xl aspect-[3/4]">
                <img 
                  src={memory.src} 
                  alt={memory.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-purple/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-4 bg-brand-cream/80 backdrop-blur-md rounded-full">
                    <Heart className="text-brand-purple fill-brand-purple size-8" />
                  </div>
                </div>
              </div>
              <div className="p-8 bg-white/40 border-t border-brand-lavender/10">
                <h3 className="text-2xl font-bold text-brand-purple mb-2">{memory.title}</h3>
                <p className="text-brand-purple/70 leading-relaxed font-medium">{memory.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Prominent Video Feature */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="magic-card bg-brand-purple p-3 md:p-6 rounded-[3rem] overflow-hidden shadow-2xl shadow-brand-purple/40 my-12"
        >
          <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-inner bg-black/40">
            <video 
              src={videoMemory.src}
              className="w-full h-full object-cover"
              autoPlay 
              loop 
              muted 
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            <div className="absolute bottom-8 left-8 flex items-center gap-4 bg-brand-cream/10 backdrop-blur-xl px-5 py-2.5 rounded-full border border-white/20">
              <Sparkles className="text-brand-blue size-5 animate-pulse" />
              <span className="text-brand-cream text-sm font-black tracking-widest uppercase text-[10px] md:text-sm">Special Magic Moment</span>
            </div>
          </div>
          <div className="p-10 md:p-12 text-center md:text-left flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <h3 className="text-3xl font-black text-brand-cream mb-2">{videoMemory.title}</h3>
              <p className="text-brand-cream/60 text-lg leading-relaxed font-light">{videoMemory.desc}</p>
            </div>
            <div className="size-16 md:size-20 bg-brand-blue rounded-full flex items-center justify-center shadow-lg shadow-brand-blue/30 mx-auto md:mx-0">
              <Heart className="text-brand-purple fill-brand-purple size-10" />
            </div>
          </div>
        </motion.div>

        {/* Final Adjusted Feature Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ y: -10 }}
          className="magic-card group max-w-4xl mx-auto mt-20 flex flex-col border-2 border-brand-lavender/20 relative overflow-hidden h-auto"
        >
          <div className="relative w-full h-auto overflow-hidden rounded-t-2xl">
            <img 
              src={finalMemory.src} 
              alt={finalMemory.title}
              className="w-full h-auto block transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-brand-purple/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
              <div className="p-6 bg-brand-cream/40 backdrop-blur-sm rounded-full">
                <Sparkles className="text-brand-purple size-12" />
              </div>
            </div>
          </div>
          <div className="p-12 pb-16 bg-white/60 border-t border-brand-lavender/20 text-center min-h-[200px] flex flex-col items-center justify-center">
            <motion.h3 
              animate={{ color: ['#9B8EC7', '#B4D3D9', '#9B8EC7'] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="text-4xl md:text-6xl font-black mb-6 tracking-tight leading-normal"
            >
              Guess the artist
            </motion.h3>
            <p className="text-brand-purple/60 text-xl md:text-2xl leading-relaxed font-semibold italic">
              "A performance that leaves us all in awe!"
            </p>
          </div>
        </motion.div>

        <div className="mt-24 text-center pb-20">
          <p className="text-brand-purple/40 text-sm font-medium tracking-[0.3em] uppercase italic">Pure Magic Experience</p>
        </div>
      </div>
    </section>
  );
};

export default MemoryGallery;
