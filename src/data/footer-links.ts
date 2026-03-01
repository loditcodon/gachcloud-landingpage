export interface FooterLink {
  name: string;
  href: string;
}

export interface SocialLink {
  icon: string;
  href: string;
  label: string;
}

export const quickLinks: FooterLink[] = [
  { name: 'Trang Chủ', href: '/' },
  { name: 'Minecraft Hosting', href: '/minecraft' },
  { name: 'Hỗ Trợ', href: '/support' },
];

export const gameHostingLinks: FooterLink[] = [
  { name: 'Cheap Hosting', href: 'https://gachcloud.net/store/hosting-minecraft' },
  { name: 'Basic Hosting', href: 'https://gachcloud.net/store/hosting-minecraft' },
  { name: 'Premium Hosting', href: 'https://gachcloud.net/store/hosting-minecraft-high-performance' },
];

export const companyLinks: FooterLink[] = [
  { name: 'Status Page', href: 'https://status.gachcloud.net' },
  { name: 'Documents', href: 'https://docs.gachcloud.net' },
  { name: 'Game Panel', href: 'https://panel.gachcloud.net/' },
  { name: 'Client Area', href: 'https://gachcloud.net/clientarea.php' },
];

export const legalLinks: FooterLink[] = [
  { name: 'Điều Khoản Dịch Vụ', href: '/legal' },
  { name: 'Chính Sách Bảo Mật', href: '/legal' },
  { name: 'Chính Sách Hoàn Tiền', href: '/legal' },
];

export const socialLinks: SocialLink[] = [
  { icon: 'Facebook', href: 'https://facebook.com/gachcloud', label: 'Facebook' },
  { icon: 'Discord', href: 'https://gachcloud.net/discord', label: 'Discord' },
  { icon: 'Tiktok', href: 'https://tiktok.com', label: 'TikTok' },
];

export const contactInfo = {
  email: 'support@GachCloud.com',
  discord: 'discord.gg/gachcloud',
  facebook: 'facebook.com/gachcloud',
  companyDescription:
    'GachCloud được triển khai từ năm 2022, cung cấp dịch vụ máy chủ Minecraft chất lượng cao tại Việt Nam. Chúng tôi cam kết mang đến hiệu suất ổn định, giá cả hợp lý và trải nghiệm tốt nhất cho cộng đồng game thủ.',
};
