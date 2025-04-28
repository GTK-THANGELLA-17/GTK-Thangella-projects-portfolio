import React, { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const words = ["Building", "Real-World", "Digital", "Solutions"];

// Color cycle: gold, silver, diamond white, blue
const orbColors = [
  'rgba(255, 215, 0, 0.4)',    // Gold
  'rgba(192, 192, 192, 0.4)',  // Silver
  'rgba(185, 242, 255, 0.4)',  // Diamond White
  'rgba(0, 212, 255, 0.4)'     // Blue
];

const HeroSection = () => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prev) => (prev + 1) % orbColors.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-16 pb-24 relative overflow-hidden bg-gradient-to-b from-transparent to-iceblue-50 dark:from-charcoal-900 dark:to-black"
    >
      {/* Dynamic Background Lights */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 150 + 100}px`,
              height: `${Math.random() * 150 + 100}px`,
              top: `${Math.random() * 90}%`,
              left: `${Math.random() * 90}%`,
              backgroundColor: orbColors[currentColorIndex],
              filter: 'blur(60px)',
              opacity: 0.1,
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
              y: ["0%", "5%", "0%"],
            }}
            transition={{
              duration: Math.random() * 4 + 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Frosted Container */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="backdrop-blur-md bg-white/40 dark:bg-black/30 rounded-2xl p-12 shadow-2xl shadow-iceblue-300/20 dark:shadow-accent/30">
          <div className="max-w-5xl mx-auto text-center">

            {/* Badge */}
            <motion.p 
              className="inline-block px-4 py-1.5 bg-iceblue-100 text-charcoal-700 dark:bg-charcoal-800 dark:text-platinum-100 rounded-full text-sm font-medium mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Creative Developer
            </motion.p>

            {/* Animated Heading */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent/70 to-charcoal-700 dark:to-white"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.2 } }
              }}
            >
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-2"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            {/* Impactful Intention Text */}
            <motion.p 
              className="text-lg text-charcoal-500 dark:text-platinum-300 max-w-2xl mx-auto mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              I’m driven to create meaningful digital products that solve real-world problems. My focus is building tools that inspire, innovate, and leave a lasting impact through technology and design.
            </motion.p>

            {/* Floating Tags */}
            <motion.div 
              className="flex flex-wrap justify-center gap-2 my-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              {[
  "💼 Entrepreneur", 
  "📱 Tech Gadget Enthusiast", 
  "🧠 CS Explorer", 
  "💻 Developer", 
  "🎨 Creative", 
  "🔭 Visionary", 
  "🧬 Unique Thinker"
].map((tag, i) => (

                <motion.span
                  key={i}
                  className="tag bg-iceblue-200 dark:bg-charcoal-700 text-charcoal-600 dark:text-platinum-100 px-4 py-1 rounded-full text-sm font-medium"
                  animate={{ y: ["0%", "-5%", "0%"] }}
                  transition={{ 
                    duration: 3 + Math.random() * 2, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            {/* View Projects Button */}
            <motion.div 
              className="relative inline-block group"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/30 via-accent/60 to-accent/30 blur-2xl opacity-60 group-hover:opacity-90 transition-all duration-700 -z-10 group-hover:scale-110" />
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-charcoal-700 hover:bg-charcoal-900 dark:bg-accent dark:hover:bg-accent/80 text-white px-8 py-4 rounded-full font-medium transition-transform duration-300 transform group-hover:rotate-1 group-hover:scale-105 shadow-lg hover:shadow-2xl"
              >
                View Projects
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
              </a>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div 
              className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              <span className="text-sm text-charcoal-500 dark:text-platinum-300 mb-2">Scroll</span>
              <div className="w-px h-16 bg-gradient-to-b from-accent to-transparent animate-bounce-slow" />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
