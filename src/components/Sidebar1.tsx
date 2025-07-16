import Profile from '@/assets/SideBarProfile.jpeg';
import { ArrowUp, Mail, User, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Sidebar1() {
  const [activeItem, setActiveItem] = useState<string>('user');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path === '/service') {
      setActiveItem('zap');
    } else if (path === '/contact') {
      setActiveItem('mail');
    } else {
      setActiveItem('user');
    }
  }, [location]);

  const handleNavigation = (path: string, itemId: string) => {
    setActiveItem(itemId);
    void navigate(path);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    document.body.scrollIntoView({
      block: 'start',
      inline: 'nearest',
    });
  };

  return (
    <div className="ml-auto flex h-full w-[90px]">
      <div className="flex h-full w-full flex-col items-center justify-between pr-6 text-white">
        <div className="pt-4 pb-8">
          <div
            className="flex h-[60px] w-[60px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-[#202021]"
            onClick={() => handleNavigation('/', 'user')}
          >
            <img
              src={Profile}
              alt="Profile"
              className="h-[50px] w-[50px] rounded-full object-cover"
              style={{ borderRadius: '100px' }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.nextElementSibling?.classList.remove('hidden');
              }}
            />
          </div>
        </div>

        <div className="flex flex-col space-y-5">
          <button
            onClick={() => handleNavigation('/', 'user')}
            className={`flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-lg transition-all duration-200 ${
              activeItem === 'user'
                ? 'bg-[#121212] text-[#999999] shadow-lg'
                : 'text-[#999999] hover:bg-[#121212] hover:text-white hover:shadow-md'
            }`}
          >
            <User className="h-5 w-5" />
          </button>
          <button
            onClick={() => handleNavigation('/service', 'zap')}
            className={`flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-lg transition-all duration-200 ${
              activeItem === 'zap'
                ? 'bg-[#121212] text-[#999999] shadow-lg'
                : 'text-[#999999] hover:bg-[#121212] hover:text-white hover:shadow-md'
            }`}
          >
            <Zap className="h-5 w-5" />
          </button>
          <button
            onClick={() => handleNavigation('/contact', 'mail')}
            className={`flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-lg transition-all duration-200 ${
              activeItem === 'mail'
                ? 'bg-[#121212] text-[#999999] shadow-lg'
                : 'text-[#999999] hover:bg-[#121212] hover:text-white hover:shadow-md'
            }`}
          >
            <Mail className="h-5 w-5" />
          </button>
        </div>

        <div className="mb-8">
          <button
            onClick={scrollToTop}
            className="flex h-[48px] w-[48px] cursor-pointer items-center justify-center rounded-lg text-[#999999] transition-all duration-200 hover:bg-[#121212] hover:text-white hover:shadow-md"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar1;
