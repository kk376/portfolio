export type ProjectCategory = 'all' | 'upstream' | 'systems' | 'linux';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  badge?: string;
  isVibeCoded: boolean;
  vibeNotes: string;
  highlightMetric?: string;
  starsCount?: number;
  forksCount?: number;
}

export interface UpstreamContribution {
  id: string;
  repo: string;
  repoOwner: string;
  prNumber: number;
  prTitle: string;
  prUrl: string;
  status: 'merged' | 'open' | 'active';
  description: string;
  impact: string;
  techStack: string[];
  isVibeCoded: boolean;
  sonarPreview?: boolean;
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
