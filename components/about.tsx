import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { FloralCorner } from '@/components/botanical'

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative overflow-hidden bg-blush/60">
      <FloralCorner className="absolute -bottom-10 -right-10 w-52 rotate-180 opacity-60 md:w-72" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-24 md:py-32 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <SectionHeading id="about-title" label="The person behind the portfolio" title="A little" italic="about me" />
        </Reveal>
        <Reveal delay={120} className="lg:col-span-7">
          <div className="rounded-lg border border-gold/60 bg-ivory/80 p-8 md:p-12">
            <p className="font-serif text-2xl leading-relaxed md:text-[1.7rem]">
              I am a Civil Engineering graduate with an MSc in Construction Project Management from Sheffield Hallam
              University. My academic and project experience has developed my interest in architectural drawings,
              project coordination, construction planning and digital construction technologies.
            </p>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              I enjoy combining technical thinking with creativity, particularly in residential design and construction
              project development.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
