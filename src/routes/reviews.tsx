import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "../components/site/Reveal";
import { ReviewCard } from "../components/site/Reviews";
import { FlipReviewCard, northernLinenReview } from "../components/site/FlipReviewCard";
import { BeaconWatermark } from "../components/site/Beacon";
import { placeholderReviews } from "../lib/reviews-data";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Client Reviews — Guardafui Works | Minnesota Small Business Web Setup" },
      {
        name: "description",
        content:
          "Reviews and testimonials for Guardafui Works — small business website setup, business email, and online presence done right.",
      },
      { property: "og:title", content: "Reviews — Guardafui Works" },
      {
        property: "og:description",
        content: "What it's like to work with Guardafui Works.",
      },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  const hasReviews = placeholderReviews.length > 0;

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-white">
        <BeaconWatermark className="absolute -right-32 -top-20 w-[700px] text-amber pointer-events-none" />
        <div className="container-prose pt-20 pb-16 md:pt-28 md:pb-20 relative">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber mb-4">
              What Clients Say
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="text-5xl md:text-7xl leading-[1.05] font-serif text-navy mb-6">
              Reviews
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-lg md:text-xl text-charcoal/75 max-w-2xl leading-relaxed">
              What it's like to work with Guardafui Works.
            </p>
          </Reveal>
        </div>
      </section>

      {/* GRID OR EMPTY STATE */}
      <section className="bg-sand py-20 md:py-28">
        <div className="container-prose">
          {hasReviews ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {placeholderReviews.map((r, i) => (
                <Reveal key={i} delay={(i % 3) * 80}>
                  <ReviewCard review={r} />
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal>
              <div className="bg-white border border-border rounded-2xl px-8 py-16 md:py-20 text-center max-w-2xl mx-auto shadow-card">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber mb-4">
                  Reviews coming soon
                </p>
                <h2 className="text-3xl md:text-4xl font-serif text-navy mb-5">
                  Be one of our first clients.
                </h2>
                <p className="text-charcoal/75 leading-relaxed mb-8 max-w-md mx-auto">
                  We're a new studio building a track record of premium small business setups. Real client reviews will live here as they come in — and yours could be the first.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-amber text-navy-deep font-semibold px-8 py-4 rounded-full hover:shadow-amber transition-all hover:-translate-y-0.5"
                >
                  Get Started <ArrowRight size={18} />
                </Link>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* CTA */}
      {hasReviews && (
        <section className="bg-navy text-white relative overflow-hidden">
          <div className="container-prose py-20 md:py-24 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl text-white font-serif mb-6">
              Ready to join them?
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-amber text-navy-deep font-semibold px-8 py-4 rounded-full hover:shadow-amber transition-all hover:-translate-y-0.5"
            >
              Get Started <ArrowRight size={18} />
            </Link>
          </div>
          <div
            aria-hidden
            className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, oklch(0.738 0.131 75 / 0.15) 0%, transparent 60%)",
            }}
          />
        </section>
      )}
    </>
  );
}
