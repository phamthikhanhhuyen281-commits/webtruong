import React from 'react';
import { MenuSection } from '../types';

interface HeroProps {
  onNavigate: (section: MenuSection) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative h-[85vh] min-h-[600px] overflow-hidden bg-blue-950">
      {/* Immersive Background from thptcaothang.edu.vn */}
      <div className="absolute inset-0">
        <img 
          src="http://thptcaothang.edu.vn/uploads/news/2023_11/truong-thpt-cao-thang.jpg" 
          alt="Trường THPT Cao Thắng" 
          className="w-full h-full object-cover opacity-40 scale-105"
          onError={(e) => {
            // Fallback if specific live URL is rotated
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=1920";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-transparent to-transparent"></div>
      </div>
      
      {/* Decorative scanning line effect */}
      <div className="absolute inset-0 pointer-events-none opacity-10" 
           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '100% 4px' }}></div>

      <div className="relative max-w-7xl mx-auto h-full flex flex-col justify-center px-6 md:px-12">
        <div className="max-w-3xl text-white space-y-8 animate-in slide-in-from-bottom-12 duration-1000">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/10 backdrop-blur-xl rounded-full border border-blue-400/30">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            <span className="text-blue-100 text-xs font-bold tracking-[0.2em] uppercase">Niềm tự hào Hương Sơn</span>
          </div>

          <h2 className="text-6xl md:text-8xl font-black leading-none tracking-tight">
            TRƯỜNG THPT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 text-glow">CAO THẮNG</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-100/80 font-medium max-w-xl leading-relaxed border-l-4 border-blue-500/50 pl-6">
            Hành trình hơn nửa thế kỷ xây dựng và phát triển. Nơi tri thức hội tụ và tài năng tỏa sáng tại vùng đất học Hà Tĩnh.
          </p>

          <div className="flex flex-wrap gap-5 pt-8">
            <button 
              onClick={() => onNavigate(MenuSection.HISTORY)}
              className="group relative px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold transition-all shadow-2xl shadow-blue-600/30 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Khám phá truyền thống
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
            <button 
              onClick={() => onNavigate(MenuSection.CONTACT)}
              className="px-10 py-5 bg-white/5 hover:bg-white/15 text-white border border-white/20 backdrop-blur-md rounded-2xl font-bold transition-all hover:border-white/40"
            >
              Liên hệ tuyển sinh
            </button>
          </div>
        </div>
      </div>
      
      {/* Animated scroll down indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-60">
        <span className="text-[10px] text-blue-300 uppercase font-bold tracking-widest">Cuộn để xem tiếp</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;