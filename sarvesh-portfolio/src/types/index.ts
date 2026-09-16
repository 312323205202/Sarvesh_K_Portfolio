export interface SocialLinks {
  github: string;
  linkedin: string;
  leetcode: string;
  email: string;
  phone: string;
}

export interface PersonalInfo {
  name: string;
  firstName: string;
  location: string;
  title: string;
  focusAreas: string[];
  tagline: string;
  summary: string;
  social: SocialLinks;
  resumePath: string;
}

export interface SkillCategory {
  id: string;
  label: string;
  items: string[];
}

export type ProjectStatus = "completed" | "ongoing";

export interface ArchitectureStep {
  label: string;
  detail?: string;
}

export interface ProjectFact {
  label: string;
  value: string;
}

export interface CaseStudy {
  problem: string;
  approach: string;
  implementation: string;
}

export interface StackGroup {
  label: string;
  items: string[];
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  status: ProjectStatus;
  /** Flat list used for the compact chips on the card. */
  technologies: string[];
  /** Grouped view used in the "Stack" tab of the case study. */
  stack: StackGroup[];
  facts?: ProjectFact[];
  features: string[];
  concepts?: string[];
  architecture: ArchitectureStep[];
  caseStudy: CaseStudy;
  github?: string;
  githubIsProfile?: boolean;
  demo?: string;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  points: string[];
}

export interface EducationEntry {
  institution: string;
  credential: string;
  period: string;
  detail: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface CourseworkGroup {
  category: string;
  courses: string[];
}
