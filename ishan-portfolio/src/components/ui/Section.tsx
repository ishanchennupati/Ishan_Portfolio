import { cn } from '@/lib/utils'

interface SectionProps {
  id?: string
  label: string
  title: React.ReactNode
  children: React.ReactNode
  className?: string
}

export default function Section({ id, label, title, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn('py-16 border-t', className)}
      style={{ borderColor: 'rgba(255,255,255,0.07)' }}
    >
      <p className="text-[11px] font-medium tracking-[2.5px] uppercase text-[#888] mb-1">{label}</p>
      <h2 className="font-syne text-3xl md:text-4xl font-bold tracking-tight mb-7">{title}</h2>
      {children}
    </section>
  )
}
