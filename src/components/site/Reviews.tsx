import { Star } from "lucide-react";

export type Review = {
  name: string;
  business: string;
  text: string;
  service?: string;
  rating?: number;
};

export function StarRating({ rating = 5 }: { rating?: number }) {
  return (
    <div className="flex items-center gap-1 mb-4" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={18}
          className={i < rating ? "text-amber fill-amber" : "text-amber/30"}
        />
      ))}
    </div>
  );
}

export function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="bg-white border border-border rounded-2xl p-7 h-full shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1 flex flex-col">
      <StarRating rating={review.rating ?? 5} />
      <p className="text-charcoal/80 leading-relaxed mb-6 flex-1">
        "{review.text}"
      </p>
      <div className="border-t border-border pt-4">
        <p className="font-serif text-lg text-navy">{review.name}</p>
        <p className="text-sm text-charcoal/60">{review.business}</p>
        {review.service && (
          <p className="text-xs font-semibold uppercase tracking-wider text-amber mt-2">
            {review.service}
          </p>
        )}
      </div>
    </div>
  );
}
