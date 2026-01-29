
import React from 'react';
import { MenuSection } from '../types';

interface ContentSectionProps {
  section: MenuSection;
}

const ContentSection: React.FC<ContentSectionProps> = ({ section }) => {
  const renderDetails = () => {
    switch (section) {
      case MenuSection.HISTORY:
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-blue-900">Lịch sử hình thành</h2>
            <div className="prose prose-blue max-w-none text-slate-600 leading-loose">
              <p>Trường THPT Cao Thắng được thành lập trong những năm tháng hào hùng của dân tộc. Trường mang tên người anh hùng Cao Thắng - một trong những vị thủ lĩnh xuất sắc của phong trào Cần Vương cuối thế kỷ XIX, người đã có công lớn trong việc chế tạo súng trường theo mẫu của Pháp.</p>
              <img src="https://picsum.photos/seed/history/800/400" className="w-full rounded-2xl shadow-lg my-8" alt="Lịch sử" />
              <p>Từ những ngày đầu thành lập với cơ sở vật chất còn nhiều thiếu thốn, tranh tre nứa lá, đến nay nhà trường đã phát triển mạnh mẽ với hệ thống phòng học cao tầng khang trang, các phòng chức năng hiện đại, đáp ứng đầy đủ nhu cầu dạy và học của giáo viên và học sinh.</p>
              <p>Hàng chục nghìn học sinh đã tốt nghiệp từ mái trường này, hiện đang công tác và cống hiến trên mọi miền Tổ quốc, đóng góp to lớn vào sự nghiệp xây dựng và bảo vệ quê hương, đất nước.</p>
            </div>
          </div>
        );
      case MenuSection.VISION:
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-blue-900">Tầm nhìn & Sứ mệnh</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-600 text-white p-10 rounded-3xl shadow-xl">
                <h3 className="text-2xl font-bold mb-6">Tầm nhìn</h3>
                <p className="text-blue-50 font-medium leading-relaxed italic">
                  "Xây dựng trường THPT Cao Thắng trở thành một ngôi trường có chất lượng giáo dục hàng đầu của tỉnh Hà Tĩnh, nơi học sinh được phát triển toàn diện về đức - trí - thể - mỹ, là điểm sáng về đổi mới và sáng tạo."
                </p>
              </div>
              <div className="bg-white p-10 rounded-3xl shadow-sm border border-blue-100">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Sứ mệnh</h3>
                <ul className="space-y-4 text-slate-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full flex-shrink-0"></span>
                    Tạo dựng môi trường học tập an toàn, thân thiện và năng động.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full flex-shrink-0"></span>
                    Bồi dưỡng và phát huy tối đa tiềm năng của mỗi học sinh.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full flex-shrink-0"></span>
                    Gìn giữ và phát huy truyền thống hiếu học của quê hương Hương Sơn.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      case MenuSection.ORGANIZATION:
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-blue-900">Cơ cấu tổ chức</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Ban Giám Hiệu', desc: 'Gồm Hiệu trưởng và 3 Phó Hiệu trưởng chịu trách nhiệm điều hành chung.' },
                { title: 'Công Đoàn', desc: 'Chăm lo đời sống và bảo vệ quyền lợi hợp pháp của cán bộ giáo viên.' },
                { title: 'Đoàn Thanh Niên', desc: 'Tổ chức các hoạt động phong trào, rèn luyện kỹ năng cho học sinh.' },
                { title: 'Hội Khuyến Học', desc: 'Khích lệ, động viên tinh thần học tập của các em học sinh hiếu học.' }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-blue-50 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4 font-bold">0{i+1}</div>
                  <h4 className="font-bold text-blue-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-blue-50 p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">Các tổ chuyên môn</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {['Tổ Toán - Tin', 'Tổ Ngữ Văn', 'Tổ Ngoại Ngữ', 'Tổ Vật Lý - Công Nghệ', 'Tổ Hóa - Sinh', 'Tổ Sử - Địa - GDCD'].map(to => (
                  <span key={to} className="px-4 py-2 bg-white rounded-lg shadow-sm text-sm font-medium text-blue-700 border border-blue-100">
                    {to}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      case MenuSection.ACHIEVEMENTS:
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-blue-900">Thành tích nổi bật</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-amber-50 border border-amber-200 p-8 rounded-2xl text-center">
                <div className="text-4xl mb-4">🏆</div>
                <h4 className="text-4xl font-black text-amber-700 mb-2">Huân chương</h4>
                <p className="text-amber-800 font-medium italic">Lao động hạng Nhì</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 p-8 rounded-2xl text-center">
                <div className="text-4xl mb-4">⭐</div>
                <h4 className="text-4xl font-black text-blue-700 mb-2">Chuẩn Quốc gia</h4>
                <p className="text-blue-800 font-medium italic">Mức độ 2</p>
              </div>
              <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-2xl text-center">
                <div className="text-4xl mb-4">🎓</div>
                <h4 className="text-4xl font-black text-emerald-700 mb-2">99.8%</h4>
                <p className="text-emerald-800 font-medium italic">Đậu Tốt nghiệp hàng năm</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-blue-900">Giải thưởng học sinh giỏi</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-blue-600 text-white">
                      <th className="p-4">Năm học</th>
                      <th className="p-4">Cấp Tỉnh</th>
                      <th className="p-4">Cấp Quốc gia</th>
                      <th className="p-4">Ghi chú</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-blue-50">
                    <tr>
                      <td className="p-4 font-medium">2023-2024</td>
                      <td className="p-4 text-blue-600">45 giải</td>
                      <td className="p-4">02 giải</td>
                      <td className="p-4 text-slate-500">Đang cập nhật</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">2022-2023</td>
                      <td className="p-4 text-blue-600">38 giải</td>
                      <td className="p-4">01 giải</td>
                      <td className="p-4 text-slate-500">Hoàn thành xuất sắc</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      case MenuSection.NEWS:
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-blue-900">Tin tức & Sự kiện</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="group flex gap-4 bg-white p-4 rounded-2xl border border-transparent hover:border-blue-200 hover:shadow-xl transition-all">
                  <div className="w-1/3 aspect-square bg-slate-100 rounded-xl overflow-hidden">
                    <img src={`https://picsum.photos/seed/${i+10}/400/400`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="News" />
                  </div>
                  <div className="w-2/3 space-y-2">
                    <span className="text-[10px] font-bold text-blue-600 uppercase tracking-tighter">Hoạt động</span>
                    <h4 className="font-bold text-blue-900 group-hover:text-blue-600 transition-colors line-clamp-2">Khai mạc Hội khỏe Phù Đổng cấp trường năm học 2024</h4>
                    <p className="text-xs text-slate-500 line-clamp-2">Sáng nay, trong không khí tưng bừng phấn khởi, trường THPT Cao Thắng đã tổ chức thành công lễ khai mạc...</p>
                    <div className="flex items-center text-[10px] text-slate-400 gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      15/10/2024
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case MenuSection.CONTACT:
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-blue-900">Liên hệ</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-blue-50 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-900">Địa chỉ</h4>
                      <p className="text-slate-600">Sơn Tây, Hương Sơn, Hà Tĩnh</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-900">Điện thoại</h4>
                      <p className="text-slate-600">0239 3xxx xxx</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-900">Email</h4>
                      <p className="text-slate-600">thptcaothang@hatinh.edu.vn</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <form className="bg-white p-8 rounded-3xl shadow-sm border border-blue-50 space-y-4">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Gửi tin nhắn cho chúng tôi</h3>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Họ và tên</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="Nguyễn Văn A" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="email@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Nội dung</label>
                    <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="Nhập tin nhắn của bạn..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-all">
                    Gửi ngay
                  </button>
                </form>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 animate-in fade-in duration-500">
      <div className="bg-white/50 backdrop-blur-sm rounded-[2rem] p-8 md:p-12 shadow-inner border border-white/50">
        {renderDetails()}
      </div>
    </div>
  );
};

export default ContentSection;
