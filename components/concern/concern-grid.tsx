import Link from 'next/link'
import {
  Sparkles,
  Droplets,
  Sun,
  Snowflake,
  Waves,
  Heart,
  Layers,
  GitBranch,
  Star,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react'
import type { ConcernCategory } from '@/lib/types'

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Droplets,
  Sun,
  Snowflake,
  Waves,
  Heart,
  Layers,
  GitBranch,
  Star,
}

export function ConcernGrid({ items }: { items: ConcernCategory[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
      {items.map((concern) => {
        const Icon = iconMap[concern.icon] ?? Sparkles
        return (
          <Link
            key={concern.slug}
            href={`/concerns/${concern.slug}`}
            className="group flex flex-col gap-3 rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
          >
            <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <Icon className="size-6" />
            </span>
            <h3 className="font-serif text-lg font-semibold text-foreground">
              {concern.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {concern.description}
            </p>
            <span className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-primary">
              Explore
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        )
      })}
    </div>
  )
}
