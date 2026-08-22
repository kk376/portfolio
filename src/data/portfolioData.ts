/**
 * Static Data Store for Kushagra Kumar's Developer Portfolio
 *
 * Centralized constant datasets used across Hero, About, Skills, Experience, and Contact components.
 */

/**
 * Core personal metadata, contact coordinates, and external repository links.
 */
export const PERSONAL_INFO = {
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
export const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Journey" },
  { id: "contact", label: "Contact" },
] as const;

/**
 * Career and academic milestones in chronological descending order.
 */
export const TIMELINE_DATA = [
  {
    year: "July 2026 - Present",
    title: "Frontend Learner & Open Source Contributor",
    subtitle: "Upstream Open Source & Modern Web Development",
    description:
      "Initiated dedicated open source contribution journey on 30 July 2026. Actively mastering modern frontend engineering across semantic HTML, CSS layout systems, modern JavaScript, and React component architectures.",
    side: "left" as const,
    highlight: true,
    category: "experience" as const,
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
    side: "right" as const,
    category: "experience" as const,
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
    side: "left" as const,
    category: "experience" as const,
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
    side: "right" as const,
    highlight: true,
    category: "education" as const,
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
    side: "left" as const,
    category: "education" as const,
  },
];

export const EDUCATION_DATA = TIMELINE_DATA.filter((item) => item.category === "education");
export const EXPERIENCE_DATA = TIMELINE_DATA.filter((item) => item.category === "experience");
