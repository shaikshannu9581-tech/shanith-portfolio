import { cn } from '@/lib/utils'

export function SectionHeading({
  id,
  label,
  title,
  italic,
  align = 'left',
  className,
}: {
  id: string
  label: string
  title: string
  italic?: string
  align?: 'left' | 'center'
  className?: string
}) {
  return (
    <div className={cn('mb-12 md:mb-16', align === 'center' && 'text-center', className)}>
      <p
        className={cn(
          'flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.3em] text-rose-deep',
          align === 'center' && 'justify-center',
        )}
      >
        <span aria-hidden="true" className="h-px w-8 bg-gold" />
        {label}
        {align === 'center' && <span aria-hidden="true" className="h-px w-8 bg-gold" />}
      </p>
      <h2 id={id} className="mt-5 font-serif text-4xl font-medium leading-[1.05] text-balance md:text-6xl">
        {title}
        {italic && (
          <>
            {' '}
            <em className="font-normal text-rose-deep">{italic}</em>
          </>
        )}
      </h2>
    </div>
  )
}
