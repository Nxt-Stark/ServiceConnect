import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Sidebar({ activeMenu, setActiveMenu }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: 'Dashboard', icon: <i className="bi bi-house-door text-lg"></i>, path: '/' },
    { name: 'Users', icon: <i className="bi bi-people text-lg"></i>, path: '/users' },
    { name: 'Service Providers', icon: <span className="material-symbols-rounded">engineering</span>, path: '/service-providers' },
    { name: 'Franchisee', icon: <i className="bi bi-building text-lg"></i>, path: '/franchisee' },
    { name: 'Finance', icon: <i className="bi bi-cash-coin text-lg"></i>, path: '/finance' },
    { name: 'Accounts', icon: <i className="bi bi-safe text-lg"></i>, path: '/accounts' },
    { name: 'Profile', icon: <i className="bi bi-person text-lg"></i>, path: '/profile' },
    { name: 'Chat', icon: <i className="bi bi-chat text-lg"></i>, path: '/chat' },
    { name: 'Settings', icon: <i className="bi bi-gear text-lg"></i>, path: '/settings' },
    { name: 'Service Management', icon: <i className="bi bi-briefcase text-lg"></i>, path: '/service-management' },
    { name: 'Ads Management', icon: <i className="bi bi-badge-ad text-lg"></i>, path: '/ads-management' },
    { name: 'Notifications', icon: <i className="bi bi-bell text-lg"></i>, path: '/notifications' },
  ];

  return (
    <>
      <button
        className={`lg:hidden fixed top-4 ${isOpen ? 'right-4' : 'left-4'} text-[#312E81] px-3 py-2 rounded-full z-50 transition-all duration-300`}
        onClick={toggleSidebar}
      >
        <i className={`bi ${isOpen ? 'bi-x-lg' : 'bi-list'} text-2xl`}></i>
      </button>

      <div
        className={`fixed flex flex-col top-0 left-0 h-screen w-64 md:w-72 lg:w-64 bg-[#4D12B9] text-white py-4 pr-0 pl-4 transition-transform duration-300 ease-in-out ${isOpen ? 'transform translate-x-0' : 'transform -translate-x-full'} lg:transform lg:translate-x-0 lg:block z-40`}
      >
        <div className="font-bold text-lg mb-6">
          <span className="bg-orange-500 px-2 py-0 rounded mr-2">S</span>SC
        </div>
        <nav className="flex-1 overflow-y-auto">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path} 
              className={`flex items-center gap-2 py-2 px-3 text-sm md:text-base cursor-pointer rounded-l-full ${activeMenu === item.name ? 'bg-[#ffffff] text-blue-900' : 'hover:bg-[#ffffff30]'}`}
              onClick={() => setActiveMenu(item.name)}
            >
              <span>{item.icon}</span>
              <span className="md:block">{item.name}</span>
            </Link>
          ))}
        </nav>
        <div className='mt-4'>
          <div className="font-bold text-sm md:text-base">Service Connect</div>
          <div className="text-sm md:text-base mt-2">Let's Grow Together</div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}

export default Sidebar;
