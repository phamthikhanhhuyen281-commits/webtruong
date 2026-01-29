
import React, { useState, useEffect } from 'react';
import { MenuSection } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContentSection from './components/ContentSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<MenuSection>(MenuSection.HOME);
  const [darkMode, setDarkMode] = useState(false);
  const [isStudentMode, setIsStudentMode] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Show announcement on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnnouncement(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleStudentMode = () => setIsStudentMode(!isStudentMode);

  const renderContent = () => {
    if (activeSection === MenuSection.HOME) {
      return (
        <div className={`animate-in fade-in duration-700 ${isStudentMode ? 'student-style' : ''}`}>
          <Hero onNavigate={setActiveSection} />
          
          <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">
            {/* Quick Stats Bar */}
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 backdrop-blur-2xl rounded-[2.5rem] shadow-2xl border p-8 transition-all duration-500 ${
              isStudentMode 
              ? 'bg-gradient-to-r from-pink-500/10 to-blue-500/10 border-white/40' 
              : 'bg-white/80 dark:bg-slate-800/80 border-white dark:border-slate-700'
            }`}>
              {[
                { label: "Năm truyền thống", value: "50", icon: isStudentMode ? "🔥" : "📜" },
                { label: "Học sinh ưu tú", value: "1200+", icon: isStudentMode ? "🚀" : "🎓" },
                { label: "Giáo viên giỏi", value: "85+", icon: isStudentMode ? "❤️" : "👨‍🏫" },
                { label: "CLB Hoạt động", value: "12+", icon: isStudentMode ? "⚡" : "🏫" }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center justify-center text-center group">
                  <span className="text-3xl mb-3 group-hover:scale-125 transition-transform duration-300">{stat.icon}</span>
                  <div className={`text-3xl font-black ${isStudentMode ? 'text-pink-600' : 'text-blue-600 dark:text-blue-400'}`}>{stat.value}</div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Featured Section */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <span className={`font-black tracking-widest text-xs uppercase ${isStudentMode ? 'text-pink-500' : 'text-blue-600 dark:text-blue-400'}`}>
                  {isStudentMode ? 'Có gì hot nè? 🔥' : 'Tin nổi bật'}
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
                  {isStudentMode ? 'Gia đình THPT Cao Thắng chào bạn!' : 'Chào mừng đến với Trường THPT Cao Thắng'}
                </h2>
                <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
                  {isStudentMode 
                    ? 'Bạn là mem Cao Thắng? Cập nhật ngay những hoạt động siêu chất, ảnh cực xinh và thông tin CLB ở đây nha!' 
                    : 'Trường THPT Cao Thắng (Hương Sơn, Hà Tĩnh) qua 50 năm xây dựng và trưởng thành, tự hào là địa chỉ giáo dục tin cậy hàng đầu địa phương.'
                  }
                </p>
                <div className="flex gap-4">
                  <button onClick={() => setActiveSection(MenuSection.HISTORY)} className={`px-8 py-4 text-white rounded-2xl font-bold transition-all shadow-xl ${isStudentMode ? 'bg-pink-500 hover:bg-pink-600 shadow-pink-500/20' : 'bg-blue-600 hover:bg-blue-700 shadow-blue-600/20'}`}>
                    {isStudentMode ? 'Xem timeline cực xịn' : 'Khám phá truyền thống'}
                  </button>
                  <button onClick={() => setActiveSection(MenuSection.MEDIA_PHOTOS)} className="px-8 py-4 border-2 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                    {isStudentMode ? 'Ảnh dìm... à nhầm ảnh xinh' : 'Xem thư viện ảnh'}
                  </button>
                </div>
              </div>
              <div className="relative group">
                <div className={`absolute -inset-4 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity ${isStudentMode ? 'bg-gradient-to-r from-pink-500 to-yellow-400' : 'bg-gradient-to-r from-blue-600 to-cyan-400'}`}></div>
                <img 
                  src="http://thptcaothang.edu.vn/uploads/news/2023_11/anh-bia-le-ky-niem.jpg" 
                  className={`relative rounded-[3rem] shadow-2xl object-cover w-full h-[400px] border-4 transition-all duration-500 ${isStudentMode ? 'border-pink-100 dark:border-pink-900' : 'border-white dark:border-slate-800'}`} 
                  alt="Trường" 
                  onError={(e) => (e.currentTarget.src = 'https://picsum.photos/800/600?education')}
                />
              </div>
            </div>
          </div>
        </div>
      );
    }
    return <ContentSection section={activeSection} onNavigate={setActiveSection} isStudentMode={isStudentMode} />;
  };

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${isStudentMode ? 'student-mode' : ''}`}>
      <Navbar 
        activeSection={activeSection} 
        onNavigate={setActiveSection} 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode}
        isStudentMode={isStudentMode}
        toggleStudentMode={toggleStudentMode}
      />
      
      {/* News Ticker */}
      <div className={`fixed top-20 left-0 right-0 z-40 text-white overflow-hidden py-1.5 transition-colors duration-500 ${isStudentMode ? 'bg-pink-600/90' : 'bg-blue-600/90'} backdrop-blur-md`}>
        <div className="flex whitespace-nowrap animate-[marquee_25s_linear_infinite]">
          <span className="px-8 font-bold text-[10px] uppercase tracking-widest">🔔 THÔNG BÁO: Lễ kỷ niệm 50 năm thành lập trường dự kiến tổ chức vào tháng 11/2025</span>
          <span className="px-8 font-bold text-[10px] uppercase tracking-widest">📅 SỰ KIỆN: Hội diễn văn nghệ "Cao Thắng trong trái tim tôi" bắt đầu vòng sơ khảo tuần tới</span>
        </div>
      </div>

      <main className="flex-grow pt-24">
        {renderContent()}
      </main>
      <Footer onNavigate={setActiveSection} />

      {/* Auto Announcement Modal */}
      {showAnnouncement && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 animate-in fade-in duration-500">
          <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-md" onClick={() => setShowAnnouncement(false)}></div>
          <div className="relative bg-white dark:bg-slate-900 w-full max-w-lg rounded-[3.5rem] p-10 shadow-2xl border border-slate-100 dark:border-slate-800 animate-in zoom-in-95 duration-500 overflow-hidden">
            <div className={`absolute top-0 left-0 right-0 h-2 ${isStudentMode ? 'bg-pink-500' : 'bg-blue-600'}`}></div>
            <button 
              onClick={() => setShowAnnouncement(false)}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-red-50 hover:text-red-500 transition-all z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <div className="text-center space-y-6">
              <div className={`w-20 h-20 rounded-[2rem] flex items-center justify-center text-white text-3xl mx-auto shadow-xl ${isStudentMode ? 'bg-pink-500' : 'bg-blue-600'}`}>
                {isStudentMode ? '✨' : '📢'}
              </div>
              <h3 className="text-3xl font-black text-slate-900 dark:text-white leading-tight">
                {isStudentMode ? 'Hey mem Cao Thắng!' : 'Thông báo từ Nhà trường'}
              </h3>
              <div className="space-y-4 text-left bg-slate-50 dark:bg-slate-800/50 p-6 rounded-3xl">
                <div className="flex gap-4">
                  <span className="shrink-0 text-xl">📚</span>
                  <p className="text-sm font-bold text-slate-700 dark:text-slate-300">Lịch thi học kỳ II chính thức bắt đầu từ ngày 15/05/2024.</p>
                </div>
                <div className="flex gap-4">
                  <span className="shrink-0 text-xl">🎉</span>
                  <p className="text-sm font-bold text-slate-700 dark:text-slate-300">Nhà trường phát động cuộc thi thiết kế logo 50 năm truyền thống.</p>
                </div>
              </div>
              <button 
                onClick={() => setShowAnnouncement(false)}
                className={`w-full py-4 text-white rounded-2xl font-black shadow-lg transition-all ${isStudentMode ? 'bg-pink-500 hover:bg-pink-600' : 'bg-blue-600 hover:bg-blue-700'}`}
              >
                Đã hiểu, cảm ơn!
              </button>
            </div>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .student-mode {
          --accent: #ec4899;
        }
      `}} />
    </div>
  );
};

export default App;
