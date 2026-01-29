
import React, { useState } from 'react';
import { MenuSection } from '../types';
import { NAV_ITEMS } from '../constants';

interface NavbarProps {
  activeSection: MenuSection;
  onNavigate: (section: MenuSection) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
  isStudentMode: boolean;
  toggleStudentMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  activeSection, 
  onNavigate, 
  darkMode, 
  toggleDarkMode,
  isStudentMode,
  toggleStudentMode
}) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const isActive = (item: any) => {
    if (activeSection === item.id) return true;
    return item.children?.some((child: any) => child.id === activeSection);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 blue-glass border-b border-white/50 dark:border-slate-800/50 shadow-sm px-6">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between h-20">
        {/* Brand */}
        <div 
          className="flex items-center gap-4 cursor-pointer group shrink-0"
          onClick={() => onNavigate(MenuSection.HOME)}
        >
          <div className={`relative w-10 h-10 rounded-2xl flex items-center justify-center text-white font-black shadow-lg transition-all duration-500 ${isStudentMode ? 'bg-pink-500 rotate-12' : 'bg-blue-600'}`}>
            CT
          </div>
          <div className="hidden xl:block">
            <h1 className="text-slate-900 dark:text-white font-black text-sm leading-none tracking-tight uppercase">THPT CAO THẮNG</h1>
            <p className={`text-[8px] font-black uppercase tracking-[0.2em] mt-0.5 ${isStudentMode ? 'text-pink-500' : 'text-blue-500'}`}>
              {isStudentMode ? 'Gia đình thân yêu' : 'Hương Sơn • Hà Tĩnh'}
            </p>
          </div>
        </div>

        {/* Dynamic Navigation */}
        <div className="hidden lg:flex items-center space-x-1">
          {NAV_ITEMS.map((item) => (
            <div 
              key={item.id} 
              className="relative group/nav"
              onMouseEnter={() => item.children && setOpenDropdown(item.id)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button 
                onClick={() => !item.children && onNavigate(item.id)}
                className={`flex items-center px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                  isActive(item)
                    ? (isStudentMode ? 'bg-pink-500 text-white' : 'bg-blue-600 text-white')
                    : 'text-slate-600 dark:text-slate-400 hover:bg-blue-50 dark:hover:bg-slate-800'
                }`}
              >
                {item.label}
                {item.children && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-1.5 h-3 w-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </button>

              {item.children && openDropdown === item.id && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl shadow-2xl p-2 animate-in fade-in zoom-in-95 duration-200">
                  {item.children.map((child) => (
                    <button
                      key={child.id}
                      onClick={() => {
                        onNavigate(child.id);
                        setOpenDropdown(null);
                      }}
                      className={`w-full text-left px-5 py-3.5 text-[10px] font-bold uppercase tracking-wider transition-all rounded-xl mb-1 last:mb-0 ${
                        activeSection === child.id 
                          ? (isStudentMode ? 'bg-pink-50 dark:bg-pink-900/30 text-pink-600' : 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400') 
                          : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-blue-600'
                      }`}
                    >
                      {child.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3">
          {/* Student Mode Toggle */}
          <button 
            onClick={toggleStudentMode}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full border-2 transition-all font-black text-[9px] uppercase tracking-wider ${
              isStudentMode 
              ? 'bg-pink-500 border-pink-400 text-white' 
              : 'bg-white border-blue-100 text-blue-600 hover:bg-blue-50'
            }`}
          >
            <span className="text-sm">{isStudentMode ? '🎒' : '👔'}</span>
            <span className="hidden sm:inline">{isStudentMode ? 'Học sinh' : 'Chuẩn'}</span>
          </button>

          <button 
            onClick={toggleDarkMode}
            className="w-10 h-10 flex items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-amber-400 transition-colors"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          
          <button 
            onClick={() => onNavigate(MenuSection.CONTACT)}
            className={`hidden sm:block px-5 py-2.5 text-white text-[10px] font-black uppercase tracking-widest rounded-2xl shadow-lg transition-all ${isStudentMode ? 'bg-pink-500 hover:bg-pink-600' : 'bg-blue-600 hover:bg-blue-700'}`}
          >
            Liên hệ
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
