import { ReactNode } from "react";

export interface NavItem {
  id: string;
  label: string;
}

export interface StatItem {
  label: string;
  value: string;
  icon: ReactNode;
  color: string;
  gradient: string;
}

export interface InfoDetail {
  label: string;
  value: string;
  isLink?: boolean;
  href?: string;
}

export interface SkillCategory {
  title: string;
  icon: ReactNode;
  items: string[];
  color: "cyan" | "violet" | "pink" | "emerald";
  description?: string;
}

export interface ProjectData {
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  emoji: string;
  eta: string;
  status: "In Progress" | "Planned" | "Next Up" | "Completed";
  githubUrl?: string;
  demoUrl?: string;
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

export interface ContactMethod {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
  isCopyable?: boolean;
}
