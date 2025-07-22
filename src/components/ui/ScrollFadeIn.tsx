import { motion, useAnimation } from 'framer-motion';
import type { Variants } from 'framer-motion';
import type { Transition } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/utils/cn';

interface ScrollFadeInProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  transition?: Transition;
}

export default function ScrollFadeIn({
  children,
  className = '',
  variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  transition = { duration: 0.8, ease: 'easeInOut' },
}: ScrollFadeInProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
