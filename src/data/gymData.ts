import { GymInfo, Review, Service, StatItem, TrainerInfo } from '../types';

import heroBgPath from '../assets/images/gym_hero_bg_1785722544907.jpg';
import trainerImgPath from '../assets/images/trainer_anmol_1785722571078.jpg';
import maleAvatarPath from '../assets/images/avatar_male_cartoon_1785722584593.jpg';
import femaleAvatarPath from '../assets/images/avatar_female_cartoon_1785722601232.jpg';
import logoPath from '../assets/images/f3_gym_logo_1785722614740.jpg';

export const gymAssetImages = {
  heroBg: heroBgPath,
  trainerAnmol: trainerImgPath,
  maleAvatar: maleAvatarPath,
  femaleAvatar: femaleAvatarPath,
  logo: logoPath,
};

export const GYM_DETAILS: GymInfo = {
  name: "F3 Unisex 24/7 Gym",
  tagline: "Transform Your Body, Transform Your Life",
  subheading: "Train Anytime at Agra's Premium 24/7 Unisex Gym.",
  address: "Gwalior Rd, opposite PS Garden, beside Baba Cycle Store, New Suraksha Vihar Colony, Nagla Padma, Rohta, Agra, Uttar Pradesh 282009",
  phone: "08077237136",
  phoneFormatted: "+91 80772 37136",
  whatsappNumber: "918077237136",
  instagramUrl: "https://www.instagram.com/anmolpandittkd_95/reels/",
  hours: "24 Hours / 7 Days a Week",
  googleMapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3550.812267868471!2d78.0039203!3d27.1186717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974775d1d6a06eb%3A0x86b039cb01dd6bc6!2sRohta%2C%20Agra%2C%20Uttar%20Pradesh%20282009!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
};

export const GYM_STATS: StatItem[] = [
  { id: 1, number: 3000, suffix: "+", label: "Registered Members", icon: "Users" },
  { id: 2, number: 300, suffix: "+", label: "Active Members", icon: "Flame" },
  { id: 3, number: 24, suffix: "/7", label: "Open All Hours", icon: "Clock" },
  { id: 4, number: 100, suffix: "%", label: "Dedication", icon: "Trophy" },
];

export const GYM_SERVICES: Service[] = [
  {
    id: 1,
    title: "Physical Fitness",
    iconName: "Activity",
    badge: "Core Conditioning",
    description: "Build endurance, agility, and overall core fitness with customized aerobic and functional workouts tailored for every level.",
    benefits: ["Full-body stamina", "Improved cardiovascular health", "Custom workout charts"]
  },
  {
    id: 2,
    title: "Weight Gain",
    iconName: "TrendingUp",
    badge: "Hypertrophy Program",
    description: "Scientifically guided muscle building programs focused on healthy weight gain, progressive overload, and tailored nutrition plans.",
    benefits: ["Clean muscle mass growth", "Macro nutrition guidance", "High-intensity hypertrophy"]
  },
  {
    id: 3,
    title: "Strength Training",
    iconName: "Dumbbell",
    badge: "Power & Heavy Lifts",
    description: "Master foundational compound lifts, heavy deadlifts, squats, and bench presses with certified spotters and heavy-duty gear.",
    benefits: ["Heavy iron barbell racks", "Core power generation", "Olympic standard plates"]
  },
  {
    id: 4,
    title: "Fat Loss",
    iconName: "Flame",
    badge: "Calorie Burn",
    description: "High-octane HIIT, cardio zone conditioning, and fat-burning protocols designed to shred fat while preserving lean muscle.",
    benefits: ["Targeted body re-composition", "High calorie expenditure", "Weekly body composition tracking"]
  },
  {
    id: 5,
    title: "Weightlifting",
    iconName: "Zap",
    badge: "Olympic Lifting",
    description: "Specialized weightlifting platforms, bumper plates, and expert coaching for Olympic clean & jerks, snatches, and powerlifting.",
    benefits: ["Dedicated rubberized lifting platforms", "Barbell technical coaching", "Grip & joint safety"]
  },
  {
    id: 6,
    title: "Running & HIIT",
    iconName: "HeartPulse",
    badge: "Cardio Zone",
    description: "Modern high-end treadmills, cross-trainers, and sprint tracks for building explosive aerobic speed and cardiovascular stamina.",
    benefits: ["Shock-absorbing smart treadmills", "Heart rate tracking zones", "Endurance building sessions"]
  },
];

export const TRAINER_DATA: TrainerInfo = {
  name: "Anmol Pandit TKD",
  designation: "Certified Fitness Coach & Taekwondo Black Belt 1st Dan",
  experience: "8+ Years Experience",
  image: trainerImgPath,
  bio: "Coach Anmol Pandit TKD combines martial arts discipline with advanced biomechanics to deliver transformational fitness results. Specialized in intense fat loss, power building, and athletic agility for both men and women.",
  specialties: [
    "Strength Training & Powerlifting",
    "Fat Loss & Body Re-composition",
    "Functional & Martial Arts Conditioning",
    "Personalized Diet & Nutrition Guidance",
    "Motivational Coaching & Mentorship"
  ],
  achievements: [
    "Taekwondo Black Belt 1st Dan Certified",
    "Transformed 500+ Agra Residents",
    "8+ Years Master Fitness Experience",
    "Certified Personal Trainer (CPT)"
  ]
};

export const REVIEWS_DATA: Review[] = [
  {
    id: 1,
    name: "Rahul Sharma",
    avatar: maleAvatarPath,
    gender: "male",
    rating: 5,
    comment: "F3 Gym is hands down the best gym in Agra! The 24/7 availability allows me to workout after my late-night shifts. Coach Anmol's guidance transformed my physique in just 4 months.",
    workoutType: "Strength Training",
    duration: "Member for 1 Year"
  },
  {
    id: 2,
    name: "Priya Singh",
    avatar: femaleAvatarPath,
    gender: "female",
    rating: 5,
    comment: "Super safe, clean, and friendly environment for women! The separate workout areas and respectful atmosphere make me feel totally comfortable. Lost 12 kgs in 5 months!",
    workoutType: "Fat Loss & HIIT",
    duration: "Member for 8 Months"
  },
  {
    id: 3,
    name: "Amit Verma",
    avatar: maleAvatarPath,
    gender: "male",
    rating: 5,
    comment: "Top notch heavy dumbbells and Olympic platforms! The Monday Fitness Challenge keeps everyone motivated. I won 50% discount on my membership last month!",
    workoutType: "Weightlifting",
    duration: "Member for 6 Months"
  },
  {
    id: 4,
    name: "Neha Gupta",
    avatar: femaleAvatarPath,
    gender: "female",
    rating: 5,
    comment: "Affordable fees with luxury gym vibes in Agra! Coach Anmol Pandit provided me with a customized diet plan that worked wonders for my weight gain goal.",
    workoutType: "Weight Gain Program",
    duration: "Member for 5 Months"
  },
  {
    id: 5,
    name: "Rohit Yadav",
    avatar: maleAvatarPath,
    gender: "male",
    rating: 5,
    comment: "Being open 24/7 is a game changer in Agra. Never crowded because people visit at various hours. Machinery is brand new and well lubricated.",
    workoutType: "Physical Fitness",
    duration: "Member for 1.5 Years"
  },
  {
    id: 6,
    name: "Pooja Mishra",
    avatar: femaleAvatarPath,
    gender: "female",
    rating: 5,
    comment: "I love the hygienic setup and air-conditioned environment. Trainer Anmol pays personal attention to every single member without extra pressure.",
    workoutType: "Core & Functional",
    duration: "Member for 7 Months"
  },
  {
    id: 7,
    name: "Akash Jain",
    avatar: maleAvatarPath,
    gender: "male",
    rating: 5,
    comment: "The energy in F3 Gym during evening workouts is electric! Best place for deadlifts and squatting heavy with proper safety bumpers.",
    workoutType: "Powerlifting",
    duration: "Member for 10 Months"
  },
  {
    id: 8,
    name: "Sneha Agarwal",
    avatar: femaleAvatarPath,
    gender: "female",
    rating: 5,
    comment: "Joined F3 for post-pregnancy weight loss. The trainers were extremely encouraging and designed a low-impact routine that helped me drop 10 kgs safely.",
    workoutType: "Fat Loss Program",
    duration: "Member for 9 Months"
  },
  {
    id: 9,
    name: "Vikas Singh",
    avatar: maleAvatarPath,
    gender: "male",
    rating: 5,
    comment: "Located right on Gwalior Road near Nagla Padma with ample parking. Very convenient location and unbeatable equipment quality in Rohta Agra.",
    workoutType: "Bodybuilding",
    duration: "Member for 2 Years"
  },
  {
    id: 10,
    name: "Ritika Sharma",
    avatar: femaleAvatarPath,
    gender: "female",
    rating: 5,
    comment: "The Monday challenge is super fun! Competing with fellow fitness lovers pushed my limits. Best unisex gym in Agra with genuine care.",
    workoutType: "Cardio & Fitness",
    duration: "Member for 4 Months"
  }
];

export const ABOUT_HIGHLIGHTS = [
  {
    title: "Modern Equipment",
    desc: "Imported biomechanical strength machines, heavy dumbbells, and cardio tracks.",
    icon: "Dumbbell"
  },
  {
    title: "Friendly Environment",
    desc: "Supportive, high-energy community where members push each other to excel.",
    icon: "Heart"
  },
  {
    title: "Separate Workout Areas",
    desc: "Dedicated zones for heavy lifting, cardio, functional martial arts, and stretching.",
    icon: "LayoutGrid"
  },
  {
    title: "Personal Guidance",
    desc: "Direct daily mentorship from Certified Fitness Coach Anmol Pandit TKD.",
    icon: "UserCheck"
  },
  {
    title: "Hygienic Facility",
    desc: "Sanitized daily, fully air-conditioned, clean lockers, and fresh hydration stations.",
    icon: "Sparkles"
  },
  {
    title: "Affordable Membership",
    desc: "Unbeatable membership rates with zero hidden charges and special student plans.",
    icon: "ShieldCheck"
  },
  {
    title: "Suitable for Men & Women",
    desc: "Safe, respectful 24/7 unisex training ground tailored for all age groups.",
    icon: "Users2"
  }
];
