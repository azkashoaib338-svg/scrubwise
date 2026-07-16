import { SectionHeading } from '@/components/section-heading'
import { StarRating } from '@/components/product/star-rating'
import { testimonials } from '@/lib/data/testimonials'

export function ReviewsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <SectionHeading
        eyebrow="Customer reviews"
        title="Loved by our community"
        description="Real reflections from customers building gentle body-care routines with BodyBloom."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.id}
            className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-6"
          >
            <StarRating rating={t.rating} />
            <blockquote className="text-sm leading-relaxed text-foreground">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-auto flex items-center gap-3 border-t border-border pt-4">
              <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 font-serif text-sm font-semibold text-primary">
                {t.name.charAt(0)}
              </span>
              <span className="flex flex-col">
                <span className="text-sm font-semibold text-foreground">
                  {t.name}
                </span>
                <span className="text-xs text-muted-foreground">
                  {t.location} · {t.concern}
                </span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
