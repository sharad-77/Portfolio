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
      <div className="mt-[30px] flex h-full w-[468px] flex-col items-center justify-center pb-[80px] sm:w-[660px] md:my-[80px] md:w-[750px]">
        {/* hero section */}
        <div className="max:w-[468px] sm:max:w-[660px] flex h-[310px] w-full flex-col items-center justify-center gap-2 sm:h-full sm:flex-row sm:items-center sm:justify-center md:h-[260px] md:w-[750px] md:gap-4">
          <div className="flex flex-row items-center gap-1">
            <div className="h-[140px] w-[140px] sm:h-[230px] sm:w-[230px]">
              <ProfileImage />
            </div>

            <div className="flex h-[144px] w-[70%] flex-col items-center gap-2 sm:h-full sm:w-[392px] md:h-full md:w-[470px] md:justify-between">
              <div className="px-1 sm:h-full md:px-0">
                <ScrollFadeIn
                  className="h-[28px] w-full text-[18px] font-bold text-[#999999] sm:h-[30px] md:text-[20px]"
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
                  className="h-[42px] w-full text-[28px] font-bold sm:h-[50px] md:text-[34px]"
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
                    className="h-[68px] w-full text-[12px] font-medium text-[#999999] sm:h-[81px] sm:text-[13px] md:mb-2 md:text-[15px]"
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

              <div className="hidden items-center justify-center bg-gray-500 sm:flex sm:h-[48px] sm:w-[381px] md:w-[470px]">
                <ScrollFadeIn
                  className="mt-0 flex h-full w-full justify-center pb-1 sm:mt-2 sm:gap-1 md:mt-4 md:mb-3 md:gap-2"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                >
                  <Button
                    className="flex h-full w-[181px] items-center justify-center py-1 text-[13px] font-medium md:w-[255px] md:py-3 md:text-[15px]"
                    text="EMAIL ME"
                    onClick={() =>
                      (window.location.href = 'mailto:chavdasharad77@gmail.com')
                    }
                  >
                    <Mail size={18} />
                  </Button>
                  <Button
                    className="flex h-full w-[181px] items-center justify-center py-1 text-[13px] font-medium md:w-[255px] md:py-3 md:text-[15px]"
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

          <div className="flex h-[50px] w-[100%] items-center justify-center sm:hidden">
            <ScrollFadeIn
              className="mt-0 flex h-full w-full flex-row items-baseline justify-center gap-1 pb-1 sm:mt-2 md:mt-4 md:gap-2"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              <Button
                className="flex h-full w-full items-center justify-center py-1 text-[13px] font-medium sm:w-[181px] md:w-[255px] md:py-3 md:text-[15px]"
                text="EMAIL ME"
                onClick={() =>
                  (window.location.href = 'mailto:chavdasharad77@gmail.com')
                }
              >
                <Mail size={18} />
              </Button>
              <Button
                className="flex h-full w-full items-center justify-center py-1 text-[13px] font-medium sm:w-[181px] md:w-[255px] md:py-3 md:text-[15px]"
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

        {/* Carousel */}
        <ScrollFadeIn className="my-2 h-[60px] w-[468px] sm:my-4 sm:w-[660px] md:h-[64px] md:w-[750px]">
          <LogoCarousel
            icons={logos}
            className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7"
          />
        </ScrollFadeIn>

        {/* Mini Skill Highlights Section */}
        <div>
          <p>
            <hr className="border-t border-dashed border-[#1f1f1f]" />
          </p>
          <div className="grid h-[198px] w-[468px] grid-cols-2 justify-items-center gap-0 py-[20px] sm:h-[110px] sm:w-[660px] sm:grid-cols-4 sm:gap-2 md:h-[120px] md:w-[750px]">
            <ScrollFadeIn className="h-[69px]">
              <HighlightCard divText={10} pText={'Github Projects'} />
            </ScrollFadeIn>
            <ScrollFadeIn className="h-[69px]">
              <HighlightCard divText={6} pText={'Tools That I Know'} />
            </ScrollFadeIn>
            <ScrollFadeIn className="h-[69px]">
              <HighlightCard divText={3} pText={'Completed Project'} />
            </ScrollFadeIn>
            <ScrollFadeIn className="h-[69px]">
              <HighlightCard divText={5} pText={'Certificate'} />
            </ScrollFadeIn>
          </div>
          <p>
            <hr className="border-t border-dashed border-[#1f1f1f]" />
          </p>
        </div>

        {/* My Experience Section */}
        <div className="my-10 h-full w-[468px] sm:w-[660px] md:my-14 md:w-full">
          <ScrollFadeIn>
            <div className="flex h-[121px] w-full flex-col justify-center gap-2 sm:h-[133px]">
              <div className="flex h-[36px] items-center gap-2 sm:h-[39px]">
                {' '}
                <BriefcaseBusiness />{' '}
                <h2 className="text-[24px] font-bold sm:text-[26px]">
                  My Experience
                </h2>{' '}
              </div>
              <p className="text-gray h-[45px] w-full text-[15px] font-medium sm:h-[54px] md:text-[18px]">
                Navigating diverse environments with adaptability and expertise
                for holistic solutions.
              </p>
            </div>
          </ScrollFadeIn>

          <p>
            <hr className="-mt-4 mb-4 border-t border-dashed border-[#1f1f1f]" />
          </p>

          <div className="">
            <ScrollFadeIn>
              <ExperienceCard
                Icon={<Laptop className="h-[30px] w-[30px]" />}
                company="Tech-Rover"
                role="Internship"
                period="2024(1 Month Unpaid)"
                description="Participated in a basic web design internship where I gained hands-on experience in creating user-friendly interfaces and enhancing website aesthetics."
                website="techrover.us"
                tag="IT Company"
              />
            </ScrollFadeIn>
          </div>
        </div>

        {/* My Stack Section */}
        <div className="my-6 h-[370px] w-[660px] md:my-16 md:h-[390px] md:w-[750px]">
          <ScrollFadeIn>
            <div className="h-[99px] w-full pb-[30px] md:h-[106px]">
              <div className="flex h-[39px] items-center gap-2">
                {' '}
                <Layers />{' '}
                <h2 className="w-[624px] text-[24px] font-bold md:w-[714px] md:text-[26px]">
                  My Stacks
                </h2>{' '}
              </div>
              <p className="text-gray mt-1 h-[23px] w-full text-[15px] font-medium md:h-[27px] md:text-[18px]">
                Commitment to staying updated with the latest development
                technologies, tools, and best practices.
              </p>
            </div>
          </ScrollFadeIn>

          <p>
            <hr className="-mt-2 mb-4 border-t border-dashed border-[#1f1f1f]" />
          </p>

          <div className="mt-5 grid h-[242px] grid-cols-2 items-center gap-1 md:h-[255px]">
            <ScrollFadeIn>
              <TechCard
                Logo={react}
                name="React"
                category="Frontend Library"
                className="h-[74px] w-[325px] md:h-[78px] md:w-[370px]"
                onClick={() => {
                  window.open('https://react.dev/', '_blank');
                }}
              />
            </ScrollFadeIn>

            <ScrollFadeIn>
              <TechCard
                Logo={nodejs}
                name="Node"
                category="Backend Runtime"
                className="h-[74px] w-[325px] md:h-[78px] md:w-[370px]"
                onClick={() => {
                  window.open('https://nodejs.org/en', '_blank');
                }}
              />
            </ScrollFadeIn>

            <ScrollFadeIn>
              <TechCard
                Logo={express}
                name="Express"
                category="Backend Framework"
                className="h-[74px] w-[325px] md:h-[78px] md:w-[370px]"
                onClick={() => {
                  window.open('https://expressjs.com/', '_blank');
                }}
              />
            </ScrollFadeIn>

            <ScrollFadeIn>
              <TechCard
                Logo={mongodb}
                name="MongoDB"
                category="NoSQL Database"
                className="h-[74px] w-[325px] md:h-[78px] md:w-[370px]"
                onClick={() => {
                  window.open('https://www.mongodb.com/', '_blank');
                }}
              />
            </ScrollFadeIn>

            <ScrollFadeIn>
              <TechCard
                Logo={javascript}
                name="JavaScript"
                category="Programming Language"
                className="h-[74px] w-[325px] md:h-[78px] md:w-[370px]"
                onClick={() => {
                  window.open('https://www.learn-js.org/', '_blank');
                }}
              />
            </ScrollFadeIn>

            <ScrollFadeIn>
              <TechCard
                Logo={typescript}
                name="TypeScript"
                category="Programming Language"
                className="h-[74px] w-[325px] md:h-[78px] md:w-[370px]"
                onClick={() => {
                  window.open('https://www.typescriptlang.org/', '_blank');
                }}
              />
            </ScrollFadeIn>
          </div>
        </div>

        {/* My Services Section */}
        <div className="my-6 w-[660px] md:my-16 md:w-[750px]">
          <ScrollFadeIn>
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

          <p>
            <hr className="mt-1 mb-4 border-t border-dashed border-[#1f1f1f]" />
          </p>

          <div className="grid w-full grid-cols-2 gap-2">
            <ScrollFadeIn>
              <MiniServiceCard
                Logo={<AppWindow />}
                serviceName="Full Stack Web Development"
                description="Build end-to-end scalable web applications using the MERN stack (MongoDB, Express.js, React, Node.js)."
              />
            </ScrollFadeIn>
            <ScrollFadeIn>
              <MiniServiceCard
                Logo={<TabletSmartphone />}
                serviceName="Frontend Development"
                description="Create responsive and dynamic user interfaces with React.js and modern UI libraries."
              />
            </ScrollFadeIn>
            <ScrollFadeIn>
              <MiniServiceCard
                Logo={<Server />}
                serviceName="Backend Development"
                description="Develop secure, high-performance RESTful APIs and server-side logic using Node.js and Express."
              />
            </ScrollFadeIn>
            <ScrollFadeIn>
              <MiniServiceCard
                Logo={<Boxes />}
                serviceName="SaaS Development"
                description="Architect and build scalable software-as-a-service solutions tailored to business needs."
              />
            </ScrollFadeIn>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mt-6 w-[660px] pb-[40px] md:mt-16 md:w-[750px]">
          <ScrollFadeIn>
            <div className="h-[90px] w-full md:h-[106px]">
              <div className="flex h-[39px] items-center gap-2">
                {' '}
                <FolderKanban />{' '}
                <h2 className="w-[714px] text-[24px] font-bold md:text-[26px]">
                  Project Showcase
                </h2>{' '}
              </div>
              <p className="text-gray mt-1 h-[27px] w-full text-[15px] font-medium md:text-[18px]">
                Building performant, scalable, and user-friendly applications
                that captivate and engage users.
              </p>
            </div>
          </ScrollFadeIn>

          <p>
            <hr className="-mt-1 mb-4 border-t border-dashed border-[#1f1f1f]" />
          </p>

          <div className="mb-2 flex w-full flex-col items-center gap-5">
            <ScrollFadeIn>
              <ProjectCard
                title="Portfolio"
                imageUrl="https://framerusercontent.com/images/34CNONDmkqhYuIXHQCjxqCbWjDQ.png?scale-down-to=512"
                website="Portfolio"
                type="Personal"
                pages={1}
                theme="Dark Mode"
                description="Crafting visually stunning and user-friendly websites that captivate and engage users."
              />
            </ScrollFadeIn>
            <ScrollFadeIn>
              <ProjectCard
                title="Portfolio"
                imageUrl="https://framerusercontent.com/images/2BMySs6ve9g9IU6tbFt5J4r58o.jpg?scale-down-to=512"
                website="Portfolio"
                type="Personal"
                pages={1}
                theme="Dark Mode"
                description="Crafting visually stunning and user-friendly websites that captivate and engage users."
              />
            </ScrollFadeIn>
          </div>

          <ScrollFadeIn>
            <Button
              text="View All Projects"
              className="w-full p-[10px] text-[15px]"
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
