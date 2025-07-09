import { motion } from 'framer-motion';

const FramerHand = () => {
  return (
    <span className="inline-block">
      <motion.span
        animate={{ rotate: [-20, 0, 20, 0, -20] }}
        transition={{
          repeat: Infinity,
          repeatDelay: 1,
          duration: 0.5,
          ease: 'linear',
        }}
        className="inline-block text-sm"
      >
        🖐️
      </motion.span>
    </span>
  );
};

export default FramerHand;
