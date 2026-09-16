# Sarvesh Karthik — Portfolio

A personal developer portfolio built with Next.js (App Router), TypeScript, and Tailwind CSS v4. No animation library — reveals, the hero entrance, and the case-study collapse are CSS-driven.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Production build:

```bash
npm run build
npm run start
```

## Adding your resume

Drop your resume PDF into `public/` named exactly `Sarvesh-Karthik-Resume.pdf`. The "Download Resume" buttons in the navbar and hero already point at `/Sarvesh-Karthik-Resume.pdf`, so no code changes are needed. See `public/README-RESUME.txt`.

## Adding real GitHub repository links

Every project's `github` field in `src/lib/data/projects.ts` currently points at your GitHub profile (https://github.com/312323205202) as a placeholder, because individual repo URLs weren't available yet. Once you publish each repo, open `src/lib/data/projects.ts` and:

1. Replace `github: GITHUB_PROFILE` with the actual repository URL for that project.
2. Set `githubIsProfile: false` (or remove the field).

## Editing content

All personal, project, skills, experience, and education content lives in `src/lib/data/`:

- `personal.ts` — name, title, hero summary, social links, resume path, and the About quick-facts list
- `skills.ts` — skill categories and coursework
- `projects.ts` — the four featured projects: card copy, grouped `stack`, `architecture` steps (drive both the inline strip and the detailed diagram), and case-study text
- `experience.ts` — internships
- `education.ts` — schools and certifications

To add a new project, append an entry to the `projects` array in `projects.ts` following the existing `Project` shape (see `src/types/index.ts`) — the Projects section, cards, and case-study tabs pick it up automatically.

## Structure

```
src/
  app/            # App Router entry (layout, page, metadata, global styles)
  components/
    layout/       # Navbar, Footer, ThemeToggle
    sections/     # Hero, About, Skills, Projects, Experience, Education, Contact
    projects/     # ProjectCard, ProjectCaseStudy, ArchitectureDiagram
    ui/            # Shared primitives (Container, Reveal, Chip, SectionHeading, Terminal, icons)
  lib/
    data/         # Structured content (single source of truth)
    hooks/        # useActiveSection, useScrolled
  types/          # Shared TypeScript interfaces
```

## Notes

- Theme (dark/light) is persisted via `next-themes` (localStorage), defaulting to dark.
- Fonts (Plus Jakarta Sans + JetBrains Mono) are self-hosted via `@fontsource-variable/*` — no external font requests at build or runtime.
- Scroll reveals are no-JS safe: content is visible by default and only hidden-then-revealed when `html[data-js]` is set by an inline script in `layout.tsx`. All motion respects `prefers-reduced-motion`.
- `useActiveSection` is scroll-position based (deterministic), so the nav highlights nothing while in the hero and the correct section elsewhere.
- Deploy anywhere that supports Next.js (Vercel, Netlify, a Node host, etc.).
