import { getAllProducts } from '@/lib/db/products'
import { ProductCard } from '@/components/product/product-card'
import { SectionHeading } from '@/components/section-heading'

export default async function ShopPage() {
  const products = await getAllProducts()

  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
      <SectionHeading
        title="Shop All Scrubs"
        subtitle="Discover body scrubs formulated for every skin concern — from gentle daily polishes to targeted treatments."
      />

      <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  )
}