# Kushagra Kumar — Portfolio

Personal developer and data analytics portfolio website built with React 19, TypeScript, Vite, Tailwind CSS, and Framer Motion.

---

## Overview

I'm Kushagra Kumar, a BCA graduate (8.2 CGPA). After spending four years preparing for competitive government examinations, I made a deliberate pivot into software development and Data Analytics, starting my structured learning journey on July 30, 2026.

This repository houses my personal portfolio showcasing:
- My educational background and career pivot
- Verified skills in **Core Python** and **MySQL**
- Real standalone and mini-projects ([CLI CRUD File Manager](https://github.com/Kk376/cli-python-crud-project) & [10 Python Mini Projects](https://github.com/Kk376/ai-ml-journey/tree/main/Python_Mini_Projects))
- Upcoming learning roadmap (Python OOP, Pandas/NumPy, Excel, Power BI)
- Interactive milestone timeline and direct contact channels

---

## Tech Stack

- **Framework:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)

---

## Features

- **Full TypeScript Architecture** — Strict type safety across all components, props, and data models.
- **Centralized Data Layer** — All content and metadata stored in [`src/data/portfolioData.ts`](src/data/portfolioData.ts) for clean separation of concerns.
- **High Performance (120 FPS)** — GPU-accelerated static radial background gradients, zero rasterization blur churn, and passive scroll handling with `IntersectionObserver`.
- **Responsive Navigation** — Smooth offset scrolling with active section indicator and mobile drawer with keyboard controls.
- **One-Click Clipboard Actions** — Instant copy buttons with feedback indicators for email and phone numbers.
- **SEO & Accessibility** — Semantic HTML5 tags, full OpenGraph / Twitter Cards, and Schema.org `Person` JSON-LD structured data.

---

## Project Structure

```text
portfolio/
├── public/
│   ├── favicon.svg
│   └── ...
├── src/
│   ├── assets/
│   │   └── myphoto.jpg
│   ├── components/
│   │   ├── ui/
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
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   └── Navbar.tsx
│   ├── data/
│   │   └── portfolioData.ts
│   ├── types/
│   │   └── index.ts
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

---

## Getting Started

### Prerequisites

- Node.js (v18+)
- [pnpm](https://pnpm.io/) (or npm / yarn)

### Installation

```bash
# Clone the repository
git clone https://github.com/Kk376/portfolio.git
cd portfolio

# Install dependencies
pnpm install

# Start development server
pnpm run dev
```

### Available Scripts

| Command | Description |
|---|---|
| `pnpm run dev` | Start local Vite development server |
| `pnpm run build` | Run type check (`tsc --noEmit`) and build production bundle |
| `pnpm run typecheck` | Run TypeScript compiler check |
| `pnpm run lint` | Run ESLint across all source files |
| `pnpm run preview` | Preview production build locally |

---

## Related Repositories

- [ai-ml-journey](https://github.com/Kk376/ai-ml-journey) — Daily progress logs, Python exercises, and MySQL practice queries.
- [cli-python-crud-project](https://github.com/Kk376/cli-python-crud-project) — Command-line file and directory manager built in Python.

---

## License

MIT © [Kushagra Kumar](https://github.com/Kk376)
