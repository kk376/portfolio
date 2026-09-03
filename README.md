# Kushagra Kumar: Portfolio

Personal developer and data analytics portfolio website built with React 19, TypeScript, Vite, Tailwind CSS, and Framer Motion.

---

## Overview

I'm Kushagra Kumar, a BCA graduate (8.2 CGPA). After spending four years preparing for competitive government examinations, I made a deliberate pivot into software development and Data Analytics, starting my structured learning journey on July 30, 2026.

This repository houses my personal portfolio showcasing:
- My educational background and career pivot
- Verified skills in **Core Python** and **MySQL**
- Real standalone and mini-projects ([CLI CRUD File Manager](https://github.com/kk376/cli-python-crud-project) & [10 Python Mini Projects](https://github.com/kk376/ai-ml-journey/tree/main/Python_Mini_Projects))
- Upcoming learning roadmap (Python OOP, Pandas/NumPy, Excel, Power BI)
- Interactive milestone timeline and direct contact channels

---

## Tech Stack

- **Framework:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Testing:** [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/react)

---

## Features

- **Full TypeScript Architecture**: Strict type safety across all components, props, and data models defined in [`src/types/index.ts`](src/types/index.ts).
- **Centralized Data Layer**: All content, project catalogs, and roadmap items stored in [`src/data/portfolioData.ts`](src/data/portfolioData.ts) for clean separation of concerns.
- **Resilient Error Boundaries**: Top-level React Error Boundary catching render-phase runtime exceptions with recovery UI.
- **Accessibility (WCAG AA)**: Contrast-tested color palette, keyboard focus trapping in mobile navigation drawer, skip-to-content anchor, and full `prefers-reduced-motion` support.
- **High Performance**: Vendor-split Rollup chunks (`vendor`, `animations`, `icons`), font loading optimizations, debounced scroll listeners, and `IntersectionObserver` viewport tracking.
- **SEO & Social Cards**: Semantic HTML5 tags, `robots.txt`, `sitemap.xml`, OpenGraph / Twitter Cards (`og-image.png`), and Schema.org `Person` JSON-LD structured data.
- **Production Security Headers**: Preconfigured deployment headers (`public/_headers` and `vercel.json`) including strict CSP, `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, and HSTS.

---

## Project Structure

```text
portfolio/
├── .github/
│   └── workflows/
│       └── ci.yml               # Automated CI with lint, test, build & audit
├── public/
│   ├── _headers                 # Netlify / Cloudflare Pages HTTP security headers
│   ├── apple-touch-icon.png     # iOS home screen touch icon
│   ├── favicon.svg              # Vector favicon
│   ├── og-image.png             # OpenGraph social preview card
│   ├── robots.txt               # Search engine crawler policies
│   └── sitemap.xml              # XML Sitemap
├── screenshots/                 # Application preview screenshots
│   ├── home.png
│   ├── skills.png
│   ├── journey1.png
│   └── contact.png
├── src/
│   ├── assets/
│   │   └── myphoto.jpg
│   ├── components/
│   │   ├── sections/            # Modular page section components
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   ├── ExperienceSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   ├── SkillsSection.tsx
│   │   │   ├── StatsSection.tsx
│   │   │   └── index.ts
│   │   ├── ui/                  # Reusable UI presentation primitives
│   │   │   ├── ComingSoonCard.tsx
│   │   │   ├── ContactInfoCard.tsx
│   │   │   ├── ProjectItem.tsx
│   │   │   ├── SectionHeader.tsx
│   │   │   ├── SkillCard.tsx
│   │   │   ├── StatCard.tsx
│   │   │   ├── TimelineItem.tsx
│   │   │   └── index.ts
│   │   ├── AnimatedSection.tsx
│   │   ├── BackgroundEffects.tsx
│   │   ├── ErrorBoundary.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   └── Navbar.tsx
│   ├── data/
│   │   └── portfolioData.ts     # Decoupled content and metric configurations
│   ├── test/
│   │   └── setup.ts             # Vitest test setup and DOM polyfills
│   ├── types/
│   │   └── index.ts             # Shared TypeScript domain interfaces
│   ├── App.tsx                  # Root application shell
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html
├── package.json
├── pnpm-workspace.yaml
├── tailwind.config.ts
├── tsconfig.json
├── vercel.json                  # Vercel deployment and security header config
└── vite.config.ts
```

---

## Preview

| Home & Hero | Verified Skill Set |
|:---:|:---:|
| ![Home](screenshots/home.png) | ![Skills](screenshots/skills.png) |

| Journey Milestones | Contact Channels |
|:---:|:---:|
| ![Journey](screenshots/journey1.png) | ![Contact](screenshots/contact.png) |

---

## Getting Started

### Prerequisites

- Node.js (v20+)
- [pnpm](https://pnpm.io/) (v9+)

### Installation

```bash
# Clone the repository
git clone https://github.com/kk376/portfolio.git
cd portfolio

# Install dependencies
pnpm install

# Start development server
pnpm run dev
```

### Available Scripts

| Command | Description |
|---|---|
| `pnpm run dev` | Start local Vite development server with HMR |
| `pnpm run build` | Run type check (`tsc --noEmit`) and build production bundle |
| `pnpm run test` | Run Vitest unit and component test suites once |
| `pnpm run test:watch` | Run Vitest in interactive watch mode |
| `pnpm run lint` | Run ESLint across all TypeScript and React source files |
| `pnpm run preview` | Preview production build locally |

---

## Deployment

The repository includes ready-to-deploy configurations for modern static hosting providers:

- **Vercel**: Preconfigured with `vercel.json` including security headers and clean URLs. Connect the repository in Vercel and it deploys automatically.
- **Cloudflare Pages / Netlify**: Production build output (`dist/`) automatically picks up `public/_headers` for HTTP security headers and caching directives.

Build Command: `pnpm run build`  
Output Directory: `dist`

---

## Related Repositories

- [ai-ml-journey](https://github.com/kk376/ai-ml-journey): Daily progress logs, Python exercises, and MySQL practice queries.
- [cli-python-crud-project](https://github.com/kk376/cli-python-crud-project): Command-line file and directory manager built in Python.

---

## License

MIT © [Kushagra Kumar](https://github.com/kk376)
