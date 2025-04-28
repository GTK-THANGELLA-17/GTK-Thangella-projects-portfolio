
import React, { useEffect } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type ScrollRevealProps = {
  children?: React.ReactNode;
  className?: string;
  variant?: 'fade' | 'slide' | 'scale' | 'flip' | 'techReveal' | 'codeBlock';
  delay?: number;
  duration?: number;
  distance?: number;
  threshold?: number;
  once?: boolean;
  direction?: 'up' | 'down' | 'left' | 'right';
};

const variants: Record<string, (props: ScrollRevealProps) => Variants> = {
  fade: () => ({
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }),
  slide: ({ distance = 50, direction = 'up' }) => {
    const directions = {
      up: { y: distance },
      down: { y: -distance },
      left: { x: distance },
      right: { x: -distance }
    };
    return {
      hidden: { opacity: 0, ...directions[direction] },
      visible: { opacity: 1, x: 0, y: 0 }
    };
  },
  scale: () => ({
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  }),
  flip: () => ({
    hidden: { opacity: 0, rotateX: -90 },
    visible: { opacity: 1, rotateX: 0 }
  }),
  techReveal: () => ({
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  }),
  codeBlock: () => ({
    hidden: { opacity: 0, scaleY: 0.7, transformOrigin: "top" },
    visible: { 
      opacity: 1, 
      scaleY: 1, 
      transition: {
        type: "tween",
        ease: [0.25, 0.1, 0.25, 1.0],
      }
    }
  })
};

const ScrollReveal = ({
  children = null,
  className = '',
  variant = 'fade',
  delay = 0,
  duration = 0.5,
  distance = 50,
  threshold = 0.1,
  once = true,
  direction = 'up'
}: ScrollRevealProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold: threshold
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else if (!once) {
      controls.start('hidden');
    }
  }, [controls, inView, once]);

  const selectedVariant = variants[variant]({ distance, direction });

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={selectedVariant}
      transition={{ 
        duration: duration, 
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1] 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
