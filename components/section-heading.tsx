export function SectionHeading({
  id,
  index,
  eyebrow,
  title,
}: {
  id: string
  index: string
  eyebrow: string
  title: string
}) {
  return (
    <div className="mb-12 md:mb-16">
      <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-gold-ink">
        <span aria-hidden="true">{index}</span>
        <span aria-hidden="true" className="h-px w-10 bg-gold" />
        {eyebrow}
      </p>
      <h2 id={id} className="mt-4 font-serif text-4xl font-semibold text-balance md:text-5xl">
        {title}
      </h2>
    </div>
  )
}
