import { useNavigate } from 'react-router';
import FramerHand from './ui/FramerHand';

function Footer() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-[107px] flex justify-center items-center border-t border-[rgb(32,32,33)]">
      <div className="w-full h-full flex flex-col md:flex-row items-center justify-center">
        <div className="w-full gap-2 md:gap-6 md:w-[80%] flex flex-col md:flex-row items-center justify-between">
          <p className="text-[16px] md:text-[18px] text-[#999999] font-medium">
            © 2025, All Rights Reserved.
          </p>
          <p
            className="text-[16px] md:text-[18px] text-[#CCCCCC] font-medium cursor-pointer"
            onClick={() => {
              void navigate('/*');
            }}
          >
            404
          </p>
          <p
            className="text-[16px] md:text-[18px] text-[#CCCCCC] font-medium cursor-pointer"
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
