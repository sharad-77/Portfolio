import { CircleCheckBig } from 'lucide-react';
import { animate } from 'motion';
import React, { useEffect, useRef } from 'react';
import { cn } from '@/utils/cn';

export const LogoCarousel = ({
  icons,
  className,
}: {
  icons: React.ReactNode[];
  className?: string; // add className prop
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const duplicatedIcons = [...icons, ...icons];

  useEffect(() => {
    if (!ref.current) return;

    const animation = animate(
      ref.current,
      { x: ['0%', '-110%'] },
      { duration: 25, ease: 'linear', repeat: Infinity }
    );

    return () => animation.stop();
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex gap-4" ref={ref}>
        {duplicatedIcons.map((icon, index) => (
          <div
            key={index}
            className="flex flex-shrink-0 items-center justify-center p-2 md:p-4"
          >
            <span className={cn('flex items-center justify-center', className)}>
              {icon}
            </span>
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
    <div className="relative my-2 flex h-[70px] w-[750px] overflow-hidden bg-[#0A0A0B] px-[20px] shadow-[inset_0px_0px_0px_2px_#050505]">
      {/* Left fade */}
      <div className="absolute top-0 left-0 z-10 h-full w-20 bg-gradient-to-r from-[#050505] to-transparent" />

      {/* Right fade */}
      <div className="absolute top-0 right-0 z-10 h-full w-20 bg-gradient-to-l from-[#050505] to-transparent" />

      <div className="flex items-center justify-center gap-2" ref={ref}>
        {duplicatedBenefits.map((benefit, index) => (
          <div
            key={index}
            className="flex flex-shrink-0 items-center justify-center px-2"
          >
            <span className="mr-2">
              <CircleCheckBig className="h-4 w-4 text-[#999999]" />
            </span>
            <p className="text-xs font-bold whitespace-nowrap text-[#999999]">
              {benefit}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
