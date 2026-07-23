'use client'
import { Mail, Linkedin, Phone, MapPin } from 'lucide-react'
import Section from '@/components/ui/Section'
import { PORTFOLIO } from '@/lib/data'

const contacts = [
  { icon: Mail,     label: 'Email',    value: PORTFOLIO.email,          href: `mailto:${PORTFOLIO.email}` },
  { icon: Linkedin, label: 'LinkedIn', value: PORTFOLIO.linkedinHandle, href: PORTFOLIO.linkedin },
  { icon: Phone,    label: 'Phone',    value: PORTFOLIO.phone,          href: null },
  { icon: MapPin,   label: 'Location', value: PORTFOLIO.location,       href: null },
]

export default function ContactSection() {
  return (
    <Section id="contact" label="get in touch" title={<>Let&apos;s <span className="text-[#8b5cf6]">Connect</span></>}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {contacts.map(({ icon: Icon, label, value, href }) => {
          const inner = (
            <>
              <div
                className="w-10 h-10 rounded-[9px] flex items-center justify-center shrink-0 text-[#6366f1]"
                style={{ background: '#18181c' }}
              >
                <Icon size={18} />
              </div>
              <div>
                <p className="text-[11px] text-[#888] mb-0.5">{label}</p>
                <p className="text-[13px] font-medium">{value}</p>
              </div>
            </>
          )

          if (href) {
            return (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 rounded-xl p-4 no-underline text-inherit transition-all hover:-translate-y-0.5 hover:border-[#6366f1]"
                style={{ background: '#111113', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                {inner}
              </a>
            )
          }

          return (
            <div
              key={label}
              className="flex items-center gap-3.5 rounded-xl p-4"
              style={{ background: '#111113', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              {inner}
            </div>
          )
        })}
      </div>
    </Section>
  )
}
