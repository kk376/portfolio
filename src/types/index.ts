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
  technicalDetails: string;
  tags: string[];
  isVibePrototyped?: boolean;
  hasInteractiveDemo?: boolean;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'systems' | 'linux' | 'tools';
  tags: string[];
  repoUrl: string;
  version?: string;
  highlightMetric: string;
  methodologyNote?: string;
  starsCount?: number;
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
