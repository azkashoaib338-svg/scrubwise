import { notFound } from 'next/navigation'
import { getArticleBySlug } from '@/lib/db/content'

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = await getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <span className="text-sm font-medium text-primary">{article.category}</span>
      <h1 className="mt-2 font-serif text-3xl font-semibold text-foreground">
        {article.title}
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">{article.readTime}</p>

      <div className="mt-8 space-y-4">
        {article.content.map((paragraph, i) => (
          <p key={i} className="leading-relaxed text-foreground">
            {paragraph}
          </p>
        ))}
      </div>
    </main>
  )
}