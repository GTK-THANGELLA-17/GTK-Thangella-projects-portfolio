
import React from 'react';
import { motion } from 'framer-motion';

interface CursorFollowerProps {
  mousePosition: { x: number; y: number };
}

const CursorFollower: React.FC<CursorFollowerProps> = ({ mousePosition }) => {
  return (
    <motion.div
      className="fixed w-4 h-4 bg-accent/20 rounded-full pointer-events-none z-50 mix-blend-difference hidden md:block"
      animate={{
        x: mousePosition.x - 8,
        y: mousePosition.y - 8,
      }}
      transition={{ type: "spring", stiffness: 100, damping: 40 }} // Much slower cursor following
    />
  );
};

export default CursorFollower;
