import { SectionHeading } from '@/components/section-heading'
import { ClipboardList, Wand2, Repeat } from 'lucide-react'

const steps = [
  {
    icon: ClipboardList,
    title: 'Tell us about your body skin',
    description:
      'Share your concern, skin type and preferences through our quick, guided assessment.',
  },
  {
    icon: Wand2,
    title: 'Receive personalized suggestions',
    description:
      'Our advisor matches you with suitable scrubs and explains why each one may help.',
  },
  {
    icon: Repeat,
    title: 'Build a gentle body-care routine',
    description:
      'Follow simple usage guidance to care for your skin consistently and safely.',
  },
]

export function HowItWorks() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <SectionHeading
        eyebrow="How it works"
        title="A simple, guided routine"
        description="Finding the right body scrub should feel calm and considered, not overwhelming."
      />
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {steps.map((step, index) => (
          <div key={step.title} className="relative flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <span className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <step.icon className="size-7" />
              </span>
              <span className="font-serif text-4xl font-semibold text-border">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
            <h3 className="font-serif text-xl font-semibold text-foreground">
              {step.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
