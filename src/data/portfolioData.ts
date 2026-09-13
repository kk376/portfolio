import type { Project, UpstreamContribution, SystemSpec } from '../types';

export const SYSTEM_SPECS: SystemSpec = {
  user: 'kk376',
  host: 'victus-station',
  os: 'Fedora Linux 44 (Workstation Edition)',
  kernel: 'Linux 6.14.0-rc5-x86_64',
  uptime: '4h 38m',
  packages: '1942 (rpm), 34 (flatpak)',
  shell: 'bash 5.2.32',
  terminal: 'ghostty / alacritty',
  cpu: 'AMD Ryzen 5 7535HS (12) @ 4.55 GHz',
  gpu: 'NVIDIA GeForce RTX 2050 Mobile / AMD Radeon 660M',
  memory: '4812 MiB / 15480 MiB (31%)',
  editor: 'Zed Editor / Antigravity',
};

export const UPSTREAM_CONTRIBUTIONS: UpstreamContribution[] = [
  {
    id: 'gods-eye-view-pr-214',
    repo: 'gods-eye-view',
    repoOwner: 'thewh1teagle',
    prNumber: 214,
    prTitle: 'Tactical Sonar Visual Style (Cesium 3D Shader)',
    prUrl: 'https://github.com/thewh1teagle/gods-eye-view/pull/214',
    status: 'merged',
    description:
      'Engineered a complete tactical military sonar shader pipeline in Cesium. Features acoustic range rings, 360-degree rotating radar sweep with phosphor decay, and real-time contact blips.',
    impact:
      'Gives users an authentic submarine and radar situational awareness HUD directly rendered atop the 3D globe.',
    techStack: ['Cesium.js', 'WebGL / GLSL', 'TypeScript', 'Shader Math'],
    isVibeCoded: true,
    sonarPreview: true,
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'fedora-post-install',
    title: 'fedora-post-install',
    subtitle: 'Automated Post-Installation & Hardening Suite',
    description:
      'Modular bash provisioning suite for Fedora 42/43/44 Workstation. Installs modern development toolchains, verified checksum downloads, btop system telemetry, NVIDIA drivers, and optimized flatpak runtimes with zero manual hassle.',
    category: 'linux',
    tags: ['Bash', 'Fedora', 'Linux Automation', 'Hardening', 'Shell'],
    githubUrl: 'https://github.com/kk376/fedora-post-install',
    badge: 'v5.5.7 Production',
    isVibeCoded: true,
    vibeNotes:
      'Architecture and modular pipelines vibe coded with AI acceleration; hardened through rigorous shellcheck rules and checksum verification.',
    highlightMetric: '1,600+ Lines of Pure Bash',
    starsCount: 42,
    forksCount: 9,
  },
  {
    id: 'kkfetch',
    title: 'kkfetch',
    subtitle: 'Blazing Fast Rust System Information Fetcher',
    description:
      'Microsecond latency system fetcher written in safe, idiomatic Rust. Features custom ASCII art geometry, direct sysinfo kernel queries without subprocess overhead, and audited unsafe FFI blocks with explicit safety invariant proofs.',
    category: 'systems',
    tags: ['Rust', 'CLI', 'Systems Programming', 'Linux Kernel', 'Performance'],
    githubUrl: 'https://github.com/kk376/kkfetch',
    badge: 'Sub-Millisecond',
    isVibeCoded: true,
    vibeNotes:
      'Vibe coded initial hardware fetch logic, then de-sloppified with cargo clippy, cargo audit, and strict SAFETY invariant docstrings.',
    highlightMetric: '< 1.8ms Execution Time',
    starsCount: 18,
    forksCount: 3,
  },
  {
    id: 'kkpdf-zed',
    title: 'kkpdf-zed',
    subtitle: 'Native PDF Document Engine for Zed Editor',
    description:
      'High-performance document viewing extension engineered specifically for Zed. Brings native PDF rendering, responsive viewport scaling, and keyboard-centric document navigation directly into the modern GPU-accelerated editor.',
    category: 'systems',
    tags: ['Rust', 'WebAssembly', 'Zed Extension', 'PDF Engine'],
    githubUrl: 'https://github.com/kk376/kkpdf-zed',
    badge: 'Zed Ecosystem',
    isVibeCoded: true,
    vibeNotes:
      'Interface and WASM bridges rapidly vibe coded, audited against memory leaks and viewport render bounds.',
    highlightMetric: 'Native Viewport LRU',
    starsCount: 12,
    forksCount: 2,
  },
  {
    id: 'dev-suite',
    title: 'dev-suite',
    subtitle: 'Antigravity Engineering Discipline & Guardrails',
    description:
      'A collection of automated engineering workflows, zero em dash lint gates, 17-category vibe-check defensive security audits, and agentic pair-programming rules built for top-tier developer velocity.',
    category: 'linux',
    tags: ['Automation', 'Zero-Trust', 'DevOps', 'Security Audits'],
    githubUrl: 'https://github.com/kk376/dev-suite',
    badge: 'Engineering Guardrails',
    isVibeCoded: true,
    vibeNotes:
      'Synthesizes agentic automation with strict deterministic quality gates and zero-tolerance policy for AI tell artifacts.',
    highlightMetric: '17 Security Categories',
    starsCount: 8,
    forksCount: 1,
  },
];

export const VIBE_CODING_MANIFESTO = {
  title: 'The Vibe Coding Manifesto & Engineering Rigor',
  tagline: 'Crafted with Vibe Coding. Hardened with Deep Systems Discipline.',
  principles: [
    {
      label: 'Supersonic Prototyping',
      desc: 'Ideas should not languish in bureaucracy. We leverage modern LLMs and agentic pair-programming to translate raw architectural ideas into working code in minutes instead of weeks.',
    },
    {
      label: 'Zero Blindness & Full Transparency',
      desc: 'No fake claims of handcrafting every semicolon in solitary confinement. We declare our vibe coding workflows openly and proudly, because transparency builds authentic trust.',
    },
    {
      label: 'Defensive Security & Safety Invariants',
      desc: 'Rapid code generation is worthless if it leaks memory or swallows errors. Every vibe coded component is hardened: safe FFI invariants, zero-warning test passes, and strict audit checklists.',
    },
    {
      label: 'Minimal Maintainable Footprint',
      desc: 'Less code is always better code. We ruthlessly purge boilerplate, avoid bulky runtime bloat, and maintain lean dependencies that can be comprehended in a single sitting.',
    },
  ],
};
