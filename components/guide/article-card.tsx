import Link from 'next/link'
import { ArrowRight, BookOpen } from 'lucide-react'
import type { Article } from '@/lib/types'

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/guide/${article.slug}`}
      className="group flex h-full flex-col gap-3 rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
    >
      <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/60 px-2.5 py-1 text-accent-foreground">
          <BookOpen className="size-3.5" />
          {article.category}
        </span>
        <span>{article.readTime}</span>
      </div>
      <h3 className="font-serif text-xl font-semibold leading-snug text-foreground text-balance">
        {article.title}
      </h3>
      <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
        {article.excerpt}
      </p>
      <span className="mt-auto inline-flex items-center gap-1 pt-2 text-sm font-medium text-primary">
        Read article
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  )
}
