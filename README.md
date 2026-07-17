# [Owen Zhu — Software Engineer Portfolio](https://owen-zhu.com/)

A clean, responsive single-page portfolio website showcasing my software engineering experience, projects, skills, and education. Built to be fast, accessible, and easy to maintain.

## Purpose

This site serves as a living resume and professional landing page. It gives visitors a quick overview of my background across robotics, fintech, e-commerce, and sports media, with direct links to my resume PDF, GitHub, and LinkedIn.

## Tech Stack

- **Framework:** [TanStack Start](https://tanstack.com/start) — full-stack React framework with file-based routing and server functions
- **UI Library:** [React 19](https://react.dev)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com) with custom CSS theme variables
- **Components:** [shadcn/ui](https://ui.shadcn.com) primitives built on [Radix UI](https://www.radix-ui.com)
- **Icons:** [Lucide React](https://lucide.dev)
- **Build Tool:** [Vite](https://vitejs.dev)
- **Package Manager:** [Bun](https://bun.sh)
- **Language:** [TypeScript](https://www.typescriptlang.org)

## Features

- Responsive single-page layout with anchored sections (About, Experience, Projects, Skills, Education, Contact)
- Sticky section progress tracker for quick navigation
- Scroll-triggered reveal animations with reduced-motion support
- Resume PDF preview and download
- External social/contact links (GitHub, LinkedIn, email)
- SEO-friendly metadata and sitemap generation

## Getting Started

```bash
# Install dependencies
bun install

# Start the development server
bun dev

# Build for production
bun run build

# Preview the production build
bun preview
```

## Project Structure

```text
src/
  components/     # Reusable UI components
  data/           # Portfolio content and types
  routes/         # TanStack Start file-based routes
  styles.css      # Global styles and design tokens
```

## License

© Owen Zhu. All rights reserved.
