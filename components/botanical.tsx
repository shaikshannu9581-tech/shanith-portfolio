import { cn } from '@/lib/utils'

export function FloralCorner({ className }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/floral-corner-600.webp"
      alt=""
      aria-hidden="true"
      width={600}
      height={600}
      loading="lazy"
      decoding="async"
      className={cn(
        'pointer-events-none select-none mix-blend-multiply [mask-image:radial-gradient(circle_at_0_0,black_40%,transparent_70%)]',
        className,
      )}
    />
  )
}

export function RoseSprig({ className }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/rose-sprig-400.webp"
      alt=""
      aria-hidden="true"
      width={400}
      height={400}
      loading="lazy"
      decoding="async"
      className={cn(
        'pointer-events-none select-none mix-blend-multiply [mask-image:radial-gradient(closest-side,black_65%,transparent)]',
        className,
      )}
    />
  )
}

export function BotanicalDivider({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn('flex items-center justify-center gap-4 text-rose', className)}>
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold md:w-28" />
      <svg width="64" height="20" viewBox="0 0 64 20" fill="none" className="shrink-0">
        <path d="M2 10c10 0 14-6 22-6s10 6 8 6-4-6 8-6 12 6 22 6" stroke="var(--gold)" strokeWidth="0.9" />
        <ellipse cx="18" cy="6" rx="4" ry="1.6" transform="rotate(-25 18 6)" stroke="currentColor" strokeWidth="0.8" />
        <ellipse cx="46" cy="6" rx="4" ry="1.6" transform="rotate(25 46 6)" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="32" cy="10" r="2.4" stroke="currentColor" strokeWidth="0.9" />
        <circle cx="32" cy="10" r="0.9" fill="var(--gold)" />
      </svg>
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold md:w-28" />
    </div>
  )
}
