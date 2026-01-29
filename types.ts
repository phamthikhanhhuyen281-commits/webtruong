
export enum MenuSection {
  HOME = 'home',
  
  // Giới thiệu
  HISTORY = 'history',
  VISION = 'vision',
  ACHIEVEMENTS_GENERAL = 'achievements_general',
  VIRTUAL_TOUR = 'virtual_tour',
  
  // Đội ngũ
  STAFF_BOARD = 'staff_board',
  STAFF_DEPTS = 'staff_depts',
  STAFF_OUTSTANDING = 'staff_outstanding',
  
  // Học tập
  TIMETABLE = 'timetable',
  STUDY_PLAN = 'study_plan',
  MATERIALS = 'materials',
  EXAM_SCHEDULE = 'exam_schedule',
  EXAM_SCORES = 'exam_scores',
  
  // Hoạt động
  ACTIVITIES_UNION = 'activities_union',
  ACTIVITIES_ACADEMIC = 'activities_academic',
  ACTIVITIES_ARTS_SPORTS = 'activities_arts_sports',
  ACTIVITIES_VOLUNTEER = 'activities_volunteer',
  
  // Thành tích
  AWARDS_STUDENTS = 'awards_students',
  AWARDS_COMPETITIONS = 'awards_competitions',
  AWARDS_TEACHERS = 'awards_teachers',
  
  // Thư viện
  MEDIA_PHOTOS = 'media_photos',
  MEDIA_VIDEOS = 'media_videos',
  MEDIA_MEMORIES = 'media_memories',
  
  // Tuyển sinh
  ADMISSIONS_QUOTA = 'admissions_quota',
  ADMISSIONS_CONDITIONS = 'admissions_conditions',
  ADMISSIONS_DOCS = 'admissions_docs',
  ADMISSIONS_CONSULT = 'admissions_consult',
  
  // Tin tức
  NEWS = 'news',
  ANNOUNCEMENTS = 'announcements',
  EVENT_CALENDAR = 'event_calendar',
  
  FAQ = 'faq',
  FEEDBACK = 'feedback',
  CONTACT = 'contact'
}

export interface NavItem {
  id: MenuSection;
  label: string;
  children?: NavItem[];
}
