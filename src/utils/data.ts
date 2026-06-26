import { siteData } from '../data';

export type DatabaseType = {
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
      whatsapp: string;
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
  stats: {
    projectsCompleted: number;
    happyClients: number;
    yearsExperience: number;
    awardsWon: number;
  };
  portfolio: Array<{
    title: string;
    desc: string;
    category: string;
    techs: string[];
    image: string;
    images?: string[];
    link: string;
    features: string[];
  }>;
  developerActivity: {
    githubUsername: string;
    githubContributionsUrl: string;
    githubStatsUrl: string;
    githubStreakUrl: string;
    githubTopLanguagesUrl: string;
    githubProfileUrl: string;
    wakatimeUsername: string;
    wakatimeActivityUrl: string;
    wakatimeLanguagesUrl: string;
    wakatimeProfileUrl: string;
  };
};

export function getData(): DatabaseType {
  return siteData as unknown as DatabaseType;
}

export function getProfile() {
  return getData().profile;
}

export function getSkills() {
  return getData().skills;
}

export function getExperience() {
  return getData().experience;
}

export function getEducation() {
  return getData().education;
}

export function getServices() {
  return getData().services;
}

export function getStats() {
  return getData().stats;
}

export function getPortfolio() {
  return getData().portfolio;
}

export function getDeveloperActivity() {
  return getData().developerActivity;
}
