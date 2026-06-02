import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../components/site/Reveal";
import { FinalCTA } from "../components/site/CTA";
import northernLinenLogo from "../assets/portfolio/northern-linen/logo.jpg.asset.json";

export const Route = createFileRoute("/portfolio/")({
  head: () => ({
    meta: [
      { title: "Portfolio — Small Business Website Setup in Minnesota | Guardafui Works" },
      { name: "description", content: "Recent websites and online setups built by Guardafui Works — premium service businesses, brand studios, and Minnesota small businesses online done right." },
      { property: "og:title", content: "Portfolio — Guardafui Works" },
      { property: "og:description", content: "Recent small business website setups — laundry service, brand studio, and more." },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

const projects = [
  {
    name: "Northern Linen",
    type: "Laundry Service Website",
    desc: "A premium laundry pickup & delivery business site — bookings, service areas, and pricing.",
    logo: northernLinenLogo.url,
    href: "/portfolio/northern-linen" as const,
  },
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
          <div className="grid gap-7 max-w-2xl mx-auto">
            {projects.map((p, i) => (
              <Reveal key={p.name} delay={(i % 3) * 80}>
                <Link
                  to={p.href}
                  className="group block bg-white rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1 h-full"
                >
                  <article className="flex flex-col h-full">
                    <div className="relative aspect-[16/10] bg-white flex items-center justify-center overflow-hidden p-10">
                      <img
                        src={p.logo}
                        alt={`${p.name} logo`}
                        className="max-h-full max-w-[70%] object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="border-t border-border p-8 flex items-start justify-between gap-4 flex-1 bg-sand/40">
                      <div className="flex-1">
                        <p className="text-xs uppercase tracking-wider text-amber font-semibold mb-2">{p.type}</p>
                        <h2 className="text-2xl font-serif mb-2">{p.name}</h2>
                        <p className="text-sm text-charcoal/70 leading-relaxed mb-4">{p.desc}</p>
                        <span className="text-sm font-semibold text-navy group-hover:text-amber transition-colors">
                          Read case study →
                        </span>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center group-hover:bg-amber transition-colors flex-shrink-0 border border-border">
                        <ArrowUpRight className="text-navy" size={18} />
                      </div>
                    </div>
                  </article>
                </Link>
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
