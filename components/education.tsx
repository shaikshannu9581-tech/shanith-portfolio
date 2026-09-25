import { GraduationCap } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { RoseSprig } from '@/components/botanical'

const degrees = [
  { degree: 'MSc Construction Project Management', institution: 'Sheffield Hallam University', result: 'Merit' },
  { degree: 'BTech Civil Engineering', institution: 'IIIT RGUKT RK Valley', result: 'Distinction' },
]

export function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="bg-blush/40">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal>
          <SectionHeading id="education-title" label="Education" title="My academic" italic="journey" align="center" />
        </Reveal>
        <div className="grid gap-8 md:grid-cols-2">
          {degrees.map((d, i) => (
            <Reveal key={d.degree} delay={i * 120}>
              <article className="group relative h-full overflow-hidden rounded-lg border border-gold bg-ivory p-8 transition-shadow duration-500 hover:shadow-[0_24px_50px_-28px_rgba(73,56,63,0.45)] md:p-10">
                <div aria-hidden="true" className="pointer-events-none absolute inset-2 rounded-md border border-gold/40" />
                <RoseSprig className="absolute -right-6 -top-6 w-28 opacity-80 transition-transform duration-700 group-hover:rotate-6" />
                <GraduationCap className="size-6 text-rose-deep" aria-hidden="true" />
                <h3 className="mt-8 max-w-xs font-serif text-3xl font-medium leading-tight md:text-4xl">{d.degree}</h3>
                <p className="mt-3 text-muted-foreground">{d.institution}</p>
                <dl className="mt-8 flex items-baseline gap-3 border-t border-gold/50 pt-5">
                  <dt className="text-[0.7rem] uppercase tracking-[0.25em] text-muted-foreground">Result</dt>
                  <dd className="font-serif text-2xl italic text-rose-deep">{d.result}</dd>
                </dl>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
