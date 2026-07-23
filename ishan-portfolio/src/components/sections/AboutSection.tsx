import Image from 'next/image'
import { MapPin, Mail, Linkedin } from 'lucide-react'
import Section from '@/components/ui/Section'
import { PORTFOLIO } from '@/lib/data'

export default function AboutSection() {
  return (
    <Section id="about" label="background" title={<>About <span className="text-[#8b5cf6]">Me</span></>}>
      <div
        className="rounded-2xl p-7 grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-6 items-start"
        style={{ background: '#111113', border: '1px solid rgba(255,255,255,0.07)' }}
      >
        {/* Photo */}
        <div
          style={{
            width: 80, height: 80, borderRadius: '50%',
            overflow: 'hidden', border: '2px solid rgba(255,255,255,0.12)', flexShrink: 0,
          }}
        >
          <Image src={PORTFOLIO.photo} alt={PORTFOLIO.name} width={80} height={80} className="object-cover w-full h-full" />
        </div>

        <div>
          <p className="font-syne font-bold text-[1.1rem] mb-0.5">{PORTFOLIO.name}</p>
          <p className="text-[13px] text-[#8b5cf6] mb-3">
            {PORTFOLIO.education.degree} · {PORTFOLIO.education.institution.split('·')[0].trim()} · 2025
          </p>
          <p className="text-[14px] text-[#888] leading-[1.8] whitespace-pre-line">{PORTFOLIO.about}</p>

          <div className="flex flex-wrap gap-4 mt-4">
            <span className="flex items-center gap-1.5 text-[12px] text-[#888]">
              <MapPin size={13} className="text-[#6366f1]" /> {PORTFOLIO.location}
            </span>
            <a href={`mailto:${PORTFOLIO.email}`} className="flex items-center gap-1.5 text-[12px] text-[#888] hover:text-[#6366f1] transition-colors no-underline">
              <Mail size={13} className="text-[#6366f1]" /> {PORTFOLIO.email}
            </a>
            <a href={PORTFOLIO.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[12px] text-[#888] hover:text-[#6366f1] transition-colors no-underline">
              <Linkedin size={13} className="text-[#6366f1]" /> {PORTFOLIO.linkedinHandle}
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}
