import type { UpstreamContribution, Project, SkillGroup, SystemSpec } from '../types';

export const PERSONAL_INFO = {
  name: 'Kushagra Kumar',
  handle: 'kk376',
  tagline: 'Frontend Learner • Open Source Contributor • Linux Systems Explorer',
  shortBio:
    'BCA graduate (8.2 CGPA [3.28 / 4.0 GPA] distinction) actively mastering Frontend development across HTML, CSS, JavaScript, React, and Tailwind CSS. Alongside modern web fundamentals, I investigate Linux system bottlenecks and ship open source contributions.',
  email: 'kkushagra86@gmail.com',
  github: 'https://github.com/kk376',
  linkedin: 'https://www.linkedin.com/in/kushagra-kumar376/',
  status: 'Learning Frontend Daily • Shipping Open Source Contributions',
  education: 'BCA (8.2 CGPA [3.28 / 4.0 GPA] Distinction), Suresh Gyan Vihar University (2022)',
  location: 'Jaipur, Rajasthan, India',
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Frontend In Progress',
    level: 'Active Daily Focus',
    accentColor: 'from-pink-500 to-rose-500',
    skills: [
      { name: 'HTML5 & Semantic Elements', tag: 'Core' },
      { name: 'CSS3, Flexbox & Grid', tag: 'Layout' },
      { name: 'Responsive Web Design', tag: 'UI/UX' },
      { name: 'JavaScript ES6+ & DOM', tag: 'Logic' },
      { name: 'Tailwind CSS', tag: 'Styling' },
      { name: 'React & Component Architecture', tag: 'Framework' },
    ],
  },
  {
    title: 'Data & Core Backend',
    level: 'Completed Foundation',
    accentColor: 'from-cyan-500 to-blue-500',
    skills: [
      { name: 'Python Core & CLI Apps', tag: 'Language' },
      { name: 'MySQL Relational Queries', tag: 'Database' },
      { name: 'Joins, CTEs & Window Functions', tag: 'SQL' },
      { name: 'CRUD Architectures & File Handling', tag: 'Storage' },
      { name: 'Exception Handling & pathlib', tag: 'Python' },
    ],
  },
  {
    title: 'Environment & Tooling',
    level: 'Daily Workstation',
    accentColor: 'from-violet-500 to-purple-500',
    skills: [
      { name: 'Fedora 44 Workstation & Wayland', tag: 'OS' },
      { name: 'Git & GitHub Daily Commits', tag: 'VCS' },
      { name: 'Bash Scripting & Automation', tag: 'Shell' },
      { name: 'AI Pair-Programming & Prompt Craft', tag: 'Superpower' },
      { name: 'Zed Editor & VS Code', tag: 'Tooling' },
    ],
  },
];

export const UPSTREAM_CONTRIBUTIONS: UpstreamContribution[] = [
  {
    id: 'gods-eye-view-pr-216',
    platform: 'github',
    type: 'pr',
    repo: 'gods-eye-view',
    repoOwner: 'bilawalsidhu',
    refLabel: '#216',
    title: 'fix(a11y): add accessible names to hud sliders and inputs',
    url: 'https://github.com/bilawalsidhu/gods-eye-view/pull/216',
    status: 'merged',
    category: 'merged',
    date: 'Sep 2026',
    summary:
      'Enhanced accessibility and screen reader support by adding accessible names, ARIA labels, and keyboard focus states to HUD controls.',
    myRoleNote:
      'Audited DOM accessibility issues in the UI and guided AI to patch the missing accessible labels.',
    tags: ['GitHub PR', 'Merged Upstream', 'Accessibility', 'WCAG', 'Frontend'],
    accentGradient: 'from-pink-500 to-rose-500',
  },
  {
    id: 'gods-eye-view-pr-214',
    platform: 'github',
    type: 'pr',
    repo: 'gods-eye-view',
    repoOwner: 'bilawalsidhu',
    refLabel: '#214',
    title: 'feat(styles): add Tactical Sonar visual style in Cesium',
    url: 'https://github.com/bilawalsidhu/gods-eye-view/pull/214',
    status: 'open',
    category: 'active',
    date: 'Sep 2026',
    summary:
      'Engineered a complete tactical military sonar shader pipeline for 3D Cesium globes with rotating phosphor beam and range rings.',
    myRoleNote:
      'Pitched the military sonar visual style concept and paired with AI to implement the GLSL shader math, phosphor decay trails, and nautical mile rings.',
    tags: ['GitHub PR', 'Active / In Review', 'Cesium.js', 'GLSL Shader', 'WebGL'],
    accentGradient: 'from-cyan-500 to-blue-600',
    diagnostic: {
      symptom: 'Rotating radar beam suffered projection warping and clipping artifacts at high latitudes on 3D globe tiles due to planar distortion.',
      rootCause: 'Planar polar coordinates were calculated without correcting for ellipsoidal curvature, causing distortion as distance from sweep origin increased.',
      fix: 'Engineered normalized Mercator distance field mapping in GLSL vertex shader with exponential phosphor decay and smoothstep ring thresholds.',
      diffSnippet: {
        file: 'shaders/tactical_sonar.glsl',
        removed: [
          'float sweep = sin(u_time * 2.0 - uv.x * 3.14159);',
        ],
        added: [
          'float angle = mod(atan(pos.y, pos.x) - u_sweep_heading, 6.283185);',
          'float beam = smoothstep(0.12, 0.0, angle) * exp(-angle * 3.8);',
          'float ring = smoothstep(0.02, 0.0, abs(fract(dist * 5.0) - 0.5));',
        ],
      },
    },
  },
  {
    id: 'mission-center-mr-117',
    platform: 'gitlab',
    type: 'mr',
    repo: 'gng',
    repoOwner: 'mission-center-devs',
    refLabel: '!117',
    title: 'gpu: Avoid waking suspended discrete GPUs during periodic refresh',
    url: 'https://gitlab.com/mission-center-devs/gng/-/merge_requests/117',
    status: 'open',
    category: 'systems',
    date: 'Sep 2026',
    summary:
      'Fixed Wayland desktop micro-stutters and freezes on hybrid AMD/NVIDIA laptops caused by NVTop waking the sleeping dGPU from D3cold every polling tick.',
    myRoleNote:
      'Discovered the issue on my laptop, isolated the PCIe power thrash, and guided AI to inspect sysfs runtime_status in-memory and temporarily unlink sleeping nodes from NVTop list heads.',
    tags: ['GitLab MR', 'Active / In Review', 'Linux Kernel', 'PCIe D3cold', 'Rust'],
    accentGradient: 'from-emerald-500 to-cyan-500',
    diagnostic: {
      symptom: 'Periodic 1000ms NVTop poll woke sleeping NVIDIA discrete GPU from PCIe D3cold power state, triggering repetitive desktop Wayland micro-stutters and 10W battery drain.',
      rootCause: 'NVTop device list traversal performed unconditional open() and ioctl queries on /sys/bus/pci/devices nodes without pre-checking Linux kernel runtime PM status in memory.',
      fix: 'Implemented lightweight sysfs runtime_status parsing before polling. If status is suspended, device query is skipped, keeping the GPU sleeping.',
      diffSnippet: {
        file: 'src/nvtop_gpu.rs',
        removed: [
          '// Unconditionally poll device telemetry',
          'let metrics = query_device_metrics(device_fd);',
        ],
        added: [
          '// Check runtime PM status without waking PCIe bus',
          'if is_device_suspended(device_sysfs_path) {',
          '    return Ok(CachedGpuState::Sleeping);',
          '}',
          'let metrics = query_device_metrics(device_fd);',
        ],
      },
    },
  },
  {
    id: 'zed-issue-63727',
    platform: 'github',
    type: 'issue',
    repo: 'zed',
    repoOwner: 'zed-industries',
    refLabel: '#63727',
    title: 'Linux/Wayland: app_will_quit timeout on multi-repo worktrees',
    url: 'https://github.com/zed-industries/zed/issues/63727',
    status: 'investigated',
    category: 'systems',
    date: 'Sep 2026',
    summary:
      'Diagnosed Zed editor shutdown hang on Linux/Wayland caused by a 200ms GPUI timeout competing against inotify teardown and SQLite flush.',
    myRoleNote:
      'Noticed repetitive hang on window close, captured Worker thread hang traces, and guided AI to trace the exact competing shutdown code paths in GPUI.',
    tags: ['GitHub Issue', 'Investigated', 'Zed GPUI', 'Linux/Wayland', 'inotify'],
    accentGradient: 'from-violet-500 to-purple-600',
    diagnostic: {
      symptom: 'Zed window closing on Fedora Wayland workstation triggered a 200ms user-visible hang before compositor focus shifted back to desktop.',
      rootCause: 'GPUI app_will_quit lifecycle handler imposed a fixed 200ms wait barrier competing against inotify watcher teardown and unsaved buffer SQLite flush on multi-repo worktrees.',
      fix: 'Captured thread backtraces demonstrating lock contention between thread pool drain and Wayland event loop, submitted report with reproducer for maintainers.',
      diffSnippet: {
        file: 'crates/gpui/src/platform/linux/wayland.rs',
        removed: [
          'thread::sleep(Duration::from_millis(200)); // wait for worktree teardown',
        ],
        added: [
          '// Asynchronously signal watcher shutdown before socket disconnect',
          'watcher.cancel_all_tokens();',
          'event_loop.drain_with_timeout(Duration::from_millis(40));',
        ],
      },
    },
  },
];

export const FLAGSHIP_PROJECTS: Project[] = [
  {
    id: 'fedora-post-install',
    title: 'fedora-post-install',
    tagline: 'Automated Post-Installation & Hardening Suite',
    description:
      'Modular bash provisioning suite for Fedora 44 Workstation. Automatically sets up bit-perfect audio pipelines, HD Bluetooth audio, verified checksum downloads, btop monitoring, and Flatpaks with zero hassle.',
    category: 'linux',
    tags: ['Bash', 'Fedora 44', 'System Automation', 'Shellcheck'],
    repoUrl: 'https://github.com/kk376/fedora-post-install',
    badge: 'v5.6.0',
    highlightMetric: '3,100+ Lines of Bash',
    accentColor: 'emerald',
    starsCount: 19,
  },
  {
    id: 'kkfetch',
    title: 'kkfetch',
    tagline: 'Sub-Millisecond Rust System Information Fetcher',
    description:
      'Fast system CLI tool in Rust with custom ASCII art geometry, direct sysinfo kernel queries without subshell overhead, and documented safety invariants.',
    category: 'systems',
    tags: ['Rust', 'CLI Tool', 'Linux Kernel', 'Memory Safety'],
    repoUrl: 'https://github.com/kk376/kkfetch',
    badge: 'Fast CLI',
    highlightMetric: '5.6x Faster than Fastfetch',
    accentColor: 'cyan',
    starsCount: 4,
  },
  {
    id: 'cli-python-crud-project',
    title: 'cli-python-crud-project',
    tagline: 'Complete Command-Line File & Directory Manager',
    description:
      'Interactive Python terminal manager implementing Create, Read, Update, Delete operations using pathlib, custom functions, and robust exception handling.',
    category: 'python',
    tags: ['Python', 'pathlib', 'CRUD Manager', 'CLI'],
    repoUrl: 'https://github.com/kk376/cli-python-crud-project',
    badge: 'Python Core',
    highlightMetric: 'Full CRUD Operations',
    accentColor: 'violet',
    starsCount: 0,
  },
  {
    id: 'mini-projects-collection',
    title: '10 Python Mini-Projects Collection',
    tagline: 'Interactive Terminal Utilities Suite',
    description:
      'Curated collection of ten terminal programs: Expense Tracker with budgets, Student Grade Manager, Password Strength Checker, Contact Book, and Quiz App.',
    category: 'python',
    tags: ['Python', 'Data Structures', 'Functions', 'Mini-Apps'],
    repoUrl: 'https://github.com/kk376/ai-ml-journey/tree/main/Python_Mini_Projects',
    badge: '10 Apps',
    highlightMetric: '10 Interactive Apps',
    accentColor: 'pink',
    starsCount: 0,
  },
];

export const SYSTEM_SPECS: SystemSpec = {
  user: 'kk376',
  host: 'Thin A15 B7UCX',
  os: 'Fedora Linux 44 (Workstation Edition) x86_64',
  kernel: 'Linux 7.2.4-200.fc44.x86_64',
  uptime: '1 day, 15 hours, 36 mins',
  packages: '2801 (rpm), 2 (flatpak), 1 (cargo), 26 (pip)',
  shell: 'fish 4.6.0',
  terminal: 'ghostty 1.3.1',
  cpu: 'AMD Ryzen 5 7535HS (6c 12t) @ 3.84 GHz',
  gpu: 'NVIDIA GeForce RTX 2050 (4 GiB) / AMD Radeon 680M',
  memory: '3.76 GiB / 14.82 GiB (25%)',
  editor: 'Zed Editor / VS Code',
};
