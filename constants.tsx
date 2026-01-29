
import React from 'react';
import { MenuSection, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { id: MenuSection.HOME, label: 'Trang chủ' },
  { 
    id: MenuSection.HISTORY, 
    label: 'Giới thiệu', 
    children: [
      { id: MenuSection.HISTORY, label: 'Lịch sử hình thành' },
      { id: MenuSection.VISION, label: 'Tầm nhìn & Sứ mệnh' },
      { id: MenuSection.ORGANIZATION, label: 'Cơ cấu tổ chức' },
      { id: MenuSection.ACHIEVEMENTS, label: 'Thành tích đạt được' }
    ]
  },
  { id: MenuSection.NEWS, label: 'Tin tức' },
  { id: MenuSection.CONTACT, label: 'Liên hệ' }
];

export const SCHOOL_INFO = {
  name: "TRƯỜNG THPT CAO THẮNG",
  location: "Sơn Tây, Hương Sơn, Hà Tĩnh",
  motto: "Vì sự nghiệp giáo dục và phát triển con người",
  phone: "0239 3xxx xxx",
  email: "thptcaothang@hatinh.edu.vn"
};
