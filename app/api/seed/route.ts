import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'
import { articles } from '@/lib/data/articles'
import { concerns } from '@/lib/data/concerns'
import { testimonials } from '@/lib/data/testimonials'

export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db('bodybloom')

    await db.collection('articles').deleteMany({})
    await db.collection('articles').insertMany(articles)

    await db.collection('concerns').deleteMany({})
    await db.collection('concerns').insertMany(concerns)

    await db.collection('testimonials').deleteMany({})
    await db.collection('testimonials').insertMany(testimonials)

    return NextResponse.json({
      success: true,
      articles: articles.length,
      concerns: concerns.length,
      testimonials: testimonials.length,
    })
  } catch (error) {
    console.error('Seed error:', error)
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 })
  }
}