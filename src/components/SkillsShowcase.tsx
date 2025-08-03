
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Database, Globe, Smartphone, Zap } from 'lucide-react';

const SkillsShowcase = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      color: "from-blue-400 to-cyan-400",
      skills: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Next.js"]
    },
    {
      title: "UI/UX Design",
      icon: Palette,
      color: "from-purple-400 to-pink-400",
      skills: ["Figma", "Adobe XD", "Design Systems", "User Research", "Prototyping"]
    },
    {
      title: "Backend Development",
      icon: Database,
      color: "from-green-400 to-blue-400",
      skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs"]
    },
    {
      title: "Web Technologies",
      icon: Globe,
      color: "from-orange-400 to-red-400",
      skills: ["HTML5", "CSS3", "JavaScript", "Webpack", "Vite"]
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      color: "from-indigo-400 to-purple-400",
      skills: ["React Native", "PWA", "Responsive Design", "Mobile-First", "App Store"]
    },
    {
      title: "Performance",
      icon: Zap,
      color: "from-yellow-400 to-orange-400",
      skills: ["Optimization", "SEO", "Core Web Vitals", "Lazy Loading", "Caching"]
    }
  ];

  return (
    <section className="section-container">
      <div className="text-center mb-16">
        <motion.h2 
          className="text-4xl md:text-5xl font-playfair font-bold mb-6 premium-text-gradient"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Technical Expertise
        </motion.h2>
        <motion.p 
          className="text-xl text-foreground/70 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Crafting digital experiences with cutting-edge technologies and creative solutions
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            className="group relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div className="premium-card p-8 h-full relative overflow-hidden">
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Icon */}
              <motion.div 
                className={`w-16 h-16 rounded-full bg-gradient-to-br ${category.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <category.icon className="w-full h-full text-white" />
              </motion.div>
              
              {/* Title */}
              <h3 className="text-xl font-semibold mb-4 group-hover:text-accent transition-colors">
                {category.title}
              </h3>
              
              {/* Skills */}
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index * 0.1) + (skillIndex * 0.05) }}
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`} />
                    <span className="text-sm text-foreground/80">{skill}</span>
                  </motion.div>
                ))}
              </div>
              
              {/* Hover effect overlay */}
              <motion.div
                className="absolute inset-0 border-2 border-transparent group-hover:border-accent/50 rounded-2xl transition-all duration-300"
                initial={false}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsShowcase;
