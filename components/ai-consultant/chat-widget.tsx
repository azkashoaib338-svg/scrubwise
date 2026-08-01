'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle, X, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { formatPrice } from '@/lib/format'

interface RecommendedProduct {
  name: string
  slug: string
  image: string
  price: number
}

interface Message {
  role: 'user' | 'assistant'
  content: string
  products?: RecommendedProduct[]
}

export function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content:
        "Hi! I'm your AI Skin Consultant. Tell me about any body skin concern you have — like dark spots, dryness, rough patches, or acne — and I'll suggest a scrub that might help.",
    },
  ])

  async function handleSend() {
    console.log("handleSend called with input:", input, "loading:", loading);
    if (!input.trim() || loading) return

    const userMessage: Message = { role: 'user', content: input }
    const updatedMessages = [...messages, userMessage]
    setMessages(updatedMessages)
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/ai-consult', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updatedMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      })

      const data = await res.json()
console.log("data",data)
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: data.reply, products: data.products },
      ])
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: "Sorry, something went wrong. Please try again.",
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Teaser message bubble */}
      {!open && (
        <div className="fixed bottom-8 right-24 z-50 max-w-[200px] animate-bounce rounded-2xl rounded-br-sm bg-background border border-border px-4 py-3 shadow-lg">
          <p className="text-sm font-medium text-foreground">
            👋 Not sure which scrub is right? Chat with our AI Skin Agent!
          </p>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Open AI Skin Consultant"
        className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105"
      >
        {open ? <X className="size-6" /> : <MessageCircle className="size-6" />}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 flex h-[500px] w-[360px] flex-col rounded-2xl border border-border bg-background shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between rounded-t-2xl bg-primary px-4 py-3 text-primary-foreground">
            <span className="font-serif font-semibold">AI Skin Consultant</span>
            <button onClick={() => setOpen(false)} aria-label="Close chat">
              <X className="size-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.map((msg, i) => (
              <div key={i}>
                <div
                  className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm ${
                    msg.role === 'user'
                      ? 'ml-auto bg-primary text-primary-foreground'
                      : 'bg-secondary text-foreground'
                  }`}
                >
                  {msg.content}
                </div>

                {/* Product recommendations */}
                {msg.products && msg.products.length > 0 && (
                  <div className="mt-2 space-y-2">
                    {msg.products.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/shop/${p.slug}`}
                        className="flex items-center gap-3 rounded-xl border border-border p-2 hover:bg-secondary/50"
                      >
                        <div className="relative size-12 shrink-0 overflow-hidden rounded-lg bg-secondary/50">
                          <Image
                            src={p.image || '/placeholder.svg'}
                            alt={p.name}
                            fill
                            sizes="48px"
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 text-xs">
                          <p className="font-medium text-foreground">{p.name}</p>
                          <p className="text-muted-foreground">{formatPrice(p.price)}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="max-w-[85%] rounded-2xl bg-secondary px-3 py-2 text-sm text-muted-foreground">
                Thinking...
              </div>
            )}
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 border-t border-border p-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Describe your skin concern..."
              disabled={loading}
              className="flex-1 rounded-full border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary disabled:opacity-50"
            />
            <Button size="icon" onClick={handleSend} disabled={loading} aria-label="Send message">
              <Send className="size-4" />
            </Button>
          </div>
        </div>
      )}
    </>
  )
}