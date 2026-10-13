# Fast Easy Payments – React (Vite) website

## Run locally
```bash
npm install
cp .env.example .env     # then paste your Web3Forms key inside .env
npm run dev              # http://localhost:5173
```
`npm run dev` / `npm run build` first try to download the transparent phone image and the
testimonial avatars from the old Framer site (`scripts/download-assets.mjs`). Do this while the
Framer site is still live. Afterwards commit `public/images/**` so you never depend on Framer.

## Contact form (free)
1. Go to https://web3forms.com → enter the email that should receive leads → copy the Access Key.
2. Put it in `.env` as `VITE_WEB3FORMS_KEY=...`
3. On the hosting site (Netlify etc.) add the same variable in *Environment variables*, then redeploy.

## Edit content
- Texts, FAQs, testimonials, POS list → `src/data.js`
- Email / phone / address / "Get Started" link → `src/config.js`
- Colors, fonts, gradients → `tailwind.config.js` (`theme.extend`)
- Styling is Tailwind CSS v3: classes are written directly inside each component

## Build
```bash
npm run build     # output in /dist
```
