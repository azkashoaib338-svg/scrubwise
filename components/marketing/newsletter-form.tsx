'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function NewsletterForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    // Simulate a request for this first version
    setTimeout(() => {
      setLoading(false)
      setEmail('')
      toast.success('Welcome to BodyBloom!', {
        description: 'Check your inbox for a little something.',
      })
    }, 700)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={compact ? 'flex gap-2' : 'flex flex-col gap-3 sm:flex-row'}
    >
      <Input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        aria-label="Email address"
        className="bg-background"
      />
      <Button type="submit" disabled={loading} className="shrink-0">
        {loading ? 'Joining...' : 'Subscribe'}
      </Button>
    </form>
  )
}
