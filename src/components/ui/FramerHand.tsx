import React from 'react';
import { motion } from 'framer-motion';

interface FramerHandProps {
  emoji: React.ReactNode;
  animate?: import('framer-motion').MotionProps['animate']; // use framer-motion's animate type
  transition?: import('framer-motion').Transition;
}

const FramerHand = ({
  emoji,
  animate = { rotate: [-40, 0, 20, 0, -40] },
  transition = {
    repeat: Infinity,
    repeatDelay: 0.5,
    duration: 0.5,
    ease: 'linear',
  },
}: FramerHandProps) => {
  return (
    <span className="inline-block">
      <motion.span
        animate={animate}
        transition={transition}
        className="inline-block text-sm"
      >
        {emoji}
      </motion.span>
    </span>
  );
};

export default FramerHand;
