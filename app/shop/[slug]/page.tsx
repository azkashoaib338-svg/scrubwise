import { notFound } from 'next/navigation'
import Image from 'next/image'
import { getProductBySlug, getRelatedProducts } from '@/lib/data/products'
import { ProductCard } from '@/components/product/product-card'
import { StarRating } from '@/components/product/star-rating'
import { AddToCartButton } from '@/components/product/add-to-cart-button'
import { formatPrice } from '@/lib/format'

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const relatedProducts = getRelatedProducts(product)

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid gap-10 md:grid-cols-2">
        {/* Product image */}
        <div className="relative aspect-square overflow-hidden rounded-3xl bg-secondary/50">
          <Image
            src={product.image || '/placeholder.svg'}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Product info */}
        <div>
          <h1 className="font-serif text-3xl font-semibold text-foreground">
            {product.name}
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">{product.tagline}</p>

          <div className="mt-3 flex items-center gap-2">
            <StarRating rating={product.rating} />
            <span className="text-sm text-muted-foreground">
              {product.rating} ({product.reviewCount} reviews)
            </span>
          </div>

          <p className="mt-4 text-2xl font-serif font-semibold text-foreground">
            {formatPrice(product.price)}
          </p>
          <AddToCartButton product={product} />

          <p className="mt-6 leading-relaxed text-muted-foreground">
            {product.longDescription}
          </p>

          <div className="mt-6">
            <h3 className="font-semibold text-foreground">Key Ingredients</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {product.mainIngredients.join(', ')}
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold text-foreground">How to Use</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {product.usage}
            </p>
          </div>
        </div>
      </div>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="font-serif text-2xl font-semibold text-foreground">
            You Might Also Like
          </h2>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </main>
  )
}