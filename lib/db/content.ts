import clientPromise from '@/lib/mongodb'
import type { Article, ConcernCategory, } from '@/lib/types'
import type { Testimonial } from '@/lib/data/testimonials'

function stripMongoId<T>(doc: any): T {
  const { _id, ...rest } = doc
  return rest as T
}

export async function getAllArticles(): Promise<Article[]> {
  const client = await clientPromise
  const db = client.db('bodybloom')
  const docs = await db.collection('articles').find({}).toArray()
  return docs.map((d) => stripMongoId<Article>(d))
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const client = await clientPromise
  const db = client.db('bodybloom')
  const doc = await db.collection('articles').findOne({ slug })
  return doc ? stripMongoId<Article>(doc) : null
}

export async function getAllConcerns(): Promise<ConcernCategory[]> {
  const client = await clientPromise
  const db = client.db('bodybloom')
  const docs = await db.collection('concerns').find({}).toArray()
  return docs.map((d) => stripMongoId<ConcernCategory>(d))
}

export async function getAllTestimonials(): Promise<Testimonial[]> {
  const client = await clientPromise
  const db = client.db('bodybloom')
  const docs = await db.collection('testimonials').find({}).toArray()
  return docs.map((d) => stripMongoId<Testimonial>(d))
}