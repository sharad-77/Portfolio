import Button from '@/components/ui/Button';
import { HoverArrow } from '@/components/ui/HoverArrow';
import { animate, motion } from 'framer-motion';
import { Calendar, Link2, Palette } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';

export const ExperienceCard = ({
  Icon,
  company,
  role,
  period,
  description,
  website,
  tag,
}: {
  Icon: React.ReactNode;
  company: string;
  role: string;
  period: string;
  description: string;
  website: string;
  tag: string;
}) => (
  <div className="flex h-[300px] w-[468px] flex-col justify-between rounded-[12px] border border-[rgb(20,20,21)] bg-[#0A0A0B] p-[24px] sm:h-[219px] sm:w-[660px] md:h-[225px] md:w-full">
    <div className="flex h-[50px] w-full flex-row items-start justify-between md:h-[53px]">
      <div className="flex h-full w-[547px] items-center">
        <div className="mr-1 h-[50px] w-[50px] rounded-[8px] border-0 border-[rgb(20,20,21)] bg-[#19191A] p-[10px]">
          {Icon}
        </div>

        <div className="flex h-[53px] w-full flex-row items-start justify-start gap-2">
          <div className="flex h-[50px] flex-col justify-center">
            <p className="h-[30px] text-[18px] font-bold md:text-[20px]">
              {company}
            </p>
            <a
              href={`https://${website}`}
              className="h-[20px] text-[14px] font-medium text-[#999999] hover:underline md:text-[15px]"
              target="_blank"
              rel="noopener noreferrer"
            >
              {website}
            </a>
          </div>

          <div className="flex h-[30px] items-center justify-center rounded-[70px] border border-[rgb(20,20,21)] bg-[#0f0f10] p-2">
            <p className="text-center text-[13px] font-medium text-[#999999] md:text-[14px]">
              {tag}
            </p>
          </div>
        </div>
      </div>
      <div className="flex h-[30px] w-full items-center justify-end md:h-[33px]">
        <p className="text-[20px] font-bold md:text-[22px]">{period}</p>
      </div>
    </div>

    <div className="flex h-[100px] w-[612px] flex-col gap-1 rounded-lg border border-[rgb(20,20,21)] bg-[#050505] p-[16px] md:h-[105px] md:w-[702px]">
      <p className="h-[22px] w-full text-[15px] font-bold text-[#D9D9D9] md:h-[24px] md:text-[16px]">
        {role}
      </p>
      <p className="h-full w-full text-[14px] font-medium text-[#999999] md:text-[15px]">
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
  className,
}: {
  Logo: string;
  name: string;
  category: string;
  onClick: () => void;
  className?: string;
}) => {
  return (
    <motion.a
      className={`${className} relative flex cursor-pointer flex-row items-center gap-1.5 overflow-hidden rounded-[12px] border border-[rgb(20,20,21)] bg-[#0A0A0B] p-[14px] hover:bg-[#121212] md:gap-1`}
      whileHover="hover"
      initial="initial"
      onClick={onClick}
    >
      <div className="flex h-[46px] w-[46px] items-center rounded-[7px] border border-[rgb(32,32,33)] bg-[#19191A] p-[8px]">
        <img src={Logo} alt="Logos" className="h-[45px] w-[45px] bg-cover" />
      </div>

      <div className="flex-1">
        <p className="text-[16px] leading-[27px] font-semibold text-[#d9d9d9] md:text-[18px]">
          {name}
        </p>
        <p className="text-[14px] leading-[23px] font-medium text-[#999999] md:text-[15px]">
          {category}
        </p>
      </div>

      <HoverArrow />
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
      className="flex h-[70px] w-[150px] flex-col items-center justify-center md:h-[80px] md:w-[174px]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <div className="flex h-[42px] w-full items-center justify-center text-[28px] font-bold text-[#e6e6e6] md:h-[51px]">
        <h1 ref={ref}>{divText}</h1>
        <h1>+</h1>
      </div>
      <p className="h-[20px] w-full text-center text-[14px] font-medium text-[#999999] md:h-[23px] md:text-[15px]">
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
      className="relative flex h-[142px] w-[325px] cursor-pointer flex-col justify-between rounded-[12px] border border-[rgb(20,20,21)] bg-[#0A0A0B] p-[15px] md:h-[155px] md:w-[370px]"
      initial="initial"
      whileHover="hover"
      onClick={() => {
        void navigate('/service');
      }}
    >
      {/* Fixed: Removed hardcoded widths, used flex-1 for proper spacing */}
      <div className="flex flex-row items-center gap-1 md:gap-2">
        <div className="flex h-[46px] w-[46px] items-center justify-center rounded-[8px] border border-[rgb(32,32,33)] bg-[#121212]">
          <span className="flex h-[24px] w-[24px] items-center justify-center md:h-[30px] md:w-[30px]">
            {Logo}
          </span>
        </div>

        <p className="flex flex-1 items-center px-1 text-[18px] font-bold md:text-[19px]">
          {serviceName}
        </p>

        <div className="flex h-[42px] w-[42px] items-center justify-center md:h-[46px] md:w-[46px]">
          <HoverArrow />
        </div>
      </div>

      {/* Fixed: Removed hardcoded widths, used proper flex container */}
      <div className="flex items-center text-[14px] font-bold text-[#999999]">
        <p className="leading-tight">{description}</p>
      </div>
    </motion.div>
  );
};
export const ProjectCard = ({
  title,
  imageUrl,
  website,
  type,
  pages,
  theme,
  description,
}: {
  title: string;
  imageUrl: string;
  website: string;
  type: string;
  pages: number;
  theme: string;
  description: string;
}) => {
  return (
    <div className="flex h-[196px] w-[660px] flex-row gap-3 rounded-[12px] border border-[rgb(20,20,21)] bg-[#0A0A0B] p-[8px] md:w-[750px]">
      <img
        src={imageUrl}
        alt=""
        className="h-[180px] w-[304px] rounded-[12px] md:w-[350px]"
      />

      <div className="flex h-[166px] w-[304px] flex-col items-center justify-between md:h-[170px] md:w-[350px]">
        <div className="flex h-[105px] w-[304px] flex-col md:w-[350px]">
          <div className="mt-0.5 flex h-[43px] w-full flex-row items-center justify-between md:h-[45px]">
            <h3 className="h-[30px] w-[130px] text-[20px] font-bold md:h-[33px] md:w-[170px] md:text-[22px]">
              {title}
            </h3>
            <a
              href={`https://${website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-[43px] w-[154px] flex-row items-center justify-center gap-1 rounded-[8px] border border-[rgb(20,20,21)] bg-[#121212] p-[10px] hover:bg-[rgb(20,20,21)]"
            >
              <Link2 className="h-[20px] w-[20px] text-[#999999]" />
              <p className="ibm-plex-mono text-[15px] font-medium text-[#cccccc]">
                {website}
              </p>
            </a>
          </div>

          <div className="mt-[18px] flex h-[45px] w-[304px] flex-row items-center gap-2 border-t border-b border-[rgb(20,20,21)] text-[#999999] md:w-[350px]">
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
      className={`flex h-[385px] w-[370px] flex-col gap-3 rounded-[12px] border border-[rgb(20,20,21)] bg-[#0A0A0B] p-[24px] ${className}`}
      onClick={() => {
        window.open('https://cal.com/dev-sharad', '_blank');
      }}
    >
      <div className="h-[95px] w-[322px]">
        <div className="flex h-[40px] w-full flex-row">
          <div className="flex h-[40px] w-[249px] flex-row items-center gap-2">
            <div className="flex h-[45px] w-[45px] items-center justify-center rounded-[8px] border border-[rgb(32,32,33)] bg-[#141415]">
              {serviceIcon || (
                <Palette className="h-[24px] w-[24px] text-[#FFFFFF]" />
              )}
            </div>
            <p className="text-[20px] font-semibold text-[#FFFFFF]">{title}</p>
          </div>
          <div className="mt-1 flex h-[27px] w-[73px] flex-row items-center justify-center">
            <p className="text-[18px] font-semibold">${price}</p>
            <p className="text-[14px] font-medium text-[#999999]">/hour</p>
          </div>
        </div>
        <p className="mt-3 h-[45px] w-[322px] text-[15px] font-medium text-[#999999]">
          {description}
        </p>
      </div>

      <div className="rounded-[12px] border border-[rgb(20,20,21)]">
        <div className="flex h-[50px] w-[322px] flex-row items-center justify-between px-[16px] py-[12px]">
          <p className="text-[15px] font-medium text-[#999999]">
            {completedWorksLabel}
          </p>
          <p className="text-[18px] font-semibold text-[#CCCCCC]">
            {completedWorks}
          </p>
        </div>

        <div className="flex h-[50px] w-[322px] flex-row items-center justify-between border-t border-b border-[rgb(20,20,21)] px-[16px] py-[12px]">
          <p className="text-[15px] font-medium text-[#999999]">
            {experienceLabel}
          </p>
          <p className="text-[18px] font-semibold text-[#CCCCCC]">
            {experience}
          </p>
        </div>

        <div className="flex h-[50px] w-[322px] flex-row items-center justify-between px-[16px] py-[12px]">
          <p className="text-[15px] font-medium text-[#999999]">
            {totalHoursLabel}
          </p>
          <p className="text-[18px] font-semibold text-[#CCCCCC]">
            {totalHours}
          </p>
        </div>
      </div>

      {/* Call to Action Button */}
      <div>
        <Button
          className="h-[49px] w-[322px] border border-[rgb(32,32,33)] text-[16px]"
          children={buttonIcon || <Calendar className="h-5 w-5 opacity-70" />}
          text={buttonText}
        />
      </div>
    </div>
  );
};
