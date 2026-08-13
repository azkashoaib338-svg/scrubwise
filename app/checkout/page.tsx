'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useCart } from '@/components/cart/cart-provider'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { formatPrice } from '@/lib/format'

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handlePlaceOrder(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer: form,
          items,
          subtotal,
        }),
      })

      const data = await res.json()

      if (data.success) {
        clearCart()
        router.push(`/order-success?orderId=${data.orderId}`)
      }
    } catch (error) {
      console.error('Order error:', error)
    } finally {
      setLoading(false)
    }
  }

  if (items.length === 0) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="font-serif text-2xl font-semibold text-foreground">
          Your cart is empty
        </h1>
        <p className="mt-2 text-muted-foreground">Add some products before checking out.</p>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="font-serif text-3xl font-semibold text-foreground">Checkout</h1>

      <form onSubmit={handlePlaceOrder} className="mt-8 grid gap-10 md:grid-cols-3">
        {/* Shipping form */}
        <div className="md:col-span-2 space-y-4">
          <h2 className="font-serif text-lg font-semibold text-foreground">
            Shipping Details
          </h2>

          <Input
            name="fullName"
            placeholder="Full name"
            value={form.fullName}
            onChange={handleChange}
            required
          />
          <Input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <Input
            name="phone"
            placeholder="Phone number"
            value={form.phone}
            onChange={handleChange}
            required
          />
          <Input
            name="address"
            placeholder="Street address"
            value={form.address}
            onChange={handleChange}
            required
          />
          <Input
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
            required
          />
        </div>

        {/* Order summary */}
        <div className="h-fit rounded-2xl border border-border p-6">
          <h2 className="font-serif text-lg font-semibold text-foreground">
            Order Summary
          </h2>

          <div className="mt-4 space-y-2">
            {items.map((item) => (
              <div
                key={`${item.productId}-${item.size}`}
                className="flex justify-between text-sm"
              >
                <span className="text-muted-foreground">
                  {item.name} × {item.quantity}
                </span>
                <span className="text-foreground">
                  {formatPrice(item.price * item.quantity)}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4 flex justify-between border-t border-border pt-4 text-sm font-semibold">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>

          <Button type="submit" size="lg" disabled={loading} className="mt-6 w-full rounded-full">
            {loading ? 'Placing Order...' : 'Place Order'}
          </Button>
        </div>
      </form>
    </main>
  )
}