import { SectionHeading } from '@/components/section-heading'

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <SectionHeading
        eyebrow="Our story"
        title="About BodyBloom"
        description=""
      />
      <div className="mt-8 space-y-4 leading-relaxed text-foreground">
        <p>
          BodyBloom was created with one goal in mind: helping people find body-care
          products that are actually right for their skin. Not every scrub works for
          every body, and we believe skincare should feel personal, not one-size-fits-all.
        </p>
        <p>
          That's why we built our AI Skin Consultant — a simple way to talk through your
          skin concerns and get matched with a scrub formulated for exactly what you need,
          whether that's dryness, rough texture, dark spots, or sensitive skin.
        </p>
        <p>
          Every product in our range is developed with gentle, effective ingredients,
          and every recommendation is grounded in real product data, not guesswork.
        </p>
      </div>
    </main>
  )
}