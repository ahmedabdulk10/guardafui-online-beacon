import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Globe, Mail, Server, MapPin, Sparkles, Clock, Wifi,
  CheckCircle2, ArrowRight, MessageCircle, PencilRuler, Wrench, Rocket,
} from "lucide-react";
import { BeaconWatermark } from "../components/site/Beacon";
import { Reveal } from "../components/site/Reveal";
import { FinalCTA } from "../components/site/CTA";
import { ReviewCard } from "../components/site/Reviews";
import { placeholderReviews } from "../lib/reviews-data";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Small Business Website Setup in Minnesota | Guardafui Works" },
      {
        name: "description",
        content:
          "Get your small business online in about a week. Custom website setup, business email, hosting, and Google Business — built by a Minnesota IT pro.",
      },
      { property: "og:title", content: "Small Business Website Setup in Minnesota | Guardafui Works" },
      { property: "og:description", content: "Custom websites, business email and full online setup for Minnesota small businesses. Live in about a week." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const services = [
  { icon: Globe, title: "Custom Websites", desc: "Hand-built sites that load fast and convert." },
  { icon: Mail, title: "Professional Email", desc: "you@yourbusiness.com on Microsoft 365 or Google." },
  { icon: Server, title: "Hosting & Domain", desc: "Reliable cloud hosting and domain configuration." },
  { icon: MapPin, title: "Google Business", desc: "Show up on Maps and Search from day one." },
];

const why = [
  { icon: Sparkles, title: "Built by an IT Pro", desc: "Real engineering and security expertise — not just templates and Squarespace tweaks." },
  { icon: Clock, title: "Fast Turnaround", desc: "Most setups go live in about a week, with a clear plan from day one." },
  { icon: Wifi, title: "100% Remote", desc: "Work with us from anywhere. Clear comms, async updates, zero meetings padding the bill." },
];

const tiers = [
  {
    name: "Launch", price: "$750", tag: "Get online with the essentials.",
    features: ["Domain registration & setup", "Professional business email", "Google Business Profile"],
    popular: false,
  },
  {
    name: "Grow", price: "$1,500", tag: "Everything you need, plus a website.",
    features: ["Everything in Launch", "5-page custom website", "Booking system integrated"],
    popular: true,
  },
  {
    name: "Scale", price: "$3,000", tag: "A custom-built site, fully tailored.",
    features: ["Custom website design & build", "Booking system", "Premium build"],
    popular: false,
  },
];

const steps = [
  { icon: MessageCircle, title: "Get Started", desc: "Tell us about your business and what you need." },
  { icon: PencilRuler, title: "We Plan Your Setup", desc: "A clear scope, timeline, and fixed price." },
  { icon: Wrench, title: "We Build It", desc: "Website, email, hosting — all wired up properly." },
  { icon: Rocket, title: "You Go Live", desc: "Hand-off, training, and you're open for business." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-white">
        <BeaconWatermark className="absolute -right-32 -top-20 w-[700px] text-amber pointer-events-none" />
        <div className="container-prose pt-20 pb-24 md:pt-28 md:pb-36 relative">
          <div className="max-w-3xl">
            <Reveal>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber mb-6">
                <span className="w-8 h-px bg-amber" /> A guiding beacon for small business
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="text-5xl md:text-7xl leading-[1.05] font-serif text-navy mb-7">
                Get Your Business Online — <em className="text-amber not-italic">Done Right,</em> Done Fast.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-lg md:text-xl text-charcoal/75 max-w-2xl leading-relaxed mb-10">
                Professional websites, business email, and everything you need to look established from
                day one. Built by an IT professional — not just a designer.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-amber text-navy-deep font-semibold px-7 py-3.5 rounded-full hover:shadow-amber transition-all hover:-translate-y-0.5"
                >
                  Get Started <ArrowRight size={18} />
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center gap-2 border-2 border-navy text-navy font-semibold px-7 py-3.5 rounded-full hover:bg-navy hover:text-white transition-colors"
                >
                  View Packages
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

      </section>

      {/* BENEFIT STRIP */}
      <section className="bg-sand">
        <div className="container-prose py-5 md:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-0 text-sm sm:text-base font-medium text-navy tracking-tight">
            <span>Quality &amp; Speed</span>
            <span className="hidden sm:inline text-amber mx-3">•</span>
            <span>Built by an IT pro</span>
            <span className="hidden sm:inline text-amber mx-3">•</span>
            <span>100% remote</span>
            <span className="hidden sm:inline text-amber mx-3">•</span>
            <span>Yours to keep</span>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-white py-24 md:py-32">
        <div className="container-prose">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber mb-3">WHAT WE DO</p>
            <h2 className="text-4xl md:text-5xl font-serif mb-4">
              Everything your business needs to show up online — handled.
            </h2>
            <p className="text-charcoal/70 text-lg leading-relaxed">
              From your domain and email to a custom website and your Google presence, we set up the whole foundation so you look established from day one.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="bg-white border border-border rounded-2xl p-7 h-full shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-amber-soft flex items-center justify-center mb-5">
                    <s.icon className="text-navy" size={22} />
                  </div>
                  <h3 className="text-xl font-serif mb-2">{s.title}</h3>
                  <p className="text-sm text-charcoal/70 leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={320}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <p className="text-charcoal/70 text-base">
                ...and more — booking systems, payments, branding, and ongoing care.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-navy font-semibold hover:text-amber transition-colors"
              >
                See all services <ArrowRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY */}
      <section className="bg-sand py-24 md:py-32">
        <div className="container-prose">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber mb-3">Why Guardafui Works</p>
            <h2 className="text-4xl md:text-5xl font-serif">The lighthouse, not the lighthouse keeper.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {why.map((w, i) => (
              <Reveal key={w.title} delay={i * 100}>
                <div className="text-center md:text-left">
                  <div className="w-14 h-14 rounded-full bg-navy flex items-center justify-center mb-5 mx-auto md:mx-0">
                    <w.icon className="text-amber" size={22} />
                  </div>
                  <h3 className="text-2xl font-serif mb-3">{w.title}</h3>
                  <p className="text-charcoal/75 leading-relaxed">{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES PREVIEW */}
      <section className="bg-white py-24 md:py-32">
        <div className="container-prose">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber mb-3">Packages</p>
              <h2 className="text-4xl md:text-5xl font-serif">Fixed pricing. No surprises.</h2>
            </div>
            <Link to="/pricing" className="text-navy font-semibold inline-flex items-center gap-2 hover:text-amber transition-colors">
              See Full Pricing <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((t, i) => (
              <Reveal key={t.name} delay={i * 90}>
                <div
                  className={`relative rounded-2xl p-8 h-full transition-all ${
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
                  <h3 className="text-2xl font-serif mb-1">{t.name}</h3>
                  <p className="text-sm text-charcoal/60 mb-5">{t.tag}</p>
                  <div className="text-4xl font-serif text-navy mb-6">{t.price}</div>
                  <ul className="space-y-3 mb-8">
                    {t.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-charcoal/80">
                        <CheckCircle2 size={16} className="text-amber flex-shrink-0 mt-0.5" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/pricing"
                    className={`block text-center font-semibold py-3 rounded-full transition-colors ${
                      t.popular
                        ? "bg-amber text-navy-deep hover:shadow-amber"
                        : "border border-navy text-navy hover:bg-navy hover:text-white"
                    }`}
                  >
                    See Details
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-navy text-white py-24 md:py-32 relative overflow-hidden">
        <BeaconWatermark className="absolute -left-40 -bottom-40 w-[700px] text-amber pointer-events-none opacity-50" />
        <div className="container-prose relative">
          <div className="max-w-2xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber mb-3">How It Works</p>
            <h2 className="text-4xl md:text-5xl font-serif text-white">From idea to live in four steps.</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8 md:gap-6">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="font-serif text-4xl text-amber">0{i + 1}</span>
                    <span className="flex-1 h-px bg-white/20" />
                    <s.icon className="text-white/70" size={20} />
                  </div>
                  <h3 className="text-xl font-serif text-white mb-2">{s.title}</h3>
                  <p className="text-white/65 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-sand py-24 md:py-32">
        <div className="container-prose">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber mb-3">
              What Clients Say
            </p>
            <h2 className="text-4xl md:text-5xl font-serif">
              Trusted by businesses getting online.
            </h2>
          </div>
          {placeholderReviews.length > 0 ? (
            <>
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {placeholderReviews.slice(0, 3).map((r, i) => (
                  <Reveal key={i} delay={i * 90}>
                    <ReviewCard review={r} />
                  </Reveal>
                ))}
              </div>
              <Reveal delay={300}>
                <div className="text-center">
                  <Link
                    to="/reviews"
                    className="inline-flex items-center gap-2 border-2 border-navy text-navy font-semibold px-7 py-3.5 rounded-full hover:bg-navy hover:text-white transition-colors"
                  >
                    Read more reviews <ArrowRight size={18} />
                  </Link>
                </div>
              </Reveal>
            </>
          ) : (
            <Reveal>
              <div className="bg-white border border-border rounded-2xl px-8 py-14 md:py-16 text-center max-w-2xl mx-auto shadow-card">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber mb-4">
                  Reviews coming soon
                </p>
                <h3 className="text-2xl md:text-3xl font-serif text-navy mb-4">
                  Be one of our first clients.
                </h3>
                <p className="text-charcoal/70 leading-relaxed mb-8 max-w-md mx-auto">
                  We're a new studio building a track record of real, premium work. Get in touch and your story could be featured here.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-amber text-navy-deep font-semibold px-7 py-3.5 rounded-full hover:shadow-amber transition-all hover:-translate-y-0.5"
                >
                  Get Started <ArrowRight size={18} />
                </Link>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <FinalCTA />

    </>
  );
}
