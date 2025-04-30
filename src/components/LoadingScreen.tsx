import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  progress?: number;
}

const LoadingScreen = ({ progress = 0 }: LoadingScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    if (progress >= 100) {
      setOpacity(0);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  // Digital circuit lines for the tech effect
  const circuitLines = [
    'M10,10 L50,10 L50,50 L90,50',
    'M10,50 L30,50 L30,90',
    'M50,50 L50,90',
    'M70,10 L70,30 L90,30',
    'M10,70 L30,70 L30,50',
    'M50,70 L90,70',
    'M70,50 L70,90'
  ];

  return (
    isVisible && (
      <motion.div 
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-iceblue-100 dark:bg-charcoal-600"
        style={{ 
          opacity: opacity,
          transition: 'opacity 1s ease-in-out'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {/* Digital circuit pattern */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          {circuitLines.map((path, i) => (
            <motion.path
              key={i}
              d={path}
              stroke="currentColor"
              className="text-accent"
              strokeWidth="0.5"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: 1, 
                opacity: 0.8,
                transition: { 
                  duration: 1.5, 
                  delay: i * 0.2,
                  ease: "easeInOut" 
                }
              }}
            />
          ))}
        </svg>

        {/* Central data visualization */}
        <div className="relative z-10 mb-12">
          <motion.div 
            className="w-40 h-40 flex items-center justify-center relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {/* Tech rings */}
            {[...Array(3)].map((_, i) => (
              <motion.div 
                key={i}
                className="absolute border rounded-full"
                style={{ 
                  width: `${100 + i * 30}%`, 
                  height: `${100 + i * 30}%`,
                  borderWidth: 2,
                  borderColor: `rgba(var(--accent) / ${0.4 - i * 0.1})`,
                }}
                animate={{ 
                  rotate: 360 * (i % 2 === 0 ? 1 : -1),
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 8 + i * 4, 
                  ease: "linear", 
                  repeat: Infinity
                }}
              />
            ))}

            {/* Core element */}
            <motion.div 
              className="w-24 h-24 bg-accent/40 backdrop-blur-sm rounded-xl relative flex items-center justify-center border border-accent/50"
              animate={{ 
                rotate: [0, 90, 180, 270, 360],
                borderRadius: ["24%", "40%", "24%", "40%", "24%"]
              }}
              transition={{ 
                duration: 8,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <div className="text-white font-bold text-2xl">GT</div>
              
              {/* Pulse effect */}
              <motion.div 
                className="absolute inset-0 rounded-xl border-2 border-accent/60"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 0, 0.7]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity
                }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Technical loading progress bar */}
        <div className="w-64 mb-3 relative z-10">
          <div className="h-1.5 w-full bg-iceblue-300/30 dark:bg-charcoal-700/30 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-accent rounded-full"
              style={{ width: `${progress}%` }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>
          <div className="mt-2 text-center text-charcoal-600 dark:text-platinum-200 text-sm font-mono">
            {Math.round(progress)}%
          </div>
        </div>
        
        {/* Profile info */}
        <motion.div 
          className="text-center relative z-10 max-w-md px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-charcoal-600 dark:text-platinum-100 text-3xl md:text-4xl font-playfair mb-2">
            G. Thangella
          </h2>
          <motion.p 
            className="text-accent font-mono text-sm tracking-wide"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ⚡💼 Entrepreneur | 💻 CS Mind | 🌍 Explorer
          </motion.p>
          <p className="text-charcoal-500 dark:text-platinum-300 mt-2 text-xs max-w-sm mx-auto">
            Creative Visionary | Gadget & Tech Enthusiast | 🚀 Crafting & transforming ideas into solutions
          </p>
        </motion.div>
      </motion.div>
    )
  );
};

export default LoadingScreen;
