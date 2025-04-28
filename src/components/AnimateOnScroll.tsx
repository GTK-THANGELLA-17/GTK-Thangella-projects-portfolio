
import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  threshold?: number;
  once?: boolean;
  staggerChildren?: number;
  variant?: 'fade' | 'slide' | 'scale' | 'flip' | 'techReveal' | 'codeBlock';
  className?: string;
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({ 
  children, 
  threshold = 0.1,
  once = true,
  staggerChildren = 0.15,
  variant = 'techReveal',
  className = ''
}) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ 
        once, 
        amount: threshold // Using 'amount' instead of 'threshold' for framer-motion ViewportOptions
      }}
      variants={{
        visible: {
          transition: {
            staggerChildren
          }
        }
      }}
    >
      {React.Children.map(children, (child, i) => {
        if (React.isValidElement(child)) {
          return (
            <ScrollReveal
              variant={variant}
              delay={i * 0.08}
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
