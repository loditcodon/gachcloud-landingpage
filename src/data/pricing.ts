export interface PricingTier {
  id: string;
  name: string;
  image: string;
  status: 'starter' | 'popular' | 'premium';
  statusLabel: string;
  cpu: string;
  price: number;
  specs: {
    ram: string;
    storage: string;
    network: string;
    databases: number;
    allocations: number;
    backups: number;
    additionalServers: number;
  };
  features: string[];
  playerCount: string;
  storeUrl: string;
}

export const pricingTiers: PricingTier[] = [
  {
    id: 'hosting-minecraft-free',
    name: 'Cheap',
    image: '/cheap.webp',
    status: 'starter',
    statusLabel: 'Khởi Đầu',
    cpu: 'Intel Xeon E5-2680 v4 @ 3.3GHz',
    price: 20000,
    specs: {
      ram: 'RAM DDR4',
      storage: 'Ổ Cứng NVMe SSD',
      network: 'Port 1 GBit/s',
      databases: 1,
      allocations: 3,
      backups: 1,
      additionalServers: 2,
    },
    features: [
      'One-Click Modpacks',
      'Instant Setup',
      'Basic Support',
      'Free Subdomain',
    ],
    playerCount: '1-50',
    storeUrl: 'https://gachcloud.net/store/hosting-minecraft-free',
  },
  {
    id: 'hosting-minecraft-cheap',
    name: 'Basic',
    image: '/basic.webp',
    status: 'popular',
    statusLabel: 'Bán Chạy',
    cpu: 'Intel Xeon Gold 6148 @ 3.7GHz',
    price: 50000,
    specs: {
      ram: 'RAM DDR4',
      storage: 'Ổ Cứng NVMe SSD',
      network: 'Port 10 GBit/s',
      databases: 10,
      allocations: 3,
      backups: 1,
      additionalServers: 3,
    },
    features: [
      'Everything in Creeper',
      'Priority Support',
      'Daily Backups',
      'Custom JAR Support',
    ],
    playerCount: '20-100',
    storeUrl: 'https://gachcloud.net/store/hosting-minecraft-cheap',
  },
  {
    id: 'hosting-minecraft',
    name: 'Medium',
    image: '/Warden.webp',
    status: 'premium',
    statusLabel: 'Hiệu Năng Khủng',
    cpu: 'Intel Xeon Gold 6144 @ 4.2GHz',
    price: 120000,
    specs: {
      ram: 'RAM DDR4',
      storage: 'Ổ Cứng NVMe SSD',
      network: 'Port 10 GBit/s',
      databases: 10,
      allocations: 3,
      backups: 1,
      additionalServers: 3,
    },
    features: [
      'Everything in Enderman',
      'Dedicated IP',
      'MySQL Database',
      'Premium Support',
    ],
    playerCount: '40-200',
    storeUrl: 'https://gachcloud.net/store/hosting-minecraft',
  },
  {
    id: 'hosting-minecraft-high-performance',
    name: 'Premium',
    image: '/premium.webp',
    status: 'premium',
    statusLabel: 'Hiệu Năng Khủng',
    cpu: 'AMD Ryzen™ 9 5950x @ 5.2 GHz',
    price: 500000,
    specs: {
      ram: 'RAM DDR4',
      storage: 'Ổ Cứng NVMe SSD',
      network: 'Port 1 GBit/s',
      databases: 10,
      allocations: 3,
      backups: 1,
      additionalServers: 3,
    },
    features: [
      'Everything in Enderman',
      'Dedicated IP',
      'MySQL Database',
      'Premium Support',
    ],
    playerCount: '40-200',
    storeUrl: 'https://gachcloud.net/store/hosting-minecraft-high-performance',
  },
];
