# Portfolio

A personal portfolio built with Next.js (App Router), TypeScript, Tailwind CSS,
and Framer Motion. Light/dark theme (light by default), one clean load-in
animation on the hero, hover interactions elsewhere.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Edit your content

Everything you need to change lives in **one file**: `data/content.ts`.
Replace anything wrapped in `[brackets]` — your name, email, phone, social
links, work history, and projects. No other file needs to change to update
the text.

- `profile` — name, role, tagline, bio summary, email/phone, social links
- `about` — the two "About" paragraphs + quick stats
- `skills` — grouped skill chips
- `experience` — your internships/freelance roles, in order (top = most recent)
- `projects` — your project cards (name, description, tech, links)
- `education` — school/degree
- `nav` — the top nav links (only change if you rename a section)

## Theme colors

Defined in `tailwind.config.ts` under `theme.extend.colors`:
`paper` (light background), `ink` (dark background/text), and `teal`
(accent, used for links/buttons/highlights). Adjust the hex values there if
you want a different shade of teal.

## Deploy

The easiest option is [Vercel](https://vercel.com/new) — push this folder to
a GitHub repo and import it, or run `npx vercel` from this directory.
