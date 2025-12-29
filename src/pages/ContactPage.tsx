import { CalendarIcon, Mail } from 'lucide-react';
import Button from '@/components/ui/Button';
import { TechCard } from '@/components/ui/Cards';
import { Instagram, x, linkdin, github } from '@/assets/index';
import ScrollFadeIn from '@/components/ui/ScrollFadeIn';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

function ContactPage() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      await emailjs.sendForm(serviceID, templateID, form.current, {
        publicKey: publicKey,
      });

      toast.success('Message Sent Successfully!');
      form.current.reset();
    } catch (error: any) {
      toast.error('Failed to send message.');
    }
  };

  return (
    <>
      <title>Connect with Sharad</title>

      <div className="flex w-full flex-col items-center justify-center px-3">
        <ScrollFadeIn
          className="flex w-full flex-col gap-4"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <div className="flex w-full flex-col gap-1">
            <ScrollFadeIn
              className="flex items-center gap-2 text-[24px] font-bold"
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <Mail className="h-5 w-5" /> I Love to hear from you.
            </ScrollFadeIn>

            <ScrollFadeIn
              className="text-[15px] font-medium text-[#999999]"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.1 }}
            >
              Connect with Me Today. Let's Create Something Amazing Together!
            </ScrollFadeIn>

            <ScrollFadeIn
              className="mt-1 flex w-full flex-col items-center gap-2 sm:w-[333px] sm:flex-row"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.2 }}
            >
              <Button
                className="h-full w-full px-[5px] py-[15px] text-[15px]"
                children={<Mail className="h-3 w-3" />}
                text="EMAIL ME"
              />

              <Button
                className="h-full w-full px-[7px] py-[15px] text-[15px]"
                children={<CalendarIcon className="h-3 w-3" />}
                text="SCHEDULE CALL"
              />
            </ScrollFadeIn>
          </div>

          <ScrollFadeIn
            variants={{
              hidden: { opacity: 0, scaleX: 0 },
              visible: { opacity: 1, scaleX: 1 },
            }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.3 }}
          >
            <p></p>
            <hr className="border-t border-dashed border-[#1f1f1f]" />
          </ScrollFadeIn>

          <div className="flex h-full w-full flex-col-reverse items-center justify-between gap-5 sm:flex-row sm:gap-2 md:flex-row">
            {/* Form Validation Code */}

            <ScrollFadeIn
              className="grid h-full w-full gap-2"
              variants={{
                hidden: { opacity: 0, x: -40 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.4 }}
            >
              <form
                ref={form}
                onSubmit={sendEmail}
                className="grid h-full w-full gap-2"
              >
                <div className="flex w-full flex-row gap-2">
                  <input
                    type="text"
                    name="user_name"
                    required
                    className="h-[55px] w-full rounded-md border border-[rgb(21,21,22)] bg-[#0F0F10] p-2 text-[16px] font-medium"
                    placeholder="Name"
                  />
                  <input
                    type="email"
                    name="user_email"
                    required
                    className="h-[55px] w-full rounded-md border border-[rgb(21,21,22)] bg-[#0F0F10] p-2 text-[16px] font-medium"
                    placeholder="Email"
                  />
                </div>

                <textarea
                  name="message"
                  required
                  className="h-[207px] w-full rounded-[8px] border border-[rgb(21,21,22)] bg-[#0F0F10] p-2 text-[16px] font-medium text-[#CCCCCC]"
                  placeholder="Message"
                />

                <Button
                  type="submit"
                  className="h-full w-full px-[7px] py-[10px] text-[15px]"
                  text="SEND Your MESSAGE"
                />
              </form>
            </ScrollFadeIn>

            {/* Social Midea Cards */}

            <ScrollFadeIn
              className="flex h-full w-full flex-col items-center justify-center gap-2 sm:w-[40%]"
              variants={{
                hidden: { opacity: 0, x: 40 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.4 }}
            >
              <ScrollFadeIn
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}
                className="h-full w-full"
              >
                <TechCard
                  Logo={Instagram}
                  category="223 Followers"
                  name="Instagram"
                  onClick={() => {
                    window.open(
                      'https://www.instagram.com/sharad_77__/',
                      '_blank'
                    );
                  }}
                  className="h-full w-full"
                />
              </ScrollFadeIn>

              <ScrollFadeIn
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.6 }}
                className="h-full w-full"
              >
                <TechCard
                  Logo={x}
                  category="9 Followers"
                  name="Twitter"
                  onClick={() => {
                    window.open('https://x.com/Devxsharad77', '_blank');
                  }}
                  className="h-full w-full"
                />
              </ScrollFadeIn>

              <ScrollFadeIn
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.7 }}
                className="h-full w-full"
              >
                <TechCard
                  Logo={linkdin}
                  category="57 Connections"
                  name="LinkedIn"
                  onClick={() => {
                    window.open(
                      'https://www.linkedin.com/in/chavda-sharad-46b7a02a8/',
                      '_blank'
                    );
                  }}
                  className="h-full w-full"
                />
              </ScrollFadeIn>

              <ScrollFadeIn
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.8 }}
                className="h-full w-full"
              >
                <TechCard
                  Logo={github}
                  category="6 Followers"
                  name="GitHub"
                  onClick={() => {
                    window.open('https://github.com/sharad-77', '_blank');
                  }}
                  className="h-full w-full"
                />
              </ScrollFadeIn>
            </ScrollFadeIn>
          </div>
        </ScrollFadeIn>
      </div>
    </>
  );
}

export default ContactPage;
