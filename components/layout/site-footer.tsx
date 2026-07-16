import Link from 'next/link'
import { Flower2 } from 'lucide-react'
import {
  InstagramIcon,
  FacebookIcon,
  TwitterIcon,
} from '@/components/layout/social-icons'
import { NewsletterForm } from '@/components/marketing/newsletter-form'
import { concerns } from '@/lib/data/concerns'

const shopLinks = [
  { label: 'All Scrubs', href: '/shop' },
  { label: 'Shop by Concern', href: '/concerns' },
  { label: 'AI Scrub Advisor', href: '/advisor' },
  { label: 'New Arrivals', href: '/shop?sort=newest' },
]

const supportLinks = [
  { label: 'Contact & FAQ', href: '/contact' },
  { label: 'Body-Care Guide', href: '/guide' },
  { label: 'Shipping & Delivery', href: '/contact' },
  { label: 'Returns', href: '/contact' },
]

const aboutLinks = [
  { label: 'About BodyBloom', href: '/about' },
  { label: 'Our Ingredients', href: '/about' },
  { label: 'Sustainability', href: '/about' },
]

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border bg-secondary/60">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="flex items-center gap-2 font-serif text-2xl font-semibold text-foreground"
            >
              <Flower2 className="size-6 text-primary" />
              BodyBloom
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Premium body scrubs thoughtfully formulated to support smoother,
              healthier-looking skin as part of a gentle body-care routine.
            </p>
            <div className="mt-6">
              <p className="mb-2 text-sm font-medium text-foreground">
                Join our newsletter
              </p>
              <NewsletterForm compact />
            </div>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <InstagramIcon className="size-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <FacebookIcon className="size-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <TwitterIcon className="size-4" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            <FooterColumn title="Shop" links={shopLinks} />
            <FooterColumn
              title="Concerns"
              links={concerns.slice(0, 6).map((c) => ({
                label: c.title,
                href: `/concerns/${c.slug}`,
              }))}
            />
            <FooterColumn title="Support" links={supportLinks} />
            <FooterColumn title="Company" links={aboutLinks} />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} BodyBloom. All rights reserved.</p>
          <p className="max-w-xl text-center text-xs leading-relaxed sm:text-right">
            For external body use only. Not intended to diagnose or treat any
            medical condition.
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({
  title,
  links,
}: {
  title: string
  links: { label: string; href: string }[]
}) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-semibold text-foreground">{title}</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
