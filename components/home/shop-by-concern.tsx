import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/section-heading'
import { ConcernGrid } from '@/components/concern/concern-grid'
import { concerns } from '@/lib/data/concerns'

export function ShopByConcern() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <SectionHeading
        eyebrow="Shop by concern"
        title="Start with your skin"
        description="Every body is different. Find scrubs formulated around the concern you would like to care for."
      />
      <div className="mt-10">
        <ConcernGrid items={concerns.slice(0, 6)} />
      </div>
      <div className="mt-8 flex justify-center">
        <Button asChild variant="outline" className="rounded-full">
          <Link href="/concerns">View all concerns</Link>
        </Button>
      </div>
    </section>
  )
}
