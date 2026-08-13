import { NextRequest, NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { customer, items, subtotal } = body

    if (!customer?.fullName || !customer?.email || !items?.length) {
      return NextResponse.json(
        { success: false, error: 'Missing required order details' },
        { status: 400 },
      )
    }

    const client = await clientPromise
    const db = client.db('bodybloom')

    const order = {
      customer,
      items,
      subtotal,
      status: 'pending',
      createdAt: new Date(),
    }

    const result = await db.collection('orders').insertOne(order)

    return NextResponse.json({
      success: true,
      orderId: result.insertedId.toString(),
    })
  } catch (error) {
    console.error('Order creation error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to place order' },
      { status: 500 },
    )
  }
}