
export enum MenuSection {
  HOME = 'home',
  HISTORY = 'history',
  VISION = 'vision',
  ORGANIZATION = 'organization',
  ACHIEVEMENTS = 'achievements',
  NEWS = 'news',
  CONTACT = 'contact'
}

export interface NavItem {
  id: MenuSection;
  label: string;
  icon?: string;
  children?: NavItem[];
}
