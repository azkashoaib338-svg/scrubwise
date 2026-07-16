import type { Product, Review } from '@/lib/types'

const patchTest =
  'Always patch-test on a small area of the body 24 hours before first use. Discontinue use if irritation, redness or discomfort occurs. For external body use only. Avoid broken, bleeding or irritated skin.'

function makeReviews(seed: string, base: number): Review[] {
  return [
    {
      id: `${seed}-r1`,
      author: 'Layla A.',
      rating: 5,
      date: '2025-11-02',
      title: 'My skin feels noticeably smoother',
      body: 'I have been using this twice a week and my legs look and feel so much softer. Gentle enough that it never stings.',
      verified: true,
    },
    {
      id: `${seed}-r2`,
      author: 'Fatima R.',
      rating: base >= 4.7 ? 5 : 4,
      date: '2025-10-18',
      title: 'Lovely texture and scent',
      body: 'The texture melts into a creamy lather and rinses clean without leaving my skin tight. A little goes a long way.',
      verified: true,
    },
    {
      id: `${seed}-r3`,
      author: 'Sara M.',
      rating: 4,
      date: '2025-09-27',
      title: 'Good for a weekly routine',
      body: 'Nice results when I stick to the recommended frequency. I follow with a body lotion and my skin looks brighter.',
      verified: true,
    },
  ]
}

const commonFaqs = [
  {
    question: 'How often should I use this scrub?',
    answer:
      'Follow the recommended frequency on the product. Start with once a week and adjust based on how your body skin responds. Over-exfoliating can leave skin feeling sensitive.',
  },
  {
    question: 'Can I use this in the shower?',
    answer:
      'Yes. Apply to damp skin, massage gently in circular motions, then rinse thoroughly with lukewarm water. Avoid scrubbing too hard.',
  },
  {
    question: 'Is this suitable for the whole body?',
    answer:
      'It is formulated for body skin such as legs, arms, back and torso. It is not intended for facial use.',
  },
]

export const products: Product[] = [
  {
    id: 'oat-shea-gentle-polish',
    slug: 'oat-shea-gentle-body-polish',
    name: 'Oat & Shea Gentle Body Polish',
    tagline: 'Soothing softness for sensitive skin',
    description:
      'A creamy, low-abrasion polish with colloidal oatmeal and shea butter, designed to support smoother, comforted-looking skin.',
    longDescription:
      'Our gentlest polish blends finely milled oatmeal with nourishing shea butter to buff away rough, flaky texture without stripping the skin. The cushioning cream base is designed for reactive and easily irritated body skin, helping it look calm, soft and comfortable after every use.',
    price: 89,
    size: '200ml',
    sizes: ['100ml', '200ml', '300ml'],
    image: '/products/oat-shea-polish.png',
    images: ['/products/oat-shea-polish.png'],
    mainIngredients: ['Oatmeal', 'Shea butter', 'Sugar'],
    fullIngredients: [
      'Sucrose (Sugar)',
      'Avena Sativa (Oat) Kernel Flour',
      'Butyrospermum Parkii (Shea) Butter',
      'Cocos Nucifera (Coconut) Oil',
      'Glycerin',
      'Tocopherol (Vitamin E)',
      'Aqua',
    ],
    skinTypes: ['sensitive', 'dry', 'normal'],
    concerns: ['sensitive-skin', 'dry-skin', 'rough-texture'],
    benefits: [
      'Cushions skin while gently buffing rough texture',
      'Designed to support a soft, comforted feel',
      'Fragrance-light formula for reactive body skin',
    ],
    usage:
      'Apply to damp skin in the shower, massage gently in circular motions for 30 seconds, then rinse with lukewarm water.',
    frequency: 'Suitable for 1–2 times per week',
    exfoliation: 'gentle',
    fragranceFree: true,
    sensitiveFriendly: true,
    safety: patchTest,
    rating: 4.8,
    reviewCount: 214,
    reviews: makeReviews('oat', 4.8),
    faqs: commonFaqs,
    featured: true,
    createdAt: '2025-06-01',
  },
  {
    id: 'coffee-smoothing-scrub',
    slug: 'coffee-smoothing-body-scrub',
    name: 'Coffee Smoothing Body Scrub',
    tagline: 'Invigorating buff for rough, dull skin',
    description:
      'An energizing sugar-and-coffee scrub that may help improve the appearance of rough texture and leave skin looking revived.',
    longDescription:
      'Freshly ground coffee meets fine cane sugar in a rich, oil-based scrub that melts into skin. Massaging the granules helps sweep away dull, flaky build-up, while coconut and grapeseed oils are designed to leave the body looking smoother and feeling nourished.',
    price: 79,
    size: '250ml',
    sizes: ['150ml', '250ml'],
    image: '/products/coffee-scrub.png',
    images: ['/products/coffee-scrub.png'],
    mainIngredients: ['Coffee', 'Sugar', 'Coconut oil'],
    fullIngredients: [
      'Sucrose (Sugar)',
      'Coffea Arabica (Coffee) Seed Powder',
      'Cocos Nucifera (Coconut) Oil',
      'Vitis Vinifera (Grapeseed) Oil',
      'Glycerin',
      'Tocopherol (Vitamin E)',
      'Parfum',
    ],
    skinTypes: ['normal', 'dry', 'combination'],
    concerns: ['rough-texture', 'dull-skin', 'uneven-skin'],
    benefits: [
      'May help reduce the appearance of rough texture',
      'Rich oil base leaves skin looking nourished',
      'Invigorating coffee aroma for a spa-like ritual',
    ],
    usage:
      'Scoop onto damp skin, massage in circular motions focusing on rough areas, then rinse thoroughly.',
    frequency: 'Suitable for 2–3 times per week',
    exfoliation: 'physical',
    fragranceFree: false,
    sensitiveFriendly: false,
    safety: patchTest,
    rating: 4.6,
    reviewCount: 341,
    reviews: makeReviews('coffee', 4.6),
    faqs: commonFaqs,
    featured: true,
    createdAt: '2025-05-12',
  },
  {
    id: 'salicylic-clarifying-scrub',
    slug: 'salicylic-body-clarifying-scrub',
    name: 'Salicylic Body-Clarifying Scrub',
    tagline: 'Clarifying care for breakout-prone skin',
    description:
      'A dual-action scrub with salicylic acid and fine sugar, designed to support clearer-looking skin on the back, chest and shoulders.',
    longDescription:
      'This clarifying scrub pairs gentle physical buffing with salicylic acid to help keep pores looking clear on breakout-prone body areas. It is designed to support smoother, clearer-looking skin over time when used as part of a consistent, gentle body-care routine.',
    price: 95,
    size: '200ml',
    sizes: ['200ml', '300ml'],
    image: '/products/salicylic-scrub.png',
    images: ['/products/salicylic-scrub.png'],
    mainIngredients: ['Salicylic acid', 'Sugar', 'Charcoal'],
    fullIngredients: [
      'Aqua',
      'Sucrose (Sugar)',
      'Salicylic Acid',
      'Charcoal Powder',
      'Glycerin',
      'Aloe Barbadensis Leaf Juice',
      'Menthol',
    ],
    skinTypes: ['oily', 'combination', 'normal'],
    concerns: ['body-acne', 'rough-texture', 'uneven-skin'],
    benefits: [
      'Designed to support clearer-looking body skin',
      'Helps keep the look of pores clear',
      'Refreshing finish for shoulders, back and chest',
    ],
    usage:
      'Apply to damp skin, massage gently over breakout-prone areas, leave for one minute, then rinse well.',
    frequency: 'Suitable for 2 times per week',
    exfoliation: 'chemical',
    fragranceFree: true,
    sensitiveFriendly: false,
    safety:
      'Contains salicylic acid. ' + patchTest + ' Use sun protection during the day as this product may increase sensitivity to the sun.',
    rating: 4.7,
    reviewCount: 288,
    reviews: makeReviews('salicylic', 4.7),
    faqs: commonFaqs,
    featured: true,
    createdAt: '2025-07-08',
  },
  {
    id: 'lactic-renewal-polish',
    slug: 'lactic-acid-renewal-body-polish',
    name: 'Lactic Acid Renewal Body Polish',
    tagline: 'Renewing glow for uneven-looking skin',
    description:
      'A smoothing polish with lactic acid that may help improve the appearance of dark spots and uneven-looking body skin.',
    longDescription:
      'Lactic acid, a gentle chemical exfoliant, teams up with fine sugar to help renew the look of dull, uneven skin. Designed to support a smoother, more even-looking body tone, this polish is a considered choice for those wanting to soften the appearance of dark spots and rough patches.',
    price: 99,
    size: '200ml',
    sizes: ['200ml', '300ml'],
    image: '/products/lactic-polish.png',
    images: ['/products/lactic-polish.png'],
    mainIngredients: ['Lactic acid', 'Sugar', 'Shea butter'],
    fullIngredients: [
      'Aqua',
      'Sucrose (Sugar)',
      'Lactic Acid',
      'Butyrospermum Parkii (Shea) Butter',
      'Glycerin',
      'Panthenol',
      'Tocopherol (Vitamin E)',
    ],
    skinTypes: ['normal', 'combination', 'dry'],
    concerns: ['dark-spots', 'uneven-skin', 'dull-skin', 'rough-texture'],
    benefits: [
      'May help improve the appearance of dark spots',
      'Supports a more even-looking body tone',
      'Leaves skin looking renewed and radiant',
    ],
    usage:
      'Massage gently onto damp skin, leave for one minute, then rinse. Follow with a nourishing body moisturizer.',
    frequency: 'Suitable for 1–2 times per week',
    exfoliation: 'chemical',
    fragranceFree: true,
    sensitiveFriendly: false,
    safety:
      'Contains lactic acid. ' + patchTest + ' Use sun protection during the day as this product may increase sensitivity to the sun.',
    rating: 4.9,
    reviewCount: 176,
    reviews: makeReviews('lactic', 4.9),
    faqs: commonFaqs,
    isNew: true,
    featured: true,
    createdAt: '2025-11-20',
  },
  {
    id: 'rose-sugar-glow-scrub',
    slug: 'rose-sugar-glow-scrub',
    name: 'Rose Sugar Glow Scrub',
    tagline: 'A softening ritual with a delicate rose scent',
    description:
      'A luxurious sugar scrub with rose and glycerin, designed to support smoother, glowing-looking skin.',
    longDescription:
      'Fine sugar crystals and a delicate rose aroma turn body care into a moment of calm. This scrub buffs away dullness while glycerin and rosehip oil help skin look soft, hydrated and radiant, for a gentle glow-boosting ritual.',
    price: 85,
    size: '250ml',
    sizes: ['150ml', '250ml'],
    image: '/products/rose-sugar-scrub.png',
    images: ['/products/rose-sugar-scrub.png'],
    mainIngredients: ['Sugar', 'Shea butter', 'Coconut oil'],
    fullIngredients: [
      'Sucrose (Sugar)',
      'Cocos Nucifera (Coconut) Oil',
      'Butyrospermum Parkii (Shea) Butter',
      'Rosa Canina (Rosehip) Seed Oil',
      'Glycerin',
      'Parfum',
      'Tocopherol (Vitamin E)',
    ],
    skinTypes: ['normal', 'dry', 'combination'],
    concerns: ['dull-skin', 'dry-skin', 'rough-texture'],
    benefits: [
      'Designed to support smoother, glowing-looking skin',
      'Nourishing oils help skin feel soft and hydrated',
      'Delicate rose scent for a relaxing ritual',
    ],
    usage:
      'Massage onto damp skin in circular motions, then rinse. Best used before shaving for a smooth finish.',
    frequency: 'Suitable for 2–3 times per week',
    exfoliation: 'physical',
    fragranceFree: false,
    sensitiveFriendly: false,
    safety: patchTest,
    rating: 4.7,
    reviewCount: 402,
    reviews: makeReviews('rose', 4.7),
    faqs: commonFaqs,
    createdAt: '2025-04-22',
  },
  {
    id: 'fragrance-free-sensitive-polish',
    slug: 'fragrance-free-sensitive-skin-polish',
    name: 'Fragrance-Free Sensitive Skin Polish',
    tagline: 'Bare-minimum formula for reactive skin',
    description:
      'A minimalist, fragrance-free polish with soothing oat and glycerin for a gentle body-care routine.',
    longDescription:
      'Stripped back to the essentials, this fragrance-free polish is designed for those with reactive or easily irritated body skin. Soothing oat extract and glycerin cushion the skin while ultra-fine granules gently smooth rough texture, helping skin look calm and comfortable.',
    price: 92,
    size: '200ml',
    sizes: ['200ml', '300ml'],
    image: '/products/sensitive-polish.png',
    images: ['/products/sensitive-polish.png'],
    mainIngredients: ['Oatmeal', 'Sugar', 'Shea butter'],
    fullIngredients: [
      'Sucrose (Sugar)',
      'Avena Sativa (Oat) Kernel Extract',
      'Butyrospermum Parkii (Shea) Butter',
      'Glycerin',
      'Panthenol',
      'Allantoin',
      'Aqua',
    ],
    skinTypes: ['sensitive', 'dry', 'normal'],
    concerns: ['sensitive-skin', 'dry-skin', 'rough-texture'],
    benefits: [
      'Fragrance-free and designed for reactive skin',
      'Soothing oat and glycerin help calm the look of skin',
      'A gentle option for a minimalist routine',
    ],
    usage:
      'Apply to damp skin, massage very gently, then rinse with lukewarm water. Pat dry and moisturize.',
    frequency: 'Suitable for 1–2 times per week',
    exfoliation: 'gentle',
    fragranceFree: true,
    sensitiveFriendly: true,
    safety: patchTest,
    rating: 4.8,
    reviewCount: 158,
    reviews: makeReviews('sensitive', 4.8),
    faqs: commonFaqs,
    isNew: true,
    createdAt: '2025-11-01',
  },
  {
    id: 'charcoal-clearing-scrub',
    slug: 'charcoal-body-clearing-scrub',
    name: 'Charcoal Body-Clearing Scrub',
    tagline: 'Deep-cleansing buff for congested skin',
    description:
      'A purifying scrub with charcoal and sugar, designed to support clearer, fresher-looking body skin.',
    longDescription:
      'Activated charcoal and fine sugar combine in a deep-cleansing scrub for congested, breakout-prone body areas. Designed to help skin look clearer and feel refreshed, it is a considered addition to a routine for the back, chest and shoulders.',
    price: 88,
    size: '250ml',
    sizes: ['150ml', '250ml'],
    image: '/products/charcoal-scrub.png',
    images: ['/products/charcoal-scrub.png'],
    mainIngredients: ['Charcoal', 'Sugar', 'Coconut oil'],
    fullIngredients: [
      'Sucrose (Sugar)',
      'Charcoal Powder',
      'Cocos Nucifera (Coconut) Oil',
      'Glycerin',
      'Salix Alba (Willow) Bark Extract',
      'Menthol',
      'Parfum',
    ],
    skinTypes: ['oily', 'combination', 'normal'],
    concerns: ['body-acne', 'uneven-skin', 'rough-texture'],
    benefits: [
      'Designed to support clearer-looking body skin',
      'Purifying charcoal for congested areas',
      'Refreshing, deep-cleansing finish',
    ],
    usage:
      'Massage onto damp skin over congested areas, leave briefly, then rinse thoroughly.',
    frequency: 'Suitable for 2 times per week',
    exfoliation: 'physical',
    fragranceFree: false,
    sensitiveFriendly: false,
    safety: patchTest,
    rating: 4.5,
    reviewCount: 197,
    reviews: makeReviews('charcoal', 4.5),
    faqs: commonFaqs,
    createdAt: '2025-03-15',
  },
  {
    id: 'coconut-hydration-scrub',
    slug: 'coconut-hydration-body-scrub',
    name: 'Coconut Hydration Body Scrub',
    tagline: 'Deeply nourishing buff for thirsty skin',
    description:
      'A rich coconut and sugar scrub designed to buff away flakiness while leaving dry skin looking soft and hydrated.',
    longDescription:
      'Made for dry, thirsty skin, this scrub blends nourishing coconut oil with fine sugar to gently smooth flaky patches. The creamy, melt-in texture is designed to leave skin looking soft, supple and deeply hydrated after every use.',
    price: 82,
    size: '250ml',
    sizes: ['150ml', '250ml'],
    image: '/products/coconut-scrub.png',
    images: ['/products/coconut-scrub.png'],
    mainIngredients: ['Coconut oil', 'Sugar', 'Shea butter'],
    fullIngredients: [
      'Sucrose (Sugar)',
      'Cocos Nucifera (Coconut) Oil',
      'Butyrospermum Parkii (Shea) Butter',
      'Glycerin',
      'Tocopherol (Vitamin E)',
      'Parfum',
    ],
    skinTypes: ['dry', 'normal', 'sensitive'],
    concerns: ['dry-skin', 'rough-texture', 'dull-skin'],
    benefits: [
      'Buffs away the look of dry, flaky patches',
      'Rich coconut oil leaves skin feeling hydrated',
      'Soft, comforting finish for thirsty skin',
    ],
    usage:
      'Massage onto damp skin, focusing on dry areas like elbows and knees, then rinse.',
    frequency: 'Suitable for 2–3 times per week',
    exfoliation: 'physical',
    fragranceFree: false,
    sensitiveFriendly: false,
    safety: patchTest,
    rating: 4.6,
    reviewCount: 263,
    reviews: makeReviews('coconut', 4.6),
    faqs: commonFaqs,
    createdAt: '2025-02-10',
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured)
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter(
      (p) =>
        p.id !== product.id &&
        p.concerns.some((c) => product.concerns.includes(c)),
    )
    .slice(0, limit)
}
