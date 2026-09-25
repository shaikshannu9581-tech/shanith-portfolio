import { GraduationCap } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const degrees = [
  {
    degree: 'MSc Construction Project Management',
    institution: 'Sheffield Hallam University',
    classification: 'Merit',
  },
  {
    degree: 'BTech Civil Engineering',
    institution: 'IIIT RGUKT RK Valley',
    classification: 'Distinction',
  },
]

export function Education() {
  return (
    <section aria-labelledby="education-title" id="education" className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal>
          <SectionHeading id="education-title" index="02" eyebrow="Education" title="Academic background" />
        </Reveal>
        <ol className="grid gap-6 md:grid-cols-2">
          {degrees.map((item, i) => (
            <li key={item.degree}>
              <Reveal delay={i * 120} className="h-full">
                <article className="flex h-full flex-col border border-border bg-card p-8 transition-shadow hover:shadow-lg hover:shadow-foreground/5">
                  <GraduationCap className="size-6 text-gold-ink" aria-hidden="true" />
                  <h3 className="mt-6 font-serif text-2xl font-semibold md:text-3xl">{item.degree}</h3>
                  <p className="mt-2 text-muted-foreground">{item.institution}</p>
                  <p className="mt-auto pt-8">
                    <span className="inline-flex items-center border border-gold px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-gold-ink">
                      {item.classification}
                    </span>
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
