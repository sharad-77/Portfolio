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
    <div className="flex justify-center items-center h-[93px] w-full border-b border-[rgb(32,32,33)]">
      <div className="hidden md:h-full md:w-full md:flex md:items-center md:justify-center">
        <div className="flex felx-row h-[45px] w-full px-5 justify-between">
          <div className="">
            <div className="flex flex-row items-center justify-center bg-[#141415] text-[#cccccc] h-[45px] w-[189px] rounded-[46px] border border-[rgb(32,32,33)]">
              <span className="relative flex h-2 w-2 ml-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <p className="w-full flex justify-center items-center text-[14px] font-medium mr-2 ">
                Available For Work
              </p>
            </div>
          </div>

          <div className="flex flex-row justify-center items-center w-[260px] h-[44px] gap-2">
            <p className="text-[#999999] w-[125px] h-[23px] text-[15px] text-center font-medium ">
              Local Time ( IST )
            </p>
            <div className="w-[110px] h-[42px] rounded-[12px] text-[16px] font-semibold text-[#D9D9D9] bg-[#0f0f0f] flex justify-center items-center border border-[rgb(32,32,33)]">
              {time}
            </div>
          </div>
        </div>
      </div>

      <div className="h-[100px] w-[660px] md:hidden flex flex-row items-center justify-center ">
        <div className="w-full h-[50px] flex flex-row sm:justify-between justify-center">
          <div className="hidden sm:flex flex-col items-center justify-center w-[183px] h-[45px] ">
            <div className="flex flex-row items-center justify-center bg-[#141415] text-[#cccccc] h-[45px] w-[189px] rounded-[46px] border border-[rgb(32,32,33)]">
              <span className="relative flex h-2 w-2 ml-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <p className="w-full flex justify-center items-center text-[14px] font-medium mr-2 ">
                Available For Work
              </p>
            </div>
          </div>

          <div className="flex flex-row items-center justify-center w-[372px] h-[50px] gap-2.5">
            <div
              className={`flex flex-row justify-center items-center w-full h-[50px] py-[14px] px-[20px] rounded-[10px] border border-[rgb(32,32,33)] text-[14px] font-medium ibm-plex-mono hover:bg-[rgb(18,18,18)] hover:text-[#FFFFFF] cursor-pointer ${location.pathname === '/' ? 'bg-[#0A0A0B] text-[#999999]' : 'bg-[#121212] text-[#FFFFFF]'}`}
              onClick={() => handlePageChange('/')}
            >
              <p className="text-[14px] flex-row flex gap-1">
                {' '}
                <span>
                  <User size="20" />
                </span>
                HOME
              </p>
            </div>

            <div
              className={`flex flex-row justify-center items-center w-full h-[50px] py-[14px] px-[20px] rounded-[10px] border border-[rgb(32,32,33)] text-[14px] font-medium ibm-plex-mono hover:bg-[rgb(18,18,18)] hover:text-[#FFFFFF] cursor-pointer ${location.pathname === '/service' ? 'bg-[#0A0A0B] text-[#999999]' : 'bg-[#121212] text-[#FFFFFF]'}`}
              onClick={() => handlePageChange('/service')}
            >
              <p className="text-[14px] flex-row flex gap-1 ">
                {' '}
                <span>
                  <Zap size="20" />
                </span>
                SERVICES
              </p>
            </div>

            <div
              className={`flex flex-row justify-center items-center w-full h-[50px] py-[14px] px-[20px] rounded-[10px] border border-[rgb(32,32,33)] text-[14px] font-medium ibm-plex-mono hover:bg-[rgb(18,18,18)] hover:text-[#FFFFFF] cursor-pointer ${location.pathname === '/contact' ? 'bg-[#0A0A0B] text-[#999999]' : 'bg-[#121212] text-[#FFFFFF]'}`}
            >
              <p
                className="text-[14px] flex flex-row gap-1"
                onClick={() => handlePageChange('/contact')}
              >
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
