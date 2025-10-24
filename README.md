# Daniel Borlay — Personal Site

A small, fast, single‑page personal website suitable for job applications.

## 🚀 Quick Start

Open `index.html` locally to preview.

## 🌐 Deploy Options

### GitHub Pages
1. Create a new public repo, e.g. `daniel-borlay-site`.
2. Push these files to the repo.
3. In **Settings → Pages**, choose **Deploy from branch** (branch: `main`, folder: `/root`).
4. Your site will be available at `https://<username>.github.io/daniel-borlay-site/`.

### Netlify
- Drag and drop this folder onto the Netlify dashboard, or connect the repo.

### AWS S3 + CloudFront
1. Create an S3 bucket (static website hosting enabled).
2. Upload all files, set `index.html` as the index document.
3. (Optional) Put CloudFront in front for HTTPS + CDN.

## 🧩 Customize
- Edit content in `index.html` (search for sections: About, Skills, Experience, etc.).
- Tweak styles in `css/styles.css`.
- JS (theme toggle) lives in `js/script.js`.

## 📄 Resume
The site looks for `assets/Daniel_Borlay_DevOps_Resume.pdf`. Replace it as needed.

## 🔒 Accessibility & SEO
- Semantic HTML, accessible colors, and keyboard‑friendly.
- Includes JSON‑LD Person schema.