Roamstead — Starter Landing Page (Next.js App Router)

What's included
- Full-screen hero with background image + overlay
- Centered wordmark + tagline + CTA buttons
- Booking section with embed-ready iframe placeholder
- Styling that matches the Roamstead deck (clean, modern, airy over mountain imagery)

Files
- app/page.tsx
- app/layout.tsx
- app/globals.css
- public/assets/*  (copied assets: roamstead_logo_wordmark.png, roamstead_logo_wordmark_transparent.png, roamstead_hero.jpg, roamstead_mountain_bg.png, brand_page_1.png, brand_page_2.png)

How to use in your existing project
1) Copy the /app and /public/assets folders into your Next.js project (merge/overwrite as needed)
2) Ensure you're using the App Router (app/ folder)
3) Run:
   npm run dev
4) Edit placeholders in app/page.tsx:
   - AIRBNB_URL
   - BOOKING_WIDGET_EMBED_URL
   - check-in/out, location, email

Notes
- If you have hero.png in your project's /public, you can switch heroBg to "/hero.png"
- If your wordmark file name differs, update the 'wordmark' const in app/page.tsx
