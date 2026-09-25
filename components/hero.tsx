import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="blueprint-grid relative pt-16">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-7">
          <Reveal>
            <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-gold-ink">
              <span aria-hidden="true" className="h-px w-10 bg-gold" />
              Portfolio
            </p>
            <h1
              id="hero-title"
              className="mt-6 font-serif text-6xl font-semibold leading-[0.95] text-balance md:text-8xl"
            >
              Shanith Shaik
            </h1>
            <p className="mt-6 text-lg font-medium md:text-xl">
              Civil Engineering &amp; Construction Project Management
            </p>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground text-pretty">
              Interested in construction project coordination, architectural drawings, planning and
              digital construction.
            </p>
          </Reveal>
          <Reveal delay={150} className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              View Projects
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-sm border border-foreground/25 px-6 py-3 text-sm font-medium transition-colors hover:border-gold hover:bg-accent"
            >
              Contact
            </a>
          </Reveal>
        </div>

        <Reveal delay={250} className="md:col-span-5">
          <figure className="relative">
            <div
              aria-hidden="true"
              className="absolute -right-3 -top-3 h-full w-full border border-gold"
            />
            <div className="relative aspect-[4/5] overflow-hidden bg-muted">
              <Image
                src="/images/hero-architecture.png"
                alt="Illustrative image of a modern concrete and glass building facade"
                fill
                priority
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-xs text-muted-foreground">
              Illustrative imagery — not my own completed work.
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
