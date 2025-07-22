import Button from '@/components/ui/Button';
import { HoverArrow } from '@/components/ui/HoverArrow';
import { animate, motion } from 'framer-motion';
import { Calendar, Link2, Palette } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import { cn } from '@/utils/cn';

export const ExperienceCard = ({
  Icon,
  company,
  role,
  period,
  description,
  website,
  tag,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon: any;
  company: string;
  role: string;
  period: string;
  description: string;
  website: string;
  tag: string;
}) => (
  <div className="flex h-full w-full flex-col justify-between gap-4 rounded-[12px] border border-[rgb(20,20,21)] bg-[#0A0A0B] p-4 sm:gap-2 sm:p-[24px] md:gap-4">
    <div className="flex h-full w-full flex-col justify-between sm:flex-row">
      <div className="flex flex-row gap-4 sm:gap-2">
        <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-lg bg-[#19191A] p-2">
          <p className="h-[30px] w-[30px]">{Icon}</p>
        </div>
        <div className="flex flex-1 items-center justify-between gap-4 sm:items-start sm:justify-center sm:gap-2">
          <div className="flex flex-col">
            <h3 className="text-[18px] font-bold">{company}</h3>
            <a
              href={`https://${website}`}
              className="text-[14px] font-medium text-[#999999] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {website}
            </a>
          </div>
          <div className="rounded-full border border-[rgb(20,20,21)] bg-[#0f0f10] px-3 py-1">
            <p className="text-[13px] font-medium text-[#999999]">{tag}</p>
          </div>
        </div>
      </div>

      <div className="flex h-full flex-col justify-center pt-2">
        <hr className="border-t border-dashed border-[#1f1f1f] sm:hidden" />
        <p className="py-2 text-[20px] font-bold text-[#CCCCCC] sm:px-0 sm:py-0">
          {period}
        </p>
        <hr className="border-t border-dashed border-[#1f1f1f] sm:hidden" />
      </div>
    </div>

    <div className="w-full rounded-lg border border-[rgb(20,20,21)] bg-[#050505] p-4 sm:p-[24px]">
      <h4 className="mb-1 text-[15px] font-bold text-[#D9D9D9]">{role}</h4>
      <p className="w-full text-[14px] font-medium text-[#999999]">
        {description}
      </p>
    </div>
  </div>
);

export const TechCard = ({
  Logo,
  name,
  category,
  onClick,
  className = '',
}: {
  Logo: string;
  name: string;
  category: string;
  onClick: () => void;
  className?: string;
}) => {
  return (
    <motion.a
      className={cn(
        'ms:p-4 relative flex w-full cursor-pointer items-center gap-3 overflow-hidden rounded-[12px] border border-[rgb(20,20,21)] bg-[#0A0A0B] p-2 transition-colors hover:bg-[#121212] sm:gap-2',
        className
      )}
      whileHover="hover"
      initial="initial"
      onClick={onClick}
    >
      <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-[12px] border border-[rgb(32,32,33)] bg-[#19191A]">
        <img
          src={Logo}
          alt={`${name} logo`}
          className="h-[30px] w-[30px] object-contain"
        />
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-[16px] font-semibold text-[#d9d9d9]">
          {name}
        </p>
        <p className="truncate text-[14px] font-medium text-[#999999]">
          {category}
        </p>
      </div>

      <div className="ml-2 shrink-0">
        <HoverArrow />
      </div>
    </motion.a>
  );
};

export const HighlightCard = ({
  divText,
  pText,
}: {
  divText: number;
  pText: string;
}) => {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const controls = animate(0, divText, {
      duration: 2.5,
      ease: 'easeInOut',
      onUpdate(latest) {
        if (ref.current) {
          ref.current.textContent = latest.toFixed(0);
        }
      },
    });

    return controls.stop; // Cleanup
  }, [divText]);

  return (
    <motion.div
      className="flex flex-col items-center justify-center md:py-[20px]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <div className="flex items-center justify-center font-bold text-[#e6e6e6]">
        <h1 ref={ref} className="text-[28px]">
          {divText}
        </h1>
        <span className="ml-1 text-[28px]">+</span>
      </div>
      <p className="text-center text-[14px] font-medium text-[#999999] md:text-[15px]">
        {pText}
      </p>
    </motion.div>
  );
};

export const MiniServiceCard = ({
  Logo,
  serviceName,
  description,
}: {
  Logo: React.ReactNode;
  serviceName: string;
  description: string;
}) => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="group relative flex h-full w-full cursor-pointer flex-col justify-between rounded-xl border border-[rgb(20,20,21)] bg-[#0A0A0B] p-4 transition-colors hover:bg-[#121212]"
      initial="initial"
      whileHover="hover"
      onClick={() => {
        void navigate('/service');
      }}
    >
      <div className="flex h-full w-full items-start gap-3">
        <div className="flex flex-col md:gap-1">
          <div className="flex h-full w-full flex-row items-center gap-2">
            <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-lg border border-[rgb(32,32,33)] bg-[#121212] p-2">
              <span className="flex h-[30px] w-[30px] items-center justify-center text-white">
                {Logo}
              </span>
            </div>

            <div className="flex items-center justify-center">
              <h3 className="group-hover:text-primary-400 md::text-[20px] text-[18px] font-bold text-white">
                {serviceName}
              </h3>
            </div>
          </div>
          <p className="mt-1 line-clamp-2 h-full w-full text-[14px] text-[15px] font-medium text-[#999999]">
            {description}
          </p>
        </div>

        <div className="mt-1">
          <HoverArrow />
        </div>
      </div>
    </motion.div>
  );
};

export const ProjectCard = ({
  title,
  imageUrl,
  websiteName,
  websiteUrl,
  type,
  pages,
  theme,
  description,
}: {
  title: string;
  imageUrl: string;
  websiteName: string;
  websiteUrl: string;
  type: string;
  pages: number;
  theme: string;
  description: string;
}) => {
  return (
    <div className="flex w-full flex-col gap-3 rounded-[12px] border border-[rgb(20,20,21)] bg-[#0A0A0B] p-[16px] sm:flex-row sm:p-[8px] sm:pr-[24px]">
      <div className="h-full w-full">
        <div className="aspect-video sm:h-full">
          <img
            src={imageUrl}
            alt=""
            className="h-full w-full rounded-[12px] object-cover"
          />
        </div>
      </div>

      <div className="flex h-full w-full flex-col justify-between">
        <div className="flex h-full w-full flex-col">
          <div className="flex h-full w-full flex-row items-center justify-between gap-2 pt-1 sm:justify-between">
            <h3 className="text-[20px] font-bold md:text-[22px]">{title}</h3>
            <a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center justify-center gap-1 rounded-[8px] border border-[rgb(20,20,21)] bg-[#121212] p-[10px] hover:bg-[rgb(20,20,21)]"
            >
              <Link2 className="h-[20px] w-[20px] text-[#999999]" />
              <p className="ibm-plex-mono w-full text-[15px] font-medium text-[#cccccc]">
                {websiteName}
              </p>
            </a>
          </div>

          <div className="my-3 flex flex-row items-center gap-2 border-t border-b border-[rgb(20,20,21)] py-[12px] text-[#999999]">
            <p className="text-[14px] font-medium md:text-[15px]">{type}</p>
            <span className="text-[14px] font-medium md:text-[15px]">
              &#8226;
            </span>
            <p className="text-[14px] font-medium md:text-[15px]">
              {pages} Pages
            </p>
            <span className="text-[14px] font-medium md:text-[15px]">
              &#8226;
            </span>
            <p className="text-[14px] font-medium md:text-[15px]">{theme}</p>
          </div>
        </div>

        <p className="text-[14px] font-medium text-[#999999] md:text-[15px]">
          {description}
        </p>
      </div>
    </div>
  );
};

interface ServiceCardProps {
  title: string;
  price: string;
  priceUnit: string;
  description: string;
  completedWorks: string;
  completedWorksLabel: string;
  experience: string;
  experienceLabel: string;
  totalHours: string;
  totalHoursLabel: string;
  buttonText: string;
  buttonIcon?: React.ReactNode;
  serviceIcon?: React.ReactNode;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  price,
  description,
  completedWorks,
  completedWorksLabel,
  experience,
  experienceLabel,
  totalHours,
  totalHoursLabel,
  buttonText,
  buttonIcon,
  serviceIcon,
  className = '',
}) => {
  return (
    <div
      className={cn(
        'flex h-full w-full flex-col gap-3 rounded-[12px] border border-[rgb(20,20,21)] bg-[#0A0A0B] p-[16px] sm:p-[24px]',
        className
      )}
    >
      <div className="h-full w-full">
        <div className="flex w-full flex-row justify-between">
          <div className="flex h-full w-full flex-row items-center gap-2">
            <div className="flex h-[45px] w-[45px] items-center justify-center rounded-[8px] border border-[rgb(32,32,33)] bg-[#141415] p-[8px] sm:h-[40px] sm:w-[40px]">
              {serviceIcon || (
                <Palette className="h-[24px] w-[24px] text-[#FFFFFF]" />
              )}
            </div>
            <p className="text-[18px] font-semibold text-[#FFFFFF]">{title}</p>
          </div>
          <div className="mt-1 flex h-full w-full flex-row items-center justify-end">
            <p className="text-[18px] font-semibold">${price}</p>
            <p className="text-[14px] font-medium text-[#999999]">/hour</p>
          </div>
        </div>
        <p className="mt-3 h-full w-full text-[15px] font-medium text-[#999999] sm:text-[14px]">
          {description}
        </p>
      </div>

      <div className="w-full rounded-[12px] border border-[rgb(20,20,21)]">
        <div className="flex h-[50px] flex-row items-center justify-between px-[16px] py-[12px]">
          <p className="text-[15px] font-medium text-[#999999] sm:text-[14px]">
            {completedWorksLabel}
          </p>
          <p className="text-[18px] font-semibold text-[#CCCCCC] sm:text-[16px]">
            {completedWorks}
          </p>
        </div>

        <div className="flex h-[50px] w-full flex-row items-center justify-between border-t border-b border-[rgb(20,20,21)] px-[16px] py-[12px]">
          <p className="text-[15px] font-medium text-[#999999] sm:text-[14px]">
            {experienceLabel}
          </p>
          <p className="text-[18px] font-semibold text-[#CCCCCC] sm:text-[16px]">
            {experience}
          </p>
        </div>

        <div className="flex h-[50px] w-full flex-row items-center justify-between px-[16px] py-[12px]">
          <p className="text-[15px] font-medium text-[#999999] sm:text-[14px]">
            {totalHoursLabel}
          </p>
          <p className="text-[18px] font-semibold text-[#CCCCCC] sm:text-[16px]">
            {totalHours}
          </p>
        </div>
      </div>

      {/* Call to Action Button */}
      <div className="h-full w-full">
        <Button
          className="h-[49px] w-full border border-[rgb(32,32,33)] text-[16px] sm:text-[16px]"
          children={
            buttonIcon || <Calendar className="h-[20px] w-[20px] opacity-70" />
          }
          text={buttonText}
          onClick={() => {
            window.open('https://cal.com/dev-sharad', '_blank');
          }}
        />
      </div>
    </div>
  );
};
