import { SectionHeading } from '@/components/section-heading'
import { ingredientSpotlight } from '@/lib/data/testimonials'

export function IngredientSpotlight() {
  return (
    <section className="bg-secondary/40 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Ingredient spotlight"
          title="Considered, effective ingredients"
          description="We choose each ingredient for a reason, from gentle exfoliants to nourishing butters and oils."
        />
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {ingredientSpotlight.map((ingredient) => (
            <div
              key={ingredient.name}
              className="flex flex-col gap-2 rounded-2xl border border-border bg-card p-5"
            >
              <h3 className="font-serif text-lg font-semibold text-foreground">
                {ingredient.name}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {ingredient.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
