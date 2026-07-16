'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ShoppingBag } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { StarRating } from '@/components/product/star-rating'
import { WishlistButton } from '@/components/product/wishlist-button'
import { useCart } from '@/components/cart/cart-provider'
import { concernLabels } from '@/lib/data/concerns'
import { formatPrice } from '@/lib/format'
import type { Product } from '@/lib/types'

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()

  function handleAdd(e: React.MouseEvent) {
    e.preventDefault()
    addItem(product)
    toast.success('Added to cart', {
      description: `${product.name} · ${product.size}`,
    })
  }

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
      <Link
        href={`/shop/${product.slug}`}
        className="relative block aspect-square overflow-hidden bg-secondary/50"
      >
        <Image
          src={product.image || '/placeholder.svg'}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex flex-col gap-1.5">
          {product.isNew && (
            <Badge className="bg-primary text-primary-foreground">New</Badge>
          )}
          {product.fragranceFree && (
            <Badge variant="secondary" className="bg-background/90 backdrop-blur">
              Fragrance-free
            </Badge>
          )}
        </div>
      </Link>

      <div className="absolute right-3 top-3">
        <WishlistButton productId={product.id} productName={product.name} />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-1 flex flex-wrap gap-1.5">
          {product.concerns.slice(0, 2).map((c) => (
            <span
              key={c}
              className="rounded-full bg-accent/60 px-2 py-0.5 text-[11px] font-medium text-accent-foreground"
            >
              {concernLabels[c]}
            </span>
          ))}
        </div>

        <Link href={`/shop/${product.slug}`} className="mt-1">
          <h3 className="font-serif text-lg font-semibold leading-tight text-foreground text-balance">
            {product.name}
          </h3>
        </Link>

        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </p>

        <div className="mt-3 flex items-center gap-2">
          <StarRating rating={product.rating} />
          <span className="text-xs text-muted-foreground">
            {product.rating} ({product.reviewCount})
          </span>
        </div>

        <div className="mt-auto flex items-center justify-between gap-2 pt-4">
          <span className="font-serif text-xl font-semibold text-foreground">
            {formatPrice(product.price)}
          </span>
          <Button size="sm" onClick={handleAdd} className="rounded-full">
            <ShoppingBag className="size-4" />
            Add
          </Button>
        </div>
      </div>
    </div>
  )
}
