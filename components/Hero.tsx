
import React from 'react';
import { MenuSection } from '../types';

interface HeroProps {
  onNavigate: (section: MenuSection) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative h-[600px] overflow-hidden bg-blue-900">
      {/* Background Image Placeholder with Blue Overlay */}
      <img 
        src="https://picsum.photos/seed/school/1920/1080" 
        alt="Trường THPT Cao Thắng" 
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/80 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto h-full flex flex-col justify-center px-4 md:px-8">
        <div className="max-w-2xl text-white space-y-6 animate-in slide-in-from-left duration-700">
          <span className="inline-block px-4 py-1.5 bg-blue-600/30 backdrop-blur-md rounded-full text-blue-100 text-sm font-semibold tracking-wider uppercase border border-blue-500/30">
            Hương Sơn, Hà Tĩnh
          </span>
          <h2 className="text-5xl md:text-7xl font-extrabold leading-tight">
            TRƯỜNG THPT <br />
            <span className="text-blue-400">CAO THẮNG</span>
          </h2>
          <p className="text-lg md:text-xl text-blue-100/90 font-medium max-w-lg leading-relaxed">
            Hào khí Cao Thắng - Nơi ươm mầm tri thức, chắp cánh ước mơ cho bao thế hệ học sinh vùng quê Hương Sơn.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button 
              onClick={() => onNavigate(MenuSection.HISTORY)}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold shadow-lg shadow-blue-600/20 transition-all transform hover:-translate-y-1"
            >
              Khám phá ngay
            </button>
            <button 
              onClick={() => onNavigate(MenuSection.CONTACT)}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md rounded-xl font-bold transition-all"
            >
              Liên hệ chúng tôi
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7m14-8l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
