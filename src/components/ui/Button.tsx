import { motion } from 'framer-motion';
import React, { useRef, useState, useEffect } from 'react';

const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 70;
const CHARS = '!@#$%^&*():{};|,.<>/?';

interface ButtonProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof motion.button>,
    'children'
  > {
  text: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const Button = ({
  text,
  className,
  icon,
  children,
  onClick,
  ...rest
}: ButtonProps) => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [displayedText, setDisplayedText] = useState(text);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const scramble = () => {
    let pos = 0;
    intervalRef.current = setInterval(() => {
      const scrambled = text
        .split('')
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }
          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          return CHARS[randomCharIndex];
        })
        .join('');

      setDisplayedText(scrambled);
      pos++;

      if (pos >= text.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setDisplayedText(text);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.blur();
    onClick?.();
  };

  return (
    <motion.button
      whileHover={{ transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.975, transition: { duration: 0.2 } }}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      onClick={handleClick}
      className={`text-gray ibm-plex-mono relative cursor-pointer overflow-hidden rounded-lg bg-[#171717] font-semibold uppercase transition-colors hover:text-white ${className || ''}`}
      {...rest}
    >
      <div className="relative z-10 flex items-center justify-center gap-2 hover:text-white">
        {children && <span className="flex items-center">{children}</span>}
        <span className="flex items-center">{displayedText}</span>
        {icon && <span className="flex items-center">{icon}</span>}
      </div>
    </motion.button>
  );
};

export default Button;
