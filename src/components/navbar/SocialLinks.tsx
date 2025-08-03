
import React from 'react';
import { MessageCircle, FileText, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export const socialLinks = [
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
    href: 'https://linkedin.com/',
    color: 'hover:text-blue-600'
  },
  {
    name: 'Instagram',
    icon: Instagram,
    href: 'https://www.instagram.com/g_thangella_k/#',
    color: 'hover:text-pink-500'
  },
];

interface SocialLinksProps {
  className?: string;
}

export const SocialLinksComponent: React.FC<SocialLinksProps> = ({ className }) => {
  return (
    <div className={cn("flex items-center space-x-3", className)}>
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
  );
};
