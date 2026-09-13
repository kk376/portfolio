export type ContributionCategory = 'all' | 'merged' | 'systems' | 'discussions' | 'packaging';

export type ContributionType = 'pr' | 'mr' | 'issue' | 'discussion' | 'package';

export interface UpstreamContribution {
  id: string;
  platform: 'github' | 'gitlab';
  type: ContributionType;
  repo: string;
  repoOwner: string;
  refLabel: string;
  title: string;
  url: string;
  status: 'merged' | 'open' | 'investigated' | 'active';
  category: ContributionCategory;
  date: string;
  summary: string;
  myRoleNote: string;
  tags: string[];
  accentGradient: string;
  hasInteractiveDemo?: boolean;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'linux' | 'systems' | 'python';
  tags: string[];
  repoUrl: string;
  badge: string;
  highlightMetric: string;
  accentColor: 'cyan' | 'pink' | 'violet' | 'emerald' | 'amber';
  starsCount?: number;
}

export interface SkillGroup {
  title: string;
  level: string;
  accentColor: string;
  skills: { name: string; tag: string }[];
}

export interface SystemSpec {
  user: string;
  host: string;
  os: string;
  kernel: string;
  uptime: string;
  packages: string;
  shell: string;
  terminal: string;
  cpu: string;
  gpu: string;
  memory: string;
  editor: string;
}
