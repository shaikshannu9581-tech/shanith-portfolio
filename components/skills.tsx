import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const groups = [
  {
    title: 'Design & Drawing',
    skills: ['AutoCAD 2D', 'Revit (basic)', 'BIM awareness'],
  },
  {
    title: 'Planning & Scheduling',
    skills: ['MS Project', 'Primavera P6 (basic)', 'Microsoft Excel'],
  },
  {
    title: 'Project Delivery',
    skills: ['Construction documentation', 'Health and safety', 'Project coordination'],
  },
]

export function Skills() {
  return (
    <section aria-labelledby="skills-title" id="skills" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal>
          <SectionHeading id="skills-title" index="03" eyebrow="Technical Skills" title="Tools & competencies" />
        </Reveal>
        <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
          {groups.map((group, i) => (
            <Reveal key={group.title} delay={i * 120} className="bg-background p-8">
              <h3 className="text-xs font-medium uppercase tracking-[0.25em] text-gold-ink">
                {group.title}
              </h3>
              <ul className="mt-6 flex flex-col gap-4">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-baseline gap-3 font-serif text-xl">
                    <span aria-hidden="true" className="h-px w-4 shrink-0 translate-y-[-4px] bg-gold" />
                    {skill}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
