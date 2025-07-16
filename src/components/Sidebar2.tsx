import { Github, Twitter, Linkedin } from 'lucide-react';
function Sidebar2() {
  return (
    <div className="mr-auto flex h-full w-[90px] flex-col items-center justify-center text-center">
      <div className="ml-6 flex h-[184px] w-[48px] flex-col items-center justify-center space-y-5">
        <button className="flex h-[48px] w-[48px] cursor-pointer items-center justify-center rounded-lg border border-[rgb(32,32,33)] bg-[rgba(9,9,10)] p-[12px] text-[#999999] transition-all duration-200 hover:bg-[#121212] hover:text-white hover:shadow-md">
          <Github className="h-[24px] w-[24px]" />
        </button>
        <button className="flex h-[48px] w-[48px] cursor-pointer items-center justify-center rounded-lg border border-[rgb(32,32,33)] bg-[rgba(9,9,10)] p-[12px] text-[#999999] transition-all duration-200 hover:bg-[#121212] hover:text-white hover:shadow-md">
          <Twitter className="h-[24px] w-[24px]" />
        </button>
        <button className="flex h-[48px] w-[48px] cursor-pointer items-center justify-center rounded-lg border border-[rgb(32,32,33)] bg-[rgba(9,9,10)] p-[12px] text-[#999999] transition-all duration-200 hover:bg-[#121212] hover:text-white hover:shadow-md">
          <Linkedin className="h-[24px] w-[24px]" />
        </button>
      </div>
    </div>
  );
}

export default Sidebar2;
