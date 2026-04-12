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
  type: 'email' | 'github' | 'linkedin' | 'website' | 'link';
  label: string;
  url: string;
}

export interface Experience {
  company: string;
  role: string;
  duration?: string; // Optional if calculated dynamically
  startDate?: string; // ISO date string for dynamic calculation, e.g., '2021-11-01'
  period: string;
  location?: string;
  description?: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}

export interface PortfolioData {
  email: string;
  personal: PersonalInfo;
  experience: Experience[];
  education: Education[];
  skills: SkillCategory[];
  projects: Project[];
  contact: ContactLink[];
}
