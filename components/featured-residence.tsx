import { Box, FileText, PencilRuler } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { StatusBadge } from '@/components/status-badge'

const deliverables = [
  'Concept brief and architectural mood board',
  'AutoCAD ground-floor and first-floor plans',
  'Elevations, sections and drawing schedules',
  'Revit 3D building model',
  'Materials and finishes concept',
  'Basic quantity take-off',
  'MS Project construction programme',
  'Construction health and safety and risk documentation',
  'Project activities and document management using FrontProof',
  'Final architectural and project-management presentation',
]

const progressSlots = [
  { icon: PencilRuler, title: 'Architectural drawings', note: 'Plans, elevations and sections will appear here.' },
  { icon: Box, title: 'Model screenshots', note: 'Revit 3D model views will appear here.' },
  { icon: FileText, title: 'Project documents', note: 'Programme, risk and safety documents will appear here.' },
]

export function FeaturedResidence() {
  return (
    <article aria-labelledby="featured-residence-title" className="overflow-hidden rounded-lg border border-border bg-card">
      <Reveal>
        <figure className="relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/featured-residence-1100.webp"
            alt="Illustrative concept: a two-storey sandstone residence with arched veranda, jaali screens, a carved balcony and a landscaped garden with a lotus pool"
            width={1100}
            height={733}
            loading="lazy"
            decoding="async"
            className="aspect-[3/2] w-full object-cover md:aspect-[21/9]"
          />
          <figcaption className="absolute bottom-3 left-3 max-w-[calc(100%-1.5rem)] rounded-full bg-ivory/90 px-3 py-1 text-[0.6rem] uppercase tracking-[0.2em] text-plum">
            Illustrative concept image — not a completed project rendering
          </figcaption>
        </figure>
      </Reveal>

      <div className="flex flex-col gap-14 p-8 md:p-14">
        <Reveal>
          <div className="flex flex-col gap-5 md:max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.25em] text-rose-deep">Featured project</p>
              <StatusBadge>Portfolio Case Study — In Development</StatusBadge>
            </div>
            <h3 id="featured-residence-title" className="font-serif text-3xl font-medium leading-tight text-balance md:text-5xl">
              Two-Storey Indian <em className="font-normal text-rose-deep">Heritage-Inspired</em> Residence
            </h3>
            <span aria-hidden="true" className="block h-px w-16 bg-gold" />
            <p className="text-lg leading-relaxed text-muted-foreground">
              A proposed two-storey residence that combines traditional Indian architectural influences with contemporary
              residential design and digital construction project management.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <section aria-labelledby="roadmap-title">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
              <h4 id="roadmap-title" className="font-serif text-2xl font-medium md:text-3xl">
                Project <em className="font-normal text-rose-deep">roadmap</em>
              </h4>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Planned deliverables</p>
            </div>
            <ol className="grid gap-x-10 border-l border-gold/60 md:grid-cols-2 md:border-l-0">
              {deliverables.map((item, i) => (
                <li
                  key={item}
                  className="relative flex items-start gap-4 border-border py-4 pl-6 md:border-b md:pl-0"
                >
                  <span
                    aria-hidden="true"
                    className="absolute -left-[5px] top-6 size-2.5 rounded-full border border-gold bg-ivory md:hidden"
                  />
                  <span className="font-serif text-2xl leading-none text-gold tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex flex-1 flex-col gap-1">
                    <span className="leading-snug text-foreground">{item}</span>
                    <span className="text-[0.6rem] uppercase tracking-[0.2em] text-rose-deep">Planned</span>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </Reveal>

        <Reveal>
          <section aria-labelledby="progress-title" className="rounded-lg bg-blush/45 p-6 md:p-10">
            <h4 id="progress-title" className="font-serif text-2xl font-medium md:text-3xl">
              Project <em className="font-normal text-rose-deep">progress</em>
            </h4>
            <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
              Real drawings, model screenshots and project documents will be added here as the case study develops.
            </p>
            <ul className="mt-8 grid gap-5 sm:grid-cols-3">
              {progressSlots.map(({ icon: Icon, title, note }) => (
                <li
                  key={title}
                  className="flex aspect-[4/3] flex-col items-center justify-center gap-3 rounded-md border border-dashed border-gold/70 bg-ivory/70 p-6 text-center"
                >
                  <Icon aria-hidden="true" className="size-6 text-rose-deep" strokeWidth={1.25} />
                  <p className="font-serif text-lg font-medium">{title}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{note}</p>
                  <p className="text-[0.6rem] uppercase tracking-[0.2em] text-plum">Awaiting upload</p>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>
      </div>
    </article>
  )
}
