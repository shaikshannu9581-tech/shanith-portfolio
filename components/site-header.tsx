'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '@/lib/site-config'
import { cn } from '@/lib/utils'

export function Monogram({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'flex size-10 items-center justify-center rounded-full border border-gold font-serif text-lg italic text-rose-deep',
        className,
      )}
    >
      SS
    </span>
  )
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-ivory/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#home" className="flex items-center gap-3 rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose">
          <Monogram />
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-xl font-medium">Shanith Shaik</span>
            <span className="hidden text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground sm:block">
              The Blush Atelier
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative text-sm text-foreground/80 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-rose after:transition-transform hover:text-rose-deep hover:after:scale-x-100 focus-visible:text-rose-deep focus-visible:after:scale-x-100 focus-visible:outline-none"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="flex size-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-rose focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        </button>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Mobile"
        hidden={!open}
        onKeyDown={(e) => e.key === 'Escape' && setOpen(false)}
        className="max-h-[calc(100dvh-4.25rem)] overflow-y-auto border-t border-border/70 bg-ivory lg:hidden"
      >
        <ul className="mx-auto flex max-w-6xl flex-col px-6 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block border-b border-border/50 py-3 font-serif text-2xl transition-colors last:border-0 hover:text-rose-deep"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
