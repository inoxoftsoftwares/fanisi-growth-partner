import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent, type CSSProperties } from "react";
import { supabase } from "@/integrations/supabase/client";
import { CheckCircle2, MapPin, Mail, Phone, Menu, X, Linkedin, Twitter, Instagram } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fanisi Digital — Software, Automation & Marketing for Kenyan Businesses" },
      {
        name: "description",
        content:
          "Fanisi Digital helps Kenyan SMEs run smarter with custom software, business automation, and digital marketing — all under one roof in Nairobi.",
      },
      { property: "og:title", content: "Fanisi Digital — Software, Automation & Marketing for Kenyan Businesses" },
      {
        property: "og:description",
        content:
          "Custom software, business automation, and digital marketing built for Kenyan SMEs. Based in Nairobi. Get a free consultation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const SERVICES = [
  {
    id: "software",
    title: "Software Development",
    tagline: "Tools built around how your business actually works.",
    body: "From customer-facing websites and portals to internal systems for stock, orders, and records — we build reliable software that fits your workflow and your budget, not the other way around.",
    points: ["Custom web & mobile applications", "Management dashboards & reporting", "M-Pesa and local payment integration"],
  },
  {
    id: "automation",
    title: "Business Automation",
    tagline: "Stop losing hours to repetitive work.",
    body: "We connect the tools you already use and automate the boring parts — invoicing, follow-ups, stock alerts, reporting — so your team spends time on customers, not copy-pasting between spreadsheets.",
    points: ["Workflow & approval automation", "Invoicing, reminders & follow-ups", "Integrations with your existing tools"],
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    tagline: "Be found by the customers already looking for you.",
    body: "Practical, measurable marketing for the Kenyan market — social media, Google presence, and campaigns that bring in real enquiries, not vanity numbers.",
    points: ["Social media management & campaigns", "Google Business & local SEO", "Content that speaks to Kenyan customers"],
  },
];

const WHY_POINTS = [
  {
    title: "We understand the local market",
    body: "We're based in Nairobi and work with Kenyan SMEs every day. We know how your customers buy, how your suppliers operate, and what it takes to grow here.",
  },
  {
    title: "M-Pesa and local payments, built in",
    body: "Payments aren't an afterthought. We build with M-Pesa, bank transfers, and local payment habits in mind from day one.",
  },
  {
    title: "Practical solutions, honest pricing",
    body: "No bloated enterprise packages. We recommend what your business actually needs now, with clear pricing in shillings and room to grow.",
  },
  {
    title: "One partner for the whole journey",
    body: "Software, automation, and marketing under one roof — so your systems, your operations, and your growth all pull in the same direction.",
  },
];

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#services", label: "Services" },
    { href: "#why", label: "Why Fanisi" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="flex items-baseline gap-1.5">
          <span className="font-display text-xl font-bold tracking-tight text-primary">Fanisi</span>
          <span className="font-display text-xl font-bold tracking-tight text-accent">Digital</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Free consultation
          </a>
        </nav>
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-lg bg-primary px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground"
            >
              Free consultation
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* subtle topographic accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-radial-gradient(circle at 80% 20%, transparent 0, transparent 40px, var(--primary) 40px, var(--primary) 41px)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-16 sm:pb-28 sm:pt-24">
        <div className="max-w-3xl">
          <p className="reveal text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Software · Automation · Marketing — Nairobi, Kenya
          </p>
          <h1
            className="reveal mt-5 text-4xl font-bold leading-[1.1] text-foreground sm:text-5xl lg:text-6xl"
            style={{ "--reveal-delay": "120ms" } as CSSProperties}
          >
            Helping Kenyan businesses run smarter — and grow faster.
          </h1>
          <p
            className="reveal mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground"
            style={{ "--reveal-delay": "240ms" } as CSSProperties}
          >
            Fanisi Digital is your single partner for custom software, business automation, and
            digital marketing. We build practical technology that fits how Kenyan SMEs actually
            work — so you can focus on your customers, not your admin.
          </p>
          <div
            className="reveal mt-9 flex flex-col gap-3 sm:flex-row"
            style={{ "--reveal-delay": "360ms" } as CSSProperties}
          >
            <a
              href="#contact"
              className="rounded-lg bg-primary px-7 py-3.5 text-center text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5"
            >
              Get a free consultation
            </a>
            <a
              href="#services"
              className="rounded-lg border border-border bg-card px-7 py-3.5 text-center text-base font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Explore our services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">What we do</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
            Three ways we help your business grow
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {SERVICES.map((s) => (
            <article
              key={s.id}
              className="group flex flex-col rounded-xl border border-border bg-card p-7 transition-shadow hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="h-1 w-10 rounded-full bg-accent transition-all group-hover:w-16" />
              <h3 className="mt-5 text-xl font-bold text-foreground">{s.title}</h3>
              <p className="mt-1.5 text-sm font-semibold text-primary">{s.tagline}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              <ul className="mt-6 space-y-2.5 border-t border-border pt-5">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-foreground">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyFanisi() {
  return (
    <section id="why" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Why Fanisi Digital</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              "Fanisi" means success. That's the whole point.
            </h2>
            <p className="mt-5 leading-relaxed text-primary-foreground/80">
              We're not a generic tech agency. We're a Nairobi team that measures our work by one
              thing: whether your business runs better because of it.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-block rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              Talk to us about your business
            </a>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {WHY_POINTS.map((w) => (
              <div key={w.title} className="border-l-2 border-accent/70 pl-5">
                <h3 className="font-display text-lg font-semibold">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/75">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    const { error } = await supabase.from("contact_leads").insert({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      service_interest: interest,
    });
    if (error) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setName("");
    setEmail("");
    setInterest("");
    setMessage("");
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Get in touch</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
            Let's talk about your business
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
            Tell us what's slowing you down or where you want to grow. We'll get back to you
            within one business day with honest, practical advice — no obligation.
          </p>
          <div className="mt-8 space-y-4 text-sm">
            <p className="flex items-center gap-3 text-foreground">
              <MapPin className="h-4 w-4 shrink-0 text-primary" /> Nairobi, Kenya
            </p>
            <p className="flex items-center gap-3 text-foreground">
              <Mail className="h-4 w-4 shrink-0 text-primary" /> hello@fanisidigital.co.ke
            </p>
            <p className="flex items-center gap-3 text-foreground">
              <Phone className="h-4 w-4 shrink-0 text-primary" /> +254 700 000 000
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
          {status === "success" ? (
            <div className="flex h-full min-h-80 flex-col items-center justify-center text-center">
              <CheckCircle2 className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-xl font-bold text-foreground">Asante! Message received.</h3>
              <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                Thank you for reaching out. We'll get back to you within one business day.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
                  Name
                </label>
                <input
                  id="name"
                  required
                  maxLength={100}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/20"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  maxLength={255}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/20"
                  placeholder="you@company.co.ke"
                />
              </div>
              <div>
                <label htmlFor="interest" className="mb-1.5 block text-sm font-medium text-foreground">
                  Service interest
                </label>
                <select
                  id="interest"
                  required
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/20"
                >
                  <option value="" disabled>
                    Select a service…
                  </option>
                  <option value="Software Development">Software Development</option>
                  <option value="Business Automation">Business Automation</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Not sure yet">Not sure yet</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  maxLength={2000}
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full resize-none rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/20"
                  placeholder="Tell us a bit about your business and what you need…"
                />
              </div>
              {status === "error" && (
                <p className="text-sm font-medium text-destructive">
                  Something went wrong. Please try again, or email us directly.
                </p>
              )}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
              >
                {status === "loading" ? "Sending…" : "Send message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "duplicate" | "error">("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    const { error } = await supabase
      .from("newsletter_subscribers")
      .insert({ email: email.trim().toLowerCase() });
    if (error) {
      setStatus(error.code === "23505" ? "duplicate" : "error");
      return;
    }
    setStatus("success");
    setEmail("");
  }

  return (
    <section className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Practical tips for Kenyan businesses, in your inbox
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            A short monthly email on running your business smarter — software, automation, and
            marketing ideas that work in the Kenyan market. No spam, unsubscribe anytime.
          </p>
          {status === "success" ? (
            <div className="mt-7 flex items-center justify-center gap-2 rounded-lg border border-primary/30 bg-card px-5 py-4">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
              <p className="text-sm font-semibold text-foreground">
                You're subscribed! Karibu — see you in your inbox.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-7 flex flex-col gap-3 sm:flex-row">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                maxLength={255}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-lg border border-input bg-card px-3.5 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/20"
                placeholder="Your email address"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
              >
                {status === "loading" ? "Subscribing…" : "Subscribe"}
              </button>
            </form>
          )}
          {status === "duplicate" && (
            <p className="mt-3 text-sm font-medium text-primary">
              This email is already subscribed — asante for your continued interest!
            </p>
          )}
          {status === "error" && (
            <p className="mt-3 text-sm font-medium text-destructive">
              Something went wrong. Please try again.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="font-display text-xl font-bold">
              Fanisi<span className="text-accent"> Digital</span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
              Software, automation, and digital marketing for Kenyan businesses that are ready to
              run smarter.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/80">
              <li><a href="#services" className="hover:text-primary-foreground">Software Development</a></li>
              <li><a href="#services" className="hover:text-primary-foreground">Business Automation</a></li>
              <li><a href="#services" className="hover:text-primary-foreground">Digital Marketing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">Contact</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 shrink-0" /> Nairobi, Kenya</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0" /> hello@fanisidigital.co.ke</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0" /> +254 700 000 000</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">Follow us</h3>
            <div className="mt-4 flex gap-3">
              <a href="#" aria-label="LinkedIn" className="rounded-lg border border-primary-foreground/20 p-2.5 transition-colors hover:bg-primary-foreground/10">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Twitter / X" className="rounded-lg border border-primary-foreground/20 p-2.5 transition-colors hover:bg-primary-foreground/10">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Instagram" className="rounded-lg border border-primary-foreground/20 p-2.5 transition-colors hover:bg-primary-foreground/10">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-primary-foreground/15 pt-6 text-center text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} Fanisi Digital. Nairobi, Kenya. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyFanisi />
        <ContactSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
