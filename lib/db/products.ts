import clientPromise from '@/lib/mongodb'
import type { Product } from '@/lib/types'

async function getCollection() {
  const client = await clientPromise
  const db = client.db('bodybloom')
  return db.collection<Product>('products')
}

export async function getAllProducts(): Promise<Product[]> {
  const collection = await getCollection()
  const docs = await collection.find({}).toArray()
  return docs.map(stripMongoId)
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const collection = await getCollection()
  const doc = await collection.findOne({ slug })
  return doc ? stripMongoId(doc) : null
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const collection = await getCollection()
  const docs = await collection.find({ featured: true }).toArray()
  return docs.map(stripMongoId)
}

export async function getRelatedProducts(product: Product, limit = 4): Promise<Product[]> {
  const collection = await getCollection()
  const docs = await collection
    .find({
      id: { $ne: product.id },
      concerns: { $in: product.concerns },
    })
    .limit(limit)
    .toArray()
  return docs.map(stripMongoId)
}

// MongoDB adds its own _id (ObjectId) to every document — strip it before
// passing data to React components, since ObjectId isn't a plain serializable value
function stripMongoId(doc: any): Product {
  const { _id, ...rest } = doc
  return rest as Product
}