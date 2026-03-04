# CLAUDE.md — ProposalIQ Marketing Site

## Project Overview

This is the marketing website for ProposalIQ, a B2B SaaS application that helps small architecture and design firms generate AI-powered RFP proposal drafts. This repo is the public-facing site — it does NOT contain the application code.

**Marketing site URL:** https://getproposaliq.com
**App URL (separate repo):** https://app.getproposaliq.com

---

## Tech Stack

- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Hosting:** Vercel (Hobby plan, auto-deploy from GitHub)
- **Domain:** getproposaliq.com + www.getproposaliq.com (both on Vercel)

---

## Pages

- `/` — Home (hero, features grid, how it works, CTA banner, footer)
- `/pricing` — Three tiers with annual discount toggle + FAQ
- `/about` — Mission, origin story, founder section
- `/contact` — Contact form + support@getproposaliq.com

---

## Design System

- **Font:** Plus Jakarta Sans (Google Fonts)
- **Primary color:** #1e3a5f (dark navy)
- **CTA color:** #1a56db (blue)
- **Background:** #f8fafc (light gray)
- **Cards:** White with subtle borders
- **Icons:** Heroicons / Lucide SVGs — NO emojis as icons
- **Style:** Clean, professional B2B SaaS. No gradients, no flashy animations.
- **Skill used:** UI UX Pro Max for the initial design system

All CTAs ("Get Started", "Start Free Trial") link to: `https://app.getproposaliq.com/register`
"Sign In" links to: `https://app.getproposaliq.com/login`

---

## SEO Configuration

This site was migrated from plain HTML to Next.js specifically for server-side rendering and SEO.

- **Google Search Console:** Verified via DNS TXT record on Vercel
- **Google Analytics:** Measurement ID `G-3XXEP6NBM7`
- **Sitemap:** `/sitemap.xml` (submitted to Google Search Console)
- **Robots.txt:** `/robots.txt`
- **Structured data:** JSON-LD on all pages
- **Open Graph tags:** Per-page meta titles, descriptions, OG image
- **OG image:** `/public/og-home.png` (1200x630px)
- **LLM discoverability:** `/llms.txt`

When adding new pages, always include: meta title, meta description, Open Graph tags, and JSON-LD structured data.

---

## Pricing (keep in sync with app)

| Tier | Price | Users | Proposals |
|------|-------|-------|-----------|
| Solo | $99/mo | 1 | 10/month |
| Studio | $199/mo | 3 | 30/month |
| Firm | $399/mo | 10 | Unlimited |

- Annual discount: 20% off
- Beta offer: 90-day free trial

---

## Deployment

- **Hosting:** Vercel
- **Repo:** GitHub → auto-deploys on push to main
- **DNS:** Managed in Vercel (getproposaliq.com + www)
- **SSL:** Automatic via Let's Encrypt

### Development Workflow
1. Make changes locally
2. Test with `npm run dev` (localhost:3000)
3. Commit and push to GitHub
4. Vercel auto-deploys

---

## Common Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (localhost:3000)
npm run build        # Production build
npm run start        # Run production build locally
npm run lint         # Run ESLint
```

---

## Domain & Email

- **Domain registrar:** Vercel Domains
- **DNS:** Vercel (includes TXT records for Google Search Console verification)
- **Email hosting:** Google Workspace
- **Addresses:** hello@getproposaliq.com, support@getproposaliq.com, outreach@getproposaliq.com
- **Email auth:** SPF, DKIM, DMARC all configured

---

## Content & Messaging

### Target Market
- Small architecture and interior design firms (10-50 employees)
- Buyer personas: Proposal Coordinators, Marketing Managers, Business Development Managers
- Pain point: Enterprise RFP tools cost $15-20k/year; these firms can't afford that

### Key Messages
- "Win more RFPs. Less time writing."
- AI-powered proposal generation in minutes, not days
- Built specifically for architecture and design firms
- Affordable alternative to enterprise tools

### How It Works (4 steps)
1. Add your Knowledge Base — firm capabilities, past proposals, specialties
2. Upload the RFP — drop in the document
3. Generate the Proposal using AI — tailored draft in minutes
4. Refine, Export or Print — polish and submit

### Origin Story
Built by a product manager whose daughter works at a design firm in Tampa. She mentioned how time-consuming proposals are — that sparked the idea.

---

## Notes for Claude Code

- This is the marketing site only — do NOT add app features, authentication, or backend code here
- All "Get Started" and "Start Free Trial" buttons link to `https://app.getproposaliq.com/register`
- Keep SEO best practices on every page change (meta tags, structured data, semantic HTML)
- Maintain the existing B2B professional design system — no purple gradients, no emojis
- The owner (Micheal) is a product manager, not a developer — explain changes clearly
- When adding new pages, follow the existing pattern for layout, nav, and footer
- Test locally before pushing — Vercel deploys automatically on push
