import { FeaturedResidence } from '@/components/featured-residence'
import { FrontProofProject } from '@/components/frontproof-project'
import { ProjectsConnect } from '@/components/projects-connect'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

const projects = [
  {
    title: 'Construction Health & Safety: UK and India',
    type: 'MSc Dissertation',
    description:
      'A comparative academic study examining construction health and safety regulations and practices in the UK and India.',
    image: '/images/work-safety-900.webp',
    alt: 'Illustrative image: a safety helmet and construction drawings on a blush desk',
    inDevelopment: false,
  },
  {
    title: 'Heritage & Adaptive Reuse — Berlin',
    type: 'Academic Applied Project',
    description: 'An academic project exploring heritage and adaptive reuse, supported by AutoCAD, Revit and MS Project.',
    image: '/images/work-heritage-900.webp',
    alt: 'Illustrative image: a restored historic brick building adapted into a light-filled interior',
    inDevelopment: false,
  },
]

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal>
          <SectionHeading id="projects-title" label="Selected work" title="Selected work &" italic="academic projects" />
        </Reveal>

        <div className="flex flex-col gap-16 md:gap-24">
          <FeaturedResidence />
          <FrontProofProject />
          <ProjectsConnect />
        </div>

        <Reveal>
          <h3 className="mt-24 mb-10 flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.3em] text-rose-deep md:mt-32">
            <span aria-hidden="true" className="h-px w-8 bg-gold" />
            Academic projects
          </h3>
        </Reveal>

        <ul className="flex flex-col gap-10 md:gap-14">
          {projects.map((p, i) => {
            const reversed = i % 2 === 1
            return (
              <li key={p.title}>
                <Reveal>
                  <article
                    className={cn(
                      'group grid overflow-hidden rounded-lg border border-border md:grid-cols-2',
                      reversed ? 'bg-card' : 'bg-blush/55',
                    )}
                  >
                    <div className={cn('relative overflow-hidden', reversed && 'md:order-2')}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={p.image}
                        alt={p.alt}
                        width={900}
                        height={675}
                        loading="lazy"
                        decoding="async"
                        className="aspect-[4/3] size-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                      />
                      <span className="absolute bottom-3 left-3 rounded-full bg-ivory/90 px-3 py-1 text-[0.6rem] uppercase tracking-[0.2em] text-plum">
                        Illustrative image
                      </span>
                    </div>
                    <div className="flex flex-col justify-center p-8 md:p-12">
                      <p className="text-[0.7rem] font-medium uppercase tracking-[0.25em] text-rose-deep">
                        {String(i + 1).padStart(2, '0')} — {p.type}
                      </p>
                      <h3 className="mt-4 font-serif text-3xl font-medium leading-tight text-balance md:text-4xl">
                        {p.title}
                      </h3>
                      <span aria-hidden="true" className="mt-5 block h-px w-12 bg-gold transition-all duration-500 group-hover:w-24" />
                      <p className="mt-5 leading-relaxed text-muted-foreground">{p.description}</p>
                    </div>
                  </article>
                </Reveal>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
