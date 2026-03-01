export interface FaqQuestion {
  question: string;
  answer: string;
  tags: string[];
}

export interface FaqCategory {
  category: string;
  questions: FaqQuestion[];
}

export const faqCategories: FaqCategory[] = [
  {
    category: 'Phổ Biến',
    questions: [
      {
        question: 'Hosting Minecraft là gì?',
        answer:
          'Hosting Minecraft là một dịch vụ cho phép bạn chạy và quản lý máy chủ Minecraft trực tuyến, giúp bạn và bạn bè có thể chơi cùng nhau mà không cần tự thiết lập máy chủ trên máy tính cá nhân. Nó đảm bảo hiệu suất ổn định, không lag, luôn hoạt động 24/7 và đi kèm với các công cụ quản lý dễ sử dụng.',
        tags: ['setup', 'quick start', 'deployment'],
      },
      {
        question: 'Làm thế nào để tạo một Server Minecraft?',
        answer:
          'Chỉ cần đăng ký gói hosting Minecraft, và thanh toán. Máy chủ sẽ sẵn sàng chỉ sau vài phút mà không cần cấu hình phức tạp.',
        tags: ['setup', 'server creation', 'quick start'],
      },
      {
        question: 'Server có hoạt động 24/7 không?',
        answer:
          'Có, tất cả các máy chủ của chúng tôi đều hoạt động 24/7 mà không cần bạn phải giữ máy tính bật. Hệ thống đảm bảo uptime cao, giúp bạn và bạn bè có thể chơi bất cứ lúc nào.',
        tags: ['uptime', 'server availability', 'performance'],
      },
      {
        question: 'Có cần cài đặt phần mềm gì để chơi trên máy chủ không?',
        answer:
          'Không, bạn chỉ cần sử dụng Minecraft phiên bản chính thức hoặc modded trên máy tính hoặc điện thoại của mình. Sau đó, chỉ cần nhập địa chỉ IP của máy chủ để kết nối.',
        tags: ['setup', 'installation', 'minecraft'],
      },
      {
        question: 'Có thể sử dụng mod và plugin trên máy chủ không?',
        answer:
          'Có! Chúng tôi hỗ trợ các phiên bản máy chủ như Paper, Spigot, Forge, Fabric, Bedrock, PocketMine, v.v giúp bạn dễ dàng cài đặt mod và plugin tùy chỉnh.',
        tags: ['mods', 'plugins', 'customization'],
      },
      {
        question: 'Có thể tải lên thế giới của tôi không?',
        answer:
          'Có! Bạn có thể tải lên thế giới Minecraft của mình dễ dàng thông qua bảng điều khiển. Chỉ cần nén thư mục thế giới thành file .zip, tải lên và giải nén, sau đó khởi động lại máy chủ để áp dụng.',
        tags: ['world upload', 'backup', 'customization'],
      },
    ],
  },
  {
    category: 'Bảo Mật',
    questions: [
      {
        question: 'Hosting có chống DDoS không?',
        answer:
          'Có, tất cả các gói hosting của chúng tôi đều đi kèm với bảo vệ DDoS mạnh mẽ lên đến 10 Gbps. Hệ thống tự động phát hiện và ngăn chặn các cuộc tấn công trước khi chúng ảnh hưởng đến máy chủ của bạn.',
        tags: ['security', 'ddos', 'protection'],
      },
      {
        question: 'Làm thế nào để sao lưu dữ liệu máy chủ?',
        answer:
          'Chúng tôi thực hiện sao lưu tự động hàng ngày và lưu trữ dữ liệu tại các vị trí an toàn. Bạn cũng có thể tạo bản sao lưu thủ công thông qua bảng điều khiển và khôi phục dữ liệu chỉ với một cú nhấp chuột.',
        tags: ['security', 'backup', 'data'],
      },
      {
        question: 'Máy chủ của tôi có bị xóa nếu tôi quên gia hạn không?',
        answer:
          'Sau khi hết hạn, máy chủ sẽ được giữ lại trong 3 ngày trước khi bị xóa hoàn toàn. Trong khoảng thời gian này, bạn có thể gia hạn để khôi phục máy chủ mà không mất dữ liệu.',
        tags: ['billing', 'server expiration', 'renewal'],
      },
    ],
  },
  {
    category: 'Gói Dịch Vụ & Giá Cả',
    questions: [
      {
        question: 'Tôi có thể nâng cấp cấu hình hosting không?',
        answer:
          'Hoàn toàn có thể! Bạn có thể nâng cấp cấu hình một cách tự động. Việc thay đổi có hiệu lực ngay lập tức và hệ thống sẽ tự động điều chỉnh chi phí dựa trên thời gian sử dụng.',
        tags: ['billing', 'plans', 'upgrade'],
      },
      {
        question: 'Dịch vụ có chính sách hoàn tiền không?',
        answer:
          'Có, chúng tôi cung cấp chính sách hoàn tiền rõ ràng minh bạch. Nếu bạn không hài lòng, chỉ cần liên hệ đội ngũ hỗ trợ để yêu cầu hoàn tiền mà không cần giải thích.',
        tags: ['billing', 'refund', 'policy'],
      },
      {
        question: 'Tôi có thể thanh toán bằng phương thức nào?',
        answer:
          'Chúng tôi hỗ trợ thanh toán qua ngân hàng hoặc thẻ cào.',
        tags: ['payment', 'billing'],
      },
      {
        question: 'Gói nào phù hợp với tôi?',
        answer:
          'Điều này phụ thuộc vào số lượng người chơi và nhu cầu sử dụng của bạn. Nếu bạn chỉ chơi với bạn bè, hãy tham khảo gói Hosting Cheap. Nếu bạn muốn chạy một máy chủ lớn, ổn định và có nhiều người chơi, nên sử dụng Hosting Basic hoặc Premium.',
        tags: ['plans', 'server size', 'recommendation'],
      },
    ],
  },
];
