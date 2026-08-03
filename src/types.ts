export interface Review {
  id: number;
  name: string;
  avatar: string;
  gender: 'male' | 'female';
  rating: number;
  comment: string;
  workoutType: string;
  duration: string;
}

export interface Service {
  id: number;
  title: string;
  iconName: string;
  description: string;
  badge: string;
  benefits: string[];
}

export interface GymInfo {
  name: string;
  tagline: string;
  subheading: string;
  address: string;
  phone: string;
  phoneFormatted: string;
  whatsappNumber: string;
  instagramUrl: string;
  googleMapEmbedUrl: string;
  hours: string;
}

export interface TrainerInfo {
  name: string;
  designation: string;
  experience: string;
  specialties: string[];
  bio: string;
  achievements: string[];
  image: string;
}

export interface StatItem {
  id: number;
  number: number;
  suffix: string;
  label: string;
  icon: string;
}
