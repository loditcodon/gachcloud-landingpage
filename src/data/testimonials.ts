export interface Testimonial {
  name: string;
  avatar: string;
  game: string;
  quote: string;
  rating: number;
  verified: boolean;
  hostingDuration: string;
  serverSize: string;
  location: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Alex R.',
    avatar: 'https://placehold.co/50',
    game: 'Minecraft Server Owner',
    quote:
      'GachCloud transformed our community server. Incredible performance and zero downtime! The control panel makes managing our modded server effortless.',
    rating: 5,
    verified: true,
    hostingDuration: '2+ years',
    serverSize: '100+ players',
    location: 'New York',
    date: '2 weeks ago',
  },
  {
    name: 'Sarah T.',
    avatar: 'https://placehold.co/50',
    game: 'Rust Community Leader',
    quote:
      'The most reliable hosting I\'ve ever used. Support team is incredibly responsive and knowledgeable. Our community has grown significantly since switching to GachCloud.',
    rating: 5,
    verified: true,
    hostingDuration: '1.5 years',
    serverSize: '200+ players',
    location: 'London',
    date: '1 month ago',
  },
  {
    name: 'Mike D.',
    avatar: 'https://placehold.co/50',
    game: 'Valheim Server Admin',
    quote:
      'The automatic mod updates and backup systems are fantastic. Haven\'t had a single issue with performance or downtime. Worth every penny!',
    rating: 5,
    verified: true,
    hostingDuration: '8 months',
    serverSize: '50+ players',
    location: 'Frankfurt',
    date: '3 days ago',
  },
  {
    name: 'Elena K.',
    avatar: 'https://placehold.co/50',
    game: 'ARK Cluster Owner',
    quote:
      'Managing multiple ARK servers used to be a nightmare until we found GachCloud. The cluster management tools are incredibly intuitive.',
    rating: 5,
    verified: true,
    hostingDuration: '1 year',
    serverSize: '150+ players',
    location: 'Sydney',
    date: '1 week ago',
  },
];
