import { CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default async function OrderSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ orderId?: string }>
}) {
  const { orderId } = await searchParams

  return (
    <main className="mx-auto max-w-2xl px-4 py-24 text-center">
      <CheckCircle className="mx-auto size-16 text-primary" />
      <h1 className="mt-6 font-serif text-3xl font-semibold text-foreground">
        Order Placed Successfully!
      </h1>
      <p className="mt-3 text-muted-foreground">
        Thank you for your order. We've received it and will begin processing shortly.
      </p>
      {orderId && (
        <p className="mt-2 text-sm text-muted-foreground">
          Order ID: <span className="font-mono">{orderId}</span>
        </p>
      )}
      <Button className="mt-8 rounded-full" render={<Link href="/shop" />} nativeButton={false}>
        Continue Shopping
      </Button>
    </main>
  )
}