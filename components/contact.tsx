import { ArrowUpRight, Mail, Phone, UserRound } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { FloralCorner } from '@/components/botanical'
import { contactDetails } from '@/lib/site-config'

export function Contact() {
  const { email, phone, linkedinUrl } = contactDetails

  const links = [
    email && { label: 'Email', value: email, href: `mailto:${email}`, icon: Mail, external: false },
    phone && { label: 'Telephone', value: phone, href: `tel:${phone.replace(/\s+/g, '')}`, icon: Phone, external: false },
    linkedinUrl && {
      label: 'LinkedIn',
      value: linkedinUrl.replace(/^https?:\/\/(www\.)?/, ''),
      href: linkedinUrl,
      icon: UserRound,
      external: true,
    },
  ].filter(Boolean) as {
    label: string
    value: string
    href: string
    icon: typeof Mail
    external: boolean
  }[]

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

        {links.length > 0 && (
          <Reveal delay={120}>
            <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {links.map(({ label, value, href, icon: Icon, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="group flex h-full flex-col items-center gap-3 rounded-lg border border-gold/70 bg-card p-8 transition-all hover:-translate-y-1 hover:bg-blush/50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose"
                  >
                    <Icon className="size-5 text-rose-deep" aria-hidden="true" />
                    <span className="text-[0.7rem] uppercase tracking-[0.25em] text-muted-foreground">{label}</span>
                    <span className="flex items-center gap-1 break-all font-serif text-lg">
                      {value}
                      {external && <ArrowUpRight className="size-4 shrink-0" aria-hidden="true" />}
                    </span>
                    {external && <span className="sr-only">(opens in a new tab)</span>}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        )}
      </div>
    </section>
  )
}
