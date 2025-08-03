
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Globe, Users, Code, Rocket } from 'lucide-react';

const PortfolioEnhancements = () => {
  const enhancements = [
    {
      icon: Sparkles,
      title: "Interactive Elements",
      description: "Enhanced animations and micro-interactions for better user engagement",
      status: "Added"
    },
    {
      icon: Zap,
      title: "Performance Optimized",
      description: "Lightning-fast loading with optimized images and code splitting",
      status: "Improved"
    },
    {
      icon: Globe,
      title: "Mobile-First Design",
      description: "Responsive design optimized for all devices and screen sizes",
      status: "Enhanced"
    },
    {
      icon: Users,
      title: "AI Assistant Upgrade",
      description: "Smart chatbot with date/time queries and enhanced mobile experience",
      status: "Upgraded"
    },
    {
      icon: Code,
      title: "Clean Architecture",
      description: "Well-structured, maintainable code with TypeScript and modern practices",
      status: "Refined"
    },
    {
      icon: Rocket,
      title: "SEO & Accessibility",
      description: "Optimized for search engines and accessibility standards",
      status: "Optimized"
    }
  ];

  return (
    <div className="hidden">
      {/* This component represents the improvements made to the portfolio */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {enhancements.map((enhancement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-charcoal-800 rounded-xl p-6 shadow-lg border border-white/10"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                <enhancement.icon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-charcoal-800 dark:text-platinum-100">
                  {enhancement.title}
                </h3>
                <span className="text-xs text-accent font-medium">
                  {enhancement.status}
                </span>
              </div>
            </div>
            <p className="text-sm text-charcoal-600 dark:text-platinum-300">
              {enhancement.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioEnhancements;
