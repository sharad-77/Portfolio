import {
  eslint,
  express,
  git,
  github,
  javascript,
  mongodb,
  Motion,
  nodejs,
  prettier,
  react,
  typescript,
} from '@/assets';
import reactquery from '@/assets/react-query.svg';
import zustand from '@/assets/zustand.svg';
import Button from '@/components/ui/Button';
import {
  ExperienceCard,
  HighlightCard,
  MiniServiceCard,
  ProjectCard,
  TechCard,
} from '@/components/ui/Cards';
import FramerHand from '@/components/ui/FramerHand';
import { LogoCarousel } from '@/components/ui/LogoCarousel';
import ProfileImage from '@/components/ui/ProfileImage';
import ScrollFadeIn from '@/components/ui/ScrollFadeIn';
import {
  AppWindow,
  ArrowUpRight,
  Boxes,
  BriefcaseBusiness,
  CalendarCheck2,
  Code,
  FolderKanban,
  Laptop,
  Layers,
  Mail,
  Server,
  TabletSmartphone,
} from 'lucide-react';
import { useNavigate } from 'react-router';
import Portfolio from '@/assets/Portfolio.png';
import SkillBridge from '@/assets/Skil-Bridge.png';

const logos = [
  <img
    src={javascript}
    alt="JavaScript"
    className="h-full w-full object-contain filter"
  />,
  <img
    src={typescript}
    alt="TypeScript"
    className="h-full w-full object-contain filter"
  />,
  <img
    src={zustand}
    alt="Zustand"
    className="h-full w-full object-contain filter"
  />,
  <img
    src={react}
    alt="React"
    className="h-full w-full object-contain filter"
  />,
  <img
    src={nodejs}
    alt="Node.js"
    className="h-full w-full object-contain filter"
  />,
  <img
    src={express}
    alt="Express"
    className="h-full w-full object-contain filter"
  />,
  <img
    src={mongodb}
    alt="MongoDB"
    className="h-full w-full object-contain filter"
  />,
  <img src={git} alt="Git" className="h-full w-full object-contain filter" />,
  <img
    src={github}
    alt="GitHub"
    className="h-full w-full object-contain filter"
  />,
  <img
    src={eslint}
    alt="ESLint"
    className="h-full w-full object-contain filter"
  />,
  <img
    src={prettier}
    alt="Prettier"
    className="h-full w-full object-contain filter"
  />,
  <img
    src={Motion}
    alt="motion"
    className="h-full w-full object-contain filter"
  />,
  <img
    src={reactquery}
    alt="reactquery"
    className="h-full w-full object-contain filter"
  />,
];

function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <title>Welcome to My Portfolio</title>
      <div className="mt-8 flex h-full w-full flex-col items-center px-3 sm:px-0 md:mt-20">
        {/* hero section */}
        <ScrollFadeIn
          className="flex w-full flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-center sm:gap-6"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <div className="flex flex-row items-center gap-1 sm:gap-3 md:h-[260px]">
            <ScrollFadeIn
              className="h-[142px] w-[142px] sm:h-[230px] sm:w-[230px] md:h-[260px] md:w-[260px]"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
            >
              <ProfileImage />
            </ScrollFadeIn>

            <div className="flex h-[144px] w-[70%] flex-col items-center gap-1 sm:h-full sm:w-[392px] md:h-full md:w-[470px] md:justify-between">
              <div className="px-1 sm:h-full md:px-0">
                <ScrollFadeIn
                  className="w-full text-[15px] font-bold text-[#999999] sm:h-[30px] sm:text-[18px] md:text-[20px]"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  {' '}
                  <span className="mr-1">
                    <FramerHand
                      emoji="👋"
                      animate={{ rotate: [0, 15, -15, 0] }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  </span>
                  Hello I Am
                </ScrollFadeIn>

                <ScrollFadeIn
                  className="w-full text-[28px] font-bold sm:h-[50px] md:text-[34px]"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                  Sharad P
                </ScrollFadeIn>

                <div>
                  <ScrollFadeIn
                    className="w-full text-[12px] font-medium text-[#999999] sm:h-[81px] sm:text-[14px] md:mb-2 md:text-[18px]"
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                  >
                    Full-stack developer from Gujarat, India, building intuitive
                    web apps with clean design and strong performance.
                    Passionate about backend architecture and real-world
                    solutions.
                  </ScrollFadeIn>
                </div>
              </div>

              <div className="hidden h-full w-full items-center justify-center sm:flex sm:w-full">
                <ScrollFadeIn
                  className="mt-0 flex h-full w-full justify-center pb-1 sm:mt-2 sm:gap-1 md:h-[48px] md:gap-2 md:pb-0"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                >
                  <Button
                    className="flex h-full w-full items-center justify-center py-2 text-[13px] font-medium sm:text-[15px] md:h-full md:w-full"
                    text="EMAIL ME"
                    onClick={() =>
                      (window.location.href = 'mailto:chavdasharad77@gmail.com')
                    }
                  >
                    <Mail size={18} />
                  </Button>
                  <Button
                    className="flex h-full w-full items-center justify-center py-2 text-[13px] font-medium sm:text-[15px] md:h-full md:w-full"
                    text="SCHEDULE CALL"
                    onClick={() =>
                      (window.location.href = 'https://cal.com/dev-sharad')
                    }
                  >
                    <CalendarCheck2 size={18} />
                  </Button>
                </ScrollFadeIn>
              </div>
            </div>
          </div>

          <div className="flex h-full w-[100%] items-center justify-center sm:hidden">
            <ScrollFadeIn
              className="mt-0 flex h-full w-full flex-col items-baseline justify-center gap-2 pb-1 sm:mt-2 md:mt-4 md:gap-2"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              <Button
                className="flex h-full w-full items-center justify-center px-[18px] py-[12px] text-[13px] font-medium sm:w-[181px] md:w-[255px] md:py-3 md:text-[15px]"
                text="EMAIL ME"
                onClick={() =>
                  (window.location.href = 'mailto:chavdasharad77@gmail.com')
                }
              >
                <Mail size={18} />
              </Button>
              <Button
                className="flex h-full w-full items-center justify-center px-[18px] py-[12px] text-[13px] font-medium sm:w-[181px] md:w-[255px] md:py-3 md:text-[15px]"
                text="SCHEDULE CALL"
                onClick={() =>
                  (window.location.href = 'https://cal.com/dev-sharad')
                }
              >
                <CalendarCheck2 size={18} />
              </Button>
            </ScrollFadeIn>
          </div>
        </ScrollFadeIn>

        {/* Carousel */}
        <ScrollFadeIn
          className="my-4 w-full md:my-3"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <LogoCarousel
            icons={logos}
            className="h-8 w-8 sm:h-6 sm:w-6 md:h-8 md:w-8"
          />
        </ScrollFadeIn>

        {/* Mini Skill Highlights Section */}
        <ScrollFadeIn
          className="w-full"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <hr className="border-t border-dashed border-[#1f1f1f]" />
          <div className="grid h-full w-full grid-cols-2 gap-4 py-5 sm:grid-cols-4 sm:py-3 md:gap-6">
            <ScrollFadeIn
              className="h-full"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.1 }}
            >
              <HighlightCard divText={10} pText={'Github Projects'} />
            </ScrollFadeIn>
            <ScrollFadeIn
              className="h-full"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.2 }}
            >
              <HighlightCard divText={6} pText={'Tools That I Know'} />
            </ScrollFadeIn>
            <ScrollFadeIn
              className="h-full"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.3 }}
            >
              <HighlightCard divText={3} pText={'Completed Project'} />
            </ScrollFadeIn>
            <ScrollFadeIn
              className="h-full"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.4 }}
            >
              <HighlightCard divText={5} pText={'Certificate'} />
            </ScrollFadeIn>
          </div>
          <hr className="border-t border-dashed border-[#1f1f1f]" />
        </ScrollFadeIn>

        {/* My Experience Section */}
        <div className="my-5 w-full sm:mt-8 md:mt-10">
          <ScrollFadeIn
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <div className="flex w-full flex-col justify-center gap-2 py-4">
              <div className="flex items-center gap-2">
                {' '}
                <BriefcaseBusiness />{' '}
                <h2 className="text-[24px] font-bold sm:text-[26px]">
                  My Experience
                </h2>{' '}
              </div>
              <p className="text-gray text-muted-foreground w-full text-[15px] font-medium md:text-[18px]">
                Navigating diverse environments with adaptability and expertise
                for holistic solutions.
              </p>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn
            variants={{
              hidden: { opacity: 0, scaleX: 0 },
              visible: { opacity: 1, scaleX: 1 },
            }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <hr className="-mt-2 mb-4 border-t border-dashed border-[#1f1f1f]" />
          </ScrollFadeIn>

          <div className="h-full w-full">
            <ScrollFadeIn
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              <ExperienceCard
                Icon={<Laptop className="h-[30px] w-[30px]" />}
                company="Tech-Rover"
                role="Internship"
                period="2024  (1 Month Unpaid)"
                description="Participated in a basic web design internship where I gained hands-on experience in creating user-friendly interfaces and enhancing website aesthetics."
                website="techrover.us"
                tag="IT Company"
              />
            </ScrollFadeIn>
          </div>
        </div>

        {/* My Stack Section */}
        <div className="my-5 w-full sm:mt-8 md:mt-10">
          <ScrollFadeIn
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <div className="flex w-full flex-col gap-2 pb-[30px]">
              <div className="flex items-center gap-2">
                {' '}
                <Layers />{' '}
                <h2 className="w-full text-[24px] font-bold md:text-[26px]">
                  My Stacks
                </h2>{' '}
              </div>
              <p className="text-gray w-full text-[15px] font-medium md:text-[18px]">
                Commitment to staying updated with the latest development
                technologies, tools, and best practices.
              </p>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn
            variants={{
              hidden: { opacity: 0, scaleX: 0 },
              visible: { opacity: 1, scaleX: 1 },
            }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <hr className="m border-t border-dashed border-[#1f1f1f]" />
          </ScrollFadeIn>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-2">
            <ScrollFadeIn
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.1 }}
            >
              <TechCard
                Logo={react}
                name="React"
                category="Frontend Library"
                className="w-full"
                onClick={() => {
                  window.open('https://react.dev/', '_blank');
                }}
              />
            </ScrollFadeIn>

            <ScrollFadeIn
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
            >
              <TechCard
                Logo={nodejs}
                name="Node"
                category="Backend Runtime"
                className="w-full"
                onClick={() => {
                  window.open('https://nodejs.org/en', '_blank');
                }}
              />
            </ScrollFadeIn>

            <ScrollFadeIn
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.3 }}
            >
              <TechCard
                Logo={express}
                name="Express"
                category="Backend Framework"
                className="w-full"
                onClick={() => {
                  window.open('https://expressjs.com/', '_blank');
                }}
              />
            </ScrollFadeIn>

            <ScrollFadeIn
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.4 }}
            >
              <TechCard
                Logo={mongodb}
                name="MongoDB"
                category="NoSQL Database"
                className="w-full"
                onClick={() => {
                  window.open('https://www.mongodb.com/', '_blank');
                }}
              />
            </ScrollFadeIn>

            <ScrollFadeIn
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}
            >
              <TechCard
                Logo={javascript}
                name="JavaScript"
                category="Programming Language"
                className="w-full"
                onClick={() => {
                  window.open('https://www.learn-js.org/', '_blank');
                }}
              />
            </ScrollFadeIn>

            <ScrollFadeIn
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.6 }}
            >
              <TechCard
                Logo={typescript}
                name="TypeScript"
                category="Programming Language"
                className="w-full"
                onClick={() => {
                  window.open('https://www.typescriptlang.org/', '_blank');
                }}
              />
            </ScrollFadeIn>
          </div>
        </div>

        {/* My Services Section */}
        <div className="my-5 w-full sm:mt-8 md:mt-10">
          <ScrollFadeIn
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <div className="h-[106px] w-full">
              <div className="flex h-[39px] items-center gap-2">
                {' '}
                <Code />{' '}
                <h2 className="w-[714px] text-[24px] font-bold md:text-[26px]">
                  My Services
                </h2>
              </div>
              <p className="text-gray mt-1 h-[27px] w-full text-[15px] font-medium md:text-[18px]">
                Crafting robust development strategies to meet project goals and
                exceed expectations.
              </p>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn
            variants={{
              hidden: { opacity: 0, scaleX: 0 },
              visible: { opacity: 1, scaleX: 1 },
            }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <hr className="mt-1 mb-4 border-t border-dashed border-[#1f1f1f]" />
          </ScrollFadeIn>

          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
            <ScrollFadeIn
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.1 }}
            >
              <MiniServiceCard
                Logo={<AppWindow />}
                serviceName="Full Stack Web Development"
                description="Build end-to-end scalable web applications using the MERN stack (MongoDB, Express.js, React, Node.js)."
              />
            </ScrollFadeIn>
            <ScrollFadeIn
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
            >
              <MiniServiceCard
                Logo={<TabletSmartphone />}
                serviceName="Frontend Development"
                description="Create responsive and dynamic user interfaces with React.js and modern UI libraries."
              />
            </ScrollFadeIn>
            <ScrollFadeIn
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.3 }}
            >
              <MiniServiceCard
                Logo={<Server />}
                serviceName="Backend Development"
                description="Develop secure, high-performance RESTful APIs and server-side logic using Node.js and Express."
              />
            </ScrollFadeIn>
            <ScrollFadeIn
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.4 }}
            >
              <MiniServiceCard
                Logo={<Boxes />}
                serviceName="SaaS Development"
                description="Architect and build scalable software-as-a-service solutions tailored to business needs."
              />
            </ScrollFadeIn>
          </div>
        </div>

        {/* Projects Section */}
        <div className="my-5 w-full sm:mt-8 md:mt-10">
          <ScrollFadeIn
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <div className="w-full">
              <div className="flex items-center gap-2">
                {' '}
                <FolderKanban />{' '}
                <h2 className="text-[24px] font-bold md:text-[26px]">
                  Project Showcase
                </h2>{' '}
              </div>
              <p className="text-gray mt-1 w-full text-[15px] font-medium md:text-[18px]">
                Building performant, scalable, and user-friendly applications
                that captivate and engage users.
              </p>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn
            variants={{
              hidden: { opacity: 0, scaleX: 0 },
              visible: { opacity: 1, scaleX: 1 },
            }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <hr className="my-5 border-t border-dashed border-[#1f1f1f]" />
          </ScrollFadeIn>

          <div className="mb-3 flex w-full flex-col items-center gap-3 md:gap-2">
            <ScrollFadeIn
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.1 }}
            >
              <ProjectCard
                title="Portfolio"
                imageUrl={Portfolio}
                websiteName="Visit Portfolio"
                websiteUrl="https://sharad77-portfolio.vercel.app/"
                type="Personal"
                pages={5}
                theme="Dark Mode"
                description="A sleek personal site showcasing my work and skills."
              />
            </ScrollFadeIn>
            <ScrollFadeIn
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.2 }}
            >
              <ProjectCard
                title="Ed-Tech Platforms"
                imageUrl={SkillBridge}
                websiteName="Visit SkillBridge"
                websiteUrl="https://github.com/sharad-77/Skill-Bridge-Web"
                type="Ed-Tech Platform"
                pages={10}
                theme="Light Mode"
                description="A collaborative platform for skill-sharing and learning."
              />
            </ScrollFadeIn>
          </div>
          <ScrollFadeIn
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.3 }}
          >
            <Button
              text="View All Projects"
              className="w-full p-[13px] text-[15px]"
              icon={<ArrowUpRight size={17} />}
              onClick={() => {
                void navigate('/service');
              }}
            />
          </ScrollFadeIn>
        </div>
      </div>
    </>
  );
}

export default HomePage;
