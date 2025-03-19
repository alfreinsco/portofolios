import databaseJson from '@/database.json';

export interface DatabaseType {
  profile: {
    name: string;
    title: string;
    location: string;
    phone: string;
    email: string;
    bio: string;
    avatar: string;
    available: boolean;
    socialMedia: {
      linkedin: string;
      github: string;
      twitter: string;
      instagram: string;
    };
  };
  skills: {
    programming: Array<{ name: string; level: number }>;
    design: Array<{ name: string; level: number }>;
    other: Array<{ name: string; level: number }>;
  };
  experience: Array<{
    position: string;
    company: string;
    location: string;
    period: string;
    description: string;
  }>;
  education: Array<{
    degree: string;
    institution: string;
    location: string;
    period: string;
    description: string;
  }>;
  services: Array<{
    title: string;
    icon: string;
    description: string;
  }>;
  testimonials: Array<{
    id: number;
    name: string;
    position: string;
    company: string;
    avatar: string;
    text: string;
  }>;
  stats: {
    projectsCompleted: number;
    happyClients: number;
    yearsExperience: number;
    awardsWon: number;
  };
  portfolio: Array<{
    id: number;
    title: string;
    desc: string;
    category: string;
    techs: string[];
    image: string;
    features: string[];
  }>;
}

// Fungsi untuk mendapatkan semua data
export function getData(): DatabaseType {
  return databaseJson as DatabaseType;
}

// Fungsi untuk mendapatkan data profil
export function getProfile() {
  return getData().profile;
}

// Fungsi untuk mendapatkan data skills
export function getSkills() {
  return getData().skills;
}

// Fungsi untuk mendapatkan data experience
export function getExperience() {
  return getData().experience;
}

// Fungsi untuk mendapatkan data education
export function getEducation() {
  return getData().education;
}

// Fungsi untuk mendapatkan data services
export function getServices() {
  return getData().services;
}

// Fungsi untuk mendapatkan data testimonials
export function getTestimonials() {
  return getData().testimonials;
}

// Fungsi untuk mendapatkan data stats
export function getStats() {
  return getData().stats;
}

// Tambahkan fungsi ini
export function getPortfolio() {
  return getData().portfolio;
} 