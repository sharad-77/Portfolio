import { HoverArrow } from "@/components/ui/HoverArrow";
import { motion, useAnimation, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Link2 } from "lucide-react";
import { Calendar, Palette } from "lucide-react";
import Button from "@/components/ui/Button";
import { useNavigate } from "react-router";

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
  <div className="rounded-lg border border-[rgb(20,20,21)] bg-[#0A0A0B] h-[225px] w-full p-[24px] flex flex-col justify-between ">
    <div className="h-[53px] w-full flex flex-col sm:flex-row justify-between items-start sm:items-center ">
      <div className="flex items-center h-full w-[547px]">
        <div className="h-[50px] w-[50px] mr-1 bg-[#19191A] p-[10px] rounded-[8px] border-0 border-[rgb(20,20,21)]">
          {Icon}
        </div>

        <div className="h-[53px] w-full flex flex-row justify-start items-start gap-2">
          <div className="h-[50px] flex flex-col justify-center ">
            <p className="h-[30px] font-bold text-[20px]">{company}</p>
            <a
              href={`https://${website}`}
              className="h-[20px] text-[15px] text-[#999999] font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {website}
            </a>
          </div>

          <div className="bg-[#0f0f10] p-2 h-[30px] border border-[rgb(20,20,21)] rounded-[70px] flex justify-center items-center">
            <p className="text-[14px] font-medium text-[#999999] text-center">
              {tag}
            </p>
          </div>
        </div>
      </div>
      <div className="h-[33px] w-full flex items-center justify-end">
        <p className="text-[22px] font-bold ">{period}</p>
      </div>
    </div>

    <div className="h-[105px] w-[702px] p-[16px] bg-[#050505] flex flex-col gap-1 rounded-lg border border-[rgb(20,20,21)]">
      <p className="font-bold text-[16px] h-[24px] w-full text-[#D9D9D9]">
        {role}
      </p>
      <p className="text-[15px] font-medium text-[#999999] h-full w-full">
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
}: {
  Logo: any;
  name: string;
  category: string;
  onClick: () => void;
}) => {
  return (
    <motion.a
      className="w-[370px] h-[78px] flex flex-row rounded-[12px] border border-[rgb(20,20,21)] p-[14px] bg-[#0A0A0B] hover:bg-[#121212] items-center gap-1 relative overflow-hidden cursor-pointer"
      whileHover="hover"
      initial="initial"
      onClick={onClick}
    >
      <div className="w-[46px] h-[46px] rounded-[7px] p-[8px] bg-[#19191A] border border-[rgb(32,32,33)] flex items-center">
        <img src={Logo} alt="Logos" className="h-[45px] w-[45px] bg-cover" />
      </div>

      <div className="flex-1">
        <p className="text-[18px] font-semibold text-[#d9d9d9] leading-[27px]">
          {name}
        </p>
        <p className="text-[15px] font-medium text-[#999999] leading-[23px]">
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
  const count = useMotionValue(0);
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const controls = animate(0, divText, {
      duration: 2.5,
      ease: "easeInOut",
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
      className="w-[174px] h-[80px] flex flex-col justify-center items-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="w-full h-[51px] text-[28px] flex font-bold text-[#e6e6e6] justify-center items-center">
        <h1 ref={ref}>{divText}</h1>
        <h1>+</h1>
      </div>
      <p className="w-full h-[23px] text-[15px] font-medium text-center text-[#999999]">
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
      className="h-[155px] w-[370px] p-1 flex flex-col justify-between border border-[rgb(20,20,21)] rounded-[8px] bg-[#0A0A0B] gap-1 relative cursor-pointer"
      initial="initial"
      whileHover="hover"
      onClick={() => {
        void navigate("/service");
      }}
    >
      <div className="w-[370px] h-full flex flex-row items-center gap-2 ">
        <div className="h-[46px] w-[46px] bg-[#121212] border border-[rgb(32,32,33)] rounded-[8px] flex items-center justify-center ml-2">
          <span className="h-[30px] w-[30px] flex justify-center items-center ">
            {Logo}
          </span>
        </div>

        <p className="text-[19px] w-[70%] font-bold flex items-center p-1">
          {serviceName}
        </p>

        <div className="h-[46px] w-[46px] pr-8 items-center">
          <HoverArrow />
        </div>
      </div>

      <div className="w-[335px] h-full text-[15px] font-bold text-[#999999] p-1">
        <p>{description}</p>
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
    <div className="bg-[#0A0A0B] h-[196px] w-[750px] p-[8px] rounded-[12px] flex flex-row border border-[rgb(20,20,21)] gap-3">
      <img
        src={imageUrl}
        alt=""
        className="w-[350px] h-[180px] rounded-[12px]"
      />

      <div className="w-[350px] h-[170px] flex flex-col justify-between items-center">
        <div className="flex flex-col h-[105px] w-[350px]">
          <div className="flex flex-row w-[350px] h-[45px] items-center justify-between mt-0.5">
            <h3 className="text-[22px] h-[33px] w-[170px] font-bold">
              {title}
            </h3>
            <a
              href={`https://${website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[154px] h-[43px] p-[10px] rounded-[8px] bg-[#121212] flex flex-row justify-center items-center gap-1 border border-[rgb(20,20,21)]
              hover:bg-[rgb(20,20,21)] "
            >
              <Link2 className="text-[#999999] h-[20px] w-[20px]" />
              <p className="text-[15px] font-medium text-[#cccccc] ibm-plex-mono  ">
                {website}
              </p>
            </a>
          </div>

          <div className="flex flex-row w-[350px] h-[45px] gap-2 border-t border-b border-[rgb(20,20,21)] items-center text-[#999999] mt-[18px]">
            <p className="text-[15px]  font-medium ">{type}</p>
            <span className="text-[15px] font-medium ">&#8226;</span>
            <p className="text-[15px] font-medium ">{pages} Pages</p>
            <span className="text-[15px] font-medium ">&#8226;</span>
            <p className="text-[15px] font-medium ">{theme}</p>
          </div>
        </div>

        <p className="text-[15px] text-[#999999] font-medium">{description}</p>
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
  onScheduleCall: () => void;
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
  className = "",
}) => {
  return (
    <div
      className={`w-full max-w-md bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden ${className}`}
    >
      <div className="p-6">
        {/* Header Section */}
        <div className="mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-zinc-900 border border-zinc-700 rounded-lg flex items-center justify-center">
              {serviceIcon || <Palette className="w-6 h-6 text-zinc-300" />}
            </div>
            <div>
              <h3 className="text-zinc-200 font-semibold text-lg">{title}</h3>
            </div>

            <span className="text-2xl font-bold text-zinc-300">
              {price}/hour
            </span>
          </div>

          <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
        </div>

        {/* Stats Section */}
        <div className="border border-zinc-800 rounded-xl mb-6 overflow-hidden">
          <div className="border-t border-zinc-800 p-4 flex justify-between items-center">
            <span className="text-zinc-400 text-sm">{completedWorksLabel}</span>
            <span className="text-zinc-300 font-semibold text-lg">
              {completedWorks}
            </span>
          </div>

          <div className="border-t border-zinc-800 p-4 flex justify-between items-center">
            <span className="text-zinc-400 text-sm">{experienceLabel}</span>
            <span className="text-zinc-300 font-semibold text-lg">
              {experience}
            </span>
          </div>

          <div className="border-t border-zinc-800 p-4 flex justify-between items-center">
            <span className="text-zinc-400 text-sm">{totalHoursLabel}</span>
            <span className="text-zinc-300 font-semibold text-lg">
              {totalHours}
            </span>
          </div>
        </div>

        {/* Call to Action Button */}

        <div>
          <Button
            className="w-full"
            children={buttonIcon || <Calendar className="w-5 h-5 opacity-70" />}
            text={buttonText}
          />
        </div>
      </div>
    </div>
  );
};
