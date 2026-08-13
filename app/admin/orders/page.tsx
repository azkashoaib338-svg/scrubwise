import { getAllOrders } from '@/lib/db/orders'
import { formatPrice } from '@/lib/format'

export default async function AdminOrdersPage() {
  const orders = await getAllOrders()

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-serif text-3xl font-semibold text-foreground">
        Orders ({orders.length})
      </h1>

      {orders.length === 0 ? (
        <p className="mt-6 text-muted-foreground">No orders yet.</p>
      ) : (
        <div className="mt-8 space-y-4">
          {orders.map((order) => (
            <div key={order._id} className="rounded-2xl border border-border p-5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold text-foreground">
                    {order.customer.fullName}
                  </p>
                  <p className="text-sm text-muted-foreground">{order.customer.email}</p>
                  <p className="text-sm text-muted-foreground">
                    {order.customer.address}, {order.customer.city}
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-medium capitalize">
                    {order.status}
                  </span>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {new Date(order.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
              </div>

              <div className="mt-4 space-y-1 border-t border-border pt-4">
                {order.items.map((item, i) => (
                  <div key={i} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      {item.name} ({item.size}) × {item.quantity}
                    </span>
                    <span className="text-foreground">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-3 flex justify-between border-t border-border pt-3 font-semibold text-foreground">
                <span>Total</span>
                <span>{formatPrice(order.subtotal)}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  )
}