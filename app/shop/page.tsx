import { getAllProducts, searchProducts } from '@/lib/db/products'
import { ProductCard } from '@/components/product/product-card'
import { SectionHeading } from '@/components/section-heading'

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>
}) {
  const { q } = await searchParams
  const products = q ? await searchProducts(q) : await getAllProducts()

  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
      <SectionHeading
        title={q ? `Search results for "${q}"` : 'Shop All Scrubs'}
        subtitle={
          q
            ? `${products.length} product${products.length === 1 ? '' : 's'} found`
            : 'Discover body scrubs formulated for every skin concern — from gentle daily polishes to targeted treatments.'
        }
      />

      {products.length === 0 ? (
        <p className="mt-10 text-center text-muted-foreground">
          No products found matching "{q}". Try a different search term.
        </p>
      ) : (
        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  )
}