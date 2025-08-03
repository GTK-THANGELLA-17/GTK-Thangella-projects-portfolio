
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Mail, Phone, X, Github, Linkedin, Instagram } from 'lucide-react';

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const actionItems = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:your.email@example.com',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Phone,
      label: 'Call',
      href: 'tel:+1234567890',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/yourusername',
      color: 'from-gray-600 to-gray-800'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/yourusername',
      color: 'from-blue-500 to-blue-700'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://instagram.com/yourusername',
      color: 'from-pink-400 to-purple-600'
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Action items */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute bottom-16 right-0 flex flex-col gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {actionItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex items-center gap-3 bg-gradient-to-r ${item.color} text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300`}
                initial={{ opacity: 0, x: 50, scale: 0.5 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 50, scale: 0.5 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, x: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-sm font-medium min-w-max">{item.label}</span>
                
                {/* Tooltip for mobile */}
                <motion.div
                  className="absolute right-full mr-3 bg-black/90 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  {item.label}
                </motion.div>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main FAB */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full bg-gradient-to-r from-accent via-blue-500 to-purple-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center ${
          isOpen ? 'rotate-45' : 'rotate-0'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: isOpen ? 45 : 0 }}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
        
        {/* Pulse effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-accent via-blue-500 to-purple-500"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 0, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      </motion.button>
    </div>
  );
};

export default FloatingActionButton;
