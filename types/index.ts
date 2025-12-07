import { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface SkillItem {
  name: string;
  icon?: LucideIcon;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ExperienceItem {
  company?: string;
  project: string;
  role: string;
  period: string;
  techStack: string[];
  description: string;
  contributions: string[];
  impact: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  techStack: string[];
  liveLink?: string;
  githubLink?: string;
  image: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
}
