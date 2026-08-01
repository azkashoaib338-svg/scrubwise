'use client'

import { ShoppingBag } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { useCart } from '@/components/cart/cart-provider'
import type { Product } from '@/lib/types'

export function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart()

  function handleAdd() {
    addItem(product)
    toast.success('Added to cart', {
      description: `${product.name} · ${product.size}`,
    })
  }

  return (
    <Button size="lg" onClick={handleAdd} className="mt-6 w-full rounded-full sm:w-auto">
      <ShoppingBag className="size-4" />
      Add to Cart
    </Button>
  )
}