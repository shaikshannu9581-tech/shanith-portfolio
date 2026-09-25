import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const entries = [
  {
    organisation: 'THE DESIGN',
    location: 'Hyderabad',
    role: 'Architectural / Project Intern',
    description: 'Internship providing architectural and project support, with exposure to architectural drawings and construction documentation.',
    focus: ['Architectural support', 'Construction documentation'],
  },
  {
    organisation: 'Dream House Construction',
    location: 'India',
    role: 'Project Support / Office Administration',
    description: 'Project support and office administration within a residential construction company, assisting with project coordination.',
    focus: ['Project coordination', 'Office administration'],
  },
  {
    organisation: 'Private Residential Construction Projects',
    location: 'Project-based',
    role: 'Project-based support',
    description: 'Support on private residential construction projects, building a practical understanding of residential construction.',
    focus: ['Private residential construction'],
  },
]

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal>
          <SectionHeading id="experience-title" label="My experience" title="From design to" italic="project delivery" />
          <p className="-mt-6 mb-14 max-w-2xl leading-relaxed text-muted-foreground">
            My experience spans architectural support, construction documentation, project coordination and private
            residential construction.
          </p>
        </Reveal>

        <ol className="relative border-l border-gold/70 md:ml-4">
          {entries.map((entry, i) => (
            <li key={entry.organisation} className="relative pb-14 pl-8 last:pb-0 md:pl-14">
              <span
                aria-hidden="true"
                className="absolute -left-[7px] top-2 size-3.5 rounded-full border border-gold bg-blush"
              />
              <Reveal delay={i * 100}>
                <div className="grid gap-4 md:grid-cols-12 md:gap-8">
                  <div className="md:col-span-5">
                    <p className="text-[0.7rem] font-medium uppercase tracking-[0.25em] text-rose-deep">{entry.location}</p>
                    <h3 className="mt-2 font-serif text-3xl font-medium leading-tight">{entry.organisation}</h3>
                    <p className="mt-2 font-serif text-lg italic text-muted-foreground">{entry.role}</p>
                  </div>
                  <div className="md:col-span-7">
                    <p className="leading-relaxed text-muted-foreground">{entry.description}</p>
                    <ul className="mt-4 flex flex-wrap gap-2" aria-label="Focus areas">
                      {entry.focus.map((item) => (
                        <li key={item} className="rounded-full border border-border bg-card px-3 py-1 text-xs text-foreground/80">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
