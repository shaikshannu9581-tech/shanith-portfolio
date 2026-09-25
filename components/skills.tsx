import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { BotanicalDivider } from '@/components/botanical'

const categories = [
  {
    name: 'Design & BIM',
    skills: ['AutoCAD 2D', 'Basic Revit', 'BIM Awareness'],
  },
  {
    name: 'Planning & Management',
    skills: ['MS Project', 'Basic Primavera P6', 'Microsoft Excel', 'Project Coordination'],
  },
  {
    name: 'Construction Knowledge',
    skills: ['Construction Health & Safety', 'Construction Documentation'],
  },
]

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="bg-blush/40">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal>
          <SectionHeading id="skills-title" label="Technical expertise" title="Skills, tools &" italic="expertise" align="center" />
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((c, i) => (
            <Reveal key={c.name} delay={i * 100}>
              <article className="h-full rounded-lg border border-gold/70 bg-ivory p-8 transition-transform duration-500 hover:-translate-y-1">
                <p className="font-serif text-sm italic text-rose-deep">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="mt-2 font-serif text-2xl font-medium">{c.name}</h3>
                <ul className="mt-6 flex flex-col">
                  {c.skills.map((s) => (
                    <li key={s} className="flex items-center gap-3 border-t border-border py-3 text-sm">
                      <span aria-hidden="true" className="size-1.5 rotate-45 bg-rose" />
                      {s}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
        <BotanicalDivider className="mt-16" />
      </div>
    </section>
  )
}
