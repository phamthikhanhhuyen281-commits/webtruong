
import React, { useState } from 'react';
import { MenuSection } from '../types';
import { NAV_ITEMS, SCHOOL_INFO } from '../constants';

interface NavbarProps {
  activeSection: MenuSection;
  onNavigate: (section: MenuSection) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isIntroOpen, setIsIntroOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 blue-glass border-b border-blue-100 shadow-sm px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20">
        {/* Logo & School Name */}
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => onNavigate(MenuSection.HOME)}
        >
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-blue-200 shadow-lg group-hover:scale-105 transition-transform">
            CT
          </div>
          <div className="hidden sm:block">
            <h1 className="text-blue-900 font-bold text-sm md:text-lg leading-tight">THPT CAO THẮNG</h1>
            <p className="text-blue-500 text-[10px] md:text-xs font-medium uppercase tracking-widest">Hương Sơn, Hà Tĩnh</p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-2 md:space-x-8">
          {/* Home Icon Item */}
          <button 
            onClick={() => onNavigate(MenuSection.HOME)}
            className={`nav-item flex items-center px-4 py-2 rounded-full transition-all ${
              activeSection === MenuSection.HOME 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'text-blue-700 hover:bg-blue-50'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="nav-hover-text font-medium text-sm">Trang chủ</span>
          </button>

          {/* Introduction with Sub-items */}
          <div 
            className="relative"
            onMouseEnter={() => setIsIntroOpen(true)}
            onMouseLeave={() => setIsIntroOpen(false)}
          >
            <button 
              className={`flex items-center px-4 py-2 rounded-full font-medium text-sm transition-all ${
                [MenuSection.HISTORY, MenuSection.VISION, MenuSection.ORGANIZATION, MenuSection.ACHIEVEMENTS].includes(activeSection)
                  ? 'bg-blue-600 text-white'
                  : 'text-blue-700 hover:bg-blue-50'
              }`}
            >
              Giới thiệu
              <svg xmlns="http://www.w3.org/2000/svg" className={`ml-1 h-4 w-4 transition-transform ${isIntroOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isIntroOpen && (
              <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-blue-50 py-2 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                {NAV_ITEMS.find(i => i.label === 'Giới thiệu')?.children?.map((child) => (
                  <button
                    key={child.id}
                    onClick={() => {
                      onNavigate(child.id);
                      setIsIntroOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 text-sm transition-colors hover:bg-blue-50 ${
                      activeSection === child.id ? 'text-blue-600 font-semibold bg-blue-50' : 'text-slate-600'
                    }`}
                  >
                    {child.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button 
            onClick={() => onNavigate(MenuSection.NEWS)}
            className={`hidden md:block px-4 py-2 rounded-full font-medium text-sm transition-all ${
              activeSection === MenuSection.NEWS ? 'bg-blue-600 text-white' : 'text-blue-700 hover:bg-blue-50'
            }`}
          >
            Tin tức
          </button>

          <button 
            onClick={() => onNavigate(MenuSection.CONTACT)}
            className={`px-4 py-2 rounded-full font-medium text-sm transition-all ${
              activeSection === MenuSection.CONTACT ? 'bg-blue-600 text-white' : 'text-blue-700 hover:bg-blue-50'
            }`}
          >
            Liên hệ
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
