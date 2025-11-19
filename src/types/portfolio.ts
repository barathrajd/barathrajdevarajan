export interface PersonalInfo {
  name: string;
  tagline: string;
  about: string[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  githubUrl: string;
}

export interface ContactLink {
  type: 'email' | 'github';
  label: string;
  url: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  skills: SkillCategory[];
  projects: Project[];
  contact: ContactLink[];
}
