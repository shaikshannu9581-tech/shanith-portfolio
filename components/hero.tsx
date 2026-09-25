import { ArrowDownRight } from 'lucide-react'
import { FloralCorner, RoseSprig } from '@/components/botanical'

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden">
      <FloralCorner className="absolute -left-10 -top-6 w-56 opacity-70 md:w-80" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 pb-20 pt-16 md:pt-24 lg:grid-cols-12 lg:gap-10 lg:pb-28">
        <div className="lg:col-span-7">
          <p className="flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.3em] text-rose-deep">
            <span aria-hidden="true" className="h-px w-8 bg-gold" />
            The Blush Atelier
          </p>
          <h1 id="hero-title" className="mt-6 font-serif text-6xl font-medium leading-[0.95] text-balance sm:text-7xl lg:text-8xl">
            Shanith <em className="font-normal text-rose-deep">Shaik</em>
          </h1>
          <p className="mt-6 font-serif text-2xl italic leading-snug text-foreground/90 md:text-3xl">
            Designing spaces. Planning possibilities.
          </p>
          <p className="mt-4 text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
            Civil Engineering &amp; Construction Project Management
          </p>
          <p className="mt-8 max-w-lg leading-relaxed text-muted-foreground">
            Bringing together engineering knowledge, thoughtful design and organised project delivery to shape
            better-built environments.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-[0_10px_30px_-12px_rgba(142,79,96,0.6)] transition-all hover:-translate-y-0.5 hover:bg-plum focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose"
            >
              Explore My Work
              <ArrowDownRight className="size-4 transition-transform group-hover:rotate-[-45deg]" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-rose px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-blush focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose"
            >
              Get in Touch
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-none">
          <div aria-hidden="true" className="absolute -right-4 -top-4 bottom-4 left-4 rounded-t-full border border-gold md:-right-6 md:-top-6" />
          <figure className="relative">
            <div className="overflow-hidden rounded-t-full bg-blush">
              <picture>
                <source media="(max-width: 640px)" srcSet="/images/hero-residence-640.webp" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/hero-residence-1100.webp"
                  alt="Illustrative image: a warm-toned contemporary residence with arched openings and climbing roses"
                  width={1100}
                  height={1650}
                  fetchPriority="high"
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover"
                />
              </picture>
            </div>
            <figcaption className="mt-3 text-right text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
              Illustrative image
            </figcaption>
          </figure>
          <RoseSprig className="absolute -bottom-10 -left-12 w-36 md:w-44" />
        </div>
      </div>
    </section>
  )
}
