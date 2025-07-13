import {
  express,
  javascript,
  mongodb,
  nodejs,
  react,
  typescript,
} from '@/assets/index';
import { ProjectCard, ServiceCard, TechCard } from '@/components/ui/Cards';
import { BenefitsCarousel } from '@/components/ui/LogoCarousel';
import ScrollFadeIn from '@/components/ui/ScrollFadeIn';
import {
  CalendarIcon,
  Cloud,
  Database,
  FolderKanban,
  Layers,
  Palette,
} from 'lucide-react';

function ServicePage() {
  const Benefitesarray = [
    'Responsive Design',
    'Cross-Browser Compatibility',
    'Performance Optimization',
    'Accessibility Standards',
    'SEO Best Practices',
    'User-Centric Design',
    'Scalable Architecture',
    'Continuous Integration/Deployment (CI/CD)',
    'Agile Methodologies',
    'Code Quality and Testing',
  ];

  return (
    <div className="py-[80px]">
      {/* Service Section */}
      <div>
        <div>
          <div className="h-[70px] w-full ">
            <ScrollFadeIn
              className="h-[39px]  flex items-center gap-2 "
              transition={{ duration: 0.2, ease: 'easeInOut' }}
            >
              {' '}
              <Layers />{' '}
              <h2 className="text-[26px] font-bold w-[714px]">My Stack</h2>{' '}
            </ScrollFadeIn>
            <ScrollFadeIn
              className="h-[27px] w-full text-[18px] text-gray font-medium mt-1"
              // transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              Commitment to staying updated with the latest design trends and
              techniques.
            </ScrollFadeIn>
          </div>

          <p>
            <hr className="border-t border-dashed border-[#1f1f1f] my-5" />
          </p>

          <ScrollFadeIn className="w-full h-[778px] grid grid-cols-2 gap-2">
            <ServiceCard
              title="Frontend Development"
              price="5+"
              priceUnit="USD/hr"
              description="Crafting modern, interactive, and pixel-perfect user interfaces."
              completedWorks="5"
              completedWorksLabel="Projects Completed"
              experience="1"
              experienceLabel="Years of Experience"
              totalHours="2000+"
              totalHoursLabel="Total Working Hours"
              buttonText="Schedule Call"
              buttonIcon={<CalendarIcon />} // Replace with your icon component
              serviceIcon={<Palette />} // Replace with your icon component
            />

            <ServiceCard
              title="Backend Development"
              price="10+"
              priceUnit="USD/hr"
              description="Building secure APIs, efficient server-side logic, and robust databases."
              completedWorks="2+"
              completedWorksLabel="Projects Completed"
              experience="1"
              experienceLabel="Years of Experience"
              totalHours="500+"
              totalHoursLabel="Total Working Hours"
              buttonText="Schedule Meeting"
              buttonIcon={<CalendarIcon />} // Replace with your icon component
              serviceIcon={<Database />} // Replace with your icon component
            />

            <ServiceCard
              title="Full Stack Web Development"
              price="5+"
              priceUnit="USD/hr"
              description="Developing scalable web apps with seamless frontend and backend integration."
              completedWorks="2"
              completedWorksLabel="Projects Completed"
              experience="1"
              experienceLabel="Years of Experience"
              totalHours="1000+"
              totalHoursLabel="Total Working Hours"
              buttonText="Schedule Call"
              buttonIcon={<CalendarIcon />} // Replace with your icon component
              serviceIcon={<Layers />} // Replace with your icon component
            />

            <ServiceCard
              title="SaaS Development"
              price="10"
              priceUnit="USD/hr"
              description="Creating scalable SaaS platforms with analytics, subscriptions, and dashboards."
              completedWorks="2+"
              completedWorksLabel="Projects Completed"
              experience="1"
              experienceLabel="Years of Experience"
              totalHours="500+"
              totalHoursLabel="Total Working Hours"
              buttonText="Schedule Meeting"
              buttonIcon={<CalendarIcon />} // Replace with your icon component
              serviceIcon={<Cloud />} // Replace with your icon component
            />
          </ScrollFadeIn>
        </div>

        <ScrollFadeIn className="w-full h-[122px] flex flex-col items-center justify-center gap-2 mt-10">
          <p className="font-medium text-[18px] text-[#999999]">
            Benefits in Services
          </p>
          <BenefitsCarousel benefits={Benefitesarray} />
        </ScrollFadeIn>
      </div>

      {/* My Stacks Section*/}
      <div className="w-full h-[390px] my-8">
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
              onClick={() => {
                window.open('https://react.dev/', '_blank');
              }}
              className="w-[370px] h-[78px]"
            />
          </ScrollFadeIn>

          <ScrollFadeIn>
            <TechCard
              Logo={nodejs}
              name="Node"
              category="Backend Runtime"
              onClick={() => {
                window.open('https://nodejs.org/en', '_blank');
              }}
              className="w-[370px] h-[78px]"
            />
          </ScrollFadeIn>

          <ScrollFadeIn>
            <TechCard
              Logo={express}
              name="Express"
              category="Backend Framework"
              onClick={() => {
                window.open('https://expressjs.com/', '_blank');
              }}
              className="w-[370px] h-[78px]"
            />
          </ScrollFadeIn>

          <ScrollFadeIn>
            <TechCard
              Logo={mongodb}
              name="MongoDB"
              category="NoSQL Database"
              onClick={() => {
                window.open('https://www.mongodb.com/', '_blank');
              }}
              className="w-[370px] h-[78px]"
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
              className="w-[370px] h-[78px]"
            />
          </ScrollFadeIn>

          <ScrollFadeIn>
            <TechCard
              Logo={typescript}
              name="TypeScript"
              category="Programming Language"
              onClick={() => {
                window.open('https://www.typescriptlang.org/', '_blank');
              }}
              className="w-[370px] h-[78px]"
            />
          </ScrollFadeIn>
        </div>
      </div>

      {/* My Projects */}
      <div className="mt-8">
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

        <div className="flex flex-col gap-5 items-center ">
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
      </div>
    </div>
  );
}

export default ServicePage;
