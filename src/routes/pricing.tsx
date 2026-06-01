import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Sparkles, Wrench } from "lucide-react";
import { Reveal } from "../components/site/Reveal";
import { FinalCTA } from "../components/site/CTA";
import {
  CALENDLY_URL,
  STRIPE_LAUNCH_URL,
  STRIPE_GROW_URL,
  STRIPE_SCALE_URL,
} from "@/lib/site-config";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Guardafui Works" },
      {
        name: "description",
        content:
          "Fixed-price packages for getting your small business online — from $750. Plus optional Care Plans from $150/month.",
      },
      { property: "og:title", content: "Pricing — Guardafui Works" },
      { property: "og:description", content: "Launch, Grow, and Scale packages — fixed pricing, no surprises." },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: PricingPage,
});

const tiers = [
  {
    name: "Launch", price: "$750", tag: "Get online with the essentials.",
    features: ["Domain registration & setup", "Professional business email", "Google Business Profile"],
    popular: false, cta: "Get Started", href: STRIPE_LAUNCH_URL, external: true,
  },
  {
    name: "Grow", price: "$1,500", tag: "Everything you need, plus a website.",
    features: ["Everything in Launch", "5-page custom website", "Booking system integrated"],
    popular: true, cta: "Get Started", href: STRIPE_GROW_URL, external: true,
  },
  {
    name: "Scale", price: "$3,000", tag: "A custom-built site, fully tailored.",
    features: ["Custom website design & build", "Booking system", "Premium build & integrations"],
    popular: false, cta: "Get Started", href: STRIPE_SCALE_URL, external: true,
  },
  {
    name: "Custom", price: "Let's Talk", tag: "Need something specific?",
    features: ["Tailored scope", "Call or consult for a quote", "Anything we offer, combined"],
    popular: false, cta: "Contact Us", href: "/contact", external: false,
  },
];

function PricingPage() {
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  <p className="text-sm text-charcoal/60 mb-5 min-h-[2.5rem]">{t.tag}</p>
                  <div className="text-4xl font-serif text-navy mb-6">{t.price}</div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {t.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-charcoal/80">
                        <CheckCircle2 size={16} className="text-amber flex-shrink-0 mt-0.5" /> {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={CALENDLY_URL}
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

          {/* Care plans */}
          <Reveal>
            <div className="mt-6 bg-white rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 border border-border shadow-card">
              <div className="w-14 h-14 rounded-xl bg-amber-soft flex items-center justify-center flex-shrink-0">
                <Wrench className="text-navy" size={22} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-serif mb-1">Care Plans — from $150/month</h3>
                <p className="text-charcoal/75">
                  Optional ongoing maintenance, hosting, security updates, and content tweaks.
                  Set it and forget it — we keep your setup healthy.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
