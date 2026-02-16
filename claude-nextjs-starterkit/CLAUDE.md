# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Modern Web Starter Kit** is a production-ready Next.js 16 + React 19 + TypeScript + Tailwind CSS starter template with a complete marketing website structure. It includes pre-built UI components from shadcn/ui, theme support, and a full-page routing system.

## Common Commands

```bash
# Development
npm run dev              # Start dev server (http://localhost:3000)

# Build & Deploy
npm run build            # Build for production
npm start                # Start production server

# Linting
npm run lint             # Run ESLint on all files
npm run lint -- --fix    # Auto-fix linting issues
```

## Project Architecture

### Directory Structure

```
.
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout with Providers, Header, Footer
│   ├── globals.css               # Global Tailwind styles
│   ├── page.tsx                  # Home page (Hero section)
│   ├── [route]/page.tsx          # Static routes (about, features, docs, etc.)
│   ├── blog/
│   │   ├── page.tsx              # Blog listing page
│   │   └── [slug]/page.tsx       # Dynamic blog post pages
│   └── not-found.tsx             # 404 page
│
├── components/
│   ├── ui/                       # shadcn/ui components (Button, Card, Input, etc.)
│   ├── layout/                   # App layout structure
│   │   ├── header.tsx            # Navigation header with theme toggle
│   │   ├── footer.tsx            # Footer with site links
│   │   ├── container.tsx         # Max-width wrapper
│   │   └── mobile-menu.tsx       # Mobile navigation
│   ├── sections/                 # Page sections
│   │   ├── hero.tsx              # Hero banner
│   │   ├── features.tsx          # Features grid
│   │   └── cta.tsx               # Call-to-action sections
│   └── providers/
│       └── theme-provider.tsx    # next-themes + Tooltip provider setup
│
├── lib/
│   ├── config.ts                 # Site configuration (nav, footer, social)
│   ├── utils.ts                  # Utility functions (cn for class merging)
│   └── features-data.ts          # Feature descriptions and data
│
├── public/                       # Static assets
├── package.json                  # Dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
└── next.config.ts               # Next.js configuration
```

### Key Technologies

- **Framework**: Next.js 16 (App Router, Server/Client Components)
- **Runtime**: React 19
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4 + PostCSS
- **UI Components**: shadcn/ui + Radix UI primitives
- **Theme**: next-themes (system/light/dark modes)
- **Icons**: lucide-react
- **Utilities**: clsx, tailwind-merge, usehooks-ts

### Design Patterns

1. **Layout System**
   - Root layout (`app/layout.tsx`) wraps all pages with Providers, Header, Footer
   - Providers component enables theme system and tooltip context
   - Container component handles max-width and responsive padding

2. **Page Structure**
   - Static marketing pages use `app/[route]/page.tsx` pattern
   - Dynamic blog pages use `app/blog/[slug]/page.tsx` with `generateStaticParams()`
   - Site config (`lib/config.ts`) centralizes navigation and footer links

3. **Component Organization**
   - UI components are presentational and data-agnostic
   - Section components compose UI components into page sections
   - Layout components handle navigation, headers, footers

4. **Theme System**
   - `ThemeProvider` from next-themes handles light/dark/system modes
   - Stored in localStorage with `data-theme` class on `<html>`
   - Header toggles theme and uses `useTheme()` hook

5. **Dynamic Routing**
   - Blog posts defined in `/app/blog/[slug]/page.tsx` with static data
   - `generateStaticParams()` creates routes for: nextjs-16-guide, tailwind-v4-guide, react-19-features
   - `notFound()` triggered for invalid slugs

### Path Aliases

- `@/*` → `./*` (root directory) - use for importing components and utilities

## Routing

### Public Routes

- `/` - Home (hero + features + stats)
- `/features` - Feature showcase
- `/about` - Company information
- `/docs` - Documentation and quick start
- `/pricing` - Pricing tiers
- `/security` - Security & privacy information
- `/blog` - Blog listing
- `/blog/[slug]` - Individual blog posts (nextjs-16-guide, tailwind-v4-guide, react-19-features)
- `/careers` - Job listings
- `/api-reference` - Component API documentation
- `/community` - Community channels
- `/privacy` - Privacy policy
- `/terms` - Terms of service
- `/license` - MIT license

## Important Implementation Notes

### Blog Posts

Blog posts are stored as a static object in `app/blog/[slug]/page.tsx`. To add a new post:

1. Add entry to `blogPosts` object with slug, title, excerpt, date, category, content
2. Content is rendered from plain text with markdown-like formatting (## headings, - lists, etc.)
3. `generateStaticParams()` automatically creates static routes

### Component Styling

- All components use Tailwind CSS with utility classes
- Responsive design uses Tailwind breakpoints: sm (640px), md (768px), lg (1024px)
- Dark mode support via `next-themes` - test with theme toggle in header

### 404 Handling

- Invalid routes return the custom 404 page with suggestions
- Blog routes with invalid slugs trigger `notFound()` which renders the 404 page

## Development Notes

- **Metadata**: Each page exports `metadata` object for SEO
- **Server/Client**: Most components use `'use client'` except pages and layout
- **Async Components**: Root layout is Server Component; dynamic blog pages are async
- **Config-Driven**: Navigation and footer managed via `lib/config.ts` - update once for consistency
