import { animate } from "motion";
import React, { useEffect, useRef } from "react";

const LogoCarousel = ({ icons }: { icons: React.ReactNode[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const duplicatedIcons = [...icons, ...icons];

  useEffect(() => {
    if (!ref.current) return;

    const animation = animate(
      ref.current,
      {
        x: ["0%", "-110%"],
      },
      {
        duration: 25,
        ease: "linear",
        repeat: Infinity,
      },
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

export default LogoCarousel;
