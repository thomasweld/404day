# 404day Festival Website

The official website for the **404day Festival** — where creativity meets technology. Built with Next.js 14, Tailwind CSS v4, and deployed to GitHub Pages.

## Pages

- **Home** — Hero, features, upcoming events, about teaser, CTA
- **About Us** — Origin story, growth stats, values, team
- **Events** — Ticket tiers, day schedule, venue info
- **Contact** — Contact form + FAQ
- **Sponsorship** — Sponsorship tiers and activation opportunities
- **Gallery** — Photo grid and year-by-year stats

## Tech Stack

- [Next.js 14](https://nextjs.org) (App Router, static export)
- [Tailwind CSS v4](https://tailwindcss.com)
- TypeScript
- Google Fonts (Inter)
- GitHub Actions → GitHub Pages

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Build & Deploy

```bash
npm run build   # outputs static files to /out
```

Pushes to `main` automatically deploy to GitHub Pages via the workflow in `.github/workflows/deploy.yml`.

## Color Palette

| Name | Hex | Use |
|------|-----|-----|
| Peach Yellow | `#fac355` | Primary headings & accents |
| Peach Light | `#f4b59e` | Subtitles & secondary text |
| Peach | `#f3a65f` | Gradient mid-point |
| Peach Coral | `#e87851` | CTAs & primary buttons |
| Peach Green | `#9ec367` | Success states & badges |

## Future Improvements

- Integrate a headless CMS (Sanity or Contentful) for content management
- Connect contact form to a mail API (Resend or Formspree)
- Add Playwright smoke tests for key user flows
- Migrate hosting to Vercel for preview deployments and full SSR
