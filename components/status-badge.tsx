export function StatusBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-gold bg-ivory px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-plum">
      <span className="sr-only">Status: </span>
      {children}
    </span>
  )
}
