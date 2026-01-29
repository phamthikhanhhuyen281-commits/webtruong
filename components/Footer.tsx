
import React from 'react';
import { MenuSection } from '../types';
import { SCHOOL_INFO } from '../constants';

interface FooterProps {
  onNavigate: (section: MenuSection) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-blue-950 text-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="space-y-6 md:col-span-1">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white text-blue-900 rounded-full flex items-center justify-center font-bold">CT</div>
            <h2 className="text-xl font-bold tracking-tight">THPT CAO THẮNG</h2>
          </div>
          <p className="text-blue-300 text-sm leading-relaxed">
            Ngôi trường giàu truyền thống cách mạng và hiếu học, nơi nuôi dưỡng những ước mơ xanh của tuổi trẻ Hương Sơn.
          </p>
          <div className="flex space-x-4">
            {['fb', 'yt', 'mail'].map(social => (
              <div key={social} className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <span className="uppercase text-[10px] font-bold">{social}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="space-y-6">
          <h3 className="text-white font-bold uppercase tracking-widest text-sm border-l-4 border-blue-500 pl-4">Thông tin liên hệ</h3>
          <ul className="space-y-4 text-blue-300 text-sm">
            <li className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              {SCHOOL_INFO.location}
            </li>
            <li className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {SCHOOL_INFO.phone}
            </li>
            <li className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {SCHOOL_INFO.email}
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="text-white font-bold uppercase tracking-widest text-sm border-l-4 border-blue-500 pl-4">Về chúng tôi</h3>
          <ul className="space-y-3 text-blue-300 text-sm">
            <li><button onClick={() => onNavigate(MenuSection.HISTORY)} className="hover:text-white transition-colors">Lịch sử nhà trường</button></li>
            <li><button onClick={() => onNavigate(MenuSection.VISION)} className="hover:text-white transition-colors">Tầm nhìn sứ mệnh</button></li>
            <li><button onClick={() => onNavigate(MenuSection.ORGANIZATION)} className="hover:text-white transition-colors">Ban giám hiệu</button></li>
            <li><button onClick={() => onNavigate(MenuSection.ACHIEVEMENTS)} className="hover:text-white transition-colors">Khen thưởng kỷ luật</button></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="text-white font-bold uppercase tracking-widest text-sm border-l-4 border-blue-500 pl-4">Liên kết</h3>
          <ul className="space-y-3 text-blue-300 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Sở Giáo dục & Đào tạo Hà Tĩnh</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Bộ Giáo dục & Đào tạo</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Cổng thông tin điện tử Hương Sơn</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Hệ thống LMS của trường</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-center text-blue-500 text-xs">
        <p>© 2024 Trường THPT Cao Thắng. Bảo lưu mọi quyền. <br className="md:hidden" /> Thiết kế bởi Ban Truyền thông nhà trường.</p>
      </div>
    </footer>
  );
};

export default Footer;
