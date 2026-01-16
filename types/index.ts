import { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface SkillItem {
  name: string;
  icon?: LucideIcon;
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
  icon: string;
}

import { ComponentPropsWithoutRef, RefAttributes } from "react";
export type IconWeight =
  | "thin"
  | "light"
  | "regular"
  | "bold"
  | "fill"
  | "duotone";
export interface IconProps
  extends ComponentPropsWithoutRef<"svg">,
    RefAttributes<SVGSVGElement> {
  alt?: string;
  color?: string;
  size?: string | number;
  weight?: IconWeight;
  mirrored?: boolean;
}
export type Icon = React.ForwardRefExoticComponent<IconProps>;

export interface Project {
  title: string;
  description: string;
  projectSource: string;
  status: "live" | "inProgress";
  liveLink: string | undefined;
  imgSrc: string;
  alt: string;
  contribution: string;
  toolsId: string[];
}

export interface SkillCategory {
  title: string;
  skillSlugs: string[];
}
export interface Skill {
  slug: string;
  name: string;
  img: string;
}
