/**
 * Static Data Store for Kushagra Kumar's Developer Portfolio
 *
 * Centralized constant datasets used across Hero, About, Skills, Experience, and Contact components.
 */

import type {
  PersonalInfo,
  NavItem,
  StatMetric,
  SkillCategory,
  Project,
  RoadmapProject,
  TimelineEntry,
} from "../types";

/**
 * Core personal metadata, contact coordinates, and external repository links.
 */
export const PERSONAL_INFO: PersonalInfo = {
  name: "Kushagra Kumar",
  title: "Python & SQL Learner | Data Analytics Journey",
  shortBio:
    "BCA graduate (8.2 CGPA) building a strong foundation in Python and MySQL. Building hands-on CLI tools and practicing daily on GitHub as I work toward Data Analytics and AI/ML.",
  email: "kkushagra86@gmail.com",
  phone: "+91 79767 53740",
  location: "India",
  education: "BCA (8.2 CGPA)",
  university: "Suresh Gyan Vihar University",
  graduationYear: "2022",
  status: "Learning · Building Daily",
  githubUrl: "https://github.com/kk376",
  journeyRepoUrl: "https://github.com/kk376/ai-ml-journey",
  crudRepoUrl: "https://github.com/kk376/cli-python-crud-project",
  miniProjectsUrl: "https://github.com/kk376/ai-ml-journey/tree/main/Python_Mini_Projects",
  linkedinUrl: "https://www.linkedin.com/in/kushagra-kumar376/",
};

/**
 * Primary navigation item definitions corresponding to section HTML IDs.
 */
export const NAV_ITEMS: readonly NavItem[] = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Journey" },
  { id: "contact", label: "Contact" },
] as const;

/**
 * Metric highlights displayed in the Stats component.
 */
export const STATS_DATA: StatMetric[] = [
  {
    label: "Education",
    value: "BCA (2022)",
    iconName: "book",
    color: "text-cyan-400",
    gradient: "from-cyan-500/20 to-cyan-500/5",
  },
  {
    label: "Degree CGPA",
    value: "8.2",
    iconName: "award",
    color: "text-pink-400",
    gradient: "from-pink-500/20 to-pink-500/5",
  },
  {
    label: "Built So Far",
    value: "10+ Projects",
    iconName: "terminal",
    color: "text-emerald-400",
    gradient: "from-emerald-500/20 to-emerald-500/5",
  },
  {
    label: "Accountability",
    value: "Daily Git",
    iconName: "trending",
    color: "text-violet-400",
    gradient: "from-violet-500/20 to-violet-500/5",
  },
];

/**
 * Technical skill proficiencies grouped by category.
 */
export const SKILLS_DATA: SkillCategory[] = [
  {
    title: "MySQL & Relational Databases",
    description: "Completed course & practice queries",
    iconName: "database",
    color: "cyan",
    items: [
      "SELECT, WHERE, LIKE Wildcards",
      "GROUP BY, HAVING, Aggregations",
      "Multi-Table Joins & UNIONS",
      "String Functions & CASE WHEN",
      "Subqueries & Derived Tables",
      "Window Functions (OVER, PARTITION BY, RANK)",
      "Common Table Expressions (CTEs)",
      "Stored Procedures & Triggers/Events",
    ],
  },
  {
    title: "Core Python Programming",
    description: "Core fundamentals & mini-projects",
    iconName: "code",
    color: "violet",
    items: [
      "Variables, Data Types & Operators",
      "Conditionals (if/elif/else) & Loops",
      "Functions & Scope",
      "Data Structures: Lists, Tuples, Sets, Dicts",
      "Exception Handling (try/except/finally)",
      "File Handling (read/write/pathlib)",
      "Interactive CLI Application Design",
      "In Progress: Object-Oriented Programming (OOP)",
    ],
  },
  {
    title: "Tools & Environment",
    description: "Version control & operating system",
    iconName: "globe",
    color: "emerald",
    items: [
      "Git & GitHub (Daily Commits)",
      "Linux (Fedora 44 / Bash)",
      "VS Code & Antigravity IDE",
      "Command Line Tools",
      "Markdown Documentation",
    ],
  },
  {
    title: "Upcoming on Learning Roadmap",
    description: "Next topics after completing OOP",
    iconName: "rocket",
    color: "pink",
    items: [
      "Python OOP Projects",
      "NumPy & Pandas (Data Manipulation)",
      "Data Cleaning & Exploratory Analysis (EDA)",
      "Microsoft Excel (Formulas & Pivot Tables)",
      "Power BI (Reports & Visualizations)",
    ],
  },
];

/**
 * Completed projects with live repository links.
 */
export const PROJECTS_DATA: Project[] = [
  {
    name: "CLI Python CRUD Project",
    desc: "A complete command-line file and directory manager built in Python. Implements full Create, Read, Update, Delete operations using pathlib, custom functions, and robust exception handling.",
    tags: ["Python", "File Handling", "pathlib", "CLI", "CRUD"],
    gradient: "from-cyan-500 to-blue-600",
    iconName: "terminal",
    status: "Completed",
    githubUrl: PERSONAL_INFO.crudRepoUrl,
  },
  {
    name: "10 Python Mini-Projects Collection",
    desc: "A curated suite of ten interactive terminal applications: Expense Tracker with budgets, Student Grade Manager with averages, Password Strength Checker, Contact Book, Word Frequency Counter, Quiz App, Calculator, and more.",
    tags: ["Python", "Data Structures", "Functions", "CLI Apps"],
    gradient: "from-violet-500 to-purple-600",
    iconName: "folder",
    status: "Completed",
    githubUrl: PERSONAL_INFO.miniProjectsUrl,
  },
];

/**
 * Roadmap projects slated for implementation.
 */
export const ROADMAP_PROJECTS_DATA: RoadmapProject[] = [
  {
    title: "MySQL Analysis & Query Portfolio",
    description:
      "Complex analytical querying across relational databases using multi-table joins, CTEs, Window Functions, and stored procedures on real-world datasets.",
    tags: ["MySQL", "Window Functions", "CTEs", "Queries"],
    gradient: "from-cyan-500 to-teal-600",
    emoji: "🗄️",
    eta: "Up Next (After SQL Revision)",
  },
  {
    title: "Python OOP Application",
    description:
      "A modular application built with Object-Oriented Programming (classes, inheritance, encapsulation, polymorphism) in Python.",
    tags: ["Python", "OOP", "Classes", "Software Design"],
    gradient: "from-purple-500 to-pink-600",
    emoji: "🐍",
    eta: "In Progress",
  },
];

/**
 * Career, open source, and academic milestones in chronological descending order.
 */
export const TIMELINE_DATA: TimelineEntry[] = [
  {
    year: "July 2026 - Present",
    title: "Frontend Learner & Open Source Contributor",
    subtitle: "Upstream Open Source & Modern Web Development",
    description:
      "Initiated dedicated open source contribution journey on 30 July 2026. Actively mastering modern frontend engineering across semantic HTML, CSS layout systems, modern JavaScript, and React component architectures.",
    side: "left",
    highlight: true,
    category: "experience",
    highlights: [
      "Cesium.js PR #214 merged: Resolved multi-pass GLSL tactical sonar shader defect",
      "Mission Center & Zed: Traced PCIe D3cold GPU thrash and Wayland window lifecycles",
      "Advanced completion of modern responsive CSS layout and design systems",
    ],
  },
  {
    year: "Nov 2024 - Mid 2026",
    title: "Linux Systems & Workstation Engineering",
    subtitle: "Development Environment & Shell Automation (MSI Thin A15)",
    description:
      "Configured dedicated Linux development workstation (Fedora 44, AMD Ryzen 5, NVIDIA RTX 2050 Mobile). Engineered modular shell provisioning suites and authored system CLI tools while solidifying the foundation for full-time software engineering.",
    side: "right",
    category: "experience",
    highlights: [
      "Engineered 1,600+ lines of modular Bash workstation provisioning",
      "Authored high-performance Rust kernel CLI fetcher (kkfetch, 5.6x faster than Fastfetch)",
    ],
  },
  {
    year: "Aug 2022 - Mid 2024",
    title: "Competitive Examination Track & Analytical Aptitude",
    subtitle: "Public Sector Curriculum & Quantitative Foundations",
    description:
      "Undertook rigorous self-directed preparation for national competitive examinations, developing deep discipline in logical deduction, quantitative analysis, and systematic problem solving before deliberately pivoting back to computer science and software development.",
    side: "left",
    category: "experience",
    highlights: [
      "Advanced analytical problem-solving and quantitative reasoning",
      "Conscious, committed decision to return to software engineering and open source",
    ],
  },
  {
    year: "Aug 2018 - Aug 2021 (Degree Conferred March 2022)",
    title: "Bachelor of Computer Applications (BCA)",
    subtitle: "Suresh Gyan Vihar University, Jaipur",
    description:
      "Completed three-year graduation with 8.2 CGPA (3.28 / 4.0 GPA) Distinction classification. Rigorous curriculum covering Relational Database Management Systems (MySQL), Data Structures, and Software Engineering principles.",
    side: "right",
    highlight: true,
    category: "education",
    highlights: [
      "8.2 CGPA (3.28 / 4.0 GPA) Distinction classification",
      "Relational database schema design and SQL query formulation",
      "Solid programming foundations in data structures and applications",
    ],
  },
  {
    year: "2016 - May 2018",
    title: "Senior Secondary Education (Class XII)",
    subtitle: "CBSE Curriculum (Result: 23 May 2018)",
    description:
      "Completed foundational coursework in Physics, Chemistry, Mathematics, and Computer Science.",
    side: "left",
    category: "education",
  },
];

export const EDUCATION_DATA = TIMELINE_DATA.filter((item) => item.category === "education");
export const EXPERIENCE_DATA = TIMELINE_DATA.filter((item) => item.category === "experience");
