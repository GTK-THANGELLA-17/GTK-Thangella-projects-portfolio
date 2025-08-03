
import React, { useEffect, useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingNav from '@/components/FloatingNav';
import FloatingActionButton from '@/components/FloatingActionButton';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import ScrollReveal from '@/components/ScrollReveal';
import { toast } from "sonner";
import { motion, useScroll } from 'framer-motion';
import AIAssistant from '@/components/AIAssistant';

const Index = () => {
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    // More reliable loading simulation
    let currentProgress = 0;
    
    // Start with faster progress then slow down
    const initialInterval = setInterval(() => {
      currentProgress += 4;
      
      if (currentProgress >= 70) {
        clearInterval(initialInterval);
        
        // Slow down for the final stretch to simulate actual loading
        const finalInterval = setInterval(() => {
          currentProgress += 2;
          setProgress(currentProgress);
          
          if (currentProgress >= 100) {
            clearInterval(finalInterval);
            
            // Add a small delay before setting loaded to true
            setTimeout(() => {
              setLoaded(true);
              
              // Welcome toast after content is visible
              setTimeout(() => {
                toast("👋 Welcome to G. Thangella's portfolio!", {
                  description: "Creative Visionary & Tech Enthusiast | Transforming ideas into solutions",
                  position: "bottom-right",
                  className: "bg-iceblue-50 border border-accent/20 dark:bg-charcoal-700 dark:border-accent/20 text-charcoal-600 dark:text-platinum-100",
                });
              }, 500);
            }, 700);
          }
        }, 120);
      } else {
        setProgress(currentProgress);
      }
    }, 80);

    return () => {
      clearInterval(initialInterval);
    };
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.4
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <>
      <LoadingScreen progress={progress} />
      
      {/* Progress indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-blue-500 to-purple-500 origin-left z-50 shadow-lg"
        style={{ scaleX: scrollYProgress }}
      />
      
      <div className={`transition-all duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <ScrollReveal variant="fade" delay={0.1}>
          <Navbar />
        </ScrollReveal>
        
        <FloatingNav />
        <AIAssistant />
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <motion.div variants={itemVariants}>
            <HeroSection />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <AboutSection />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <ProjectsSection />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <AnimateOnScroll variant="techReveal">
              <ContactSection />
            </AnimateOnScroll>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <ScrollReveal variant="fade">
              <Footer />
            </ScrollReveal>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Index;
