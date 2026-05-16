# Katinka Wodschow

Portfolio site for [Katinka Wodschow](https://www.instagram.com/katinkawodschow_art/), Copenhagen-based artist.

**Live:** https://wodschow.com

## Stack

- [Astro 5](https://astro.build/) — static site generator
- [Tailwind CSS 4](https://tailwindcss.com/) via `@tailwindcss/vite`
- [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) + [Inter](https://rsms.me/inter/) via Fontsource (self-hosted)
- [Sharp](https://sharp.pixelplumbing.com/) for image optimization
- Deployed on [Vercel](https://vercel.com/)

## Performance

93 / 95 / 100 / 100 on Lighthouse (mobile), LCP 1.9s with 19 high-resolution paintings rendered.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:4321.

## Editing content

All user-facing text and the work index live in `src/content/site.ts`. Edit that file, run `npm run build`, then `vercel deploy --prod --yes`.

To add or replace a painting:

1. Drop the JPEG into `src/assets/works/` with a name like `figure-09-name.jpg`
2. Add the entry to the corresponding series in `site.ts`
3. Rebuild and deploy

## Project structure

```
src/
├── assets/works/   Paintings (JPEG, 1440px wide)
├── components/     Astro components (Header, Hero, Series, About, Footer)
├── content/        site.ts — all copy, images.ts — image map
├── layouts/        Base.astro — head, meta, schema.org
├── pages/          index.astro
└── styles/         global.css — gallery typography + paper background

_tools/             One-off helper scripts (contact sheets, image copying).
                    Not part of the deployed site.
```
