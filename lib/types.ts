export type Concern =
  | 'strawberry-legs'
  | 'body-acne'
  | 'dark-spots'
  | 'uneven-skin'
  | 'rough-texture'
  | 'dry-skin'
  | 'ingrown-hairs'
  | 'sensitive-skin'
  | 'dull-skin'

export type SkinType =
  | 'dry'
  | 'oily'
  | 'combination'
  | 'normal'
  | 'sensitive'

export type ExfoliationType = 'physical' | 'chemical' | 'gentle'

export interface Review {
  id: string
  author: string
  rating: number
  date: string
  title: string
  body: string
  verified: boolean
}

export interface FaqItem {
  question: string
  answer: string
}

export interface Product {
  id: string
  slug: string
  name: string
  tagline: string
  description: string
  longDescription: string
  price: number
  size: string
  sizes: string[]
  image: string
  images: string[]
  mainIngredients: string[]
  fullIngredients: string[]
  skinTypes: SkinType[]
  concerns: Concern[]
  benefits: string[]
  usage: string
  frequency: string
  exfoliation: ExfoliationType
  fragranceFree: boolean
  sensitiveFriendly: boolean
  safety: string
  rating: number
  reviewCount: number
  reviews: Review[]
  faqs: FaqItem[]
  isNew?: boolean
  featured?: boolean
  createdAt: string
}

export interface ConcernCategory {
  slug: Concern
  title: string
  description: string
  icon: string
}

export interface CartItem {
  productId: string
  slug: string
  name: string
  image: string
  price: number
  size: string
  quantity: number
}

export interface Article {
  slug: string
  title: string
  excerpt: string
  category: string
  readTime: string
  content: string[]
}

export type SortOption =
  | 'featured'
  | 'newest'
  | 'price-asc'
  | 'price-desc'
  | 'rating'

export interface Filters {
  concerns: Concern[]
  skinTypes: SkinType[]
  ingredients: string[]
  exfoliation: ExfoliationType[]
  fragranceFree: boolean
  sensitiveFriendly: boolean
  maxPrice: number
}

/* AI Scrub Advisor */
export interface AdvisorAnswers {
  concern?: Concern
  area?: string
  skinDescription?: SkinType
  irritation?: 'yes' | 'no'
  allergies?: string
  exfoliateFrequency?: string
  exfoliationPreference?: ExfoliationType
  fragrancePreference?: 'fragranced' | 'fragrance-free'
}

export interface Recommendation {
  product: Product
  matchPercentage: number
  reasons: string[]
}
