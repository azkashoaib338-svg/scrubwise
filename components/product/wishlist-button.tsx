'use client'

import { Heart } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { useWishlist } from '@/components/cart/wishlist-provider'
import { cn } from '@/lib/utils'

export function WishlistButton({
  productId,
  productName,
  className,
}: {
  productId: string
  productName: string
  className?: string
}) {
  const { isWished, toggle } = useWishlist()
  const wished = isWished(productId)

  function handleClick(e: React.MouseEvent) {
    e.preventDefault()
    e.stopPropagation()
    const added = toggle(productId)
    toast[added ? 'success' : 'message'](
      added ? 'Added to wishlist' : 'Removed from wishlist',
      { description: productName },
    )
  }

  return (
    <Button
      type="button"
      variant="secondary"
      size="icon"
      onClick={handleClick}
      aria-label={wished ? 'Remove from wishlist' : 'Add to wishlist'}
      aria-pressed={wished}
      className={cn(
        'rounded-full bg-background/90 shadow-sm backdrop-blur hover:bg-background',
        className,
      )}
    >
      <Heart
        className={cn(
          'size-4 transition-colors',
          wished ? 'fill-accent-foreground text-accent-foreground' : 'text-foreground',
        )}
      />
    </Button>
  )
}
