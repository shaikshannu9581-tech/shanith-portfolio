import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

type Project = {
  label: string
  type: string
  title: string
  description: string
  tools?: string[]
  image: string
  alt: string
  comingSoon?: boolean
}

const projects: Project[] = [
  {
    label: 'Project A',
    type: 'MSc Dissertation',
    title: 'Construction health and safety: UK and India',
    description:
      'A comparative study of construction health and safety regulations and practices in the UK and India.',
    image: '/images/site-safety.png',
    alt: 'Illustrative image of a hard hat and high-visibility vest on documents at a construction site',
  },
  {
    label: 'Project B',
    type: 'Academic Project — Berlin',
    title: 'Heritage and adaptive reuse',
    description: 'An academic project in Berlin exploring heritage and adaptive reuse.',
    tools: ['AutoCAD', 'Revit', 'MS Project'],
    image: '/images/heritage-reuse.png',
    alt: 'Illustrative image of a historic brick building with a modern glass extension',
  },
  {
    label: 'Project C',
    type: 'Portfolio Project',
    title: 'Proposed two-storey residential project',
    description: 'A proposed two-storey residential portfolio project. Currently in preparation.',
    image: '/images/residential-concept.png',
    alt: 'Illustrative conceptual line sketch of a two-storey house',
    comingSoon: true,
  },
]

export function Projects() {
  return (
    <section aria-labelledby="projects-title" id="projects" className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal>
          <SectionHeading id="projects-title" index="04" eyebrow="Academic Projects" title="Selected academic work" />
        </Reveal>
        <ul className="flex flex-col gap-16 md:gap-24">
          {projects.map((project, i) => (
            <li key={project.label}>
              <Reveal>
                <article className="grid items-center gap-8 md:grid-cols-12 md:gap-12">
                  <figure className={cn('md:col-span-6', i % 2 === 1 && 'md:order-2 md:col-start-7')}>
                    <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                      <Image
                        src={project.image || '/placeholder.svg'}
                        alt={project.alt}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className={cn(
                          'object-cover transition-transform duration-700 hover:scale-[1.03]',
                          project.comingSoon && 'opacity-70 grayscale-[40%]',
                        )}
                      />
                      {project.comingSoon && (
                        <div className="absolute inset-0 flex items-center justify-center bg-background/40">
                          <span className="border border-gold bg-background px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-gold-ink">
                            Coming Soon
                          </span>
                        </div>
                      )}
                    </div>
                    <figcaption className="mt-3 text-xs text-muted-foreground">
                      Illustrative image only — not project output.
                    </figcaption>
                  </figure>

                  <div className={cn('md:col-span-5', i % 2 === 1 ? 'md:order-1' : 'md:col-start-8')}>
                    <p className="flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-gold-ink">
                      {project.label}
                      <span aria-hidden="true" className="h-px w-6 bg-gold" />
                      {project.type}
                    </p>
                    <h3 className="mt-4 font-serif text-3xl font-semibold text-balance md:text-4xl">
                      {project.title}
                    </h3>
                    {project.comingSoon && (
                      <p className="mt-4 inline-flex items-center gap-2 rounded-sm bg-primary px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground">
                        Status: Coming Soon
                      </p>
                    )}
                    <p className="mt-4 leading-relaxed text-muted-foreground">{project.description}</p>
                    {project.tools && (
                      <div className="mt-6">
                        <h4 className="sr-only">Tools used</h4>
                        <ul className="flex flex-wrap gap-2">
                          {project.tools.map((tool) => (
                            <li
                              key={tool}
                              className="border border-foreground/15 bg-background px-3 py-1 text-sm"
                            >
                              {tool}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
