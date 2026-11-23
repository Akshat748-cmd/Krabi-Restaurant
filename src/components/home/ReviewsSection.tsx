import { Star, Quote } from "lucide-react";
import { reviewsData } from "@/data/reviews";

export default function ReviewsSection() {
  return (
    <section className="py-24 sm:py-32 bg-ivory-100 text-espresso-850 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto pb-16">
          <span className="text-[11px] uppercase tracking-[0.3em] text-gold-600 block font-medium">
            Guest Testimonials
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl tracking-tight text-espresso-950 mt-2">
            Loved by Travelers
          </h2>
          <p className="text-espresso-700 text-sm sm:text-base font-light leading-relaxed mt-4">
            Honest feedback from international visitors and food lovers dining in Ao Nang, Krabi.
          </p>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviewsData.map((rev) => (
            <div
              key={rev.id}
              className="bg-ivory border border-subtle-light p-8 sm:p-10 flex flex-col justify-between space-y-6 hover:shadow-xl transition-shadow"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-gold-500">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-gold-500" />
                    ))}
                  </div>
                  <span className="text-[11px] uppercase tracking-wider text-espresso-700 font-medium">
                    Verified on {rev.source}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-gold-400/40" />

                <p className="font-serif italic text-lg sm:text-xl text-espresso-900 leading-relaxed">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-subtle-light flex items-center justify-between text-xs">
                <div>
                  <p className="font-medium text-espresso-950">{rev.author}</p>
                  <p className="text-espresso-700">{rev.location}</p>
                </div>
                <span className="text-espresso-700 text-[11px]">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
