
export interface PersonalInfo {
  name: string;
  title: string;
  shortBio: string;
  email: string;
  phone: string;
  location: string;
  education: string;
  university: string;
  graduationYear: string;
  status: string;
  githubUrl: string;
  journeyRepoUrl: string;
  crudRepoUrl: string;
  miniProjectsUrl: string;
  linkedinUrl: string;
}

export interface NavItem {
  id: string;
  label: string;
}

export interface StatMetric {
  label: string;
  value: string;
  iconName: "book" | "award" | "terminal" | "trending";
  color: string;
  gradient: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: "database" | "code" | "globe" | "rocket";
  items: string[];
  color: "cyan" | "violet" | "emerald" | "pink";
}

export interface Project {
  name: string;
  desc: string;
  tags: string[];
  gradient: string;
  iconName: "terminal" | "folder";
  status: string;
  githubUrl: string;
}

export interface RoadmapProject {
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  emoji: string;
  eta: string;
}

export interface TimelineEntry {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  side: "left" | "right";
  highlight?: boolean;
  category?: "education" | "experience";
  highlights?: string[];
}
