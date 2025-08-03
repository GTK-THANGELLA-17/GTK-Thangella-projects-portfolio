
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ParticleBackground from './hero/ParticleBackground';
import CursorFollower from './hero/CursorFollower';
import FloatingElements from './hero/FloatingElements';
import HeroContent from './hero/HeroContent';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Mouse tracking for cursor follower
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24"
    >
      {/* Animated background */}
      <motion.div 
        className="absolute inset-0 premium-gradient"
        style={{ y, opacity }}
      />
      
      {/* Interactive tech particles */}
      <ParticleBackground />
      
      {/* Cursor follower - hidden on mobile */}
      <CursorFollower mousePosition={mousePosition} />
      
      {/* Floating elements */}
      <FloatingElements />

      {/* Main content */}
      <HeroContent />
    </section>
  );
};

export default HeroSection;
