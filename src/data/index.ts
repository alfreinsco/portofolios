import { profile } from './profile';
import { skills } from './skills';
import { experience } from './experience';
import { education } from './education';
import { services } from './services';
import { portfolio } from './portfolio';
import { testimonials } from './testimonials';
import { stats } from './stats';

export const siteData = {
  profile,
  skills,
  experience,
  education,
  services,
  portfolio,
  testimonials,
  stats,
} as const;
