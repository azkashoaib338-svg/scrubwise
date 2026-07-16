import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export function StarRating({
  rating,
  size = 'sm',
  className,
}: {
  rating: number
  size?: 'sm' | 'md'
  className?: string
}) {
  const dimension = size === 'md' ? 'size-5' : 'size-4'
  return (
    <div
      className={cn('flex items-center gap-0.5', className)}
      aria-label={`Rated ${rating} out of 5`}
    >
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={cn(
            dimension,
            i <= Math.round(rating)
              ? 'fill-chart-2 text-chart-2'
              : 'fill-muted text-muted',
          )}
        />
      ))}
    </div>
  )
}
