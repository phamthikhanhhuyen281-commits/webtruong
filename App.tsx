
import React, { useState } from 'react';
import { MenuSection } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContentSection from './components/ContentSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<MenuSection>(MenuSection.HOME);

  const renderContent = () => {
    switch (activeSection) {
      case MenuSection.HOME:
        return (
          <>
            <Hero onNavigate={setActiveSection} />
            <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-blue-600 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Gương sáng Cao Thắng</h3>
                <p className="text-slate-600 leading-relaxed">Tìm hiểu về tiểu sử và sự nghiệp cách mạng của người anh hùng dân tộc Cao Thắng - linh hồn của phong trào Cần Vương tại Hà Tĩnh.</p>
                <button onClick={() => setActiveSection(MenuSection.HISTORY)} className="mt-6 text-blue-600 font-semibold hover:underline">Xem thêm →</button>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-blue-400 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Hoạt động giáo dục</h3>
                <p className="text-slate-600 leading-relaxed">Nhà trường luôn chú trọng đổi mới phương pháp giảng dạy, kết hợp giữa lý thuyết và thực tiễn để học sinh phát triển toàn diện.</p>
                <button onClick={() => setActiveSection(MenuSection.ACHIEVEMENTS)} className="mt-6 text-blue-600 font-semibold hover:underline">Xem thêm →</button>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-blue-200 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Thông báo mới</h3>
                <p className="text-slate-600 leading-relaxed">Cập nhật các thông báo mới nhất về lịch học, lịch thi và các hoạt động ngoại khóa của trường trong học kỳ này.</p>
                <button onClick={() => setActiveSection(MenuSection.NEWS)} className="mt-6 text-blue-600 font-semibold hover:underline">Xem thêm →</button>
              </div>
            </div>
          </>
        );
      default:
        return <ContentSection section={activeSection} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar activeSection={activeSection} onNavigate={setActiveSection} />
      <main className="flex-grow pt-20">
        {renderContent()}
      </main>
      <Footer onNavigate={setActiveSection} />
    </div>
  );
};

export default App;
