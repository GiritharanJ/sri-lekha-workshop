# Sri Lekha Auto Spares & Workshop

A 3-page static site (Home, Services, Products) for a TVS King Certified Service Point in Chennai. No build step — plain HTML + Tailwind (CDN) + Alpine.js + AOS + Swiper + Font Awesome, so it deploys straight to GitHub Pages.

## Files
```
sri-lekha-workshop/
├── index.html        # Home
├── services.html     # Services
├── products.html      # Products
├── style.css          # Shared design tokens & custom styles
├── script.js           # Shared JS (WhatsApp links, AOS/Swiper init, booking form)
└── images/
    └── tvs-king-banner.jpg
```

## Before you go live
- **WhatsApp number**: set in `script.js` → `WHATSAPP_NUMBER = "919841677317"` (currently +91 98416 77317).
- **Call number**: same file → `CALL_NUMBER`, plus every `tel:+919841677317` link in the three HTML files.
- **Address / working hours**: edit the `<footer>` block in each HTML file.
- **Google Map**: the embed on the home page uses a text search for the address. For pinpoint accuracy, replace the iframe `src` with an embed link from Google Maps → Share → Embed a map, using your exact pin.

## Push it to GitHub

```bash
cd sri-lekha-workshop

# one-time setup
git init
git add .
git commit -m "Initial site: home, services, products"

# create the remote repo first on github.com (or with gh cli below), then:
git branch -M main
git remote add origin https://github.com/<your-username>/sri-lekha-workshop.git
git push -u origin main
```

If you have the GitHub CLI installed, you can create the repo in one step instead:
```bash
gh repo create sri-lekha-workshop --public --source=. --remote=origin --push
```

## Turn on GitHub Pages
1. On GitHub, open the repo → **Settings** → **Pages**.
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Branch: `main`, folder: `/ (root)` → **Save**.
4. Your site goes live in a minute or two at:
   `https://<your-username>.github.io/sri-lekha-workshop/`

## Updating later
```bash
git add .
git commit -m "Update pricing / hours / images"
git push
```
GitHub Pages redeploys automatically on every push to `main`.
