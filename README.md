# Nhà Vườn Bảo Lộc — Homestay Website

A single-page website for the Nhà Vườn Bảo Lộc garden homestay in Bảo Lộc, Lâm Đồng, Vietnam. Built with plain HTML/CSS/JS — no build tools, no dependencies to install.

```
index.html      → the whole page
css/style.css   → all styling
js/script.js    → scroll animations
images/         → all photos (currently placeholders)
```

## 1. Put it on GitHub Pages

1. Create a new repository on GitHub (e.g. `nha-vuon-bao-loc`).
2. Upload everything in this folder to the repo (or, from a terminal in this folder):
   ```
   git init
   git add .
   git commit -m "First version of the homestay site"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   git push -u origin main
   ```
3. On GitHub: go to your repo → **Settings → Pages** → under "Build and deployment," set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)` → **Save**.
4. Wait a minute or two, then your site is live at:
   `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

## 2. Replace the placeholder photos

Every image in `images/` is a placeholder (a soft green box with a label telling you what should go there). To swap one in:

1. Pick a real photo, resize it to roughly the same shape as the placeholder it's replacing (the labels tell you: e.g. `bedroom-1.svg` is roughly 4:3 landscape).
2. Save it into the `images/` folder — you can keep it as a `.jpg` or `.png`.
3. Open `index.html`, find the matching `<img src="images/....svg">` line, and change the filename, e.g.:
   ```html
   <img src="images/bedroom-1.svg" alt="...">
   ```
   becomes
   ```html
   <img src="images/bedroom-1.jpg" alt="Sunlit bedroom with garden view">
   ```
4. Also update the `alt="..."` text to actually describe the photo — this helps with accessibility and search engines.

Placeholder files and what they're for:

| File | Used for |
|---|---|
| `hero.svg` | Big cover photo at the top of the page |
| `garden.svg` | Garden photo in the "Rooms" section |
| `balcony.svg` | Balcony view photo |
| `bedroom-1.svg`, `bedroom-2.svg` | Bedroom photos |
| `breakfast.svg` | Breakfast photo |
| `gallery-1.svg` – `gallery-4.svg` | The photo grid in the "Gallery" section |
| `video-poster.svg` | Thumbnail shown before you add a real video |

### Adding a video

The "Gallery" section has a video placeholder with a play button. To add a real video:

1. Add your video file (e.g. `intro.mp4`) into `images/` or a new `video/` folder.
2. In `index.html`, find the `.video-frame` block and replace the placeholder `<img>` + `<button>` with a standard video tag, e.g.:
   ```html
   <video controls poster="images/video-poster.svg" style="width:100%">
     <source src="video/intro.mp4" type="video/mp4">
   </video>
   ```

## 3. Add your real contact details

Open `index.html` and find the `<!-- CONTACT -->` section. Update each card:

- **Phone / Zalo** — change `tel:+84XXXXXXXXX` to your real number, and update the visible text `+84 XXX XXX XXX (add your number)`.
- **Email** — change `mailto:hello@example.com` and the visible text.
- **Facebook** — change `href="#"` to your Facebook page URL, and update the visible text. Also remove the `data-placeholder="facebook"` attribute once it's real (this attribute is what currently makes it pop up a reminder instead of navigating).
- **Instagram** — same as Facebook, with your Instagram profile URL, and remove `data-placeholder="instagram"`.

## 4. Adding Booking.com / Agoda links later

There's already a "Coming soon" note in the Contact section. Once your listings are live, you can either:
- Turn that note into two more buttons/links pointing at your Booking.com and Agoda pages, or
- Add them as two more cards in the `.contact-grid`, matching the style of the existing cards.

## 5. Changing colors, fonts, or text

- All colors and fonts are defined once at the top of `css/style.css` under `:root { ... }` — change a value there and it updates everywhere.
- All the written copy (headings, paragraphs) lives directly in `index.html` — search for the text you want to change and edit it in place.

## Notes

- The site is fully responsive (phone, tablet, desktop) and works without JavaScript — JS only adds a subtle scroll-fade-in effect and the hero's misty hill parallax.
- The map in the "Location" section uses OpenStreetMap and needs no API key or account.
