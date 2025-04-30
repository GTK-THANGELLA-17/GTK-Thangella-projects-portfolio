import React, { useEffect, useState } from 'react';
import { Code, Layers, Lightbulb } from 'lucide-react';

const images = [
  "https://images.unsplash.com/photo-1596003906949-67221c37965c?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=800",
  "/Image1.JPG",
  "/Image2.png",
  "/Image3.png",
];

const AboutSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-24 bg-navy-50 dark:bg-navy-900">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Card with Image */}
          <div 
            className="relative group"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            {/* Light Effect Background in Ice Blue */}
            <div className="absolute -top-10 -left-10 w-36 h-36 bg-blue-300/30 rounded-full blur-3xl opacity-50 animate-pulse"></div>
            <div className="absolute -bottom-14 -right-14 w-40 h-40 bg-blue-400/20 rounded-full blur-2xl opacity-50 animate-ping"></div>

            {/* Card Container */}
            <div className="relative max-w-full w-full h-auto mx-auto overflow-hidden rounded-2xl border-2 border-blue-400/50 shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-blue-400/40">
              {/* Image */}
              <img
                src={images[currentImage]}
                alt="G. Thangella"
                className="w-full h-full object-contain transition-all duration-700 ease-in-out"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-800/30 to-transparent"></div>
              {/* Name and Title at Bottom */}
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <h2 className="text-2xl font-playfair font-bold text-white">G. Thangella</h2>
                <p className="text-blue-300 text-sm">Creative Developer</p>
              </div>
            </div>
          </div>

          {/* About Text and Skills */}
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

            {/* Skills Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              {[{
                icon: Code,
                title: "Clean Code",
                desc: "Crafting elegant, maintainable solutions"
              }, {
                icon: Layers,
                title: "Full-Stack",
                desc: "End-to-end development expertise"
              }, {
                icon: Lightbulb,
                title: "Innovation",
                desc: "Creative solutions to complex problems"
              }].map((item, index) => (
                <div key={index} className="p-6 rounded-xl border border-navy-100 dark:border-navy-700 bg-white dark:bg-navy-800/50 shadow-md hover:shadow-blue-400/30 transition-all duration-500">
                  <item.icon className="h-10 w-10 mb-4 text-blue-500" />
                  <h3 className="font-bold mb-2 text-navy-900 dark:text-white">{item.title}</h3>
                  <p className="text-sm text-navy-600 dark:text-navy-300">{item.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
