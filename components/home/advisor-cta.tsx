import Link from 'next/link'
import { MessageCircleHeart, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function AdvisorCta() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-primary px-6 py-14 text-primary-foreground sm:px-14">
        <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <span className="flex size-14 items-center justify-center rounded-2xl bg-primary-foreground/15">
            <MessageCircleHeart className="size-7" />
          </span>
          <h2 className="font-serif text-3xl font-semibold leading-tight text-balance sm:text-4xl">
            Not sure where to start?
          </h2>
          <p className="max-w-lg text-base leading-relaxed text-primary-foreground/85 text-pretty">
            Answer a few simple questions about your body skin and our AI Scrub
            Advisor will suggest suitable products for a gentle, personalized
            routine.
          </p>
         <Button
          nativeButton={false}
  render={<Link href="/advisor" />}
  size="lg"
  variant="secondary"
  className="rounded-full"
>
  <Sparkles className="size-4" />
  Start My Skin Assessment
</Button>
        </div>
        <div className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-primary-foreground/10" />
        <div className="pointer-events-none absolute -bottom-20 -left-10 size-72 rounded-full bg-primary-foreground/5" />
      </div>
    </section>
  )
}
