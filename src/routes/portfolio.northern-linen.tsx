import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowLeft } from "lucide-react";
import { Reveal } from "../components/site/Reveal";
import { FinalCTA } from "../components/site/CTA";
import logoAsset from "../assets/portfolio/northern-linen/logo.jpg.asset.json";
import homeAsset from "../assets/portfolio/northern-linen/home.png.asset.json";
import bookingAsset from "../assets/portfolio/northern-linen/booking.png.asset.json";
import mobileHomeAsset from "../assets/portfolio/northern-linen/mobile-home.png.asset.json";
import mobileBookingAsset from "../assets/portfolio/northern-linen/mobile-booking.png.asset.json";

export const Route = createFileRoute("/portfolio/northern-linen")({
  head: () => ({
    meta: [
      { title: "Northern Linen Case Study | Guardafui Works" },
      { name: "description", content: "How we built Northern Linen — a premium laundry pickup & delivery website with booking, payments, and business email setup in Bloomington, MN." },
      { property: "og:title", content: "Northern Linen — Case Study | Guardafui Works" },
      { property: "og:description", content: "A complete online presence for a premium laundry service in South Loop Bloomington." },
      { property: "og:image", content: homeAsset.url },
      { property: "og:url", content: "/portfolio/northern-linen" },
    ],
    links: [{ rel: "canonical", href: "/portfolio/northern-linen" }],
  }),
  component: NorthernLinenPage,
});

const builtItems = [
  "Custom booking website with scheduling",
  "Professional business email & domain setup",
  "Secure online payment processing",
  "Automated SMS & email notifications",
  "Mobile-first responsive design",
];

const galleryImages = [
  { src: homeAsset.url, alt: "Northern Linen desktop home page", label: "Home — Desktop" },
  { src: bookingAsset.url, alt: "Northern Linen desktop booking page", label: "Booking — Desktop" },
  { src: mobileHomeAsset.url, alt: "Northern Linen mobile home page", label: "Home — Mobile" },
  { src: mobileBookingAsset.url, alt: "Northern Linen mobile booking page", label: "Booking — Mobile" },
];

function NorthernLinenPage() {
  return (
    <>
      <section className="bg-sand py-20 md:py-28">
        <div className="container-prose">
          <Reveal>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-medium text-charcoal/70 hover:text-navy transition-colors mb-8"
            >
              <ArrowLeft size={16} /> Back to Portfolio
            </Link>
          </Reveal>

          <div className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-center max-w-4xl">
            <Reveal>
              <div className="bg-white rounded-2xl border border-border shadow-card p-6 w-40 h-40 md:w-48 md:h-48 flex items-center justify-center mx-auto md:mx-0">
                <img src={logoAsset.url} alt="Northern Linen logo" width={726} height={533} className="max-w-full max-h-full object-contain" />
              </div>
            </Reveal>
            <div>
              <Reveal>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber mb-4">
                  Case Study — Laundry Service
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="text-5xl md:text-6xl font-serif mb-5">
                  Northern <em className="text-amber not-italic">Linen.</em>
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="text-lg text-charcoal/75 leading-relaxed">
                  A premium laundry pickup & delivery service — taken from idea to a fully operational online business.
                </p>
              </Reveal>
            </div>
          </div>

        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container-prose max-w-3xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber mb-3">The Story</p>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Built from the ground up — every detail handled.</h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-lg text-charcoal/80 leading-relaxed mb-8">
              Northern Linen came to us as a brand-new premium laundry pickup and delivery service in South Loop
              Bloomington. They had a strong brand vision — but absolutely nothing built. No website. No way for
              customers to find them, book a pickup, or pay. No professional email. No systems to run the business.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <p className="text-lg text-charcoal/80 leading-relaxed mb-8">
              We built the entire operation from zero.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <p className="text-lg text-charcoal/80 leading-relaxed mb-8">
              We designed and developed a custom booking website where customers could schedule pickups in seconds, and
              integrated a complete tech stack to power the whole business behind the scenes:
            </p>
          </Reveal>
          <Reveal delay={300}>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-lg text-charcoal/80">
                <span className="mt-1.5 w-5 h-5 rounded-full bg-amber flex items-center justify-center flex-shrink-0">
                  <Check className="text-navy-deep" size={12} strokeWidth={3} />
                </span>
                <span><strong>Stripe</strong> — secure online payments and automated billing</span>
              </li>
              <li className="flex items-start gap-3 text-lg text-charcoal/80">
                <span className="mt-1.5 w-5 h-5 rounded-full bg-amber flex items-center justify-center flex-shrink-0">
                  <Check className="text-navy-deep" size={12} strokeWidth={3} />
                </span>
                <span><strong>Twilio</strong> — automated SMS notifications for pickups and deliveries</span>
              </li>
              <li className="flex items-start gap-3 text-lg text-charcoal/80">
                <span className="mt-1.5 w-5 h-5 rounded-full bg-amber flex items-center justify-center flex-shrink-0">
                  <Check className="text-navy-deep" size={12} strokeWidth={3} />
                </span>
                <span><strong>Resend</strong> — professional automated email confirmations</span>
              </li>
              <li className="flex items-start gap-3 text-lg text-charcoal/80">
                <span className="mt-1.5 w-5 h-5 rounded-full bg-amber flex items-center justify-center flex-shrink-0">
                  <Check className="text-navy-deep" size={12} strokeWidth={3} />
                </span>
                <span><strong>Custom domain &amp; professional business email</strong> setup</span>
              </li>
              <li className="flex items-start gap-3 text-lg text-charcoal/80">
                <span className="mt-1.5 w-5 h-5 rounded-full bg-amber flex items-center justify-center flex-shrink-0">
                  <Check className="text-navy-deep" size={12} strokeWidth={3} />
                </span>
                <span><strong>Brand logo design</strong></span>
              </li>
              <li className="flex items-start gap-3 text-lg text-charcoal/80">
                <span className="mt-1.5 w-5 h-5 rounded-full bg-amber flex items-center justify-center flex-shrink-0">
                  <Check className="text-navy-deep" size={12} strokeWidth={3} />
                </span>
                <span><strong>Full website design, build, and hosting</strong></span>
              </li>
            </ul>
          </Reveal>
          <Reveal delay={360}>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              By the time we were done, Northern Linen wasn't just online — it was a fully operational business, ready
              to take orders, process payments, and notify customers automatically from day one. We handled every
              technical detail so they could focus on running their business.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-sand py-20 md:py-28">
        <div className="container-prose max-w-4xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber mb-3">What We Built</p>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="text-3xl md:text-4xl font-serif mb-10">An end-to-end setup.</h2>
          </Reveal>
          <ul className="grid sm:grid-cols-2 gap-4">
            {builtItems.map((item, i) => (
              <Reveal key={item} delay={(i % 2) * 60}>
                <li className="flex items-start gap-3 bg-white rounded-xl p-5 border border-border shadow-card">
                  <span className="mt-0.5 w-6 h-6 rounded-full bg-amber flex items-center justify-center flex-shrink-0">
                    <Check className="text-navy-deep" size={14} strokeWidth={3} />
                  </span>
                  <span className="text-charcoal/85 font-medium">{item}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container-prose max-w-3xl text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber mb-3">The Result</p>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="text-3xl md:text-4xl font-serif mb-5">A business that runs online.</h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-lg text-charcoal/75 leading-relaxed">
              A fully operational online presence — customers can book, pay, and receive updates seamlessly.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-sand py-20 md:py-28">
        <div className="container-prose">
          <Reveal>
            <div className="mb-10 max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber mb-3">Gallery</p>
              <h2 className="text-3xl md:text-4xl font-serif">A look at the build.</h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, i) => (
              <Reveal key={img.label} delay={(i % 3) * 80}>
                <figure className="group">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-white border border-border shadow-card">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <figcaption className="mt-3 text-sm text-charcoal/70 font-medium">{img.label}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
