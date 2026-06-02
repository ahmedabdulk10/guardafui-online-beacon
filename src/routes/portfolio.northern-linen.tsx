import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ImageIcon, ArrowLeft } from "lucide-react";
import { Reveal } from "../components/site/Reveal";
import { FinalCTA } from "../components/site/CTA";

export const Route = createFileRoute("/portfolio/northern-linen")({
  head: () => ({
    meta: [
      { title: "Northern Linen Case Study — Laundry Service Website | Guardafui Works" },
      { name: "description", content: "How we built Northern Linen — a premium laundry pickup & delivery website with booking, payments, and business email setup in Bloomington, MN." },
      { property: "og:title", content: "Northern Linen — Case Study | Guardafui Works" },
      { property: "og:description", content: "A complete online presence for a premium laundry service in South Loop Bloomington." },
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

// TODO: replace with /assets/portfolio/northern-linen/*.png
const heroImage: string | null = null;
const galleryImages: (string | null)[] = [null, null, null];

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
          <div className="max-w-3xl">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber mb-4">
                Case Study — Laundry Service
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="text-5xl md:text-6xl font-serif mb-6">
                Northern <em className="text-amber not-italic">Linen.</em>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-lg text-charcoal/75 leading-relaxed">
                A premium laundry pickup & delivery service — taken from idea to a fully operational online business.
              </p>
            </Reveal>
          </div>

          <Reveal delay={220}>
            <div className="mt-12 relative aspect-[16/9] rounded-2xl overflow-hidden bg-gradient-to-br from-navy to-navy-deep shadow-card-hover">
              {heroImage ? (
                <img src={heroImage} alt="Northern Linen website hero" className="absolute inset-0 w-full h-full object-cover" />
              ) : (
                <>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ImageIcon className="text-white/25" size={72} />
                  </div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_55%)]" />
                  <span className="absolute top-5 right-5 text-xs text-white/70 uppercase tracking-wider">
                    Screenshot coming soon
                  </span>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container-prose max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <Reveal>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber mb-3">The Business</p>
                <h2 className="text-3xl font-serif mb-4">Premium laundry, delivered.</h2>
                <p className="text-charcoal/75 leading-relaxed">
                  Northern Linen is a premium laundry pickup & delivery service operating in South Loop Bloomington.
                </p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber mb-3">The Challenge</p>
                <h2 className="text-3xl font-serif mb-4">Online from scratch.</h2>
                <p className="text-charcoal/75 leading-relaxed">
                  A new service business that needed a complete online presence from scratch — a professional brand,
                  a way for customers to book and pay, and the technology to run it all.
                </p>
              </div>
            </Reveal>
          </div>
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
            <div className="flex items-end justify-between mb-10 max-w-3xl">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber mb-3">Gallery</p>
                <h2 className="text-3xl md:text-4xl font-serif">A look at the build.</h2>
              </div>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, i) => (
              <Reveal key={i} delay={(i % 3) * 80}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-navy to-navy-deep border border-border">
                  {img ? (
                    <img src={img} alt={`Northern Linen screenshot ${i + 1}`} className="absolute inset-0 w-full h-full object-cover" />
                  ) : (
                    <>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <ImageIcon className="text-white/25" size={48} />
                      </div>
                      <span className="absolute top-4 right-4 text-[10px] text-white/70 uppercase tracking-wider">
                        Coming soon
                      </span>
                    </>
                  )}
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
