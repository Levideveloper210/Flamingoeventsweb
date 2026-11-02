# Flamingo Events & Rentals Abuja

A responsive Next.js website for Flamingo Events and Rentals Abuja. Built with Next.js App Router, React, TypeScript and custom CSS.

## Requirements
- Node.js 18.18+ (Node.js 20 LTS recommended)
- npm

## Run locally
1. Extract the project ZIP.
2. Open the `flamingo-events` folder in VS Code.
3. Open the terminal in that folder.
4. Run:

```bash
npm install
npm run dev
```

5. Visit http://localhost:3000

## Production build

```bash
npm run build
npm start
```

## Push to GitHub
Create a new empty repository on GitHub. In the project folder terminal, run:

```bash
git init
git add .
git commit -m "Initial Flamingo Events website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace the GitHub URL with your repository URL.

## Deploy on Vercel
1. Sign in at https://vercel.com.
2. Select **Add New → Project**.
3. Import the GitHub repository.
4. Keep the detected framework as **Next.js**.
5. No environment variables are required.
6. Click **Deploy**.

Vercel will build and host the website. Future pushes to the connected GitHub branch will trigger a new deployment.

## Easy content updates
- Business phone, address, Google reviews link, categories and image URLs: `lib/site.ts`
- Page content: files inside `app/`
- Global styling and colours: `app/globals.css`
- Navigation: `components/header.tsx`
- Footer: `components/footer.tsx`

## Important before publishing
- Gallery and catalogue photographs are temporary visual references from Unsplash, not verified photos of Flamingo's actual inventory or past events. Replace image URLs in `lib/site.ts` and `app/services/page.tsx` / `app/gallery/page.tsx` with the client's own photographs before launch.
- The Google reviews button currently opens a Google Maps search for the business because an exact review-profile URL was not supplied. Replace `googleReviewsUrl` in `lib/site.ts` with the verified Google review link.
- The enquiry form opens WhatsApp with the customer's submitted details. It does not store enquiries or confirm bookings.
- Opening hours are shown as listed on Google Business Profile; customers are advised to contact the business before visiting.

## Notes
This project does not require a database, paid API or environment variables. The WhatsApp enquiry flow uses the official `wa.me` link format.
