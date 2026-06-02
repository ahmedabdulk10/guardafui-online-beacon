import { useState } from "react";
import { Star } from "lucide-react";
import logoAsset from "../../assets/portfolio/northern-linen/logo.jpg.asset.json";

type Props = {
  name: string;
  title: string;
  review: string;
};

export function FlipReviewCard({ name, title, review }: Props) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="group [perspective:1600px] w-full max-w-md mx-auto cursor-pointer"
      onClick={() => setFlipped((f) => !f)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setFlipped((f) => !f);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`Review from ${name}, ${title}. Tap to flip.`}
    >
      <div
        className={`relative w-full h-[420px] transition-transform duration-700 [transform-style:preserve-3d] group-hover:md:[transform:rotateY(180deg)] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* FRONT */}
        <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl bg-gradient-to-br from-navy to-navy-deep border border-amber/30 shadow-card p-10 flex flex-col items-center justify-center text-center overflow-hidden">
          <img
            src={logoAsset.url}
            alt=""
            aria-hidden
            width={726}
            height={533}
            className="absolute inset-0 m-auto w-[85%] h-[85%] object-contain opacity-10 mix-blend-screen pointer-events-none select-none"
          />
          <div
            aria-hidden
            className="absolute -top-20 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, oklch(0.738 0.131 75 / 0.18) 0%, transparent 60%)",
            }}
          />
          <div className="relative z-10 flex flex-col items-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber mb-6">
              Client Testimonial
            </p>
            <h3 className="text-6xl md:text-7xl font-serif text-white mb-4">
              {name}
            </h3>
            <p className="text-white/75 text-base md:text-lg">{title}</p>
            <div className="mt-10 inline-flex items-center gap-2 text-amber/80 text-xs font-semibold uppercase tracking-[0.18em]">
              <span className="w-6 h-px bg-amber/60" />
              Tap to read review
              <span className="w-6 h-px bg-amber/60" />
            </div>
          </div>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl bg-white border border-amber/40 shadow-card p-8 md:p-10 flex flex-col">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber mb-5">
            Review
          </p>
          <p className="text-charcoal/85 leading-relaxed text-base md:text-lg flex-1 font-serif italic">
            "{review}"
          </p>
          <div className="mt-6 pt-5 border-t border-border">
            <p className="font-serif text-lg text-navy">{name}</p>
            <p className="text-sm text-charcoal/60 mb-3">{title}</p>
            <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={20} className="text-amber fill-amber" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const northernLinenReview = {
  name: "Mark",
  title: "Owner, Northern Linen",
  review:
    "Ahmed and Guardafui Works built my entire business from the ground up. I came to them with just an idea and a name — they handled everything. The website, the booking system, payments, business email, even the logo. Everything just works, and it looks incredibly professional. I was able to launch and start taking orders without worrying about any of the technical side. I couldn't recommend them more.",
};
