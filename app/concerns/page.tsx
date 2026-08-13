import { getAllConcerns } from '@/lib/db/content'
import { ConcernGrid } from '@/components/concern/concern-grid'
import { SectionHeading } from '@/components/section-heading'

export default async function ConcernsPage() {
  const concerns = await getAllConcerns()

  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
      <SectionHeading
        eyebrow="Shop by concern"
        title="Browse all skin concerns"
        description="Find the right scrub for your specific body-care needs."
      />
      <div className="mt-10">
        <ConcernGrid items={concerns} />
      </div>
    </main>
  )
}