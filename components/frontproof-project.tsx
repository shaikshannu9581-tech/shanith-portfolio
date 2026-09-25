import { Reveal } from '@/components/reveal'
import { StatusBadge } from '@/components/status-badge'

const areas = ['Architectural drawings', 'Project schedules', 'Construction activities', 'Risk registers', 'Progress reporting']

export function FrontProofProject() {
  return (
    <Reveal>
      <article
        aria-labelledby="frontproof-title"
        className="grid overflow-hidden rounded-lg border border-border bg-blush/55 md:grid-cols-2"
      >
        <figure className="relative overflow-hidden md:order-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/frontproof-concept-1100.webp"
            alt="Concept visual: a laptop showing a soft ivory and blush project dashboard with a schedule timeline, floor plan thumbnail and document list"
            width={1100}
            height={922}
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] size-full object-cover"
          />
          <figcaption className="absolute bottom-3 left-3 rounded-full bg-ivory/90 px-3 py-1 text-[0.6rem] uppercase tracking-[0.2em] text-plum">
            Concept visual
          </figcaption>
        </figure>
        <div className="flex flex-col justify-center gap-5 p-8 md:p-12">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.25em] text-rose-deep">Second project</p>
            <StatusBadge>Digital Construction Workflow — In Development</StatusBadge>
          </div>
          <h3 id="frontproof-title" className="font-serif text-3xl font-medium leading-tight md:text-4xl">
            FrontProof
          </h3>
          <span aria-hidden="true" className="block h-px w-12 bg-gold" />
          <p className="leading-relaxed text-muted-foreground">
            FrontProof is a proposed digital construction project coordination and documentation workspace. The portfolio
            case study will explore how architectural drawings, project schedules, construction activities, risk
            registers and progress reporting can be organised within one connected workflow.
          </p>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Areas to explore</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {areas.map((a) => (
                <li key={a} className="rounded-full border border-border bg-ivory/80 px-3 py-1 text-sm text-foreground">
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </Reveal>
  )
}
