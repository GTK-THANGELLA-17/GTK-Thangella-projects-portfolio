
import React, { useEffect, useState } from 'react';
import { Menu, X, Sun, Moon, MessageCircle, FileText, Linkedin, Instagram } from 'lucide-react';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const mobileLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];


const socialLinks = [
  { 
  name: 'WhatsApp', 
  icon: MessageCircle, 
  href: 'https://wa.me/918499090369',
  color: 'hover:text-green-500' 
},
  { 
    name: 'Portfolio', 
    icon: FileText, 
    href: 'https://thangella-itgc-portfolio.vercel.app/',
    color: 'hover:text-blue-500' 
  },
  { 
    name: 'LinkedIn', 
    icon: Linkedin, 
    href: 'https://linkedin.com/in/your-profile',
    color: 'hover:text-blue-600' 
  },
  { 
    name: 'Instagram', 
    icon: Instagram, 
    href: 'https://www.instagram.com/g_thangella_k/#',
    color: 'hover:text-pink-500' 
  },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (theme === 'dark' || (theme === 'system' && resolvedTheme === 'dark')) {
      setTheme('light');
    } else {
      setTheme('dark');
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

  // Close mobile menu when clicking outside or on scroll
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (mobileMenuOpen && !target.closest('.mobile-menu')) {
        setMobileMenuOpen(false);
      }
    };

    const handleScroll = () => {
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('click', handleOutsideClick);
      window.addEventListener('scroll', handleScroll);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'unset';
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
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
          scrolled
            ? 'glass-morphism py-4 shadow-2xl'
            : 'bg-transparent py-6'
        )}
      >
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
          <motion.a 
            href="#home" 
            className="text-xl font-playfair font-bold relative group"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className="premium-text-gradient relative z-10">G. Thangella</span>
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-accent to-blue-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-6">
                {links.map((link) => (
                  <NavigationMenuItem key={link.name}>
                    <NavigationMenuLink 
                      asChild
                      className={cn(
                        "text-foreground/80 hover:text-accent transition-colors text-sm font-medium relative group",
                        activeSection === link.href.substring(1) && "text-accent"
                      )}
                    >
                      <motion.a 
                        href={link.href}
                        whileHover={{ y: -2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <span>{link.name}</span>
                        <span className={cn(
                          "absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent to-blue-500 transition-all duration-300 rounded-full", 
                          activeSection === link.href.substring(1) ? "w-full" : "w-0 group-hover:w-full"
                        )}></span>
                      </motion.a>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center space-x-4">
            {/* Social Icons - Desktop */}
            <div className="hidden md:flex items-center space-x-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className={cn(
                    "p-2 rounded-full glass-morphism transition-all",
                    social.color
                  )}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>

            {/* Theme toggle */}
            <motion.button
              onClick={toggleTheme}
              className="p-3 rounded-full glass-morphism hover:scale-110 transition-all relative overflow-hidden"
              aria-label="Toggle theme"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {theme === 'dark' || (theme === 'system' && resolvedTheme === 'dark') ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -180, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    exit={{ rotate: 180, scale: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <Sun size={16} className="text-yellow-500" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 180, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    exit={{ rotate: -180, scale: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <Moon size={16} className="text-blue-400" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-3 rounded-full glass-morphism mobile-menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              whileTap={{ scale: 0.9 }}
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

        {/* Enhanced Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
                onClick={() => setMobileMenuOpen(false)}
              />
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="fixed right-0 top-0 h-full w-80 max-w-[85vw] z-50 bg-background/95 dark:bg-background/98 backdrop-blur-xl border-l border-border shadow-2xl lg:hidden mobile-menu"
              >
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center justify-between p-6 border-b border-border">
                    <motion.span 
                      className="text-lg font-playfair font-bold premium-text-gradient"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      Menu
                    </motion.span>
                    <motion.button
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-2 rounded-full glass-morphism"
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <X size={18} className="text-accent" />
                    </motion.button>
                  </div>

                  {/* Navigation Links */}
                  <div className="flex-1 py-6 px-6 overflow-y-auto">
                    <ul className="space-y-4">
                      {mobileLinks.map((link, index) => (
                        <motion.li 
                          key={link.name}
                          initial={{ opacity: 0, x: 30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * (index + 1), duration: 0.3 }}
                        >
                          <a
                            href={link.href}
                            className={cn(
                              "block py-4 px-6 text-lg font-medium transition-all duration-300 relative rounded-xl group",
                              activeSection === link.href.substring(1) ? 
                                "text-accent bg-accent/10 shadow-lg" : 
                                "text-foreground/80 hover:text-accent hover:bg-accent/5"
                            )}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <span className="relative z-10">{link.name}</span>
                            <motion.div
                              className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent/10 to-blue-500/10 opacity-0 group-hover:opacity-100"
                              initial={false}
                              transition={{ duration: 0.3 }}
                            />
                          </a>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer with Social Icons */}
                  <motion.div 
                    className="p-6 border-t border-border bg-secondary/30"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <p className="text-sm text-foreground/60 mb-4 text-center">Connect with me</p>
                    <div className="flex justify-center space-x-4">
                      {socialLinks.map((social, index) => (
                        <motion.a
                          key={social.name}
                          href={social.href}
                          className={cn(
                            "p-3 rounded-full glass-morphism transition-all",
                            social.color
                          )}
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.9 }}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.7 + index * 0.1 }}
                        >
                          <social.icon size={20} />
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
