
import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy-900 text-white py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0">
            <p className="font-playfair text-xl font-bold">G. Thangella</p>
            <p className="text-navy-300 text-sm mt-1">Creative Developer</p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-300 hover:text-gold-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/gthangella/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-300 hover:text-gold-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/g_thangella_k/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-300 hover:text-gold-400 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-navy-800 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-navy-400">
          <p>&copy; {currentYear} G. Thangella. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Crafted with precision and care</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
