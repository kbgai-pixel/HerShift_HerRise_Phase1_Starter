# HerShift | HerRise — Phase 1 website starter

This is a mobile-first React/Vite website prototype based on the HerShift | HerRise brief.

## Included
- Home, Retreats & Events, About, Register, Thank You and Contact pages
- Three retreat experience descriptions
- Featured five-day retreat listing
- TidyCal booking link
- Referral query-string capture (`?ref=NAME`) carried into the preview registration flow
- Responsive design with a cream, plum, rose and muted-gold visual direction

## Important: preview vs. production
The registration form currently demonstrates the visitor journey in the browser. It stores the submitted details in that browser session only. It does **not** yet send data to an email platform, database, payment provider or CRM. No payment is collected. The Thank You page explicitly describes this as a preview.

Before accepting real registrations, connect:
1. A database (e.g. Supabase) for event and registration records.
2. An email provider (e.g. Brevo) for consent records and confirmation messages.
3. Stripe Payment Links or Checkout after the event pricing and refund policy are finalised.
4. A server-side webhook for verified payment and referral attribution.
5. A privacy policy and CASL-compliant consent/unsubscribe workflow.

## Run locally
Install Node.js (LTS), then in this folder run:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

## Build for deployment
```bash
npm run build
npm run preview
```

The production files are generated in `dist/`.

## Deploy to Vercel
1. Create a GitHub repository and upload this project.
2. Import the repository in Vercel.
3. Framework preset: Vite.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Deploy.

For a custom domain, add `therisecollective.ca` in Vercel's project domain settings and follow the DNS instructions Vercel provides. Do not change DNS until you are ready to point the domain to the new site.

## First edits to make
- Replace the sample email address if you use a different inbox.
- Confirm brand colours and photography.
- Add actual retreat dates, destination, room options and prices.
- Confirm the payment provider and email platform.
- Add legal pages and production integrations before launch.
