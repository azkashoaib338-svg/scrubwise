import type { Article } from '@/lib/types'

export const articles: Article[] = [
  {
    slug: 'what-causes-strawberry-legs',
    title: 'What causes the appearance of strawberry legs?',
    excerpt:
      'Those little dark dots after shaving are more common than you think. Here is what may be behind the look and how gentle care can help.',
    category: 'Skin Concerns',
    readTime: '4 min read',
    content: [
      'Strawberry legs describe the appearance of small dark dots across the legs, often after shaving. The look is usually caused by a mix of enlarged pores, trapped hairs and dead skin build-up around the follicle.',
      'Regular, gentle exfoliation may help improve the appearance of this texture by keeping the surface of the skin smooth and helping to free trapped hairs. Physical scrubs with fine granules and chemical exfoliants like lactic acid can both be suitable.',
      'Avoid scrubbing too hard or too often, as this can leave skin feeling irritated. Follow exfoliation with a nourishing moisturizer, and always shave with a clean, sharp razor and plenty of lubrication.',
    ],
  },
  {
    slug: 'physical-versus-chemical-exfoliation',
    title: 'Physical versus chemical exfoliation',
    excerpt:
      'Granular scrubs or acids? Understanding the difference helps you choose the right body-care routine for your skin.',
    category: 'Guides',
    readTime: '5 min read',
    content: [
      'Physical exfoliation uses granules, such as sugar or ground coffee, to manually buff away dead skin cells. It offers instant smoothness and a satisfying ritual, but should always be done gently.',
      'Chemical exfoliation uses acids like lactic or salicylic acid to loosen the bonds between dead skin cells. These can be a good option for uneven-looking skin or breakout-prone areas, but may increase sensitivity to the sun.',
      'Neither is universally better. Sensitive skin often prefers extra-gentle physical polishes, while those targeting dark spots or body acne may benefit from chemical options. When in doubt, start slow and patch-test first.',
    ],
  },
  {
    slug: 'how-often-should-you-exfoliate-your-body',
    title: 'How often should you exfoliate your body?',
    excerpt:
      'More is not better. Learn how to find a frequency that keeps skin looking smooth without overdoing it.',
    category: 'Guides',
    readTime: '3 min read',
    content: [
      'For most people, exfoliating the body one to three times a week is plenty. Gentle formulas can often be used more frequently, while stronger chemical exfoliants are usually best once or twice a week.',
      'Signs you may be over-exfoliating include tightness, redness, stinging or unusually dry patches. If you notice these, pause and give your skin time to recover.',
      'Listen to your skin and adjust with the seasons. You may need less exfoliation in winter when skin tends to be drier.',
    ],
  },
  {
    slug: 'how-to-patch-test-a-body-care-product',
    title: 'How to patch-test a body-care product',
    excerpt:
      'A simple step that helps you use new products with more confidence. Here is how to do it properly.',
    category: 'Safety',
    readTime: '3 min read',
    content: [
      'Apply a small amount of the product to a discreet area of the body, such as the inner forearm. Leave it on as directed, then rinse.',
      'Wait 24 hours and watch for any redness, itching, swelling or discomfort. If your skin reacts, do not use the product and consult a healthcare professional if needed.',
      'Patch-testing is especially important for products containing active ingredients like salicylic or lactic acid, and for anyone with sensitive or reactive skin.',
    ],
  },
  {
    slug: 'how-to-care-for-dry-body-skin',
    title: 'How to care for dry body skin',
    excerpt:
      'Dry, flaky skin needs a gentle touch. Build a routine that buffs and nourishes without stripping.',
    category: 'Routines',
    readTime: '4 min read',
    content: [
      'Dry skin benefits from gentle exfoliation to buff away flakiness, followed immediately by a rich moisturizer to lock in hydration.',
      'Choose scrubs with nourishing oils like coconut or shea butter, and avoid very hot showers which can leave skin feeling even drier.',
      'Apply body cream to slightly damp skin after showering for the best results, and reapply throughout the day if needed.',
    ],
  },
  {
    slug: 'common-mistakes-using-body-scrubs',
    title: 'Common mistakes people make when using body scrubs',
    excerpt:
      'From scrubbing too hard to skipping moisturizer, here are the habits worth rethinking.',
    category: 'Guides',
    readTime: '4 min read',
    content: [
      'Scrubbing too aggressively can leave skin feeling irritated rather than smooth. Let the granules do the work with light, circular motions.',
      'Exfoliating too often is another common mistake. Stick to the recommended frequency and give your skin rest days.',
      'Finally, do not skip moisturizer. Exfoliation and hydration go hand in hand, so always follow a scrub with a nourishing body lotion or cream.',
    ],
  },
  {
    slug: 'how-to-help-prevent-ingrown-hairs',
    title: 'How to help prevent ingrown hairs',
    excerpt:
      'Smoother shaves start with smoother skin. Gentle exfoliation is a key part of the routine.',
    category: 'Routines',
    readTime: '4 min read',
    content: [
      'Ingrown hairs happen when hair curls back or grows sideways into the skin. Regular gentle exfoliation may help by keeping the surface clear so hairs can grow out freely.',
      'Exfoliate before shaving, use a sharp razor, and shave in the direction of hair growth where possible. Avoid pressing too hard.',
      'If you experience persistent, painful or infected ingrown hairs, consult a healthcare professional for advice.',
    ],
  },
  {
    slug: 'how-to-exfoliate-sensitive-body-skin-safely',
    title: 'How to exfoliate sensitive body skin safely',
    excerpt:
      'Sensitive skin can still enjoy the benefits of exfoliation with the right, extra-gentle approach.',
    category: 'Safety',
    readTime: '3 min read',
    content: [
      'Choose extra-gentle, fragrance-free formulas designed for reactive skin, and always patch-test before first use.',
      'Use light pressure, exfoliate less frequently, and keep sessions short. Rinse with lukewarm rather than hot water.',
      'Follow with a soothing, fragrance-free moisturizer. If irritation persists, stop use and consult a qualified healthcare professional.',
    ],
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}
