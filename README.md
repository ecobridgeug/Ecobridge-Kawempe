# Ecobridge

A production-ready Next.js 14 website for **Ecobridge** — a youth-driven environmental NGO in Kampala, Uganda working at the intersection of climate research, action, and community.

Built with Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion. Fully responsive, light/dark mode, animated, SEO-optimised, and easy to edit.

---

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Open http://localhost:3000
```

Build for production:

```bash
npm run build
npm start
```

**Node version:** 18.17+ (recommended 20 LTS).

---

## Tech stack

| Layer        | Tool                          |
| ------------ | ----------------------------- |
| Framework    | Next.js 14 (App Router)       |
| Language     | TypeScript                    |
| Styling      | Tailwind CSS + CSS variables  |
| Animation    | Framer Motion                 |
| Icons        | Lucide React                  |
| Theming      | next-themes (light / dark)    |
| Fonts        | Fraunces + Manrope + JetBrains Mono (via `next/font`) |

---

## Project structure

```
ecobridge/
├── app/                       # Next.js App Router pages
│   ├── layout.tsx             # Root layout (fonts, theme, nav, footer)
│   ├── page.tsx               # Homepage
│   ├── globals.css            # Global styles + design tokens
│   ├── about/page.tsx
│   ├── projects/page.tsx
│   ├── research/page.tsx
│   ├── climate-action/page.tsx
│   ├── community/page.tsx
│   ├── team/page.tsx
│   ├── blog/page.tsx
│   ├── partners/page.tsx
│   ├── gallery/page.tsx
│   ├── contact/page.tsx
│   ├── volunteer/page.tsx
│   └── donate/page.tsx
│
├── components/
│   ├── navbar.tsx             # Sticky glass nav with mobile menu
│   ├── footer.tsx             # Footer + newsletter signup
│   ├── theme-provider.tsx
│   ├── ui/                    # Small reusable bits
│   │   ├── counter.tsx        # Animated number counter
│   │   ├── reveal.tsx         # Scroll-reveal wrapper
│   │   ├── theme-toggle.tsx
│   │   └── page-header.tsx
│   └── sections/              # Homepage sections
│       ├── hero.tsx
│       ├── about-section.tsx
│       ├── values-section.tsx
│       ├── pillars-section.tsx
│       ├── projects-section.tsx
│       ├── timeline-section.tsx
│       ├── team-section.tsx
│       ├── journal-section.tsx
│       ├── partners-section.tsx
│       ├── events-section.tsx
│       └── cta-section.tsx
│
├── data/                      # ✏️  Edit these files to customise content
│   ├── site.ts                # Site name, tagline, social, contact
│   ├── projects.ts            # All projects + categories
│   ├── team.ts                # Team members + board
│   ├── posts.ts               # Blog/journal posts
│   └── content.ts             # Partners, values, timeline, gallery, events
│
├── lib/
│   └── utils.ts               # cn() helper + formatDate()
│
├── public/                    # Static assets (favicons, OG images)
│
├── tailwind.config.js         # Design tokens (colours, fonts, animations)
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## ✏️ How to edit content

**Everything textual lives in `/data`.** No need to dig through JSX for copy changes.

| Change…                       | Edit…                       |
| ----------------------------- | --------------------------- |
| Site name, tagline, contact   | `data/site.ts`              |
| Hero stats                    | `data/site.ts` → `heroStats` |
| Projects                      | `data/projects.ts`          |
| Team members & board          | `data/team.ts`              |
| Blog posts                    | `data/posts.ts`             |
| Partners list                 | `data/content.ts` → `partners` |
| Values (Vision / Mission)     | `data/content.ts` → `values` |
| Timeline                      | `data/content.ts` → `timeline` |
| Gallery images                | `data/content.ts` → `galleryImages` |
| Upcoming events               | `data/content.ts` → `upcomingEvents` |

Images: replace Unsplash URLs in the data files with your own (`/public/images/...` or any CDN). Configure additional remote domains in `next.config.js`.

---

## 🎨 Design system

Colours, type scale, and shadows are defined twice:

1. **Tailwind tokens** in `tailwind.config.js` — for utility classes (`bg-forest-700`, `text-amber-500`, etc.)
2. **CSS custom properties** in `app/globals.css` — for theme switching. Variables like `var(--primary)`, `var(--bg)`, `var(--text)` automatically swap when the user toggles dark mode.

**Core palette**

| Token        | Light       | Dark        |
| ------------ | ----------- | ----------- |
| `--bg`       | `#f7f4ed`   | `#0a1410`   |
| `--text`     | `#1a1f1c`   | `#e8e5dc`   |
| `--primary`  | `#1f4d3a` (deep forest) | `#5fa67f`   |
| `--accent`   | `#d4a93a` (honey amber) | `#e3bc56`   |

Typography: **Fraunces** (display serif) + **Manrope** (body) + **JetBrains Mono** (data/labels).

---

## 📨 Wiring up forms

Three forms ship as **demo / placeholder**:

1. **Newsletter** (in `components/footer.tsx`)
2. **Contact** (`app/contact/page.tsx`)
3. **Volunteer application** (`app/volunteer/page.tsx`)

Each has a `TODO` comment where you plug in your endpoint. Easy options:

- [Formspree](https://formspree.io/) — drop-in, no backend
- [Resend](https://resend.com/) + a Next.js API route — send straight to your inbox
- [Airtable](https://airtable.com/) — store submissions in a base via their REST API
- Your own `app/api/.../route.ts` endpoint

## 💳 Donations

`app/donate/page.tsx` ships with tier UI but **no payment processor wired up**. Recommended:

- **[Stripe Checkout](https://stripe.com/payments/checkout)** — best for international cards.
- **[Flutterwave](https://flutterwave.com/)** — best for mobile money (MTN MoMo, Airtel Money) + cards across Africa.

Search for `TODO` in the file to find the integration point.

---

## 🚀 Deployment

The fastest path is **Vercel** (the makers of Next.js):

1. Push this repo to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Click deploy. That's it.

You can also deploy to Netlify, Cloudflare Pages, AWS Amplify, or any Node host (`npm run build` → `npm start`).

### Environment variables

None required out of the box. When you wire up forms or payments, you'll add things like:

```
STRIPE_SECRET_KEY=...
FLUTTERWAVE_SECRET_KEY=...
RESEND_API_KEY=...
```

---

## 🔍 SEO checklist (already done)

- [x] `metadata` in root layout with title, description, OG image
- [x] Per-page titles via `PageHeader`
- [x] Semantic HTML (`<main>`, `<article>`, `<nav>`, `<footer>`)
- [x] Alt text on all images
- [x] Skip-to-content link for keyboard users
- [x] `prefers-reduced-motion` respected

You should still add:

- A real `/public/favicon.ico` (and apple-touch-icon, og-image.png)
- `/public/robots.txt` + `/app/sitemap.ts`
- Google Analytics or Plausible

---

## ♿ Accessibility

- Colour contrast meets WCAG AA in both themes
- All interactive elements keyboard-focusable
- Animations honour `prefers-reduced-motion`
- Form labels, required fields, and error states are announced

---

## 📝 License

The code is yours to use, modify, and deploy. The placeholder photos are from Unsplash and free to use — but please swap them for your own real photography before going public.

---

Made with 🌿 for Ecobridge. Questions: hello@ecobridge.ug
