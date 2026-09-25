import { ArrowUpRight, Mail, UserRound } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { FloralCorner } from '@/components/botanical'
import { contactDetails } from '@/lib/site-config'

const buttonBase =
  'inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium tracking-wide transition-all focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose'

export function Contact() {
  const { email, phone, linkedinUrl } = contactDetails
  const hasAnyLink = Boolean(email || linkedinUrl || phone)

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden">
      <FloralCorner className="absolute -right-12 -top-8 w-56 -scale-x-100 opacity-60 md:w-80" />
      <div className="relative mx-auto max-w-4xl px-6 py-24 text-center md:py-32">
        <Reveal>
          <SectionHeading id="contact-title" label="Get in touch" title="Let's create something" italic="meaningful" align="center" />
          <p className="-mt-6 mx-auto max-w-xl leading-relaxed text-muted-foreground">
            {"Interested in collaborating or discussing an opportunity? I'd love to connect."}
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mx-auto mt-12 max-w-2xl rounded-lg border border-gold/70 bg-card px-6 py-10 md:px-12">
            {hasAnyLink ? (
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                {email && (
                  <a
                    href={`mailto:${email}`}
                    className={`${buttonBase} w-full bg-primary text-primary-foreground hover:-translate-y-0.5 hover:bg-rose-deep sm:w-auto`}
                  >
                    <Mail className="size-4" aria-hidden="true" />
                    Email Me
                  </a>
                )}
                {linkedinUrl && (
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${buttonBase} w-full border border-gold bg-ivory text-foreground hover:-translate-y-0.5 hover:bg-blush sm:w-auto`}
                  >
                    <UserRound className="size-4" aria-hidden="true" />
                    LinkedIn
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                )}
                {phone && (
                  <a
                    href={`tel:${phone.replace(/\s+/g, '')}`}
                    className={`${buttonBase} w-full border border-border bg-ivory text-foreground hover:bg-blush sm:w-auto`}
                  >
                    {phone}
                  </a>
                )}
              </div>
            ) : (
              <p className="font-serif text-xl italic text-rose-deep">Contact details are being finalised.</p>
            )}
            {email && <p className="mt-6 break-all text-sm text-muted-foreground">{email}</p>}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
