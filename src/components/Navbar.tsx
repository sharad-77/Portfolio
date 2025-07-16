import { useState, useEffect } from 'react';
import { Mail, User, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [time, setTime] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const preferTime = now.toLocaleTimeString('en-IN', { hour12: false });

      setTime(preferTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handlePageChange = (page: string) => {
    navigate(page);
  };

  return (
    <div className="flex h-[93px] w-full items-center justify-center sm:border-b sm:border-[rgb(32,32,33)]">
      <div className="hidden md:flex md:h-full md:w-full md:items-center md:justify-center">
        <div className="felx-row flex h-[45px] w-full justify-between px-5">
          <div className="">
            <div className="flex h-[45px] w-[189px] flex-row items-center justify-center rounded-[46px] border border-[rgb(32,32,33)] bg-[#141415] text-[#cccccc]">
              <span className="relative ml-4 flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              <p className="mr-2 flex w-full items-center justify-center text-[14px] font-medium">
                Available For Work
              </p>
            </div>
          </div>

          <div className="flex h-[44px] w-[260px] flex-row items-center justify-center gap-2">
            <p className="h-[23px] w-[125px] text-center text-[15px] font-medium text-[#999999]">
              Local Time ( IST )
            </p>
            <div className="flex h-[42px] w-[110px] items-center justify-center rounded-[12px] border border-[rgb(32,32,33)] bg-[#0f0f0f] text-[16px] font-semibold text-[#D9D9D9]">
              {time}
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-[90px] w-[468px] flex-row items-center justify-center sm:h-[100px] sm:w-[660px] md:hidden">
        <div className="flex h-[50px] w-full flex-row justify-center sm:justify-between">
          <div className="hidden h-[45px] w-[183px] flex-col items-center justify-center sm:flex">
            <div className="flex h-[45px] w-[189px] flex-row items-center justify-center rounded-[46px] border border-[rgb(32,32,33)] bg-[#141415] text-[#cccccc]">
              <span className="relative ml-4 flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              <p className="mr-2 flex w-full items-center justify-center text-[14px] font-medium">
                Available For Work
              </p>
            </div>
          </div>

          <div className="flex h-[50px] w-[468px] flex-row items-center justify-center gap-1 sm:w-[372px] sm:gap-2.5">
            <div
              className={`ibm-plex-mono flex h-[50px] w-[152px] cursor-pointer flex-row items-center justify-center rounded-[10px] border border-[rgb(32,32,33)] px-[20px] py-[14px] text-[14px] font-medium hover:bg-[rgb(18,18,18)] hover:text-[#FFFFFF] sm:w-full ${location.pathname === '/' ? 'bg-[#121212] text-[#FFFFFF]' : 'bg-[#0A0A0B] text-[#999999]'}`}
              onClick={() => handlePageChange('/')}
            >
              <p className="flex flex-row gap-1 text-[14px]">
                {' '}
                <span>
                  <User size="20" />
                </span>
                HOME
              </p>
            </div>

            <div
              className={`ibm-plex-mono flex h-[50px] w-[152px] cursor-pointer flex-row items-center justify-center rounded-[10px] border border-[rgb(32,32,33)] px-[20px] py-[14px] text-[14px] font-medium hover:bg-[rgb(18,18,18)] hover:text-[#FFFFFF] sm:w-full ${location.pathname === '/service' ? 'bg-[#121212] text-[#FFFFFF]' : 'bg-[#0A0A0B] text-[#999999]'}`}
              onClick={() => handlePageChange('/service')}
            >
              <p className="flex flex-row gap-1 text-[14px]">
                {' '}
                <span>
                  <Zap size="20" />
                </span>
                SERVICES
              </p>
            </div>

            <div
              className={`ibm-plex-mono flex h-[50px] w-[152px] cursor-pointer flex-row items-center justify-center rounded-[10px] border border-[rgb(32,32,33)] px-[20px] py-[14px] text-[14px] font-medium hover:bg-[rgb(18,18,18)] hover:text-[#FFFFFF] sm:w-full ${location.pathname === '/contact' ? 'bg-[#121212] text-[#FFFFFF]' : 'bg-[#0A0A0B] text-[#999999]'}`}
              onClick={() => handlePageChange('/contact')}
            >
              <p className="flex flex-row gap-1 text-[14px]">
                <span>
                  <Mail size="20" />
                </span>
                CONTACT
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
