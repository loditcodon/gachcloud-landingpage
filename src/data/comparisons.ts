export interface ComparisonRow {
  title: string;
  gachcloud: string;
  other: string;
}

export const comparisons: ComparisonRow[] = [
  {
    title: 'Chi Phí Rẻ',
    gachcloud: 'Gói trả phí thấp nhất chỉ từ 20.000đ/tháng.',
    other: 'Gói trả phí thấp nhất từ 25.000đ/tháng.',
  },
  {
    title: 'Dung Lượng Ổ Cứng',
    gachcloud:
      'Cung cấp dung lượng lưu trữ lớn, phù hợp vận hành máy chủ ổn định lâu dài mà không cần xoá thường xuyên.',
    other:
      'Dung lượng thấp, nhanh đầy khi dùng lâu dài, phát sinh chi phí nâng cấp.',
  },
  {
    title: 'Tài Nguyên Bổ Sung',
    gachcloud: 'Miễn phí tối thiểu 1 Backup, 10 Databases, 3 Ports.',
    other: 'Hạn chế và phải mua thêm.',
  },
  {
    title: 'Giao Diện & Tính Năng',
    gachcloud:
      'Cài đặt Plugins/Mods, Quản lý máy chủ với 1-click, giao diện tiếng Việt, dễ dùng.',
    other:
      'Giao diện khó dùng, thiếu tính năng cài nhanh, không hỗ trợ tiếng Việt.',
  },
  {
    title: 'Hỗ Trợ Khách Hàng',
    gachcloud:
      'Hỗ trợ tận tâm, chuyên nghiệp với đội ngũ nhiều kinh nghiệm.',
    other:
      'Hỗ trợ chậm, chỉ có ticket hoặc không hỗ trợ tiếng Việt.',
  },
  {
    title: 'Tối Ưu Máy Chủ',
    gachcloud:
      'Hỗ trợ tối ưu miễn phí cho từng máy chủ, giúp máy chủ chạy mượt mà.',
    other:
      'Phải tự tối ưu, thuê thêm dịch vụ, không có hướng dẫn.',
  },
];
