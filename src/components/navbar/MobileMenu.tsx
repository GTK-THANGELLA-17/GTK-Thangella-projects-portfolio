import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { links } from './NavLinks';
import { socialLinks } from './SocialLinks';

interface MobileMenuProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  activeSection: string;
  handleAIAssistantClick: (e: React.MouseEvent) => void;
  handleLinkClick: (href: string) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  mobileMenuOpen,
  setMobileMenuOpen,
  activeSection,
  handleAIAssistantClick,
  handleLinkClick,
}) => {
  // Unified click handler for links and assistant
  const handleMenuOptionClick = async (
    e: React.MouseEvent,
    href: string,
    isAIAssistant: boolean
  ) => {
    // Close menu first
    setMobileMenuOpen(false);

    // Wait for animation to complete (matches exit transition duration)
    await new Promise((resolve) => setTimeout(resolve, 400));

    if (isAIAssistant) {
      handleAIAssistantClick(e); // Trigger assistant opening
    } else {
      handleLinkClick(href); // Navigate or scroll to section
    }
  };

  return (
    <AnimatePresence>
      {mobileMenuOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998] lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Sliding Menu Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="fixed right-0 top-0 h-screen w-80 max-w-[85vw] z-[9999] bg-background/98 backdrop-blur-xl border-l border-border shadow-2xl lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border shrink-0">
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
                  className="p-2 rounded-full glass-morphism hover:bg-accent/10 transition-colors"
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
                  {links
                    .filter(link => link.name !== 'AI Assistant')  // <-- filter out AI Assistant here
                    .map((link, index) => (
                      <motion.li
                        key={link.name}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * (index + 1), duration: 0.3 }}
                      >
                        <button
                          onClick={(e) =>
                            handleMenuOptionClick(e, link.href, false) // AI assistant never true here
                          }
                          className={cn(
                            "flex items-center gap-3 py-4 px-6 text-lg font-medium transition-all duration-300 relative rounded-xl group cursor-pointer w-full text-left",
                            activeSection === link.href.substring(1)
                              ? "text-accent bg-accent/10 shadow-lg"
                              : "text-foreground/80 hover:text-accent hover:bg-accent/5"
                          )}
                        >
                          {link.icon && <link.icon size={20} />}
                          <span className="relative z-10">{link.name}</span>
                          <motion.div
                            className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent/10 to-blue-500/10 opacity-0 group-hover:opacity-100"
                            initial={false}
                            transition={{ duration: 0.3 }}
                          />
                        </button>
                      </motion.li>
                    ))}
                </ul>
              </div>

              {/* Footer with Social Icons */}
              <motion.div
                className="p-6 border-t border-border bg-secondary/30 shrink-0"
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
  );
};
