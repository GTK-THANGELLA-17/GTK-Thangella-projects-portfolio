
import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { DesktopNav } from './navbar/DesktopNav';
import { SocialLinksComponent } from './navbar/SocialLinks';
import { ThemeToggle } from './navbar/ThemeToggle';
import { MobileMenu } from './navbar/MobileMenu';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleAIAssistantClick = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log('AI Assistant clicked');
    const aiEvent = new CustomEvent('toggleAIAssistant');
    window.dispatchEvent(aiEvent);
    setMobileMenuOpen(false);
  };

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = ['home', 'about', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (!element) return false;
        
        const rect = element.getBoundingClientRect();
        return rect.top <= 200 && rect.bottom >= 200;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Improved body scroll lock for mobile
  useEffect(() => {
    if (mobileMenuOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [mobileMenuOpen]);

  if (!mounted) return null;

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-[9997] transition-all duration-500",
          scrolled
            ? 'glass-morphism py-4 shadow-2xl'
            : 'bg-transparent py-6'
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
          <motion.button 
            onClick={() => handleLinkClick('#home')}
            className="text-lg sm:text-xl font-playfair font-bold relative group bg-transparent border-none cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className="premium-text-gradient relative z-10">G. Thangella</span>
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-accent to-blue-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
          </motion.button>

          {/* Desktop Navigation */}
          <DesktopNav 
            activeSection={activeSection}
            handleAIAssistantClick={handleAIAssistantClick}
            handleLinkClick={handleLinkClick}
          />

          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Social Icons - Desktop */}
            <SocialLinksComponent className="hidden md:flex" />

            {/* Theme toggle */}
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 sm:p-3 rounded-full glass-morphism relative z-[9998] touch-manipulation"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              whileTap={{ scale: 0.9 }}
              type="button"
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={20} className="text-accent" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={20} className="text-accent" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <MobileMenu 
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        activeSection={activeSection}
        handleAIAssistantClick={handleAIAssistantClick}
        handleLinkClick={handleLinkClick}
      />
    </>
  );
};

export default Navbar;
