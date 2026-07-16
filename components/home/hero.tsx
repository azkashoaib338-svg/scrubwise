import Image from 'next/image'
import Link from 'next/link'
import { Sparkles, Leaf, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 lg:grid-cols-2 lg:gap-8 lg:py-20">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/60 px-4 py-1.5 text-sm font-medium text-accent-foreground">
            <Sparkles className="size-4" />
            Body care, thoughtfully formulated
          </span>
          <h1 className="font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
            Body care chosen for your skin
          </h1>
          <p className="max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
            Premium body scrubs designed to support smoother, healthier-looking
            skin. Discover the right formula for your body-skin concern, backed
            by considered ingredients and gentle exfoliation.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/advisor">Find My Scrub</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full"
            >
              <Link href="/shop">Shop All Scrubs</Link>
            </Button>
          </div>
          <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Leaf className="size-4 text-primary" />
              Considered ingredients
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="size-4 text-primary" />
              Dermatologically considerate
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-square overflow-hidden rounded-[2.5rem] border border-border bg-secondary/50 shadow-xl shadow-primary/5">
            <Image
              src="/products/hero-scrub.png"
              alt="A premium BodyBloom body scrub surrounded by natural ingredients"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-border bg-card p-4 shadow-lg sm:block">
            <p className="font-serif text-2xl font-semibold text-foreground">
              4.7★
            </p>
            <p className="text-xs text-muted-foreground">
              Loved by 2,000+ customers
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
