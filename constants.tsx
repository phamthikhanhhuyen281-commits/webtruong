
import { MenuSection, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { id: MenuSection.HOME, label: 'Trang chủ' },
  { 
    id: MenuSection.HISTORY, 
    label: 'Giới thiệu', 
    children: [
      { id: MenuSection.HISTORY, label: 'Lịch sử 50 năm' },
      { id: MenuSection.VISION, label: 'Tầm nhìn & Sứ mệnh' },
      { id: MenuSection.VIRTUAL_TOUR, label: 'Tham quan trường' },
      { id: MenuSection.ACHIEVEMENTS_GENERAL, label: 'Thành tích chung' }
    ]
  },
  {
    id: MenuSection.STAFF_BOARD,
    label: 'Đội ngũ',
    children: [
      { id: MenuSection.STAFF_BOARD, label: 'Ban giám hiệu' },
      { id: MenuSection.STAFF_DEPTS, label: 'Tổ chuyên môn' }
    ]
  },
  {
    id: MenuSection.ACTIVITIES_UNION,
    label: 'Đời sống',
    children: [
      { id: MenuSection.ACTIVITIES_UNION, label: 'Đoàn Thanh niên' },
      { id: MenuSection.ACTIVITIES_ARTS_SPORTS, label: 'CLB & Sự kiện' },
      { id: MenuSection.MEDIA_PHOTOS, label: 'Album ảnh' }
    ]
  },
  {
    id: MenuSection.NEWS,
    label: 'Thông tin',
    children: [
      { id: MenuSection.NEWS, label: 'Tin tức' },
      { id: MenuSection.ANNOUNCEMENTS, label: 'Thông báo' },
      { id: MenuSection.FAQ, label: 'Hỏi đáp (FAQ)' },
      { id: MenuSection.FEEDBACK, label: 'Góp ý' }
    ]
  },
  { id: MenuSection.CONTACT, label: 'Liên hệ' }
];

export const TIMELINE_DATA = [
  { year: "1975", title: "Thành lập trường", desc: "Trường Cấp 3 Cao Thắng được thành lập ngay sau ngày hòa bình lập lại." },
  { year: "1980 - 1990", title: "Vượt khó đi lên", desc: "Xây dựng những dãy nhà cao tầng đầu tiên thay thế cho tranh tre nứa lá." },
  { year: "2005", title: "Kỷ niệm 30 năm", desc: "Đón nhận bằng khen của Thủ tướng Chính phủ." },
  { year: "2015", title: "Chuẩn Quốc gia", desc: "Chính thức được công nhận Trường đạt chuẩn Quốc gia mức độ 1." },
  { year: "2025", title: "Hành trình Vàng", desc: "Đại lễ kỷ niệm 50 năm thành lập trường (1975 - 2025)." }
];

export const VIRTUAL_TOUR_DATA = [
  { id: 1, name: "Cổng trường", image: "https://picsum.photos/seed/gate/800/500", desc: "Vẻ đẹp trang nghiêm, hiện đại của cổng chính nhà trường." },
  { id: 2, name: "Nhà Hiệu bộ", image: "https://picsum.photos/seed/office/800/500", desc: "Trung tâm quản lý và điều hành các hoạt động giáo dục." },
  { id: 3, name: "Sân bóng đá", image: "https://picsum.photos/seed/soccer/800/500", desc: "Nơi rèn luyện sức khỏe và tổ chức các giải đấu phong trào." },
  { id: 4, name: "Thư viện xanh", image: "https://picsum.photos/seed/library/800/500", desc: "Không gian đọc sách lý tưởng với hàng ngàn đầu mục tài liệu." }
];

export const FAQ_DATA = [
  { q: "Trường THPT Cao Thắng nằm ở đâu?", a: "Trường tọa lạc tại Xã Sơn Tây, Huyện Hương Sơn, Tỉnh Hà Tĩnh." },
  { q: "Làm thế nào để đăng ký tuyển sinh vào trường?", a: "Phụ huynh và học sinh theo dõi thông báo tuyển sinh vào tháng 6 hàng năm trên website hoặc fanpage chính thức." },
  { q: "Trường có những câu lạc bộ nào cho học sinh?", a: "Hiện trường có các CLB: CLB Tiếng Anh, CLB Sách, CLB Bóng đá, CLB Văn nghệ và CLB Tình nguyện." }
];

export const FEEDBACK_SAMPLES = [
  { name: "Nguyễn Văn Tuấn", role: "Cựu học sinh K30", content: "Mãi tự hào về ngôi trường Cao Thắng thân yêu!" },
  { name: "Chị Lê Thị Mai", role: "Phụ huynh", content: "Nhà trường rất quan tâm đến việc rèn luyện đạo đức cho các em." }
];

export const GALLERY_DATA = [
  { id: 1, title: "Lễ Khai giảng năm học 2023-2024", url: "https://picsum.photos/seed/school1/1200/800", category: "Sự kiện" },
  { id: 2, title: "Hội trại kỷ niệm 26/3", url: "https://picsum.photos/seed/school2/1200/800", category: "Đoàn trường" },
  { id: 3, title: "Ngoại khóa Tiếng Anh", url: "https://picsum.photos/seed/school3/1200/800", category: "Học tập" },
  { id: 4, title: "Đại hội Đoàn trường nhiệm kỳ mới", url: "https://picsum.photos/seed/school4/1200/800", category: "Đoàn trường" },
  { id: 5, title: "Giao lưu văn nghệ cụm Hương Sơn", url: "https://picsum.photos/seed/school5/1200/800", category: "Văn nghệ" },
  { id: 6, title: "Khen thưởng học sinh giỏi cấp tỉnh", url: "https://picsum.photos/seed/school6/1200/800", category: "Thành tích" }
];

export const STAFF_DATA = {
  board: [
    { name: "Thầy Hồ Tiến Dương", role: "Hiệu trưởng", image: "https://i.pravatar.cc/150?u=principal" },
    { name: "Cô Nguyễn Thị Mai", role: "Phó Hiệu trưởng", image: "https://i.pravatar.cc/150?u=vp1" },
    { name: "Thầy Lê Văn Hùng", role: "Phó Hiệu trưởng", image: "https://i.pravatar.cc/150?u=vp2" }
  ],
  departments: [
    { name: "Tổ Toán - Tin", head: "Thầy Phan Văn A" },
    { name: "Tổ Ngữ Văn", head: "Cô Trần Thị B" },
    { name: "Tổ Lý - Hóa - Sinh", head: "Thầy Nguyễn Văn C" }
  ]
};

export const NEWS_CATEGORIES = ["Tất cả", "Sự kiện", "Thông báo", "Thành tích", "Hoạt động Đoàn"];

export interface NewsItem {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}

export const NEWS_DATA: NewsItem[] = [
  {
    id: 1,
    category: "Sự kiện",
    title: "Kế hoạch tổ chức Lễ kỷ niệm 50 năm thành lập trường (1975-2025)",
    excerpt: "Hướng tới đại lễ kỷ niệm 50 năm truyền thống, nhà trường phát động chuỗi các hoạt động văn hóa, nghệ thuật và thi đua học tập.",
    date: "15/05/2024",
    image: "https://picsum.photos/seed/50th/600/400"
  },
  {
    id: 2,
    category: "Thành tích",
    title: "Tuyên dương học sinh đạt giải cao tại Kỳ thi Học sinh giỏi cấp Tỉnh",
    excerpt: "Năm học 2023-2024 đánh dấu bước ngoặt lớn với số lượng giải Nhất cấp Tỉnh tăng vọt trong các môn tự nhiên.",
    date: "12/05/2024",
    image: "https://picsum.photos/seed/awards/600/400"
  }
];

export const SCHOOL_INFO = {
  location: "Xã Sơn Tây, Huyện Hương Sơn, Hà Tĩnh",
  phone: "0239 3xxx xxx",
  email: "thptcaothang@hatinh.edu.vn",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.825832729111!2d105.3414995!3d18.1232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDA3JzI0LjAiTiAxMDXCsDIwJzI5LjQiRQ!5e0!3m2!1svi!2svn!4v123456789"
};
