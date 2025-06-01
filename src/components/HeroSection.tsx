
import React, { useRef } from 'react';
import { ChevronRight, ArrowDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24"
    >
      {/* Animated background with particles */}
      <motion.div 
        className="absolute inset-0 premium-gradient"
        style={{ y, opacity }}
      />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-30, 30, -30],
              x: [-20, 20, -20],
              scale: [1, 1.5, 1],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      {/* Floating geometric shapes with glow */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-accent/20 rounded-full shadow-lg shadow-accent/20"
            style={{
              width: `${60 + Math.random() * 40}px`,
              height: `${60 + Math.random() * 40}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-40, 40, -40],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div 
            className="space-y-8 mb-12"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-playfair font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <motion.span 
                className="block mb-4"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(59, 130, 246, 0.3)",
                    "0 0 30px rgba(59, 130, 246, 0.5)",
                    "0 0 20px rgba(59, 130, 246, 0.3)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Building
              </motion.span>
              <span className="premium-text-gradient block mb-4 animate-pulse">Real-World</span>
              <motion.span 
                className="block"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                Digital Solutions
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed text-foreground/80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              I'm driven to create meaningful digital products that solve real-world problems. 
              My focus is building tools that inspire, innovate, and leave a lasting impact through technology and design.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-3 sm:gap-4 my-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {[
                "💼 Entrepreneur",
                "🎨 Creative",
                "💡 Innovation", 
                "🚀 Tech Solutions",
                "💭 Ideas",
                "🔭 Visionary",
                "🧬 Unique Thinker"
              ].map((tag, index) => (
                <motion.span 
                  key={tag}
                  className="premium-card px-4 py-2 text-sm sm:text-base font-medium magnetic-hover neon-border"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                  }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent via-blue-500 to-purple-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 scale-110 animate-pulse"></div>
            <motion.a 
              href="#projects" 
              className="relative inline-flex items-center gap-3 bg-gradient-to-r from-accent via-blue-500 to-purple-500 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-semibold text-lg transition-all duration-300 shadow-2xl magnetic-hover neon-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 0 30px rgba(59, 130, 246, 0.5)",
                  "0 0 50px rgba(59, 130, 246, 0.8)",
                  "0 0 30px rgba(59, 130, 246, 0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              View Projects
              <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </motion.div>
        </div>
        
        {/* Enhanced Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.span 
            className="text-sm text-foreground/60 mb-3 font-mono"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Scroll to explore
          </motion.span>
          <motion.div
            animate={{ 
              y: [0, 15, 0],
              scale: [1, 1.1, 1] 
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-2 rounded-full glass-morphism"
          >
            <ArrowDown className="h-5 w-5 text-accent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
