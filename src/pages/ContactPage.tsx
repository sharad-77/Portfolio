import { CalendarIcon, Mail } from 'lucide-react';
import Button from '@/components/ui/Button';
import { TechCard } from '@/components/ui/Cards';
import { Instagram, x, linkdin, github } from '@/assets/index';
import ScrollFadeIn from '@/components/ui/ScrollFadeIn';
function ContactPage() {
  return (
    <>
      <title>Connect with Sharad</title>
      <div className="flex h-[520px] w-[750px] flex-col items-center justify-center">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <ScrollFadeIn className="flex items-center gap-2 text-[26px] font-bold">
              <Mail className="h-5 w-5" /> I Love to hear from you.
            </ScrollFadeIn>
            <ScrollFadeIn className="text-[18px] font-medium text-[#999999]">
              Connect with Me Today. Let’s Create Something Amazing Together!
            </ScrollFadeIn>
            <ScrollFadeIn
              className="mt-1 flex items-center gap-2"
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              <Button
                className="h-[48px] w-[135px] text-[15px]"
                children={<Mail className="h-3 w-3" />}
                text="EMAIL ME"
              />
              <Button
                className="h-[48px] w-[180px] text-[15px]"
                children={<CalendarIcon className="h-3 w-3" />}
                text="SCHEDULE CALL"
              />
            </ScrollFadeIn>
          </div>

          <p>
            <hr className="border-t border-dashed border-[#1f1f1f]" />
          </p>

          <div className="flex flex-row items-center justify-between gap-2">
            <ScrollFadeIn className="grid h-[340px] w-[450px] gap-2">
              <div className="flex flex-row gap-2">
                <input
                  type="text"
                  className="h-[55px] w-[220px] rounded-md border border-[rgb(21,21,22)] bg-[#0F0F10] p-2 text-[16px] font-medium"
                  placeholder="Name"
                />
                <input
                  type="text"
                  className="h-[55px] w-[220px] rounded-md border border-[rgb(21,21,22)] bg-[#0F0F10] p-2 text-[16px] font-medium"
                  placeholder="Email"
                />
              </div>

              <div className="h-[207px] w-[450px]">
                <textarea
                  className="h-full w-full rounded-[8px] border border-[rgb(21,21,22)] bg-[#0F0F10] p-2 text-[16px] font-medium text-[#CCCCCC]"
                  placeholder="Message"
                ></textarea>
              </div>

              <div className="flex h-[54px] w-[450px] justify-end">
                <Button
                  className="h-full w-full text-[15px]"
                  text="SEND Your MESSAGE"
                />
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn
              className="flex h-[340px] w-[280px] flex-col gap-2"
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              <TechCard
                Logo={Instagram}
                category="229 Followers"
                name="Instagram"
                onClick={() => {
                  window.open(
                    'https://www.instagram.com/sharad_77__/',
                    '_blank'
                  );
                }}
                className="h-[78px] w-[280px]"
              />
              <TechCard
                Logo={x}
                category="5 Followers"
                name="Twitter"
                onClick={() => {
                  window.open('https://x.com/Devxsharad77', '_blank');
                }}
                className="h-[78px] w-[280px]"
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
                className="h-[78px] w-[280px]"
              />
              <TechCard
                Logo={github}
                category="2 Followers"
                name="GitHub"
                onClick={() => {
                  window.open('https://github.com/sharad-77', '_blank');
                }}
                className="h-[78px] w-[280px]"
              />
            </ScrollFadeIn>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
