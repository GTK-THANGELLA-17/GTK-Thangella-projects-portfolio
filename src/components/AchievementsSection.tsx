
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Coffee, Star, TrendingUp, Target } from 'lucide-react';

const AchievementsSection = () => {
  const achievements = [
    {
      icon: Award,
      number: "15+",
      label: "Projects Completed",
      description: "Successfully delivered innovative solutions"
    },
    {
      icon: Users,
      number: "50+",
      label: "Happy Clients",
      description: "Satisfied customers worldwide"
    },
    {
      icon: Coffee,
      number: "1000+",
      label: "Cups of Coffee",
      description: "Fuel for late-night coding sessions"
    },
    {
      icon: Star,
      number: "5.0",
      label: "Average Rating",
      description: "Client satisfaction score"
    },
    {
      icon: TrendingUp,
      number: "100%",
      label: "Success Rate",
      description: "Projects delivered on time"
    },
    {
      icon: Target,
      number: "24/7",
      label: "Support",
      description: "Always available for my clients"
    }
  ];

  return (
    <section className="section-container bg-gradient-to-br from-accent/5 via-blue-500/5 to-purple-500/5 dark:from-accent/10 dark:via-blue-500/10 dark:to-purple-500/10">
      <div className="text-center mb-16">
        <motion.h2 
          className="text-4xl md:text-5xl font-playfair font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Achievements & <span className="premium-text-gradient">Milestones</span>
        </motion.h2>
        <motion.p 
          className="text-xl text-foreground/70 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Numbers that reflect my commitment to excellence and client satisfaction
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.label}
            className="text-center group"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div className="premium-card p-8 relative overflow-hidden">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon */}
              <motion.div 
                className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-accent to-purple-500 rounded-full p-5 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <achievement.icon className="w-full h-full text-white" />
              </motion.div>
              
              {/* Number */}
              <motion.div 
                className="text-4xl md:text-5xl font-bold premium-text-gradient mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (index * 0.1) + 0.3 }}
              >
                {achievement.number}
              </motion.div>
              
              {/* Label */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                {achievement.label}
              </h3>
              
              {/* Description */}
              <p className="text-foreground/70 text-sm">
                {achievement.description}
              </p>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-accent/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;
