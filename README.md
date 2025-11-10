![EmmyCodesIt Portfolio Banner](./public/images/og.png)

# EmmyCodesIt — Portfolio 2.0

Emmanuel Owolabi’s digital HQ: a cinematic portfolio built to showcase high-impact product builds, lead-generation funnels, and battle-tested engineering chops. Fueled by Next.js 14, tuned for performance, and dripping with motion design, this site is both a résumé and a proof-of-concept for how Emmanuel ships real-world products.

> “I build frontends that convert, backends that scale, and team rituals that ship on time.”

---

## ⚡️ Highlights

- **Hero that hits** – Narrative-driven hero with animated stats, social proof, and instant CV download.
- **Interactive storytelling** – Page and route transitions powered by Framer Motion, custom cursor flows, and Lenis smooth scrolling.
- **Live work reels** – Swiper-powered sliders with motion‑synced project details, high-res imagery, and one-click launch CTAs.
- **Resume command center** – Tabbed experience/education/skill dashboards with animated transitions and scroll-snapped sections.
- **Services that sell** – Conversion-focused service cards with hover states tuned for pre-sales.
- **Inbox automation** – EmailJS + Formik + Yup to capture validated leads straight from the contact form.
- **Real-time credibility** – Serverless API route that hits GitHub’s GraphQL API to surface fresh contribution stats.

---

## 🧱 Tech Stack

- **Framework:** Next.js 14 (App Router, Server Components, Route Handlers)
- **Language:** TypeScript everywhere
- **Styling:** Tailwind CSS + shadcn/ui primitives
- **Animation:** Framer Motion, Lenis smooth scroll, Swiper.js
- **State & Data:** Zustand, TanStack Query, custom hooks, EmailJS
- **Content & Assets:** Optimized Next/Image pipeline, video reels, SVG iconography

---

## 🗂 Project Structure

- `app/` – App Router pages, layouts, API routes, and global styling
  - `page.tsx` – Landing hero, stats, socials
  - `services/` – Service lineup with animated cards
  - `resume/` – Tabbed resume hub (experience, education, skills, about)
  - `work/` – Swiper-driven project gallery with live previews
  - `contact/` – Lead capture form with validation + EmailJS handoff
  - `api/github-commits/` – Route handler for GitHub contribution totals
- `components/` – Reusable UI (cards, sliders, transitions, forms, shadcn wrappers)
- `lib/` – Data sources, hooks, and utility helpers
- `assets/` & `public/` – Portfolio imagery, promo videos, social previews

---

## 🚀 Getting Started

Install dependencies and launch the dev server:

```bash
yarn install
yarn dev
# open http://localhost:3000
```

Prefer npm, pnpm, or bun? Swap the commands — the scripts are framework-standard.

---

## 🔐 Environment Setup

Create an `.env.local` at the project root with:

```
GITHUB_TOKEN=ghp_your_personal_access_token
GITHUB_USERNAME=Nametheman # optional override
EMAILJS_PUBLIC_KEY=your_emailjs_public_key
EMAILJS_SERVICE_ID=my_portfolio_service
EMAILJS_TEMPLATE_ID=template_m3gmbec
```

| Variable | Purpose |
| --- | --- |
| `GITHUB_TOKEN` | Required for the GitHub contributions API route (`app/api/github-commits/route.ts`). Needs `read:user` scope. |
| `GITHUB_USERNAME` | Optional override if showcasing a different account’s commits. |
| `EMAILJS_*` | Enables the contact form pipeline (Formik + EmailJS). Values must match your EmailJS dashboard. |

> Don’t commit `.env.local`. It’s ignored via `.gitignore`.

---

## 🧪 Recommended Tooling

- **Linting & Formatting:** ESLint, Prettier (VS Code users: enable format-on-save)
- **Type Safety:** Leverage TypeScript strict modes and `yarn type-check`
- **Testing Ideas:** Add Playwright smoke tests for key flows (hero CTA, contact form submission, GitHub stats fetch)

---

## 📦 Deployment Cheatsheet

- Instant deploy to **Vercel** — zero-config, Edge-ready, image/CDN support baked in.
- For custom CI/CD, run `yarn build` and serve with your platform of choice (`next start`, Docker, etc.).

---

## 🎯 Roadmap Ideas

- Wire up a CMS (Sanity / Contentlayer) for project and blog content.
- Add case-study deep dives with scroll-driven storytelling.
- Enable multi-language support (i18n) for global opportunities.
- Ship automated tests + Lighthouse CI for continuous performance tracking.

---

## 🤝 Credits

Crafted by **Emmanuel Owolabi** — Frontend Lead, Mobile Specialist, documentation nerd, and career accelerator for tech teams.

Connect:

- Portfolio: [https://emmycodesit.xyz](https://emmycodesit.xyz)
- LinkedIn: [linkedin.com/in/emmanuel-owolabi](https://www.linkedin.com/in/emmanuel-owolabi)
- GitHub: [github.com/nametheman](https://github.com/nametheman)

---

Built to impress recruiters, close clients, and inspire collaborators. Fork it, reskin it, or book Emmanuel to build yours.
