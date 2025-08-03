
import React, { useState, useEffect } from 'react';
import { Code, Layers, Lightbulb, Award, Users, Zap, ChevronLeft, ChevronRight, Play, Pause, MessageCircle, FileText, Linkedin, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const AboutSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState(1);

  const images = [
    "https://images.unsplash.com/photo-1596003906949-67221c37965c?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=800",
    "/Image1.png",
    "/Image2.png",
    "/Image3.png",
    "/Image4.png",
    "/Image5.png"
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
    href: 'https://linkedin.com/',
    color: 'hover:text-blue-600'
  },
  {
    name: 'Instagram',
    icon: Instagram,
    href: 'https://www.instagram.com/g_thangella_k/#',
    color: 'hover:text-pink-500'
  }
  ];

  const skills = [
    { icon: Code, title: "Creative", desc: "Innovative design solutions", color: "from-blue-500 to-cyan-500" },
    { icon: Layers, title: "Innovation", desc: "Cutting-edge technology", color: "from-purple-500 to-pink-500" },
    { icon: Lightbulb, title: "Tech Solutions", desc: "Problem-solving expertise", color: "from-orange-500 to-red-500" },
    { icon: Award, title: "Ideas", desc: "Transformative concepts", color: "from-green-500 to-teal-500" },
    { icon: Users, title: "Collaboration", desc: "Building with teams and communities", color: "from-indigo-500 to-purple-500" },
    { icon: Zap, title: "Visionary", desc: "Future-focused thinking", color: "from-yellow-500 to-orange-500" }
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length, isPlaying]);

  const nextImage = () => {
    setDirection(1);
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setDirection(-1);
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="about" className="relative overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <motion.div 
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Enhanced floating background elements */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-accent/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0 slideshow-container">
              {/* Enhanced border with premium neon effect */}
              <div className="absolute inset-0 rounded-2xl premium-neon-border p-1">
                <div className="relative h-full overflow-hidden rounded-xl bg-background">
                  {/* Enhanced Image Slideshow */}
                  <div className="relative w-full h-full">
                    <AnimatePresence mode="wait" custom={direction}>
                      <motion.div
                        key={currentImageIndex}
                        custom={direction}
                        initial={{ 
                          x: direction > 0 ? "100%" : "-100%",
                          opacity: 0,
                          scale: 1.1,
                          rotateY: direction > 0 ? 25 : -25
                        }}
                        animate={{ 
                          x: 0,
                          opacity: 1,
                          scale: 1,
                          rotateY: 0
                        }}
                        exit={{ 
                          x: direction > 0 ? "-100%" : "100%",
                          opacity: 0,
                          scale: 0.9,
                          rotateY: direction > 0 ? -25 : 25
                        }}
                        transition={{ 
                          duration: 0.8, 
                          ease: [0.23, 1, 0.32, 1]
                        }}
                        className="absolute inset-0 w-full h-full"
                      >
                        <img
                          src={images[currentImageIndex]}
                          alt={`G. Thangella ${currentImageIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    </AnimatePresence>
                    
                    {/* Enhanced Navigation Controls */}
                    <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <motion.button
                        onClick={prevImage}
                        className="slideshow-nav-btn group"
                        whileHover={{ scale: 1.1, x: -2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ChevronLeft className="h-5 w-5 group-hover:-translate-x-0.5 transition-transform" />
                      </motion.button>
                      
                      <motion.button
                        onClick={togglePlayPause}
                        className="slideshow-nav-btn"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {isPlaying ? (
                          <Pause className="h-4 w-4" />
                        ) : (
                          <Play className="h-4 w-4 ml-0.5" />
                        )}
                      </motion.button>
                      
                      <motion.button
                        onClick={nextImage}
                        className="slideshow-nav-btn group"
                        whileHover={{ scale: 1.1, x: 2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ChevronRight className="h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
                      </motion.button>
                    </div>

                    {/* Enhanced Progress Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                      {images.map((_, index) => (
                        <motion.button
                          key={index}
                          onClick={() => {
                            setDirection(index > currentImageIndex ? 1 : -1);
                            setCurrentImageIndex(index);
                          }}
                          className="slideshow-indicator"
                          animate={{
                            scale: index === currentImageIndex ? 1.2 : 1,
                            opacity: index === currentImageIndex ? 1 : 0.5
                          }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          {index === currentImageIndex && isPlaying && (
                            <motion.div
                              className="absolute inset-0 rounded-full border-2 border-accent"
                              initial={{ scale: 1, opacity: 1 }}
                              animate={{ scale: 1.5, opacity: 0 }}
                              transition={{ duration: 4, repeat: Infinity }}
                            />
                          )}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 z-10">
                    <motion.h3 
                      className="text-2xl sm:text-3xl font-playfair font-bold text-white mb-2"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      G. Thangella
                    </motion.h3>
                    <motion.p 
                      className="text-accent text-lg font-mono"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.7 }}
                    >
                      Tech Innovator
                    </motion.p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Icons under slideshow */}
            <motion.div 
              className="flex justify-center space-x-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
            >
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
                  transition={{ delay: 1.0 + index * 0.1 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="space-y-8 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <motion.div
                className="inline-block px-4 py-2 bg-gradient-to-r from-accent/20 to-blue-500/20 rounded-full text-accent font-semibold text-sm mb-6"
                whileHover={{ scale: 1.05 }}
              >
                About Me
              </motion.div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold mb-6">
                Passionate about creating{" "}
                <span className="premium-text-gradient">exceptional</span>{" "}
                digital experiences
              </h2>
            </div>
            
            <div className="space-y-6 text-lg leading-relaxed text-foreground/80">
              <p>
                I'm a passionate tech innovator with expertise in building exceptional digital experiences. 
                My approach combines technical precision with creative innovation, resulting in solutions that 
                not only function flawlessly but also engage and inspire.
              </p>
              
              <p>
                With a background spanning both design and development, I bring a holistic perspective to every project. 
                I'm constantly exploring new technologies and methodologies to push the boundaries of what's possible 
                in digital creation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              {skills.map((skill, index) => (
                <motion.div 
                  key={skill.title}
                  className="about-skill-card group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <skill.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold mb-2 text-foreground text-lg">{skill.title}</h3>
                  <p className="text-sm text-foreground/70">{skill.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
