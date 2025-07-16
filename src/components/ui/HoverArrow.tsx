import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const HoverArrow = () => {
  return (
    <motion.div
      variants={{
        initial: {
          opacity: 0.7,
        },
        hover: {
          opacity: 1,
          rotate: -40,
          transition: { duration: 0.2, ease: 'linear' },
        },
      }}
    >
      <ArrowRight strokeWidth={2} />
    </motion.div>
  );
};
