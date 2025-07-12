import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProfileImage from "@/assets/Profile.jpeg";

const cols = 10;
const rows = 10;
const totalBlocks = cols * rows;

const generateRandomDelays = (count: number): number[] => {
  const delays = Array.from({ length: count }, (_, i) => i * 0.01);
  return delays.sort(() => Math.random() - 0.5);
};

const ProfileReveal: React.FC = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const [delays, setDelays] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setDelays(generateRandomDelays(totalBlocks));
    const timer = setTimeout(() => {
      setLoading(false);
      setStartAnimation(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-[260px] h-[260px] overflow-hidden rounded-[10px]">
      <img
        src={ProfileImage}
        alt="Profile"
        className="absolute inset-0 w-full h-full object-cover bg-cover"
        style={{
          filter: loading ? "blur(10px)" : undefined,
        }}
      />

      <div className="absolute inset-0 grid grid-cols-10 grid-rows-10">
        {Array.from({ length: totalBlocks }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 1 }}
            animate={startAnimation ? { opacity: 0 } : {}}
            transition={{
              delay: delays[i],
              duration: 0.7,
              ease: "easeInOut",
            }}
            className="w-full h-full bg-[#050505]"
          />
        ))}
      </div>
    </div>
  );
};

export default ProfileReveal;
