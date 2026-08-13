import { Hero } from '@/components/home/hero'
import { ShopByConcern } from '@/components/home/shop-by-concern'
import { FeaturedProducts } from '@/components/home/featured-products'
import { IngredientSpotlight } from '@/components/home/ingredient-spotlight'
import { HowItWorks } from '@/components/home/how-it-works'
import { ReviewsSection } from '@/components/home/reviews-section'
import { GuidePreview } from '@/components/home/guide-preview'
import { NewsletterSection } from '@/components/home/newsletter-section'
import { FadeIn } from '@/components/motion/fade-in'

export default function HomePage() {
  return (
    <>
      <Hero />

      <FadeIn>
        <ShopByConcern />
      </FadeIn>

      <FadeIn>
        <FeaturedProducts />
      </FadeIn>

      <FadeIn>
        <IngredientSpotlight />
      </FadeIn>

      <FadeIn>
        <HowItWorks />
      </FadeIn>

      <FadeIn>
        <ReviewsSection />
      </FadeIn>

      <FadeIn>
        <GuidePreview />
      </FadeIn>

      <FadeIn>
        <NewsletterSection />
      </FadeIn>
    </>
  )
}