import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/section-heading'
import { ArticleCard } from '@/components/guide/article-card'
import { articles } from '@/lib/data/articles'

export function GuidePreview() {
  return (
    <section className="bg-secondary/40 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Body-care guide"
          title="Learn to care for your skin"
          description="Practical, responsible advice to help you get the most from your body-care routine."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.slice(0, 3).map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
         <Button  nativeButton={false} render={<Link href="/guide" />} variant="outline" className="rounded-full">
  Read the full guide
</Button>
        </div>
      </div>
    </section>
  )
}
