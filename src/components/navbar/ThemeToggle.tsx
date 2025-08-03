
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === 'dark' || (theme === 'system' && resolvedTheme === 'dark')) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
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
  );
};
