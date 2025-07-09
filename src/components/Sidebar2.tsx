import { Github, Twitter, Linkedin } from 'lucide-react';
function Sidebar2() {
  return (
    <div className="h-[882px] w-[90px] text-center mr-auto flex flex-col justify-center items-center ">
      <div className="h-[184px] w-[48px] flex flex-col justify-center items-center ml-6 space-y-5">
        <button className="w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-200 cursor-pointer text-[#999999] hover:text-white border border-[rgb(32,32,33)] bg-[rgba(9,9,10)] hover:bg-[#121212] hover:shadow-md">
          <Github className="w-[24px] h-[24px]" />
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-200 cursor-pointer text-[#999999] hover:text-white border border-[rgb(32,32,33)] bg-[rgba(9,9,10)] hover:bg-[#121212] hover:shadow-md">
          <Twitter className="w-[24px] h-[24px]" />
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-200 cursor-pointer text-[#999999] hover:text-white border border-[rgb(32,32,33)] bg-[rgba(9,9,10)] hover:bg-[#121212] hover:shadow-md">
          <Linkedin className="w-[24px] h-[24px]" />
        </button>
      </div>
    </div>
  );
}

export default Sidebar2;
