import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, ImageIcon } from "lucide-react";
import { Reveal } from "../components/site/Reveal";
import { FinalCTA } from "../components/site/CTA";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Guardafui Works" },
      { name: "description", content: "Recent small business websites and online setups built by Guardafui Works." },
      { property: "og:title", content: "Portfolio — Guardafui Works" },
      { property: "og:description", content: "Recent work — small business websites done right." },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

const projects = [
  { name: "Coastal Bookkeeping Co.", type: "Service Business Website", accent: "from-navy to-navy-deep" },
  { name: "Marrow & Stone", type: "Restaurant Website + Booking", accent: "from-amber to-amber/70" },
  { name: "Northbeam Logistics", type: "Corporate Website + Email", accent: "from-navy-deep to-navy" },
  { name: "Linden Family Dental", type: "Local Business + Google Profile", accent: "from-charcoal to-navy" },
];

function PortfolioPage() {
  return (
    <>
      <section className="bg-sand py-24 md:py-32">
        <div className="container-prose max-w-3xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber mb-4">Portfolio</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="text-5xl md:text-6xl font-serif mb-6">
              Recent <em className="text-amber not-italic">work.</em>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-lg text-charcoal/75 leading-relaxed">
              A look at the small businesses we've helped get online — websites, email, and the full setup.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container-prose">
          <div className="grid sm:grid-cols-2 gap-7">
            {projects.map((p, i) => (
              <Reveal key={p.name} delay={(i % 2) * 80}>
                <article className="group bg-white rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1">
                  <div className={`relative aspect-[4/3] bg-gradient-to-br ${p.accent} flex items-center justify-center overflow-hidden`}>
                    <ImageIcon className="text-white/30" size={56} />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_50%)]" />
                    <span className="absolute top-4 right-4 text-xs text-white/70 uppercase tracking-wider">
                      Screenshot coming soon
                    </span>
                  </div>
                  <div className="p-7 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-amber font-semibold mb-2">{p.type}</p>
                      <h2 className="text-2xl font-serif">{p.name}</h2>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-sand flex items-center justify-center group-hover:bg-amber transition-colors">
                      <ArrowUpRight className="text-navy" size={18} />
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-20 text-center max-w-xl mx-auto">
              <h3 className="text-2xl font-serif mb-3">More case studies on the way.</h3>
              <p className="text-charcoal/70">
                We're rolling out detailed write-ups of recent builds. Want yours to be next?
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
