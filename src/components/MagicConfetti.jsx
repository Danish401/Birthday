import React from 'react';
import { motion } from 'framer-motion';

const MagicConfetti = () => {
  const particles = Array.from({ length: 40 });
  const colors = ['#B4D3D9', '#BDA6CE', '#9B8EC7', '#F2EAE0'];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            backgroundColor: colors[i % colors.length],
            left: `${Math.random() * 100}%`,
            top: `-10%`,
          }}
          animate={{
            top: '110%',
            left: `${(Math.random() * 100) + (Math.random() - 0.5) * 20}%`,
            rotate: [0, 360],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};

export default MagicConfetti;
