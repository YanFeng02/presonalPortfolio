# Frank Yan — Portfolio

A minimal, Apple-inspired personal portfolio site for job applications across Australia and North America. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Designed for one-click deploy to Vercel.

![Tech](https://img.shields.io/badge/Next.js-14-black) ![TS](https://img.shields.io/badge/TypeScript-5-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-3-0ea5e9) ![Motion](https://img.shields.io/badge/Framer%20Motion-11-ff0080)

---

## ✦ Features

- **Apple-style design** — SF Pro typography, pure-black canvas, gradient text, frosted-glass surfaces, generous whitespace
- **Choreographed motion** — Framer Motion for page load reveals, parallax stats, scroll-triggered animations, floating ambient orbs
- **Responsive** — Mobile-first, works flawlessly from 320px to 4K
- **Working contact form** — Resend API integration with graceful `mailto:` fallback if no API key is configured
- **Production-grade** — Edge runtime API, static generation, ~140KB first-load JS
- **Accessible** — Semantic HTML, ARIA labels, reduced-motion-friendly, keyboard navigable
- **SEO-ready** — Open Graph metadata, proper document structure

---

## ✦ Quick start

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
npm run start
```

---

## ✦ Customization checklist

Before deploying, update these placeholders:

### 1. Personal info

| File | What to change |
|---|---|
| `app/components/Nav.tsx` | LinkedIn URL (currently `linkedin.com/in/your-handle`) |
| `app/components/Hero.tsx` | LinkedIn URL, replace SVG portrait placeholder with your photo |
| `app/components/Contact.tsx` | LinkedIn URL |
| `app/components/Footer.tsx` | LinkedIn URL |
| `app/layout.tsx` | Open Graph metadata if needed |

Quick find-and-replace: search for `your-handle` across the project and replace all instances.

### 2. Add your photo

Drop your photo into `public/images/` (e.g. `public/images/frank.jpg`) and in `app/components/Hero.tsx` replace the placeholder SVG with:

```tsx
import Image from 'next/image';

// Inside the portrait div, replace the <svg>...</svg> block with:
<Image
  src="/images/frank.jpg"
  alt="Frank Yan"
  width={288}
  height={288}
  priority
  className="w-full h-full rounded-full object-cover"
/>
```

Recommended: square crop, 600×600px or larger, light compression.

### 3. Project links

In `app/components/Projects.tsx` update `projects[]` if any URLs change. The live status indicator on RxTech is controlled by the `status: 'Live'` field.

### 4. Contact form email (optional but recommended)

By default, the form gracefully falls back to opening the user's mail client (`mailto:`) if no Resend API key is configured — so **it works out-of-the-box without any setup**.

For a real server-side send:

1. Sign up at [resend.com](https://resend.com) (free tier = 100 emails/day, no card required)
2. Create an API key
3. Add to Vercel project env vars (or `.env.local` for local dev):
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxx
   CONTACT_TO_EMAIL=fengyanfrank@126.com
   CONTACT_FROM_EMAIL=onboarding@resend.dev
   ```
4. (Optional) Verify your own domain in Resend and use `contact@yourdomain.com` as `CONTACT_FROM_EMAIL` — delivers better than the default shared sender.

---

## ✦ Deploy to Vercel

### One-click (recommended)

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repo — Vercel auto-detects Next.js
4. (Optional) Add env vars: `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`
5. Click Deploy

Done. Vercel gives you a `*.vercel.app` URL; add a custom domain in project settings.

### CLI

```bash
npm i -g vercel
vercel
```

---

## ✦ Project structure

```
portfolio/
├── app/
│   ├── api/contact/route.ts       # Edge runtime contact form handler
│   ├── components/
│   │   ├── Nav.tsx                # Frosted-glass nav with social links
│   │   ├── Hero.tsx               # Landing section with portrait + CTA
│   │   ├── About.tsx              # Bio, stats, scrolling skills marquee
│   │   ├── Projects.tsx           # Featured work with custom SVG visuals
│   │   ├── Experience.tsx         # Timeline of roles and education
│   │   ├── Contact.tsx            # Form + contact info
│   │   └── Footer.tsx             # Minimal footer
│   ├── globals.css                # Design tokens + utility classes
│   ├── layout.tsx                 # Root layout + metadata
│   └── page.tsx                   # Homepage composition
├── public/images/                 # Drop your photo here
├── tailwind.config.ts             # Apple-inspired design tokens
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## ✦ Design system

All tokens live in `tailwind.config.ts` and `app/globals.css`:

```
Canvas       #000000   (pure black, like Apple's product pages)
Surface      #111111
Elevated     #1c1c1e
Text         #f5f5f7
Muted        #86868b
Accent       #0071e3   (Apple system blue)
Border       rgba(255,255,255,0.08)
```

Typography stack: SF Pro Display / SF Pro Text → system fallback. Displays natively on macOS/iOS with no font loading; graceful fallback elsewhere.

Motion easing: `cubic-bezier(0.16, 1, 0.3, 1)` — Apple's signature "smooth out" curve used across all transitions.

---

## ✦ Tech stack

- **Next.js 14** (App Router, RSC) — latest stable
- **TypeScript 5** — fully typed
- **Tailwind CSS 3** — utility-first styling
- **Framer Motion 11** — declarative animations
- **Lucide React** — consistent icon set
- **Resend** — transactional email (optional)

---

## ✦ Performance

- First-load JS: ~140 KB gzipped
- All images: inline SVGs + placeholder (add your own photo ~50 KB)
- Static pre-rendering where possible, edge runtime for API
- No external font files (uses system SF Pro stack)

---

## ✦ License

Personal portfolio code. Feel free to use as inspiration, but please don't fork as-is and present as your own work.

---

Built with ✦ in Sydney by Frank Yan.
