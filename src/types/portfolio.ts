export interface PersonalInfo {
  name: string;
  tagline: string;
  about: string[];
}

export interface Skill {
  name: string;
  url: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  githubUrl: string;
}

export interface ContactLink {
  type: 'email' | 'github' | 'website';
  label: string;
  url: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  skills: SkillCategory[];
  projects: Project[];
  contact: ContactLink[];
}
