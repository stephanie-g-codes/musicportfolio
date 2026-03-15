# Rosie Crown — Website

A static musician website built with vanilla HTML, CSS, and JavaScript. No build tools or dependencies required — open `index.html` in a browser and it works.

---

## File structure

```
rosie-crown/
├── index.html              ← Entry point
├── README.md               ← This file
├── css/
│   ├── variables.css       ← Design tokens (colors, spacing, fonts)
│   ├── base.css            ← Reset + shared utility classes
│   ├── nav.css
│   ├── hero.css
│   ├── marquee.css
│   ├── music.css
│   ├── about.css
│   ├── live.css
│   ├── booking.css
│   └── footer.css
├── js/
│   ├── data.js             ← ALL site content lives here — edit this first
│   └── main.js             ← App init + scroll behavior
├── sections/
│   ├── nav.js
│   ├── hero.js
│   ├── marquee.js
│   ├── music.js
│   ├── about.js
│   ├── live.js
│   ├── booking.js
│   └── footer.js
└── assets/
    ├── images/             ← Drop your photos here
    │   └── hero.jpg        ← (placeholder — add your own)
    └── fonts/              ← Optional: self-hosted fonts
```

---

## Editing your content

**All text, links, tracks, and videos are in one place:**

```
js/data.js
```

Open that file and update the `SITE_DATA` object:

- `artist` — name, bio, tagline, hero subtitle
- `nav` — navigation links
- `marqueeItems` — scrolling ticker text
- `tracks` — EP tracklist (add `audioSrc` paths for real audio)
- `videos` — video cards (add real YouTube IDs or embed URLs)
- `bookingDetails` — contact email/info shown on the right panel
- `socials` — footer social links

---

## Adding your hero photo

1. Drop your photo into `assets/images/` (e.g. `hero.jpg`)
2. Open `sections/hero.js`
3. Find the comment block that reads:
   ```
   <!-- TO ADD YOUR PHOTO: Replace the div below with: ... -->
   ```
4. Replace the placeholder `<div class="hero__visual">` block with:
   ```html
   <img src="assets/images/hero.jpg" alt="Rosie Crown" class="hero__photo" />
   ```

---

## Adding real audio

1. Drop `.mp3` files into `assets/` (e.g. `assets/snooze.mp3`)
2. Open `js/data.js`
3. Set `audioSrc` on the matching track:
   ```js
   { num: "01", name: "Snooze", duration: "3:42", badge: "Single", audioSrc: "assets/snooze.mp3" },
   ```

---

## Adding real video embeds

For **YouTube**, copy the video ID from the URL:
`https://youtube.com/watch?v=dQw4w9WgXcQ` → ID is `dQw4w9WgXcQ`

In `js/data.js`, set `embedId` on the matching video object:
```js
{ ..., embedId: "dQw4w9WgXcQ", ... }
```

Clicking the video card will then load the YouTube player inline.

---

## Connecting the booking form

The form currently gives a success message client-side only. To receive real emails:

### Option A — Formspree (free, easiest)
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form → copy your endpoint URL
3. Open `sections/booking.js`
4. Change the `<form>` tag's opening to include `action` and `method`:
   ```html
   <form class="booking__form" id="bookingForm"
         action="https://formspree.io/f/YOUR_ID"
         method="POST">
   ```
5. In the same file, remove (or comment out) the `addEventListener("submit", ...)` block at the bottom — Formspree handles submission and redirects.

### Option B — Netlify Forms (free, if hosting on Netlify)
Add `data-netlify="true"` to the `<form>` tag. Netlify auto-detects and captures submissions.

---

## Running locally

No install needed. Just open the file:

```bash
# Option 1 — double-click index.html in Finder/Explorer

# Option 2 — Python simple server (recommended, avoids CORS issues with audio)
cd rosie-crown
python3 -m http.server 8080
# Then open: http://localhost:8080

# Option 3 — Node http-server
npx http-server .
# Then open: http://localhost:8080

# Option 4 — VS Code Live Server extension
# Right-click index.html → "Open with Live Server"
```

---

## Uploading to GitHub

### First time setup

1. Go to [github.com](https://github.com) and sign in (or create an account)
2. Click the **+** button (top right) → **New repository**
3. Name it `rosie-crown` (or anything you like)
4. Leave it **Public** (required for free GitHub Pages)
5. Do **not** check "Add a README" — you already have one
6. Click **Create repository**

### Upload your files

**Using the GitHub web interface (no Git required):**

1. On your new empty repo page, click **uploading an existing file**
2. Drag and drop the entire `rosie-crown/` folder contents
   (or use "choose your files" to select them all)
3. GitHub will show all the files — scroll down, write a commit message like `Initial upload`
4. Click **Commit changes**

**Important:** GitHub's drag-and-drop uploader supports folders. Drag the whole `rosie-crown` folder in and it will preserve the subfolder structure automatically.

---

## Deploying to GitHub Pages (free hosting)

After your files are uploaded to GitHub:

1. Go to your repository on GitHub
2. Click **Settings** (top tab row)
3. In the left sidebar, click **Pages**
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**
6. Wait ~60 seconds, then refresh the page
7. You'll see: **Your site is published at `https://YOUR-USERNAME.github.io/rosie-crown/`**

That's your live URL. Share it anywhere.

### Updating the site after it's live

1. Go to your repo on GitHub
2. Click the file you want to edit (e.g. `js/data.js`)
3. Click the **pencil icon** (Edit this file)
4. Make your changes
5. Scroll down → **Commit changes**
6. GitHub Pages auto-rebuilds in ~30 seconds

---

## Custom domain (optional)

If you have a domain like `rosiecrown.com`:

1. In your repo, go to **Settings → Pages**
2. Under **Custom domain**, type your domain and click Save
3. At your domain registrar, add a CNAME record:
   - Name: `www`
   - Value: `YOUR-USERNAME.github.io`
4. For the apex domain (`rosiecrown.com` without www), add four A records pointing to GitHub's IPs:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
5. Check **Enforce HTTPS** in Pages settings once DNS propagates (~24 hrs)

---

## Quick reference

| Task | File to edit |
|------|-------------|
| Change any text / links | `js/data.js` |
| Add/remove tracks | `js/data.js` → `tracks` array |
| Add/remove videos | `js/data.js` → `videos` array |
| Add hero photo | `sections/hero.js` + `assets/images/` |
| Add audio files | `assets/` + `js/data.js` → `audioSrc` |
| Change colors | `css/variables.css` |
| Change fonts | `css/variables.css` + `index.html` Google Fonts link |
| Connect booking form | `sections/booking.js` |
| Add social links | `js/data.js` → `socials` array |
