# Maya Balakrishnan academic website

Static HTML/CSS/JavaScript website designed for GitHub Pages and the custom domain `mayab.phd`.

## The one file you usually edit

Most content lives in:

`data/site-data.js`

Update publications, working papers, research in progress, teaching, awards, talks, presentations, and news there. The HTML pages normally do not need editing.

## Visual design

The site intentionally combines a restrained academic layout with a warmer visual identity:
- persistent left profile column
- serif-forward typography and warm ivory paper background
- muted water / botanical palette
- lightweight hand-drawn line details
- a subtle cursor-responsive ripple canvas on desktop

The ripple interaction respects `prefers-reduced-motion` and is disabled on mobile.

## Add your headshot

1. Put your image in `assets/`, for example `assets/maya.jpg`.
2. In `assets/site.js`, replace the placeholder div inside `profileCard()` with:

```html
<div class="avatar"><img src="assets/maya.jpg" alt="Maya Balakrishnan"></div>
```

## Preview locally

Because this is a static site, you can double-click `index.html`. For a more accurate local preview, from the website folder run:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy to GitHub Pages

Upload the contents of this folder to a GitHub repository, enable GitHub Pages from the repository settings, and keep the included `CNAME` file so the published site uses `mayab.phd` once your DNS is pointed to GitHub Pages.
