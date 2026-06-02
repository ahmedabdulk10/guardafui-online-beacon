import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, Sparkles } from "lucide-react";
import { Reveal } from "../components/site/Reveal";
import { FinalCTA } from "../components/site/CTA";
import { CALENDLY_URL } from "@/lib/site-config";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Small Business Web Setup Pricing | Guardafui Works" },
      {
        name: "description",
        content:
          "Fixed-price small business website setup packages from $750 — website, business email setup, hosting, and Google Business. Minnesota-based, fully remote.",
      },
      { property: "og:title", content: "Pricing — Get Your Business Online from $750 | Guardafui Works" },
      { property: "og:description", content: "Launch, Grow, and Scale packages — fixed pricing, no surprises. Built by a Minnesota IT pro." },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: PricingPage,
});

const tiers = [
  {
    name: "Launch",
    price: "$750",
    tag: "Get online with the essentials.",
    features: [
      "Domain registration & setup",
      "DNS configuration",
      "Professional business email (Microsoft 365 or Google Workspace)",
      "Email set up on all your devices",
      "Branded email signature",
      "Google Business Profile setup & optimization",
    ],
    popular: false,
    cta: "Get Started",
    href: "/contact",
    external: false,
  },
  {
    name: "Grow",
    price: "$1,500",
    tag: "Everything you need, plus a website.",
    features: [
      "Everything in Launch",
      "5-page custom website",
      "Mobile-responsive design",
      "Booking system integration",
      "Contact form",
      "Basic SEO setup",
    ],
    popular: true,
    cta: "Get Started",
    href: "/contact",
    external: false,
  },
  {
    name: "Scale",
    price: "$3,000",
    tag: "A custom-built site, fully tailored.",
    features: [
      "Everything in Grow",
      "Custom website design & build (more pages, tailored)",
      "Payment system setup (Stripe / Square)",
      "Logo design",
      "Cloud hosting setup (if needed)",
      "Directory listings (Yelp, Bing, Apple Maps)",
    ],
    popular: false,
    cta: "Get Started",
    href: "/contact",
    external: false,
  },
  {
    name: "Custom",
    price: "Let's Talk",
    tag: "Need something specific?",
    features: [
      "Tailored scope",
      "Anything we offer, combined",
      "E-commerce / complex builds",
      "Call or consult for a quote",
    ],
    popular: false,
    cta: "Contact Us",
    href: "/contact",
    external: false,
  },
];

const carePlans = [
  {
    name: "Basic",
    monthly: 150,
    yearly: 1500,
    tag: "Keep everything running smoothly.",
    features: [
      "Hosting & domain renewals managed",
      "Professional email upkeep",
      "Security monitoring",
      "Minor fixes & updates",
    ],
    popular: false,
  },
  {
    name: "Standard",
    monthly: 300,
    yearly: 3000,
    tag: "Active upkeep for a growing business.",
    features: [
      "Everything in Basic",
      "Website content updates",
      "Google Business Profile posts",
      "Monthly check-in",
    ],
    popular: true,
  },
  {
    name: "Full",
    monthly: 500,
    yearly: 5000,
    tag: "Hands-off, fully managed.",
    features: [
      "Everything in Standard",
      "Cloud / hosting management",
      "Priority support",
      "Monthly performance report",
    ],
    popular: false,
  },
];

function PricingPage() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  return (
    <>
      <section className="bg-sand py-24 md:py-32">
        <div className="container-prose text-center max-w-3xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber mb-4">Pricing</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="text-5xl md:text-6xl font-serif mb-6">
              Fixed prices. <em className="text-amber not-italic">Clear scope.</em>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-lg text-charcoal/75 leading-relaxed">
              Every package is a fixed price, agreed before we start. No hourly billing, no scope creep.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container-prose">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {tiers.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <div
                  className={`relative rounded-2xl p-8 h-full flex flex-col transition-all ${
                    t.popular
                      ? "bg-white border-2 border-amber shadow-amber lg:-translate-y-3"
                      : "bg-white border border-border shadow-card hover:shadow-card-hover"
                  }`}
                >
                  {t.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber text-navy-deep text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Most Popular
                    </span>
                  )}
                  <h2 className="text-2xl font-serif mb-1">{t.name}</h2>
                  <p className="text-sm text-charcoal/75 mb-5 min-h-[2.5rem]">{t.tag}</p>
                  <div className="text-4xl font-serif text-navy mb-6">{t.price}</div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {t.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-charcoal/80">
                        <CheckCircle2 size={16} className="text-amber flex-shrink-0 mt-0.5" /> {f}
                      </li>
                    ))}
                  </ul>
                  {t.external ? (
                    <a
                      href={t.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className={`block text-center font-semibold py-3 rounded-full transition-all ${
                        t.popular
                          ? "bg-amber text-navy-deep hover:shadow-amber"
                          : "border border-navy text-navy hover:bg-navy hover:text-white"
                      }`}
                    >
                      {t.cta}
                    </a>
                  ) : (
                    <Link
                      to={t.href}
                      className={`block text-center font-semibold py-3 rounded-full transition-all ${
                        t.popular
                          ? "bg-amber text-navy-deep hover:shadow-amber"
                          : "border border-navy text-navy hover:bg-navy hover:text-white"
                      }`}
                    >
                      {t.cta}
                    </Link>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          {/* Consultation callout */}
          <Reveal>
            <div className="mt-16 bg-sand rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 border border-border">
              <div className="w-14 h-14 rounded-xl bg-amber flex items-center justify-center flex-shrink-0">
                <Sparkles className="text-navy-deep" size={22} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-serif mb-1">Consultation — $150</h3>
                <p className="text-charcoal/75">
                  A focused 30-minute consult to map out exactly what you need.
                  <span className="text-navy font-semibold"> Fully credited toward your package</span> if you book.
                </p>
              </div>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="bg-navy text-white font-semibold px-6 py-3 rounded-full hover:bg-navy-deep transition-colors"
              >
                Schedule
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Care Plans */}
      <section className="bg-sand py-20 md:py-28">
        <div className="container-prose">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber mb-4">Care Plans</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="text-4xl md:text-5xl font-serif mb-6">
                Ongoing support, <em className="text-amber not-italic">handled.</em>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-lg text-charcoal/75 leading-relaxed">
                Optional monthly plans to keep your site, email, and online presence healthy.
              </p>
            </Reveal>

            {/* Billing toggle */}
            <Reveal delay={220}>
              <div className="mt-8 inline-flex items-center bg-white border border-border rounded-full p-1 shadow-card">
                <button
                  onClick={() => setBilling("monthly")}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                    billing === "monthly" ? "bg-navy text-white" : "text-charcoal/70 hover:text-navy"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBilling("yearly")}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${
                    billing === "yearly" ? "bg-navy text-white" : "text-charcoal/70 hover:text-navy"
                  }`}
                >
                  Yearly
                  <span className="bg-amber text-navy-deep text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    2 months free
                  </span>
                </button>
              </div>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {carePlans.map((p, i) => (
              <Reveal key={p.name} delay={i * 80}>
                <div
                  className={`relative rounded-2xl p-8 h-full flex flex-col transition-all ${
                    p.popular
                      ? "bg-white border-2 border-amber shadow-amber lg:-translate-y-3"
                      : "bg-white border border-border shadow-card hover:shadow-card-hover"
                  }`}
                >
                  {p.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber text-navy-deep text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-2xl font-serif mb-1">{p.name}</h3>
                  <p className="text-sm text-charcoal/75 mb-5 min-h-[2.5rem]">{p.tag}</p>
                  <div className="mb-6">
                    <div className="text-4xl font-serif text-navy">
                      ${billing === "monthly" ? p.monthly : p.yearly.toLocaleString()}
                      <span className="text-base text-charcoal/75 font-sans">
                        {billing === "monthly" ? "/mo" : "/yr"}
                      </span>
                    </div>
                    {billing === "yearly" && (
                      <div className="mt-2 inline-block bg-amber-soft text-navy-deep text-xs font-semibold px-2.5 py-1 rounded-full">
                        2 months free
                      </div>
                    )}
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-charcoal/80">
                        <CheckCircle2 size={16} className="text-amber flex-shrink-0 mt-0.5" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`block text-center font-semibold py-3 rounded-full transition-all ${
                      p.popular
                        ? "bg-amber text-navy-deep hover:shadow-amber"
                        : "border border-navy text-navy hover:bg-navy hover:text-white"
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="text-center text-sm text-charcoal/75 mt-10">
            Care Plans are optional and added after your setup.
          </p>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
