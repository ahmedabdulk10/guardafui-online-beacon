import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, ImageIcon } from "lucide-react";
import { Reveal } from "../components/site/Reveal";
import { FinalCTA } from "../components/site/CTA";

export const Route = createFileRoute("/portfolio")({
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
    accent: "from-navy to-navy-deep",
    image: null as string | null, // TODO: replace with /assets/portfolio/northern-linen.png
  },
  {
    name: "Rayhana Co.",
    type: "Social Media Brand",
    desc: "A social media content studio site — portfolio, services, and client inquiries in one place.",
    accent: "from-amber to-amber/70",
    image: null as string | null, // TODO: replace with /assets/portfolio/rayhana-co.png
  },
  {
    name: "Guardafui Works",
    type: "Business Setup Studio",
    desc: "This site — the studio behind the work. Built end-to-end on our own stack.",
    accent: "from-navy-deep to-navy",
    image: null as string | null, // TODO: replace with /assets/portfolio/guardafui-works.png
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {projects.map((p, i) => (
              <Reveal key={p.name} delay={(i % 3) * 80}>
                <article className="group bg-white rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1 h-full flex flex-col">
                  <div className={`relative aspect-[4/3] bg-gradient-to-br ${p.accent} flex items-center justify-center overflow-hidden`}>
                    {p.image ? (
                      <img src={p.image} alt={`${p.name} — ${p.type}`} className="absolute inset-0 w-full h-full object-cover" />
                    ) : (
                      <>
                        <ImageIcon className="text-white/30" size={56} />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_50%)]" />
                        <span className="absolute top-4 right-4 text-xs text-white/70 uppercase tracking-wider">
                          Screenshot coming soon
                        </span>
                      </>
                    )}
                  </div>
                  <div className="p-7 flex items-start justify-between gap-4 flex-1">
                    <div className="flex-1">
                      <p className="text-xs uppercase tracking-wider text-amber font-semibold mb-2">{p.type}</p>
                      <h2 className="text-2xl font-serif mb-2">{p.name}</h2>
                      <p className="text-sm text-charcoal/70 leading-relaxed">{p.desc}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-sand flex items-center justify-center group-hover:bg-amber transition-colors flex-shrink-0">
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
