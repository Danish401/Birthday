import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, Star } from 'lucide-react';
import MagicConfetti from './MagicConfetti';

const MagicGreeting = () => {
  const [wishIndex, setWishIndex] = useState(0);
  
  const wishes = [
    { en: "Happy Birthday!", ur: "سالگرہ مبارک!" },
    { en: "May Allah bless you always.", ur: "اللہ آپ کو ہمیشہ خوش رکھے" },
    { en: "Wishing you infinite joy.", ur: "آپ کی زندگی خوشیوں سے بھری ہو" },
    { en: "You are truly fabulous!", ur: "آپ بہت لاجواب انسان ہیں" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setWishIndex((prev) => (prev + 1) % wishes.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <motion.div 
      className="min-h-screen flex flex-col items-center justify-center p-8 bg-brand-cream relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <MagicConfetti />
      
      {/* Decorative Interactive Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-20 left-10 text-brand-blue opacity-50"
      >
        <Sparkles size={64} />
      </motion.div>
      <motion.div 
        animate={{ y: [0, 20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute bottom-20 right-10 text-brand-lavender opacity-50"
      >
        <Heart size={64} />
      </motion.div>

      <motion.div variants={itemVariants} className="text-center z-10 max-w-4xl">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-block px-8 py-2 bg-brand-lavender/20 rounded-full mb-8 shadow-inner border border-brand-lavender/30"
        >
          <span className="text-brand-purple font-black tracking-[0.4em] uppercase text-sm">
            Anshu
          </span>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={wishIndex}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.2, y: -20 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <h1 className="text-6xl md:text-9xl font-black text-brand-purple leading-tight">
              {wishes[wishIndex].en}
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-brand-blue" dir="rtl">
              {wishes[wishIndex].ur}
            </h2>
          </motion.div>
        </AnimatePresence>
        
        <motion.p variants={itemVariants} className="text-xl md:text-2xl text-brand-purple/70 mt-12 mb-12 max-w-2xl mx-auto leading-relaxed italic">
          "Celebrating the fabulous soul that you are. May your journey ahead be as beautiful as this day."
        </motion.p>
        
        <motion.div 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <a href="#gallery" className="btn-primary inline-flex items-center gap-3 shadow-2xl shadow-brand-purple/30 group">
            Unlock Magical Memories
            <Sparkles className="group-hover:rotate-12 transition-transform" />
          </a>
        </motion.div>
      </motion.div>
      
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-lavender/10 rounded-full blur-[100px] -z-10" />
    </motion.div>
  );
};

export default MagicGreeting;
