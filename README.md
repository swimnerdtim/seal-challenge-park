# SEAL Challenge Park Website

**Status:** Built 2026-06-06

## What It Is

Marketing website for SEAL Challenge Park - Navy SEAL Foundation-endorsed obstacle course facility.

## Features

**Pages/Sections:**
- Hero with stats
- Mission statement (3 pillars: Physical Excellence, Mental Toughness, Service)
- The Course (8 obstacles + 3 difficulty levels)
- Programs (Open Sessions, SEAL Bootcamp, Kids Challenge, Corporate, Summer Camps, Competition League)
- Pricing (Drop-in $35, Individual $99/mo, Family $199/mo + special programs)
- Foundation partnership info (10% revenue → Navy SEAL Foundation)
- Booking CTAs
- Contact info

**Design:**
- Navy/Gold/Red color scheme
- Clean, professional, military-inspired
- Smooth scroll navigation
- Responsive (mobile/tablet/desktop)
- Call-to-action buttons throughout

## Development

**Run locally:**
```bash
cd /Users/tim/.openclaw/workspace/seal-challenge-park
npm run dev
```

**Build for production:**
```bash
npm run build
```

**Deploy to GitHub Pages:**
```bash
npm run build
# Then deploy dist/ folder to GitHub Pages
```

## Deployment

**GitHub Pages setup:**
1. Create repo: `seal-challenge-park`
2. Push code
3. Enable GitHub Pages (Settings → Pages → Deploy from branch → `gh-pages`)
4. Install gh-pages: `npm install --save-dev gh-pages`
5. Add to package.json scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
6. Deploy: `npm run deploy`

**Live URL:** `https://[username].github.io/seal-challenge-park/`

## Next Steps

**Content to add:**
- Real photos (facility, obstacles, people training)
- Video hero background (action footage)
- Testimonials section
- Instructor bios (SEAL backgrounds)
- FAQ section
- Waiver/safety info
- Blog/news section
- Social media feeds

**Functionality to add:**
- Booking system integration (Mindbody, Pike13, or custom)
- Email signup form (MailChimp, Beehiiv)
- Payment processing (Stripe)
- Waiver signing (WaiverForever, Smartwaiver)
- Leaderboard API integration

**Marketing additions:**
- SEO optimization (meta tags, schema markup)
- Google Analytics
- Facebook Pixel
- Instagram feed integration
- YouTube video embeds
- Press/media kit page

## Tech Stack

- React 19
- Vite
- CSS (no framework - clean custom styles)
- Single-page app with smooth scroll navigation

## Notes

Built in ~1 hour. Ready for demo/pitch purposes. Needs photos, booking integration, and legal pages before going live.

Inspired by Charleston Aqua Park but positioned as Navy SEAL training experience (not inflatable water park).

Partnership with Navy SEAL Foundation gives credibility + mission alignment + veteran employment angle.
