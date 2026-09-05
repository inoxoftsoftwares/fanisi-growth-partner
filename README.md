# Fanisi Digital Growth

Build a modern, professional website for Fanisi Digital, a Nairobi-based company offering software development, business automation, and digital marketing services to Kenyan businesses.

Brand & tone: Confident, credible, locally-rooted but modern. "Fanisi" means success/achievement in Swahili — the site should feel like a partner that helps Kenyan SMEs grow, not a generic tech agency.

Pages/sections (single-page site with clear sections):

Hero — strong headline about helping Kenyan businesses run smarter (software + automation + marketing in one place), with a primary CTA to "Get a free consultation"

Services — three clear pillars: Software Development, Business Automation, Digital Marketing — each with a short description of what it solves for a Kenyan SME

Why Fanisi Digital — credibility section (local market understanding, M-Pesa/local payment familiarity, practical/affordable solutions)

Contact form — fields: Name, Email, Message, and a dropdown for "Service Interest" (Software / Automation / Digital Marketing / Not sure yet)

Newsletter signup — simple email capture, separate from the contact form, with a short line about updates/tips for Kenyan businesses

Footer — contact info, social links, location (Nairobi, Kenya)

Functionality:

Connect to Supabase (use Lovable's native Supabase integration)

Create a contact_leads table (name, email, message, service_interest, created_at) and insert a row when the contact form is submitted

Create a newsletter_subscribers table (email, created_at) and insert a row on newsletter signup — prevent duplicate emails

Show a success confirmation on both forms after submission

Fully responsive, mobile-first

Design direction: Avoid generic SaaS-card templates. Use a palette that feels grounded and trustworthy rather than a cream-and-terracotta or dark-mode-neon default — consider deep blues/greens with a warm accent that nods to Kenyan branding without being cliché. Clean sans-serif typography, generous whitespace, no unnecessary icons-in-circles pattern.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d11e6ed1-5713-4c39-aa1d-fb3f8e944f78).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
