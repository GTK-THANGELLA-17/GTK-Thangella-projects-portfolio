
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  progress?: number;
}

const LoadingScreen = ({ progress = 0 }: LoadingScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);

  const loadingSteps = [
    "Initializing System...",
    "Loading Components...",
    "Connecting APIs...",
    "Optimizing Performance...",
    "Finalizing Setup..."
  ];

  useEffect(() => {
    const stepIndex = Math.floor((progress / 100) * loadingSteps.length);
    setCurrentStep(Math.min(stepIndex, loadingSteps.length - 1));

    if (progress >= 100) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [progress, loadingSteps.length]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-background via-secondary to-background overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Background Grid Animation */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent skew-x-12 transform animate-pulse"></div>
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-px h-full bg-gradient-to-b from-transparent via-accent/30 to-transparent"
                style={{ left: `${i * 5}%` }}
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scaleY: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.1
                }}
              />
            ))}
          </div>

          {/* Central Logo Animation */}
          <div className="relative z-10 mb-16">
            <motion.div 
              className="relative"
              initial={{ scale: 0, rotateY: 180 }}
              animate={{ scale: 1, rotateY: 0 }}
              transition={{ 
                delay: 0.3, 
                duration: 1.2,
                type: "spring",
                stiffness: 200,
                damping: 20
              }}
            >
              {/* Rotating outer rings */}
              {[...Array(3)].map((_, i) => (
                <motion.div 
                  key={i}
                  className="absolute rounded-full border-2"
                  style={{ 
                    width: `${140 + i * 30}px`, 
                    height: `${140 + i * 30}px`,
                    borderColor: `hsl(var(--accent) / ${0.4 - i * 0.1})`,
                    left: `${-15 - i * 15}px`,
                    top: `${-15 - i * 15}px`,
                  }}
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    rotate: {
                      duration: 8 + i * 2,
                      repeat: Infinity,
                      ease: "linear"
                    },
                    scale: {
                      duration: 2,
                      repeat: Infinity
                    }
                  }}
                />
              ))}

              {/* Main GT stamp with technical effect */}
              <motion.div 
                className="w-24 h-24 bg-gradient-to-br from-accent via-blue-500 to-purple-500 backdrop-blur-sm rounded-2xl relative flex items-center justify-center border-2 border-accent/50 shadow-2xl overflow-hidden"
                initial={{ 
                  scale: 0,
                  opacity: 0
                }}
                animate={{ 
                  scale: 1,
                  opacity: 1
                }}
                transition={{ 
                  delay: 0.8,
                  duration: 0.8,
                  type: "spring",
                  stiffness: 300,
                  damping: 15
                }}
              >
                {/* Animated background pattern */}
                <div className="absolute inset-0">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      style={{ top: `${i * 20}%` }}
                      animate={{
                        x: [-100, 100],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                    />
                  ))}
                </div>

                <motion.div 
                  className="text-white font-bold text-2xl relative z-10"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                >
                  GT
                </motion.div>
                
                {/* Stamp effect */}
                <motion.div 
                  className="absolute inset-0 rounded-2xl border-4 border-white/60"
                  initial={{ scale: 1, opacity: 0 }}
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0, 0.8, 0]
                  }}
                  transition={{ 
                    delay: 1.0,
                    duration: 1.2,
                    times: [0, 0.5, 1]
                  }}
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Technical Progress Interface */}
          <div className="w-96 mb-8 relative z-10">
            {/* Terminal-style header */}
            <div className="bg-black/20 dark:bg-white/10 rounded-t-lg px-4 py-2 border border-accent/20">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-xs font-mono text-foreground/70 ml-2">terminal</span>
              </div>
            </div>

            {/* Progress area */}
            <div className="bg-black/10 dark:bg-white/5 rounded-b-lg p-6 border-x border-b border-accent/20">
              {/* Current step */}
              <div className="mb-4">
                <motion.div
                  className="text-accent font-mono text-sm"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  {loadingSteps[currentStep]}
                </motion.div>
              </div>

              {/* Progress bar */}
              <div className="h-3 w-full bg-white/10 dark:bg-black/20 rounded-full overflow-hidden backdrop-blur-sm border border-white/20 mb-4">
                <motion.div 
                  className="h-full bg-gradient-to-r from-accent via-blue-500 to-purple-500 rounded-full relative overflow-hidden"
                  style={{ width: `${progress}%` }}
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  {/* Scanning line effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                    animate={{
                      x: [-100, 300]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </motion.div>
              </div>

              {/* Progress stats */}
              <div className="flex justify-between items-center text-xs font-mono text-foreground/60">
                <span>{Math.round(progress)}% Complete</span>
                <span>{currentStep + 1}/{loadingSteps.length} Steps</span>
              </div>
            </div>
          </div>
          
          {/* Profile info */}
          <motion.div 
            className="text-center relative z-10 max-w-md px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-foreground text-3xl md:text-4xl font-playfair mb-3 bg-gradient-to-r from-accent to-blue-500 bg-clip-text text-transparent">
              G. Thangella
            </h2>
            <motion.p 
              className="text-accent font-mono text-sm tracking-wide"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Creative Developer
            </motion.p>
          </motion.div>

          {/* Binary rain effect */}
          <div className="absolute inset-0 pointer-events-none opacity-10">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-accent text-xs font-mono"
                style={{ left: `${Math.random() * 100}%` }}
                animate={{
                  y: [-50, window.innerHeight + 50],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              >
                {Math.random() > 0.5 ? '1' : '0'}
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
