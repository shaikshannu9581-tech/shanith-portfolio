import { Reveal } from '@/components/reveal'
import { BotanicalDivider } from '@/components/botanical'

export function ProjectsConnect() {
  return (
    <Reveal>
      <section aria-labelledby="connect-title" className="mx-auto max-w-4xl text-center">
        <BotanicalDivider className="mb-8" />
        <h3 id="connect-title" className="font-serif text-3xl font-medium md:text-4xl">
          How the projects <em className="font-normal text-rose-deep">connect</em>
        </h3>
        <div className="mt-10 flex flex-col items-stretch gap-4 md:flex-row md:items-center">
          <div className="flex-1 rounded-lg border border-border bg-card p-6 text-left">
            <p className="text-[0.65rem] uppercase tracking-[0.25em] text-rose-deep">The construction project</p>
            <p className="mt-2 font-serif text-xl font-medium">Two-Storey Residence</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              The example building whose drawings, model, programme and safety documents are produced.
            </p>
          </div>
          <span aria-hidden="true" className="mx-auto h-8 w-px bg-gold md:h-px md:w-10" />
          <div className="flex-1 rounded-lg border border-border bg-card p-6 text-left">
            <p className="text-[0.65rem] uppercase tracking-[0.25em] text-rose-deep">The coordination workspace</p>
            <p className="mt-2 font-serif text-xl font-medium">FrontProof</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              The proposed workspace for organising and managing that project&apos;s information in one place.
            </p>
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-2xl leading-relaxed text-muted-foreground">
          Together, the two case studies are intended to show a complete journey — from architectural design to the
          digital coordination of the information needed to plan and deliver it.
        </p>
      </section>
    </Reveal>
  )
}
