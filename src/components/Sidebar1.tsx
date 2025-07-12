import Profile from "@/assets/SideBarProfile.jpeg";
import { ArrowUp, Mail, User, Zap } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Sidebar1() {
  const [activeItem, setActiveItem] = useState<string>("user");
  const navigate = useNavigate();

  const handleNavigation = (path: string, itemId: string) => {
    setActiveItem(itemId);
    void navigate(path);
  };

  const scrollToTop = () => {
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="h-full w-[90px] flex ml-auto ">
      <div className="text-white h-full w-full flex flex-col justify-between items-center pr-6 ">
        <div className="pt-4 pb-8">
          <div
            className="w-[60px] h-[60px] bg-[#202021] rounded-full flex items-center justify-center overflow-hidden cursor-pointer "
            onClick={() => handleNavigation("/", "user")}
          >
            <img
              src={Profile}
              alt="Profile"
              className="w-[50px] h-[50px] object-cover rounded-full"
              style={{ borderRadius: "100px" }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                target.nextElementSibling?.classList.remove("hidden");
              }}
            />
          </div>
        </div>

        <div className="flex flex-col space-y-5">
          <button
            onClick={() => handleNavigation("/", "user")}
            className={`w-[52px] h-[52px] flex items-center justify-center rounded-lg transition-all duration-200 cursor-pointer ${
              activeItem === "user"
                ? "bg-[#121212] text-[#999999] shadow-lg"
                : "text-[#999999] hover:text-white hover:bg-[#121212] hover:shadow-md"
            }`}
          >
            <User className="w-5 h-5" />
          </button>
          <button
            onClick={() => handleNavigation("/service", "zap")}
            className={`w-[52px] h-[52px] flex items-center justify-center rounded-lg transition-all duration-200 cursor-pointer ${
              activeItem === "zap"
                ? "bg-[#121212] text-[#999999] shadow-lg"
                : "text-[#999999] hover:text-white hover:bg-[#121212] hover:shadow-md"
            }`}
          >
            <Zap className="w-5 h-5" />
          </button>
          <button
            onClick={() => handleNavigation("/contact", "mail")}
            className={`w-[52px] h-[52px] flex items-center justify-center rounded-lg transition-all duration-200 cursor-pointer ${
              activeItem === "mail"
                ? "bg-[#121212] text-[#999999] shadow-lg"
                : "text-[#999999] hover:text-white hover:bg-[#121212] hover:shadow-md"
            }`}
          >
            <Mail className="w-5 h-5" />
          </button>
        </div>

        <div className=" mb-8">
          <button
            onClick={scrollToTop}
            className="w-[48px] h-[48px] flex items-center justify-center text-[#999999] hover:text-white hover:bg-[#121212] rounded-lg transition-all duration-200 hover:shadow-md cursor-pointer"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar1;
