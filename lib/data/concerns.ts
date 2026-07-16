import type { ConcernCategory, Concern, SkinType, ExfoliationType } from '@/lib/types'

export const concerns: ConcernCategory[] = [
  {
    slug: 'strawberry-legs',
    title: 'Strawberry Legs',
    description: 'Smooth the look of dark, dotted pores after shaving.',
    icon: 'Sparkles',
  },
  {
    slug: 'body-acne',
    title: 'Body Acne',
    description: 'Clarify skin on the back, chest and shoulders.',
    icon: 'Droplets',
  },
  {
    slug: 'dark-spots',
    title: 'Dark Spots',
    description: 'Help brighten the appearance of uneven marks.',
    icon: 'Sun',
  },
  {
    slug: 'dry-skin',
    title: 'Dry Skin',
    description: 'Gently buff and nourish flaky, thirsty skin.',
    icon: 'Snowflake',
  },
  {
    slug: 'rough-texture',
    title: 'Rough Texture',
    description: 'Soften bumpy, uneven-feeling body skin.',
    icon: 'Waves',
  },
  {
    slug: 'sensitive-skin',
    title: 'Sensitive Skin',
    description: 'Extra-gentle care for reactive body skin.',
    icon: 'Heart',
  },
  {
    slug: 'uneven-skin',
    title: 'Uneven-Looking Skin',
    description: 'Support a more even-looking body tone.',
    icon: 'Layers',
  },
  {
    slug: 'ingrown-hairs',
    title: 'Ingrown Hairs',
    description: 'Help free trapped hairs and smooth bumps.',
    icon: 'GitBranch',
  },
  {
    slug: 'dull-skin',
    title: 'Dull-Looking Skin',
    description: 'Revive tired, lackluster body skin for a fresh glow.',
    icon: 'Star',
  },
]

export const concernLabels: Record<Concern, string> = {
  'strawberry-legs': 'Strawberry Legs',
  'body-acne': 'Body Acne',
  'dark-spots': 'Dark Spots',
  'uneven-skin': 'Uneven-Looking Skin',
  'rough-texture': 'Rough Texture',
  'dry-skin': 'Dry Skin',
  'ingrown-hairs': 'Ingrown Hairs',
  'sensitive-skin': 'Sensitive Skin',
  'dull-skin': 'Dull-Looking Skin',
}

export const skinTypeLabels: Record<SkinType, string> = {
  dry: 'Dry',
  oily: 'Oily',
  combination: 'Combination',
  normal: 'Normal',
  sensitive: 'Sensitive',
}

export const exfoliationLabels: Record<ExfoliationType, string> = {
  physical: 'Physical exfoliation',
  chemical: 'Chemical exfoliation',
  gentle: 'Extra-gentle',
}

export const ingredientOptions = [
  'Sugar',
  'Oatmeal',
  'Coffee',
  'Shea butter',
  'Salicylic acid',
  'Lactic acid',
  'Coconut oil',
  'Charcoal',
]
