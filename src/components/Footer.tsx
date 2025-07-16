import { useNavigate } from 'react-router';
import FramerHand from './ui/FramerHand';

function Footer() {
  const navigate = useNavigate();

  return (
    <div className="flex h-[107px] w-full items-center justify-center border-t border-[rgb(32,32,33)]">
      <div className="flex h-full w-full flex-col items-center justify-center md:flex-row">
        <div className="my-10 flex w-full flex-col items-center justify-between gap-2 md:w-[80%] md:flex-row md:gap-6">
          <p className="text-[16px] font-medium text-[#999999] md:text-[18px]">
            © 2025, All Rights Reserved.
          </p>
          <p
            className="cursor-pointer text-[16px] font-medium text-[#CCCCCC] md:text-[18px]"
            onClick={() => {
              void navigate('/*');
            }}
          >
            404
          </p>
          <p
            className="cursor-pointer text-[16px] font-medium text-[#CCCCCC] md:text-[18px]"
            onClick={() => {
              window.open('https://x.com/Devxsharad77', '_blank');
            }}
          >
            Developed with{' '}
            <FramerHand
              emoji="❤️"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{
                repeat: Infinity,
                repeatDelay: 0,
                duration: 0.6,
                ease: 'easeInOut',
              }}
            />{' '}
            by Sharad P
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
