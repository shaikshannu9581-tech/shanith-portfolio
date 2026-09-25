import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const interests = ['Project coordination', 'Design documentation', 'Planning', 'Construction technology']

export function About() {
  return (
    <section aria-labelledby="about-title" id="about" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal>
          <SectionHeading id="about-title" index="01" eyebrow="About" title="About me" />
        </Reveal>
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <p className="font-serif text-2xl leading-relaxed text-pretty md:text-3xl">
              I have an MSc in Construction Project Management from Sheffield Hallam University and a
              BTech in Civil Engineering from IIIT RGUKT RK Valley.
            </p>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              I am interested in project coordination, design documentation, planning and
              construction technology.
            </p>
          </Reveal>
          <Reveal delay={150} className="md:col-span-4 md:col-start-9">
            <h3 className="text-xs font-medium uppercase tracking-[0.25em] text-gold-ink">
              Areas of interest
            </h3>
            <ul className="mt-6 divide-y divide-border border-y border-border">
              {interests.map((item) => (
                <li key={item} className="flex items-center gap-3 py-4">
                  <span aria-hidden="true" className="size-1.5 rotate-45 bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
