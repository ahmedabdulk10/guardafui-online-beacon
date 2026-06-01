import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Globe, Mail, Server, MapPin, ArrowRight, ArrowUpRight,
  MessageCircle, PencilRuler, Wrench, Rocket, CheckCircle2,
} from "lucide-react";
import { Reveal } from "../components/site/Reveal";
import { FinalCTA, CALENDLY_URL } from "../components/site/CTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Guardafui Works — Get Your Small Business Online, Done Right" },
      {
        name: "description",
        content:
          "Premium small business website setup, business email, hosting, and Google Business — built by an IT pro. Live in about a week.",
      },
      { property: "og:title", content: "Guardafui Works — A beacon for small business online." },
      { property: "og:description", content: "Custom websites, business email and full online setup in about a week." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const services = [
  { num: "01", icon: Globe, title: "Custom Websites", desc: "Hand-built sites that load fast and convert visitors into customers — never a template." },
  { num: "02", icon: Mail, title: "Business Email", desc: "you@yourbusiness.com on Microsoft 365 or Google Workspace, configured properly from day one." },
  { num: "03", icon: Server, title: "Hosting & Domain", desc: "Reliable managed cloud hosting, domain registration, DNS, SSL — wired up and watched over." },
  { num: "04", icon: MapPin, title: "Google Business", desc: "Maps and Search presence so the right customers find you in your neighbourhood." },
];

const steps = [
  { icon: MessageCircle, title: "Free Consult", desc: "Thirty unhurried minutes to understand your business, your customers, and where you want to land." },
  { icon: PencilRuler, title: "We Plan Your Setup", desc: "A clear, fixed-price scope. No mystery line items, no upsell theatre — just the path." },
  { icon: Wrench, title: "We Build It", desc: "Website, email, hosting, Google Business — engineered properly, not pasted together." },
  { icon: Rocket, title: "You Go Live", desc: "Hand-off, training, and you're open for business. The beacon stays lit." },
];

const tiers = [
  { name: "Launch", price: "$750", tag: "Get online with the essentials.", features: ["Domain & DNS setup", "Professional business email", "Google Business Profile"] },
  { name: "Grow", price: "$1,500", tag: "Everything you need, plus a website.", features: ["Everything in Launch", "5-page custom website", "Booking system integrated"], popular: true },
  { name: "Scale", price: "$3,000", tag: "A custom-built site, fully tailored.", features: ["Custom website design & build", "Booking system", "Premium build & polish"] },
];

function Home() {
  return (
    <>
      {/* ============ HERO — immersive navy editorial ============ */}
      <section className="relative isolate overflow-hidden bg-navy-deep text-white">
        {/* Beacon glow */}
        <div
          aria-hidden
          className="absolute -top-40 -right-40 w-[720px] h-[720px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(closest-side, rgb(217 162 59 / 0.22), transparent 70%)" }}
        />
        {/* Diagonal light beam */}
        <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          <div
            className="absolute -top-1/4 left-1/2 -translate-x-1/2 w-px h-[170%] rotate-[28deg]"
            style={{ background: "linear-gradient(to bottom, transparent, rgb(217 162 59 / 0.55), transparent)" }}
          />
          <div
            className="absolute -top-1/4 left-1/2 -translate-x-1/2 w-[3px] h-[170%] rotate-[28deg] blur-sm"
            style={{ background: "linear-gradient(to bottom, transparent, rgb(217 162 59 / 0.25), transparent)" }}
          />
        </div>

        <div className="container-prose relative pt-20 md:pt-28 pb-24 md:pb-36">
          <div className="max-w-4xl">
            <Reveal>
              <div className="inline-flex items-center gap-3 text-amber font-sans text-[11px] uppercase tracking-[0.32em] mb-8">
                <span className="h-px w-12 bg-amber/60" />
                A guiding beacon for small business
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="font-serif font-light leading-[0.92] text-white text-6xl md:text-8xl lg:text-9xl mb-8">
                A beacon in the<br />
                <em className="text-amber not-italic">digital fog.</em>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-lg md:text-xl text-white/65 font-light leading-relaxed max-w-2xl">
                A remote tech studio building custom websites, business email, hosting and Google
                Business — so the businesses doing real work in the real world finally look
                established online. Premium craft. Fixed price. Live in about a week.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-5">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group inline-flex items-center gap-3 bg-amber text-navy-deep font-semibold tracking-tight px-7 py-4 rounded-sm hover:-translate-y-0.5 transition-transform"
                >
                  Book a Free Consult
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <Link
                  to="/services"
                  className="group inline-flex items-center gap-3 text-white/80 hover:text-white font-sans uppercase text-xs tracking-[0.28em] border-b border-white/20 hover:border-amber pb-2 transition-colors"
                >
                  Explore our services
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Metric strip */}
          <div className="mt-24 md:mt-32 grid grid-cols-2 md:grid-cols-4 gap-10 border-t border-white/10 pt-10">
            {[
              { v: "~7 Days", l: "Average Turnaround" },
              { v: "$750+", l: "Fixed-Price Start" },
              { v: "100% Remote", l: "Anywhere, Anytime" },
              { v: "One Voice", l: "Unified Presence" },
            ].map((m, i) => (
              <Reveal key={m.l} delay={i * 80}>
                <div>
                  <div className="font-serif italic text-3xl md:text-4xl text-amber">{m.v}</div>
                  <div className="mt-2 font-sans text-[10px] uppercase tracking-[0.3em] text-white/40">{m.l}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SERVICES — editorial 4-up rule grid ============ */}
      <section className="bg-white py-24 md:py-32">
        <div className="container-prose">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-end mb-14">
            <div className="md:col-span-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-amber mb-4">What we do</p>
              <h2 className="text-5xl md:text-6xl font-serif font-light leading-[1.02] text-navy">
                Four services. <em className="text-amber not-italic">One</em> coherent online presence.
              </h2>
            </div>
            <div className="md:col-span-4 md:col-start-9 border-l border-amber pl-6 text-charcoal/70 leading-relaxed">
              We don't sell single pieces of a puzzle. We deliver the whole picture — the site,
              the email at your domain, the hosting, the local search — properly wired together.
            </div>
          </div>

          <div className="border-t border-border">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <Link
                  to="/services"
                  className="group grid grid-cols-12 gap-6 items-start py-9 md:py-12 border-b border-border hover:bg-sand/60 transition-colors px-2 -mx-2"
                >
                  <div className="col-span-2 md:col-span-1 font-serif italic text-2xl md:text-3xl text-amber pt-1">{s.num}</div>
                  <div className="col-span-10 md:col-span-4 flex items-start gap-4">
                    <span className="w-11 h-11 rounded-full border border-navy/15 flex items-center justify-center flex-shrink-0">
                      <s.icon size={18} className="text-navy" />
                    </span>
                    <h3 className="text-2xl md:text-3xl font-serif text-navy mt-1">{s.title}</h3>
                  </div>
                  <p className="col-span-12 md:col-span-6 text-charcoal/70 leading-relaxed md:pt-3">
                    {s.desc}
                  </p>
                  <ArrowUpRight
                    size={20}
                    className="hidden md:block md:col-span-1 text-navy/40 group-hover:text-amber group-hover:-translate-y-1 group-hover:translate-x-1 transition-all justify-self-end mt-3"
                  />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ MANIFESTO — quote / why ============ */}
      <section className="bg-sand py-24 md:py-36 relative overflow-hidden">
        <div className="container-prose relative">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-amber">Why Guardafui</p>
              <div className="mt-6 font-serif italic text-7xl text-amber leading-none">“</div>
            </div>
            <blockquote className="md:col-span-9 font-serif font-light text-3xl md:text-5xl leading-[1.15] text-navy">
              The lighthouse, <em className="text-amber not-italic">not</em> the lighthouse keeper.
              <span className="block mt-8 text-lg md:text-xl font-sans not-italic text-charcoal/70 leading-relaxed max-w-3xl">
                You shouldn't have to become an IT department to look professional online. We
                stand watch over the technical work — the code, the email records, the SSL, the
                Google profile — so you can stand in front of your customers.
              </span>
            </blockquote>
          </div>

          <div className="mt-20 grid md:grid-cols-3 gap-px bg-border border border-border">
            {[
              { k: "Built by an IT pro", v: "Real engineering and security expertise — not just templates and Squarespace tweaks." },
              { k: "Fast, fixed, finished", v: "Most setups go live in about a week, on a fixed price agreed up front." },
              { k: "Fully remote, fully clear", v: "Async updates, clear scope, zero meetings padding the bill." },
            ].map((b) => (
              <div key={b.k} className="bg-white p-10">
                <h3 className="text-xl md:text-2xl font-serif text-navy mb-3">{b.k}</h3>
                <p className="text-charcoal/70 leading-relaxed text-sm">{b.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PRICING TEASER — split editorial ============ */}
      <section className="bg-white py-24 md:py-32">
        <div className="container-prose">
          <div className="grid md:grid-cols-12 gap-12 items-end mb-14">
            <div className="md:col-span-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-amber mb-4">Packages</p>
              <h2 className="text-5xl md:text-6xl font-serif font-light leading-[1.02] text-navy">
                Transparent investment.<br />
                <em className="text-amber not-italic">Zero surprises.</em>
              </h2>
            </div>
            <div className="md:col-span-4 md:col-start-9 md:text-right">
              <Link
                to="/pricing"
                className="group inline-flex items-center gap-3 text-navy font-semibold text-sm uppercase tracking-[0.2em] hover:text-amber transition-colors"
              >
                See full pricing
                <span className="w-11 h-11 rounded-full border border-navy/20 flex items-center justify-center group-hover:bg-navy group-hover:border-navy group-hover:text-white transition-all">
                  <ArrowRight size={16} />
                </span>
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((t, i) => (
              <Reveal key={t.name} delay={i * 90}>
                <div
                  className={`relative h-full p-8 md:p-9 border transition-all ${
                    t.popular
                      ? "bg-navy text-white border-navy shadow-amber lg:-translate-y-2"
                      : "bg-white text-charcoal border-border hover:border-navy/30 hover:shadow-card-hover"
                  }`}
                >
                  {t.popular && (
                    <span className="absolute -top-3 left-8 bg-amber text-navy-deep text-[10px] font-bold px-3 py-1 uppercase tracking-[0.2em]">
                      Most popular
                    </span>
                  )}
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className={`text-2xl font-serif ${t.popular ? "text-white" : "text-navy"}`}>{t.name}</h3>
                    <span className="font-sans italic text-xs tracking-widest opacity-50">0{i + 1}</span>
                  </div>
                  <p className={`text-sm mb-7 ${t.popular ? "text-white/60" : "text-charcoal/60"}`}>{t.tag}</p>
                  <div className={`font-serif text-5xl mb-7 ${t.popular ? "text-amber" : "text-navy"}`}>{t.price}</div>
                  <ul className="space-y-3 mb-8">
                    {t.features.map((f) => (
                      <li key={f} className={`flex items-start gap-2.5 text-sm ${t.popular ? "text-white/80" : "text-charcoal/80"}`}>
                        <CheckCircle2 size={15} className="text-amber flex-shrink-0 mt-0.5" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/pricing"
                    className={`block text-center text-xs uppercase tracking-[0.25em] py-3.5 transition-colors ${
                      t.popular
                        ? "bg-amber text-navy-deep font-semibold hover:bg-white"
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

      {/* ============ PROCESS — horizontal navy band ============ */}
      <section className="bg-navy-deep text-white py-24 md:py-32 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -bottom-40 -left-40 w-[640px] h-[640px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(closest-side, rgb(217 162 59 / 0.15), transparent 70%)" }}
        />
        <div className="container-prose relative">
          <div className="max-w-3xl mb-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-amber mb-4">How it works</p>
            <h2 className="text-5xl md:text-6xl font-serif font-light leading-[1.02] text-white">
              From first call to <em className="text-amber not-italic">go-live</em>, in four steps.
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-10 md:gap-8">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="font-serif italic text-5xl text-amber leading-none">0{i + 1}</span>
                    <span className="flex-1 h-px bg-white/15" />
                    <s.icon size={18} className="text-white/60" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif text-white mb-3">{s.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
