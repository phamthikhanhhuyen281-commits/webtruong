
import React, { useState, useMemo } from 'react';
import { MenuSection } from '../types';
import { 
  STAFF_DATA, NEWS_CATEGORIES, NEWS_DATA, SCHOOL_INFO, 
  GALLERY_DATA, TIMELINE_DATA, VIRTUAL_TOUR_DATA, 
  FAQ_DATA, FEEDBACK_SAMPLES 
} from '../constants';

interface ContentSectionProps {
  section: MenuSection;
  onNavigate: (section: MenuSection) => void;
  isStudentMode?: boolean;
}

const ContentSection: React.FC<ContentSectionProps> = ({ section, onNavigate, isStudentMode }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [newsFilter, setNewsFilter] = useState('Tất cả');
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  // Feedback state
  const [feedback, setFeedback] = useState({ name: '', role: 'Học sinh', content: '' });
  const [submitted, setSubmitted] = useState(false);

  const filteredNews = useMemo(() => {
    return NEWS_DATA.filter((news) => {
      const matchesCategory = newsFilter === 'Tất cả' || news.category === newsFilter;
      const matchesSearch = news.title.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [newsFilter, searchTerm]);

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedback.name || !feedback.content) {
      alert("Bạn ơi, nhập đủ thông tin giùm trường nha!");
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      alert(`Cảm ơn ${feedback.name}! Ý kiến của bạn đã được ghi nhận. Chúc bạn một ngày vui vẻ!`);
      setFeedback({ name: '', role: 'Học sinh', content: '' });
    }, 1000);
  };

  const renderHeader = (title: string, subtitle?: string, label?: string) => (
    <div className="text-center space-y-4 mb-16">
      <span className={`font-black tracking-widest text-xs uppercase ${isStudentMode ? 'text-pink-500' : 'text-blue-600'}`}>{label}</span>
      <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">{title}</h2>
      {subtitle && <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg">{subtitle}</p>}
    </div>
  );

  const renderDetails = () => {
    switch (section) {
      case MenuSection.HISTORY:
        return (
          <div className="space-y-16">
            {renderHeader("Hành trình 50 năm", "Từ 1975 - 2025: Những mốc son chói lọi", "Lịch sử")}
            <div className="relative max-w-4xl mx-auto pl-8 border-l-4 border-blue-500/20 space-y-12">
              {TIMELINE_DATA.map((item, i) => (
                <div key={i} className="relative animate-in slide-in-from-left-4 duration-500" style={{ animationDelay: `${i * 100}ms` }}>
                  <div className={`absolute -left-[42px] top-0 w-8 h-8 rounded-full border-4 border-white dark:border-slate-900 shadow-lg ${isStudentMode ? 'bg-pink-500' : 'bg-blue-600'}`}></div>
                  <div className={`bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-700 transition-all ${isStudentMode ? 'hover:border-pink-200' : 'hover:border-blue-200'}`}>
                    <span className={`text-xl font-black ${isStudentMode ? 'text-pink-600' : 'text-blue-600'}`}>{item.year}</span>
                    <h4 className="text-2xl font-black text-slate-900 dark:text-white mt-2">{item.title}</h4>
                    <p className="text-slate-500 dark:text-slate-400 mt-4 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case MenuSection.VIRTUAL_TOUR:
        return (
          <div className="space-y-12">
            {renderHeader("Tham quan Cao Thắng", "Góc nhìn toàn cảnh về ngôi trường thân yêu", "Cơ sở vật chất")}
            <div className="grid md:grid-cols-2 gap-8">
              {VIRTUAL_TOUR_DATA.map((item) => (
                <div key={item.id} className="group bg-white dark:bg-slate-800 rounded-[3rem] overflow-hidden shadow-xl border border-slate-100 dark:border-slate-700">
                  <div className="h-64 overflow-hidden relative">
                    <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.name} />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all flex items-center justify-center">
                      <span className="px-6 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-[10px] font-black uppercase opacity-0 group-hover:opacity-100 transition-opacity">Xem chi tiết</span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h4 className="text-2xl font-black text-slate-900 dark:text-white">{item.name}</h4>
                    <p className="text-slate-500 dark:text-slate-400 mt-2">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case MenuSection.FAQ:
        return (
          <div className="space-y-12">
            {renderHeader("Hỏi đáp (FAQ)", "Giải đáp nhanh những thắc mắc phổ biến", "Hỗ trợ")}
            <div className="max-w-3xl mx-auto space-y-4">
              {FAQ_DATA.map((item, i) => (
                <div key={i} className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-700">
                  <button 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all"
                  >
                    <span className="font-bold text-slate-800 dark:text-slate-200">{item.q}</span>
                    <span className={`text-2xl transition-transform ${openFaq === i ? 'rotate-180' : ''}`}>{isStudentMode ? '👇' : '▾'}</span>
                  </button>
                  {openFaq === i && (
                    <div className="px-8 pb-6 text-slate-500 dark:text-slate-400 animate-in slide-in-from-top-2 duration-300">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );

      case MenuSection.FEEDBACK:
        return (
          <div className="space-y-12">
            {renderHeader("Góp ý & Đánh giá", "Chia sẻ suy nghĩ của bạn để trường ngày càng tốt hơn", "Kết nối")}
            <div className="grid lg:grid-cols-3 gap-12 items-start">
              <div className="lg:col-span-2 bg-white dark:bg-slate-800 p-10 rounded-[3.5rem] shadow-xl space-y-8">
                <form onSubmit={handleFeedbackSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Họ và tên</label>
                      <input 
                        type="text" 
                        value={feedback.name}
                        onChange={e => setFeedback({...feedback, name: e.target.value})}
                        className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border-none outline-none focus:ring-2 focus:ring-blue-500 font-bold"
                        placeholder="Nguyễn Văn A"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Bạn là ai?</label>
                      <select 
                        value={feedback.role}
                        onChange={e => setFeedback({...feedback, role: e.target.value})}
                        className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border-none outline-none focus:ring-2 focus:ring-blue-500 font-bold appearance-none"
                      >
                        <option>Học sinh</option>
                        <option>Cựu học sinh</option>
                        <option>Phụ huynh</option>
                        <option>Giáo viên</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Nội dung góp ý</label>
                    <textarea 
                      rows={5}
                      value={feedback.content}
                      onChange={e => setFeedback({...feedback, content: e.target.value})}
                      className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border-none outline-none focus:ring-2 focus:ring-blue-500 font-bold resize-none"
                      placeholder="Chúng mình/Tôi muốn góp ý rằng..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className={`w-full py-5 text-white font-black rounded-2xl shadow-xl transition-all ${isStudentMode ? 'bg-pink-500 hover:bg-pink-600' : 'bg-blue-600 hover:bg-blue-700'}`}
                  >
                    Gửi ngay cho trường nè 🚀
                  </button>
                </form>
              </div>
              <div className="space-y-6">
                <h4 className="text-xl font-black text-slate-900 dark:text-white px-4">Góp ý gần đây</h4>
                <div className="space-y-4">
                  {FEEDBACK_SAMPLES.map((f, i) => (
                    <div key={i} className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-[2rem] border border-white dark:border-slate-700">
                      <p className="text-slate-600 dark:text-slate-300 italic font-medium">"{f.content}"</p>
                      <div className="mt-4 flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-black ${isStudentMode ? 'bg-pink-500' : 'bg-blue-600'}`}>
                          {f.name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-[10px] font-black text-slate-900 dark:text-white">{f.name}</p>
                          <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">{f.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case MenuSection.MEDIA_PHOTOS:
        return (
          <div className="space-y-12">
            {renderHeader("Thư viện Ảnh", "Lưu giữ những kỷ niệm đẹp nhất", "Thư viện")}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {GALLERY_DATA.map((img) => (
                <div 
                  key={img.id} 
                  className="relative group aspect-square rounded-[2rem] overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(img)}
                >
                  <img src={img.url} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={img.title} />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                     <span className="text-3xl text-white">🔍</span>
                  </div>
                </div>
              ))}
            </div>
            {selectedImage && (
              <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 animate-in fade-in duration-300">
                <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={() => setSelectedImage(null)}></div>
                <div className="relative max-w-5xl w-full max-h-[90vh] animate-in zoom-in-95 duration-300">
                  <button onClick={() => setSelectedImage(null)} className="absolute -top-12 right-0 text-white flex items-center gap-2 hover:text-pink-400">
                    <span className="font-black text-xs uppercase">Đóng</span>
                    <span className="text-2xl">❌</span>
                  </button>
                  <img src={selectedImage.url} className="w-full h-full object-contain rounded-[2rem]" alt={selectedImage.title} />
                  <p className="text-white text-center mt-6 font-black text-xl">{selectedImage.title}</p>
                </div>
              </div>
            )}
          </div>
        );

      default:
        return <div className="text-center py-20 text-slate-400 font-bold uppercase tracking-widest">Đang cập nhật nội dung...</div>;
    }
  };

  return (
    <div className={`max-w-7xl mx-auto px-6 py-16 animate-in fade-in duration-700 ${isStudentMode ? 'student-style' : ''}`}>
      <div className={`backdrop-blur-3xl rounded-[4rem] p-10 md:p-20 shadow-inner border relative overflow-hidden transition-all duration-700 ${
        isStudentMode 
        ? 'bg-gradient-to-br from-pink-50/40 to-blue-50/40 border-pink-100' 
        : 'bg-white/40 dark:bg-slate-900/40 border-white dark:border-slate-800'
      }`}>
        <div className="relative z-10">
          {renderDetails()}
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
