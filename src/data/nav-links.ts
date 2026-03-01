export interface NavItem {
  name: string;
  href: string;
  icon: string;
}

export const navItems: NavItem[] = [
  { name: 'Trang Chủ', href: '/', icon: 'Home' },
  { name: 'Game Hosting', href: '/minecraft', icon: 'Gamepad2' },
  { name: 'Máy Chủ', href: '/dedicated', icon: 'Server' },
  { name: 'Hỗ Trợ', href: '/support', icon: 'Headphones' },
  { name: 'Documents', href: 'https://docs.gachcloud.net/', icon: 'Book' },
];

export const actionLinks = {
  gamePanel: {
    label: 'Game Panel',
    href: 'https://panel.gachcloud.net',
  },
  login: {
    label: 'Đăng Nhập',
    href: 'https://gachcloud.net/clientarea.php',
  },
};
