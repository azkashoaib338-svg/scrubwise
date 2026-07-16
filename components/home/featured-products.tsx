import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/section-heading'
import { ProductCard } from '@/components/product/product-card'
import { getFeaturedProducts } from '@/lib/data/products'

export function FeaturedProducts() {
  const featured = getFeaturedProducts()
  return (
    <section className="bg-secondary/40 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Bestsellers"
          title="Featured scrubs"
          description="Our most-loved formulas, chosen by customers caring for a range of body-skin concerns."
        />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button asChild className="rounded-full">
            <Link href="/shop">Shop all scrubs</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
