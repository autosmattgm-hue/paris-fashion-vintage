# Fashion Vintage Paris

Production-style luxury boutique website built with HTML5, CSS3, and vanilla JavaScript.

## Pages

- `index.html` - cinematic homepage
- `about.html` - boutique story and trust signals
- `collection.html` - luxury product filtering and wishlist interactions
- `gallery.html` - masonry gallery with fullscreen lightbox
- `reviews.html` - testimonial carousel and review statistics
- `contact.html` - contact form, Google Maps embed, boutique details
- `booking.html` - appointment calendar and booking submission
- `robots.txt` and `sitemap.xml` - SEO crawl and discovery files
- `admin/` - dashboard, products, orders, customers, bookings, analytics, settings

## Run Locally

From the project folder:

```powershell
npm start
```

Then open:

```text
http://localhost:8080
```

For the Vivienne AI concierge:

```powershell
Copy-Item .env.example .env
# Add your NVIDIA_API_KEY value to .env
npm start
```

Vivienne uses `/api/vivienne` so the AI provider key stays on the server. If the key is not configured, the website still shows a built-in boutique concierge fallback with booking, collection, address, and WhatsApp guidance.

## Deploy To GitHub And Vercel

1. Run `npm run verify:deploy` from this folder.
2. Create a new GitHub repository named `fashion-vintage-paris`.
3. Push this folder to GitHub with `git add -A` so deleted files are removed from GitHub too.
4. Import the GitHub repository into Vercel.
5. In Vercel, use Framework Preset `Other`, leave Build Command empty, and leave Output Directory empty.
6. If your GitHub repository contains this project as a subfolder, set Root Directory to `fashion-vintage-paris`; otherwise leave Root Directory empty.
7. Add these Vercel Environment Variables:

```text
NVIDIA_API_KEY=your_rotated_nvidia_key
NVIDIA_MODEL=meta/llama-4-maverick-17b-128e-instruct
```

The project includes `vercel.json` and `api/vivienne.mjs`, so Vercel serves the static boutique website and the Vivienne AI concierge API route together.

## Admin Login

```text
Username: admin
Password: FashionParis2026
```

The admin demo hashes the submitted password in the browser and stores the login state locally. For real production use, replace this with server-side authentication, secure HTTP-only sessions, MFA, role-based access control, audit logs, and backend authorization for every write action.

## Features

- Responsive luxury design system
- Sticky glass navigation and fullscreen mobile menu
- Cinematic hero with video fallback, particles, and animated gold accents
- Product filtering, wishlist state, and detail prompts
- Lazy-loaded imagery
- Masonry gallery with accessible lightbox
- Review carousel
- Contact form validation and success notifications
- Booking calendar with localStorage persistence
- Vivienne AI concierge with French/English responses and browser voice playback
- Admin product CRUD with image upload preview storage
- Booking approval/cancel workflow
- Customer and order dashboards
- Canvas analytics charts
- Dark/light theme toggle
- SEO metadata, Open Graph tags, Twitter cards, and JSON-LD local business schema
- Accessible skip links, labels, ARIA attributes, keyboard Escape handling, and reduced motion support

## Production Upgrade Path

Before real deployment, connect:

- Backend API for products, bookings, customers, orders, and settings
- PostgreSQL or MySQL database with migrations and indexes
- Server-side authentication with refresh/session rotation
- Secure file uploads to object storage with signed URLs
- Stripe Checkout or Payment Intents with signed webhooks and idempotency keys
- Email notifications for bookings and contact requests
- Analytics instrumentation for conversions, calls, WhatsApp clicks, and booking completion
- CDN image optimization, CSP headers, rate limiting, and audit logging

## Business Details

- Business: Fashion Vintage Paris
- Type: Luxury Vintage Boutique / Consignment Shop
- Rating: 4.6 stars
- Reviews: 28
- Address: 15 Rue des Petits Champs, 75001 Paris, France
- Phone: +33 6 61 98 49 86
- Opening Hours: Closed · Opens 11 AM Saturday
- Location Code: V88Q+G6 Paris, France
