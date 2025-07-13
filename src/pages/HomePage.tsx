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
    className="h-full w-full object-contain filter "
  />,
  <img
    src={typescript}
    alt="TypeScript"
    className="h-full w-full object-contain filter "
  />,
  <img
    src={zustand}
    alt="Zustand"
    className="h-full w-full object-contain filter "
  />,
  <img
    src={react}
    alt="React"
    className="h-full w-full object-contain filter "
  />,
  <img
    src={nodejs}
    alt="Node.js"
    className="h-full w-full object-contain filter "
  />,
  <img
    src={express}
    alt="Express"
    className="h-full w-full object-contain filter "
  />,
  <img
    src={mongodb}
    alt="MongoDB"
    className="h-full w-full object-contain filter "
  />,
  <img src={git} alt="Git" className="h-full w-full object-contain filter " />,
  <img
    src={github}
    alt="GitHub"
    className="h-full w-full object-contain filter "
  />,
  <img
    src={eslint}
    alt="ESLint"
    className="h-full w-full object-contain filter "
  />,
  <img
    src={prettier}
    alt="Prettier"
    className="h-full w-full object-contain filter "
  />,
  <img
    src={Motion}
    alt="motion"
    className="h-full w-full object-contain filter "
  />,
  <img
    src={reactquery}
    alt="reactquery"
    className="h-full w-full object-contain filter "
  />,
];

function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="sm:w-[750px] my-[80px] w-[660px] ">
      {/* hero section */}
      <div className="flex w-[660px] h-[460px] sm:h-[260px] sm:w-[750px] justify-center items-center md:gap-4 gap-2 mt-6">
        <div className="h-[260px] w-[260px]">
          <ProfileImage />
        </div>

        <div className="md:h-full md:w-[470px] w-[382px] h-[213px] flex flex-col justify-between items-center gap-2">
          <div className="">
            <ScrollFadeIn
              className="md:text-[20px] text-[18px] font-bold text-[#999999] h-[30px]"
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
              className="md:text-[34px] text-[28px] font-bold w-full h-[50px] "
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              Sharad P
            </ScrollFadeIn>

            <ScrollFadeIn
              className="md:text-[18px] text-[15px] font-medium h-[81px] w-full text-[#999999]"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              Full-stack developer from Gujarat, India, building intuitive web
              apps with clean design and strong performance. Passionate about
              backend architecture and real-world solutions.
            </ScrollFadeIn>
          </div>

          <ScrollFadeIn
            className="h-[48px] w-full flex justify-center gap-2 mt-2"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <Button
              className="md:w-[255px] w-[181px] h-full text-[15px] py-3 flex justify-center items-center font-medium"
              text="EMAIL ME"
              onClick={() =>
                (window.location.href = 'mailto:chavdasharad77@gmail.com')
              }
            >
              <Mail size={18} />
            </Button>
            <Button
              className="md:w-[255px] w-[181px] h-full text-[15px] py-3 flex justify-center items-center font-medium"
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
      <ScrollFadeIn>
        <LogoCarousel icons={logos} />
      </ScrollFadeIn>

      {/* Mini Skill Highlights Section */}
      <div className="">
        <p>
          <hr className="border-t border-dashed border-[#1f1f1f]" />
        </p>
        <div className="w-[750px] h-[120px] flex justify-center items-center gap-2">
          <ScrollFadeIn>
            <HighlightCard divText={10} pText={'Github Projects'} />
          </ScrollFadeIn>
          <ScrollFadeIn>
            <HighlightCard divText={6} pText={'Tools That I Know'} />
          </ScrollFadeIn>
          <ScrollFadeIn>
            <HighlightCard divText={3} pText={'Completed Project'} />
          </ScrollFadeIn>
          <ScrollFadeIn>
            <HighlightCard divText={5} pText={'Certificate'} />
          </ScrollFadeIn>
        </div>
        <p>
          <hr className="border-t border-dashed border-[#1f1f1f]" />
        </p>
      </div>

      {/* My Experience Section */}
      <div className="my-14">
        <ScrollFadeIn>
          <div className="h-[133px] w-full ">
            <div className="h-[39px] flex items-center gap-2">
              {' '}
              <BriefcaseBusiness />{' '}
              <h2 className="text-[26px] font-bold ">My Experience</h2>{' '}
            </div>
            <p className="h-[54px] w-full text-[18px] text-gray font-medium mt-2">
              Navigating diverse environments with adaptability and expertise
              for holistic solutions.
            </p>
          </div>
        </ScrollFadeIn>

        <p>
          <hr className="border-t border-dashed border-[#1f1f1f]" />
        </p>

        <div className="my-7 ">
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
      <div className="w-full h-[390px] my-16">
        <ScrollFadeIn>
          <div className="h-[106px] w-full pb-[30px]">
            <div className="h-[39px]  flex items-center gap-2 ">
              {' '}
              <Layers />{' '}
              <h2 className="text-[26px] font-bold w-[714px]">My Stack</h2>{' '}
            </div>
            <p className="h-[27px] w-full text-[18px] text-gray font-medium mt-1">
              Commitment to staying updated with the latest design trends and
              techniques.
            </p>
          </div>
        </ScrollFadeIn>

        <p>
          <hr className="border-t border-dashed border-[#1f1f1f] " />
        </p>

        <div className="h-[255px] w-full grid grid-cols-2 gap-1 items-center mt-5">
          <ScrollFadeIn>
            <TechCard
              Logo={react}
              name="React"
              category="Frontend Library"
              className="w-[370px] h-[78px]"
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
              className="w-[370px] h-[78px]"
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
              className="w-[370px] h-[78px]"
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
              className="w-[370px] h-[78px]"
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
              className="w-[370px] h-[78px]"
              onClick={() => {
                window.open('https://www.typescriptlang.org/', '_blank');
              }}
            />
          </ScrollFadeIn>
        </div>
      </div>

      {/* My Services Section */}
      <div className="my-16">
        <ScrollFadeIn>
          <div className="h-[106px] w-full ">
            <div className="h-[39px] flex items-center gap-2 ">
              {' '}
              <Code />{' '}
              <h2 className="text-[26px] font-bold w-[714px]">
                My Services
              </h2>{' '}
            </div>
            <p className="h-[27px] w-full text-[18px] text-gray font-medium mt-1">
              Formulating comprehensive strategies to meet your design goals and
              exceed expectations.
            </p>
          </div>
        </ScrollFadeIn>

        <p>
          <hr className="border-t border-dashed border-[#1f1f1f] my-5" />
        </p>

        <div className="grid grid-cols-2 gap-2 w-full">
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
      <div className="mt-16 ">
        <ScrollFadeIn>
          <div className="h-[106px] w-full">
            <div className="h-[39px] flex items-center gap-2">
              {' '}
              <FolderKanban />{' '}
              <h2 className="text-[26px] font-bold w-[714px]">Projects</h2>{' '}
            </div>
            <p className="h-[27px] w-full text-[18px] text-gray font-medium mt-1">
              Crafting visually stunning and user-friendly websites that
              captivate and engage users.
            </p>
          </div>
        </ScrollFadeIn>

        <p>
          <hr className="border-t border-dashed border-[#1f1f1f] my-5" />
        </p>

        <div className="flex flex-col gap-5 items-center mb-2">
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
            className="w-full text-[15px] p-[10px]"
            icon={<ArrowUpRight size={17} />}
            onClick={() => {
              void navigate('/service');
            }}
          />
        </ScrollFadeIn>
      </div>
    </div>
  );
}

export default HomePage;
