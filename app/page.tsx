import { Hero } from '@/components/home/hero'
import { ShopByConcern } from '@/components/home/shop-by-concern'
import { FeaturedProducts } from '@/components/home/featured-products'
import { AdvisorCta } from '@/components/home/advisor-cta'
import { IngredientSpotlight } from '@/components/home/ingredient-spotlight'
import { HowItWorks } from '@/components/home/how-it-works'
import { ReviewsSection } from '@/components/home/reviews-section'
import { GuidePreview } from '@/components/home/guide-preview'
import { NewsletterSection } from '@/components/home/newsletter-section'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ShopByConcern />
      <FeaturedProducts />
      <AdvisorCta />
      <IngredientSpotlight />
      <HowItWorks />
      <ReviewsSection />
      <GuidePreview />
      <NewsletterSection />
    </>
  )
}
