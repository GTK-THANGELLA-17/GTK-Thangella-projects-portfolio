import React, { useEffect, useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

const links = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
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

  if (!mounted) return null;

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled ? 'bg-white/90 dark:bg-navy-900/90 backdrop-blur-md py-4 shadow-md' : 'bg-transparent py-6'}`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        <motion.a 
          href="#home" 
          className="text-xl font-playfair font-bold text-navy-900 dark:text-white relative group"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <span className="relative z-10">G. Thangella</span>
          <span className="absolute bottom-0 left-0 w-0 h-1 bg-gold-500 group-hover:w-full transition-all duration-300"></span>
        </motion.a>

        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-8">
              {links.map((link) => (
                <NavigationMenuItem key={link.name}>
                  <NavigationMenuLink 
                    asChild
                    className={cn(
                      "text-navy-800 dark:text-navy-100 hover:text-gold-500 dark:hover:text-gold-500 transition-colors text-sm font-medium relative group",
                      activeSection === link.href.substring(1) && "text-gold-500 dark:text-gold-500"
                    )}
                  >
                    <motion.a 
                      href={link.href}
                      whileHover={{ y: -2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span>{link.name}</span>
                      <span className={cn(
                        "absolute bottom-0 left-0 h-0.5 bg-gold-500 transition-all duration-300", 
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
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-navy-100 dark:hover:bg-navy-800 transition-colors text-navy-800 dark:text-navy-100"
            aria-label="Toggle theme"
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
          >
            {theme === 'dark' || (theme === 'system' && resolvedTheme === 'dark') ? (
              <Sun size={20} />
            ) : (
              <Moon size={20} />
            )}
          </motion.button>

          <motion.button
            className="md:hidden text-navy-800 dark:text-navy-100 hover:bg-navy-100 dark:hover:bg-navy-800 p-2 rounded-full transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </div>

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: mobileMenuOpen ? 0 : "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed inset-0 z-50 bg-white/95 dark:bg-navy-900/95 backdrop-blur-md md:hidden pt-24 overflow-auto`}
      >
        <div className="container mx-auto px-6">
          <ul className="flex flex-col items-center space-y-8 pt-8">
            {links.map((link) => (
              <motion.li 
                key={link.name} 
                className="w-full text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * links.indexOf(link) }}
              >
                <a
                  href={link.href}
                  className={cn(
                    "block py-2 text-xl font-medium transition-all duration-300 relative",
                    activeSection === link.href.substring(1) ? 
                      "text-gold-500" : 
                      "text-navy-900 dark:text-white hover:text-gold-500 dark:hover:text-gold-500"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                  <span className={cn(
                    "block mx-auto mt-2 h-0.5 bg-gold-500 transition-all duration-300", 
                    activeSection === link.href.substring(1) ? "w-16" : "w-0"
                  )}></span>
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
