
import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  threshold?: number;
  once?: boolean;
  staggerChildren?: number;
  variant?: 'fade' | 'slide' | 'scale' | 'flip' | 'techReveal' | 'codeBlock' | 'premium';
  className?: string;
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({ 
  children, 
  threshold = 0.15,
  once = true,
  staggerChildren = 0.2,
  variant = 'premium',
  className = ''
}) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ 
        once, 
        amount: threshold
      }}
      variants={{
        hidden: {
          opacity: 0
        },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren,
            delayChildren: 0.1
          }
        }
      }}
    >
      {React.Children.map(children, (child, i) => {
        if (React.isValidElement(child)) {
          return (
            <ScrollReveal
              variant={variant}
              delay={i * 0.1}
              threshold={threshold}
              once={once}
            >
              {child}
            </ScrollReveal>
          );
        }
        return child;
      })}
    </motion.div>
  );
};

export default AnimateOnScroll;
