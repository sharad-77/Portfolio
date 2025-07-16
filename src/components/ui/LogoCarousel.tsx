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
      { x: ['0%', '-110%'], y: ['0px', '8px'] },
      { duration: 100, ease: 'linear', repeat: Infinity }
    );

    return () => animation.stop();
  }, []);

  return (
    <div className="relative flex h-full w-full overflow-hidden bg-[#0A0A0B] shadow-[inset_0px_0px_0px_2px_#050505]">
      {/* Left fade with proper positioning */}
      <div className="absolute top-0 left-0 z-10 h-full w-15 bg-gradient-to-r from-[#050505] to-transparent sm:w-20" />

      {/* Right fade with proper positioning */}
      <div className="absolute top-0 right-0 z-10 h-full w-15 bg-gradient-to-l from-[#050505] to-transparent sm:w-20" />

      {/* Content container with proper padding to account for fade overlays */}
      <div className="flex w-full items-center justify-center px-8 sm:px-12">
        <div className="flex items-center justify-center gap-6" ref={ref}>
          {duplicatedBenefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-shrink-0 items-center justify-center gap-2"
            >
              <CircleCheckBig className="h-4 w-4 flex-shrink-0 text-[#999999]" />
              <p className="text-[18px] font-bold whitespace-nowrap text-[#999999]">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
