import { useState, useEffect } from "react";

function Navbar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const preferTime = now.toLocaleTimeString("en-IN", { hour12: false });

      setTime(preferTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[93px] w-full flex items-center justify-center border-b border-[rgb(32,32,33)]">
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
  );
}

export default Navbar;
