export interface Testimonial {
  id: string
  name: string
  location: string
  rating: number
  quote: string
  concern: string
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Noura K.',
    location: 'Dubai',
    rating: 5,
    quote:
      'The Lactic Acid Renewal Polish has become my weekly ritual. My skin looks so much more even and I love that a little goes a long way.',
    concern: 'Uneven-looking skin',
  },
  {
    id: 't2',
    name: 'Mariam H.',
    location: 'Abu Dhabi',
    rating: 5,
    quote:
      'As someone with really sensitive skin, the fragrance-free polish is the first scrub that has never left me red or itchy. Gentle and effective.',
    concern: 'Sensitive skin',
  },
  {
    id: 't3',
    name: 'Aisha B.',
    location: 'Sharjah',
    rating: 4,
    quote:
      'The AI advisor pointed me to the salicylic scrub for my shoulders and it has genuinely helped my skin look clearer over a few weeks.',
    concern: 'Body acne',
  },
  {
    id: 't4',
    name: 'Reem S.',
    location: 'Dubai',
    rating: 5,
    quote:
      'The coffee scrub smells incredible and my legs feel so smooth afterwards. It has become the best part of my Sunday reset.',
    concern: 'Rough texture',
  },
  {
    id: 't5',
    name: 'Hind A.',
    location: 'Al Ain',
    rating: 5,
    quote:
      'Finally something for strawberry legs that actually made a visible difference in how smooth my skin looks after shaving.',
    concern: 'Strawberry legs',
  },
  {
    id: 't6',
    name: 'Salma T.',
    location: 'Dubai',
    rating: 4,
    quote:
      'The coconut scrub is a dream for dry skin in winter. Buffs away flakiness and leaves my skin feeling nourished, not stripped.',
    concern: 'Dry skin',
  },
]

export const ingredientSpotlight = [
  {
    name: 'Sugar',
    description: 'Fine natural granules that gently buff away dull, rough texture.',
  },
  {
    name: 'Oatmeal',
    description: 'Soothing and cushioning, ideal for calming sensitive skin.',
  },
  {
    name: 'Coffee',
    description: 'Invigorating granules that help revive tired-looking skin.',
  },
  {
    name: 'Shea butter',
    description: 'Rich, nourishing butter that leaves skin feeling soft.',
  },
  {
    name: 'Salicylic acid',
    description: 'Helps keep the look of pores clear on breakout-prone areas.',
  },
  {
    name: 'Lactic acid',
    description: 'A gentle exfoliating acid that supports a more even-looking tone.',
  },
  {
    name: 'Coconut oil',
    description: 'Deeply hydrating oil designed to soften thirsty skin.',
  },
  {
    name: 'Charcoal',
    description: 'Purifying ingredient for congested, breakout-prone skin.',
  },
]
