import { NewsletterForm } from '@/components/marketing/newsletter-form'

export function NewsletterSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <div className="flex flex-col items-center gap-6 rounded-[2.5rem] border border-border bg-accent/40 px-6 py-14 text-center">
        <h2 className="max-w-xl font-serif text-3xl font-semibold leading-tight text-foreground text-balance sm:text-4xl">
          Join the BodyBloom circle
        </h2>
        <p className="max-w-md text-base leading-relaxed text-muted-foreground text-pretty">
          Be the first to hear about new scrubs, body-care tips and exclusive
          offers. Enjoy 10% off your first order when you subscribe.
        </p>
        <div className="w-full max-w-md">
          <NewsletterForm />
        </div>
        <p className="text-xs text-muted-foreground">
          We respect your inbox. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
