import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Globe, Mail, Link2, Server, MapPin, CalendarCheck, CreditCard, Palette, ArrowRight,
} from "lucide-react";
import { Reveal } from "../components/site/Reveal";
import { FinalCTA } from "../components/site/CTA";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Websites, Email & Hosting Services | Guardafui Works" },
      {
        name: "description",
        content:
          "Small business website setup, business email setup, domain & hosting, Google Business, booking and payments — handled end-to-end by a Minnesota IT pro.",
      },
      { property: "og:title", content: "Services — Get Your Business Online | Guardafui Works" },
      { property: "og:description", content: "Everything a small business needs to look established online — website, email, hosting, Google Business." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Link2,
    title: "Domain Registration & Setup",
    desc: "We help you pick the right domain, register it properly, and configure DNS, email records, and redirects — no loose ends.",
  },
  {
    icon: Mail,
    title: "Professional Business Email",
    desc: "you@yourbusiness.com on Microsoft 365 or Google Workspace. We handle the records, the migration, and the security so your mail just works.",
  },
  {
    icon: MapPin,
    title: "Google Business Profile",
    desc: "Show up on Google Maps and local Search. We set up your profile, verify it, and optimize categories, photos, and hours.",
  },
  {
    icon: Globe,
    title: "Custom Website Design & Build",
    desc: "A hand-crafted, fast-loading site built around your business — not a tweaked template. Mobile-first, SEO-friendly, and easy for you to update.",
  },
  {
    icon: Server,
    title: "Cloud Hosting (Azure / AWS)",
    desc: "Optional / if needed. Premium hosting on enterprise cloud infrastructure. Fast, scalable, secure — the same backbone larger businesses run on.",
  },
  {
    icon: CalendarCheck,
    title: "Booking System Integration",
    desc: "Let clients book directly from your site. We integrate Calendly, Acuity, or other tools cleanly into your website's flow.",
  },
  {
    icon: CreditCard,
    title: "Payment Setup (Stripe / Square)",
    desc: "Accept cards online or in person. We set up your payment provider and connect it to your site, booking, or invoicing.",
  },
  {
    icon: Palette,
    title: "Logo Design",
    desc: "A clean, modern logo that works on a sign, a website, and a tiny favicon. Delivered with all the file formats you'll ever need.",
  },
];

function ServicesPage() {
  return (
    <>
      <section className="bg-sand py-24 md:py-32">
        <div className="container-prose max-w-3xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber mb-4">Services</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="text-5xl md:text-6xl font-serif mb-6">
              Everything to look established <em className="text-amber not-italic">— done properly.</em>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-lg text-charcoal/75 leading-relaxed">
              Pick the services you need or let us bundle them into a package. Every engagement starts
              with a conversation so we can recommend the right setup — not the most expensive one.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container-prose">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 2) * 80}>
                <div className="bg-white border border-border rounded-2xl p-8 h-full shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-xl bg-amber-soft flex items-center justify-center flex-shrink-0">
                      <s.icon className="text-navy" size={24} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-serif mb-3">{s.title}</h2>
                      <p className="text-charcoal/75 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-amber text-navy-deep font-semibold px-7 py-3.5 rounded-full hover:shadow-amber transition-all hover:-translate-y-0.5"
            >
              Get Started <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
