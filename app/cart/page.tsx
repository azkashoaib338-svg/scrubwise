'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Minus, Plus, X, ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCart } from '@/components/cart/cart-provider'
import { formatPrice } from '@/lib/format'

export default function CartPage() {
  const { items, subtotal, removeItem, updateQuantity } = useCart()

  if (items.length === 0) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-20 text-center">
        <ShoppingBag className="mx-auto size-12 text-muted-foreground" />
        <h1 className="mt-4 font-serif text-2xl font-semibold text-foreground">
          Your cart is empty
        </h1>
        <p className="mt-2 text-muted-foreground">
          Looks like you haven't added any scrubs yet.
        </p>
        <Button className="mt-6 rounded-full" render={<Link href="/shop" />} nativeButton={false}>
          Continue Shopping
        </Button>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="font-serif text-3xl font-semibold text-foreground">
        Your Cart
      </h1>

      <div className="mt-8 grid gap-10 md:grid-cols-3">
        {/* Cart items */}
        <div className="md:col-span-2 space-y-4">
          {items.map((item) => (
            <div
              key={`${item.productId}-${item.size}`}
              className="flex gap-4 rounded-2xl border border-border p-4"
            >
              <div className="relative size-24 shrink-0 overflow-hidden rounded-xl bg-secondary/50">
                <Image
                  src={item.image || '/placeholder.svg'}
                  alt={item.name}
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-medium text-foreground">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.size}</p>
                  </div>
                  <button
                    onClick={() => removeItem(item.productId, item.size)}
                    aria-label="Remove item"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <X className="size-4" />
                  </button>
                </div>

                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center gap-2 rounded-full border border-border px-2 py-1">
                    <button
                      onClick={() =>
                        updateQuantity(item.productId, item.size, item.quantity - 1)
                      }
                      aria-label="Decrease quantity"
                    >
                      <Minus className="size-3.5" />
                    </button>
                    <span className="w-6 text-center text-sm">{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(item.productId, item.size, item.quantity + 1)
                      }
                      aria-label="Increase quantity"
                    >
                      <Plus className="size-3.5" />
                    </button>
                  </div>
                  <span className="font-serif font-semibold text-foreground">
                    {formatPrice(item.price * item.quantity)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order summary */}
        <div className="h-fit rounded-2xl border border-border p-6">
          <h2 className="font-serif text-lg font-semibold text-foreground">
            Order Summary
          </h2>
          <div className="mt-4 flex justify-between text-sm">
            <span className="text-muted-foreground">Subtotal</span>
            <span className="font-medium text-foreground">
              {formatPrice(subtotal)}
            </span>
          </div>
          <p className="mt-1 text-xs text-muted-foreground">
            Shipping and taxes calculated at checkout
          </p>
          <Button
            size="lg"
            className="mt-6 w-full rounded-full"
            render={<Link href="/checkout" />}
            nativeButton={false}
          >
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </main>
  )
}