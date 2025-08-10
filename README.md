# Luxury Concierge – One-page Site

This project contains a ready-to-run Next.js + Tailwind site for your luxury sourcing concierge.

## Quick start (local preview)

1. **Install Node.js (LTS)** from nodejs.org (v18+ recommended).
2. **Download this folder** (or unzip the provided archive).
3. In a terminal, `cd` into the project folder and run:
   ```bash
   npm install
   npm run dev
   ```
4. Open **http://localhost:3000** in your browser.

## Update your contact details
Open `app/page.tsx` and change these constants near the top:
```ts
const WHATSAPP_URL = "https://wa.me/9715...";
const PHONE_NUMBER = "+971 50 ...";
const EMAIL = "you@example.com";
const BRAND = "Your Brand Name";
```

## Deploy to Vercel (free, easiest)
1. Create a free account at vercel.com and install the **Vercel CLI** (optional).
2. In the project folder run:
   ```bash
   npx vercel
   ```
   Follow the prompts → a live URL will be created.
   (Or push to GitHub and “Import Project” on Vercel’s dashboard.)

## Deploy to Netlify (alternative)
1. Create a Netlify account.
2. Push this project to a Git repository (GitHub).
3. In Netlify, “Add new site” → **Import from Git** → set **Build command**: `npm run build` and **Publish directory**: `.next`.
4. Netlify will give you a live URL.

---

### Notes
- The form is a front-end demo. Replace its `onSubmit` with your own API/WhatsApp flow if you want to capture submissions.
- Everything is client-side; you can add server routes in `app/api/*` later if needed.
