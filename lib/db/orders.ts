import clientPromise from '@/lib/mongodb'

export interface Order {
  _id: string
  customer: {
    fullName: string
    email: string
    phone: string
    address: string
    city: string
  }
  items: {
    productId: string
    name: string
    size: string
    price: number
    quantity: number
  }[]
  subtotal: number
  status: string
  createdAt: Date
}

export async function getAllOrders(): Promise<Order[]> {
  const client = await clientPromise
  const db = client.db('bodybloom')

  const docs = await db
    .collection('orders')
    .find({})
    .sort({ createdAt: -1 })
    .toArray()

  return docs.map((doc) => ({
    ...doc,
    _id: doc._id.toString(),
  })) as Order[]
}