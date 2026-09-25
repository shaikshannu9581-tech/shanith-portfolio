import { RoseSprig } from '@/components/botanical'

export function SiteFooter() {
  return (
    <footer className="border-t border-gold/50 bg-blush/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 py-14 text-center">
        <RoseSprig className="w-20" />
        <p className="font-serif text-3xl font-medium">Shanith Shaik</p>
        <p className="text-[0.7rem] uppercase tracking-[0.25em] text-muted-foreground">
          Civil Engineering &amp; Construction Project Management
        </p>
        <p className="mt-4 text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Shanith Shaik. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
