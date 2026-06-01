import { Link } from "@tanstack/react-router";

export function FinalCTA() {
  return (
    <section className="bg-navy text-white relative overflow-hidden">
      <div className="container-prose py-24 md:py-32 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl text-white font-serif mb-5">
          Ready to get your business online?
        </h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto mb-9">
          Get started — tell us about your business and what you need.
          We'll map out the right setup and how fast we can get there.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-amber text-navy-deep font-semibold px-8 py-4 rounded-full hover:shadow-amber transition-all hover:-translate-y-0.5"
        >
          Get Started
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
  );
}
