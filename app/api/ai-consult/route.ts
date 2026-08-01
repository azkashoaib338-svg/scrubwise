import { NextRequest, NextResponse } from 'next/server'
import { products } from '@/lib/data/products'

const VALID_CONCERNS = [
  'dry-skin',
  'sensitive-skin',
  'rough-texture',
  'dull-skin',
  'uneven-skin',
  'body-acne',
  'dark-spots',
]
const Process = process.env.ANTHROPIC_API_KEY;
console.log("Process",Process)

const SYSTEM_PROMPT = `You are a friendly AI Skin Consultant for BodyBloom, a body scrub e-commerce brand.

STRICT RULES:
- Only discuss BODY skin concerns (legs, arms, back, torso). Never discuss facial skin.
- Never diagnose medical conditions. For anything that sounds like a possible infection, unusual growth, persistent pain, or serious condition, tell the user to see a dermatologist instead of recommending a product.
- If the user's message is vague, ask ONE short clarifying question instead of guessing.
- Keep replies warm, brief, and conversational (2-4 sentences max).

You must respond with ONLY valid JSON in this exact shape, nothing else before or after:
{
  "reply": "your conversational response to the user",
  "concerns": ["array of matching concern tags, or empty array if you asked a clarifying question instead"]
}

Valid concern tags you can use (only these, exactly as spelled): ${VALID_CONCERNS.join(', ')}`

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json()

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY!,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-5',
        max_tokens: 300,
        system: SYSTEM_PROMPT,
        messages,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      console.error('Anthropic API error:', JSON.stringify(data, null, 2))
      return NextResponse.json(
        { reply: "Sorry, something went wrong. Please try again.", products: [] },
        { status: 500 },
      )
    }

    const rawText = data.content?.[0]?.text ?? '{}'

    let parsed
    try {
      parsed = JSON.parse(rawText)
    } catch {
      parsed = { reply: "Sorry, could you rephrase that?", concerns: [] }
    }

    const matchedProducts = products
      .filter((p) => p.concerns.some((c) => parsed.concerns?.includes(c)))
      .slice(0, 3)

    return NextResponse.json({
      reply: parsed.reply,
      products: matchedProducts.map((p) => ({
        name: p.name,
        slug: p.slug,
        image: p.image,
        price: p.price,
      })),
    })
  } catch (error) {
    console.error('AI consult error:', error)
    return NextResponse.json(
      { reply: "Sorry, something went wrong. Please try again.", products: [] },
      { status: 500 },
    )
  }
}