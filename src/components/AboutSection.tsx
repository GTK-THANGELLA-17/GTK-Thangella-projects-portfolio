import React, { useState, useEffect } from 'react';
import { Code, Layers, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1596003906949-67221c37965c?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=800",
    "/Image1.JPG",
    "/Image2.png",
    "/Image3.png",
  ];



  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  return (
    <section id="about" className="py-24 bg-navy-50 dark:bg-navy-800/30">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className="relative"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gold-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-navy-500/20 rounded-full blur-3xl"></div>

            <div className="relative aspect-square max-w-md mx-auto lg:mx-0 overflow-hidden rounded-2xl transition-all transform hover:scale-105 hover:shadow-neon duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-navy-700/80 to-navy-900/80"></div>
              <img
                src={images[currentImageIndex]} // Dynamically update the image source
                alt="G. Thangella"
                className="w-full h-full object-contain mix-blend-overlay opacity-90"
              />
              <div className="absolute inset-0 flex items-end justify-center p-6">
                <div className="text-center text-white mb-4">
                  <h2 className="text-3xl font-playfair font-bold">G. Thangella</h2>
                  <p className="text-gold-300 text-sm">Creative Developer</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="space-y-6"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-navy-900 dark:text-white">
              About Me
            </h2>

            <p className="text-navy-700 dark:text-navy-200">
              I'm a passionate creative developer with expertise in building exceptional digital experiences. My approach combines technical precision with creative innovation, resulting in solutions that not only function flawlessly but also engage and inspire.
            </p>

            <p className="text-navy-700 dark:text-navy-200">
              With a background spanning both design and development, I bring a holistic perspective to every project. I'm constantly exploring new technologies and methodologies to push the boundaries of what's possible in digital creation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              <div className="p-6 rounded-xl border border-navy-100 dark:border-navy-700 bg-white dark:bg-navy-800/50 shadow-sm">
                <Code className="h-10 w-10 mb-4 text-gold-500" />
                <h3 className="font-bold mb-2 text-navy-900 dark:text-white">Clean Code</h3>
                <p className="text-sm text-navy-600 dark:text-navy-300">Crafting elegant, maintainable solutions</p>
              </div>

              <div className="p-6 rounded-xl border border-navy-100 dark:border-navy-700 bg-white dark:bg-navy-800/50 shadow-sm">
                <Layers className="h-10 w-10 mb-4 text-gold-500" />
                <h3 className="font-bold mb-2 text-navy-900 dark:text-white">Full-Stack</h3>
                <p className="text-sm text-navy-600 dark:text-navy-300">End-to-end development expertise</p>
              </div>

              <div className="p-6 rounded-xl border border-navy-100 dark:border-navy-700 bg-white dark:bg-navy-800/50 shadow-sm">
                <Lightbulb className="h-10 w-10 mb-4 text-gold-500" />
                <h3 className="font-bold mb-2 text-navy-900 dark:text-white">Innovation</h3>
                <p className="text-sm text-navy-600 dark:text-navy-300">Creative solutions to complex problems</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
