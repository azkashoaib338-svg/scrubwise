'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { SectionHeading } from '@/components/section-heading'
import { toast } from 'sonner'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    // For now, just simulate sending — no backend email service connected yet
    setTimeout(() => {
      toast.success("Message sent! We'll get back to you soon.")
      setForm({ name: '', email: '', message: '' })
      setLoading(false)
    }, 800)
  }

  return (
    <main className="mx-auto max-w-2xl px-4 py-16">
      <SectionHeading eyebrow="Get in touch" title="Contact us" description="" />

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <Input
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <Input
          name="email"
          type="email"
          placeholder="Your email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <Textarea
          name="message"
          placeholder="Your message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          required
        />
        <Button type="submit" disabled={loading} className="rounded-full">
          {loading ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </main>
  )
}