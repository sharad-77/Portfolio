import { CircleCheckBig } from 'lucide-react';
import { animate } from 'motion';
import React, { useEffect, useRef } from 'react';

export const LogoCarousel = ({ icons }: { icons: React.ReactNode[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const duplicatedIcons = [...icons, ...icons];

  useEffect(() => {
    if (!ref.current) return;

    const animation = animate(
      ref.current,
      {
        x: ['0%', '-110%'],
      },
      {
        duration: 25,
        ease: 'linear',
        repeat: Infinity,
      }
    );

    return () => {
      animation.stop();
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden my-2">
      <div className="flex" ref={ref}>
        {duplicatedIcons.map((icon, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-24 h-16 flex items-center justify-center p-4"
          >
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export const BenefitsCarousel = ({ benefits }: { benefits: string[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const duplicatedBenefits = [...benefits, ...benefits];

  useEffect(() => {
    if (!ref.current) return;

    const animation = animate(
      ref.current,
      { x: ['0%', '-110%'] },
      { duration: 200, ease: 'linear', repeat: Infinity }
    );

    return () => animation.stop();
  }, []);

  return (
    <div className="relative w-[750px] h-[70px] overflow-hidden my-2 flex bg-[#0A0A0B] shadow-[inset_0px_0px_0px_2px_#050505] px-[20px]">
      {/* Left fade */}
      <div className="absolute left-0 top-0 h-full w-20 z-10 bg-gradient-to-r from-[#050505] to-transparent" />

      {/* Right fade */}
      <div className="absolute right-0 top-0 h-full w-20 z-10 bg-gradient-to-l from-[#050505] to-transparent" />

      <div className="flex justify-center items-center gap-2" ref={ref}>
        {duplicatedBenefits.map((benefit, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center justify-center px-2"
          >
            <span className="mr-2">
              <CircleCheckBig className="h-4 w-4 text-[#999999]" />
            </span>
            <p className="font-bold text-xs whitespace-nowrap text-[#999999]">
              {benefit}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
