import { Mail, UserRound } from 'lucide-react'
import { Reveal } from '@/components/reveal'

// TODO: Replace these placeholders with real details before publishing.
const EMAIL = 'your.email@example.com'
const LINKEDIN_URL = 'https://www.linkedin.com/in/your-profile'

export function Contact() {
  return (
    <section aria-labelledby="contact-title" id="contact" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal>
          <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-gold">
            <span aria-hidden="true">05</span>
            <span aria-hidden="true" className="h-px w-10 bg-gold" />
            Contact
          </p>
          <h2 id="contact-title" className="mt-4 max-w-2xl font-serif text-4xl font-semibold text-balance md:text-6xl">
            {"Let's get in touch"}
          </h2>
          <p className="mt-6 max-w-xl leading-relaxed text-primary-foreground/75">
            Open to construction and engineering opportunities in the UK.
          </p>
        </Reveal>

        <Reveal delay={150} className="mt-12 grid gap-4 md:grid-cols-2">
          <a
            href={`mailto:${EMAIL}`}
            className="group flex items-center gap-4 border border-primary-foreground/20 p-6 transition-colors hover:border-gold"
          >
            <Mail className="size-5 text-gold" aria-hidden="true" />
            <span className="flex flex-col">
              <span className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60">Email</span>
              <span className="mt-1 break-all">{EMAIL}</span>
            </span>
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 border border-primary-foreground/20 p-6 transition-colors hover:border-gold"
          >
            <UserRound className="size-5 text-gold" aria-hidden="true" />
            <span className="flex flex-col">
              <span className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60">LinkedIn</span>
              <span className="mt-1 break-all">linkedin.com/in/your-profile</span>
            </span>
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </Reveal>

        <p
          role="note"
          className="mt-6 border-l-2 border-gold pl-4 text-sm text-primary-foreground/70"
        >
          Placeholder contact details — replace the email address and LinkedIn URL before publishing.
        </p>
      </div>
    </section>
  )
}
