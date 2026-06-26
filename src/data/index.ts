import { profile } from './profile';
import { skills } from './skills';
import { experience } from './experience';
import { education } from './education';
import { services } from './services';
import { portfolio } from './portfolio';
import { stats } from './stats';
import { developerActivity } from './developerActivity';

export const siteData = {
  profile,
  skills,
  experience,
  education,
  services,
  portfolio,
  stats,
  developerActivity,
} as const;
