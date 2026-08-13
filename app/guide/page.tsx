import { getAllArticles } from '@/lib/db/content'
import { ArticleCard } from '@/components/guide/article-card'
import { SectionHeading } from '@/components/section-heading'

export default async function GuidePage() {
  const articles = await getAllArticles()

  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
      <SectionHeading
        eyebrow="Body-care guide"
        title="Learn to care for your skin"
        description="Practical, responsible advice to help you get the most from your body-care routine."
      />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </main>
  )
}