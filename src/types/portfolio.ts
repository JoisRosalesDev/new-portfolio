export interface PersonalInfo {
  name: string;
  role: string;
  subtitle: string;
  bio: string;
  location: string;
  phone: string;
  email: string;
  socials: {
    github: string;
    linkedin: string;
    portfolio: string;
  };
  cvUrl: string;
  availableForWork: boolean;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
}

export interface ExperienceRole {
  title: string;
  period: string;
  achievements: string[];
}

export interface ExperienceCompany {
  company: string;
  roles: ExperienceRole[];
}

export interface SkillCategory {
  category: 'Frontend' | 'Backend & Databases' | 'Tools & Methodologies';
  skills: string[];
  highlightedSkills?: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  credentialUrl?: string;
}
