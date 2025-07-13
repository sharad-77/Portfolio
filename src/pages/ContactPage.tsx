import { CalendarIcon, Mail } from 'lucide-react';
import Button from '@/components/ui/Button';
import { TechCard } from '@/components/ui/Cards';
import { Instagram, x, linkdin, github } from '@/assets/index';
import ScrollFadeIn from '@/components/ui/ScrollFadeIn';
function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center w-[750px] h-[520px]">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <ScrollFadeIn className="text-[26px] font-bold flex items-center gap-2">
            <Mail className="w-5 h-5" /> I Love to hear from you.
          </ScrollFadeIn>
          <ScrollFadeIn className="text-[18px] font-medium text-[#999999]">
            Connect with Me Today. Let’s Create Something Amazing Together!
          </ScrollFadeIn>
          <ScrollFadeIn
            className="flex items-center gap-2 mt-1"
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <Button
              className="h-[48px] w-[135px] text-[15px] "
              children={<Mail className="w-3 h-3" />}
              text="EMAIL ME"
            />
            <Button
              className="h-[48px] w-[180px] text-[15px]"
              children={<CalendarIcon className="w-3 h-3" />}
              text="SCHEDULE CALL"
            />
          </ScrollFadeIn>
        </div>

        <p>
          <hr className="border-t border-dashed border-[#1f1f1f] " />
        </p>

        <div className="flex flex-row gap-2 justify-between items-center">
          <ScrollFadeIn className="w-[450px] h-[340px] grid gap-2">
            <div className="flex flex-row gap-2 ">
              <input
                type="text"
                className="border border-[rgb(21,21,22)] bg-[#0F0F10] rounded-md p-2 h-[55px] w-[220px] text-[16px] font-medium"
                placeholder="Name"
              />
              <input
                type="text"
                className="border border-[rgb(21,21,22)] bg-[#0F0F10] rounded-md p-2 h-[55px] w-[220px] text-[16px] font-medium"
                placeholder="Email"
              />
            </div>

            <div className="h-[207px] w-[450px]">
              <textarea
                className="border  border-[rgb(21,21,22)] bg-[#0F0F10] p-2 rounded-[8px] text-[#CCCCCC] h-full w-full text-[16px] font-medium"
                placeholder="Message"
              ></textarea>
            </div>

            <div className="w-[450px] h-[54px] flex justify-end">
              <Button
                className="text-[15px] h-full w-full "
                text="SEND Your MESSAGE"
              />
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn
            className="h-[340px] w-[280px] flex flex-col gap-2"
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <TechCard
              Logo={Instagram}
              category="229 Followers"
              name="Instagram"
              onClick={() => {
                window.open('https://www.instagram.com/sharad_77__/', '_blank');
              }}
              className="w-[280px] h-[78px]"
            />
            <TechCard
              Logo={x}
              category="5 Followers"
              name="Twitter"
              onClick={() => {
                window.open('https://x.com/Devxsharad77', '_blank');
              }}
              className="w-[280px] h-[78px]"
            />
            <TechCard
              Logo={linkdin}
              category="19 Connections"
              name="LinkedIn"
              onClick={() => {
                window.open(
                  'https://www.linkedin.com/in/chavda-sharad-46b7a02a8/',
                  '_blank'
                );
              }}
              className="w-[280px] h-[78px]"
            />
            <TechCard
              Logo={github}
              category="2 Followers"
              name="GitHub"
              onClick={() => {
                window.open('https://github.com/sharad-77', '_blank');
              }}
              className="w-[280px] h-[78px]"
            />
          </ScrollFadeIn>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
