# Locksmith365.ca — Modern Mobile Website

A premium, mobile-first static website for **locksmith365.ca**, ready for GitHub Pages.

## Design

"Midnight Security" — deep navy-black with a brass-amber accent, frosted-glass UI, scroll-reveal animations, a slide-out drawer menu, horizontal-scroll reviews, an accordion FAQ, and a persistent bottom call/quote dock. Mobile-first and app-like; on desktop it centers as a phone-width frame.

Fonts: **Sora** (display) + **Outfit** (body). No frameworks — pure HTML, CSS, and vanilla JS.

## Pages

- `index.html` — Home
- `emergency-locksmith.html`, `residential.html`, `commercial.html`, `automotive.html`, `lock-change.html`, `rekeying.html`, `car-key-replacement.html` — Services
- `locksmith-kitchener.html`, `locksmith-waterloo.html`, `locksmith-cambridge.html` — Areas
- `about.html`, `contact.html`, `faq.html`, `404.html`

Shared chrome (app bar, drawer, footer, call dock) lives in `app.js`; all styling in `style.css`.

## Note on images

Hero/feature photos load from Unsplash CDN URLs (free license). They'll appear once the site is online. To use your own photos, drop them in an `/images` folder and swap the `src` URLs in the HTML.

## Deploy to GitHub Pages

1. Create a new GitHub repo and upload all files to the root.
2. **Settings → Pages → Source** → `main` branch → `/` (root).
3. For your domain: add `locksmith365.ca` as the custom domain, then create a `CNAME` DNS record pointing `locksmith365.ca` → `yourusername.github.io`. Enable **Enforce HTTPS**.
