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
  const BenefitsArray = [
    'Responsive Design',
    'Cross-Browser Compatibility',
    'Performance Optimization',
    'Accessibility Standards',
    'SEO Best Practices',
    'User-Centric Design',
    'Scalable Architecture',
    'CI/CD Integration',
    'Agile Development Workflow',
    'Code Quality and Unit Testing',
    'Modular and Maintainable Code',
    'API Integration & Development',
    'Version Control (Git/GitHub)',
    'Cloud Deployment (Vercel, Netlify, AWS)',
    'Real-time Features (WebSockets, Firebase)',
    'Security Best Practices (Auth, HTTPS, CORS)',
    'Mobile-First Development',
    'Reusable Components & Design Systems',
    'Database Design & Optimization',
    'Team Collaboration & Communication Skills',
  ];

  return (
    <>
      <title>Services Offered By Sharad</title>
      <div className="h-full w-full px-3 sm:px-0">
        {/* Service Section */}
        <div className="w-full">
          <ScrollFadeIn className="w-full">
            <div className="w-full py-4">
              <ScrollFadeIn
                className="flex items-center gap-2"
                transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.1 }}
              >
                <Layers />
                <h2 className="text-[24px] font-bold">My Services</h2>
              </ScrollFadeIn>

              <ScrollFadeIn
                className="text-gray mt-2 w-full text-[15px] font-medium sm:text-[15px] md:text-[18px]"
                transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.2 }}
              >
                Commitment to delivering cutting-edge solutions by staying
                updated with the latest development trends and best practices.
              </ScrollFadeIn>
            </div>
          </ScrollFadeIn>

          <hr className="border-t border-dashed border-[#1f1f1f] pt-4" />

          <ScrollFadeIn className="grid h-full w-full grid-cols-1 gap-2 sm:grid-cols-2">
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
              buttonIcon={<CalendarIcon />}
              serviceIcon={<Palette />}
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
              buttonIcon={<CalendarIcon />}
              serviceIcon={<Database />}
            />

            <ServiceCard
              title="Full-Stack Development"
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
              buttonIcon={<CalendarIcon />}
              serviceIcon={<Layers />}
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
              buttonIcon={<CalendarIcon />}
              serviceIcon={<Cloud />}
            />
          </ScrollFadeIn>

          <ScrollFadeIn className="mt-5 flex h-[130px] w-full flex-col items-center justify-center gap-4">
            <p className="font-medium">Benefits in Services</p>
            <BenefitsCarousel benefits={BenefitsArray} />
          </ScrollFadeIn>
        </div>

        {/* My Stacks Section*/}
        <div className="mt-10 w-full md:mt-12">
          <ScrollFadeIn>
            <div className="w-full pb-6">
              <ScrollFadeIn
                className="flex h-[39px] items-center gap-2"
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <Layers />
                <h2 className="text-[24px] font-bold md:text-[28px]">
                  My Stack
                </h2>
              </ScrollFadeIn>
              <ScrollFadeIn
                className="text-gray text-muted-foreground mt-2 w-full text-[15px] font-medium md:text-[18px]"
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                Continuously exploring and adopting the latest tools,
                frameworks, and development trends to stay ahead in the tech
                stack.
              </ScrollFadeIn>
            </div>
          </ScrollFadeIn>

          <hr className="border-t border-dashed border-[#1f1f1f]" />

          <div className="mt-5 grid w-full grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-1.5">
            <ScrollFadeIn>
              <TechCard
                Logo={react}
                name="React"
                category="Frontend Library"
                onClick={() => {
                  window.open('https://react.dev/', '_blank');
                }}
                className="w-full px-2 py-3"
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
                className="w-full px-2 py-3"
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
                className="w-full px-2 py-3"
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
                className="w-full px-2 py-3"
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
                className="w-full px-2 py-3"
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
                className="w-full px-2 py-3"
              />
            </ScrollFadeIn>
          </div>
        </div>

        {/* My Projects */}
        <div className="mt-10 w-full md:mt-12">
          <ScrollFadeIn>
            <div className="h-[106px] w-full">
              <ScrollFadeIn
                className="flex h-[39px] items-center gap-2"
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <FolderKanban />
                <h2 className="text-[24px] font-bold md:text-[28px]">
                  Projects
                </h2>
              </ScrollFadeIn>
              <ScrollFadeIn
                className="text-gray mt-2 w-full text-[15px] font-medium md:text-[18px]"
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                Developing visually appealing and intuitive projects that
                deliver seamless user experiences and drive engagement.
              </ScrollFadeIn>
            </div>
          </ScrollFadeIn>

          <hr className="my-5 border-t border-dashed border-[#1f1f1f]" />

          <div className="flex flex-col items-center gap-3">
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
    </>
  );
}

export default ServicePage;
