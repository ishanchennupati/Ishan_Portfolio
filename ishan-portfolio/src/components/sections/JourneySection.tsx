import { Award } from 'lucide-react'
import Section from '@/components/ui/Section'
import { PORTFOLIO } from '@/lib/data'

export default function JourneySection() {
  return (
    <Section id="journey" label="journey" title={<>Experience & <span className="text-[#8b5cf6]">Education</span></>}>
      {/* Timeline */}
      <div className="flex flex-col gap-3 mb-8">
        {PORTFOLIO.experience.map((e) => (
          <div
            key={e.role}
            className="flex gap-4 items-start rounded-xl px-5 py-4"
            style={{ background: '#111113', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <span
              className="w-2 h-2 rounded-full mt-1.5 shrink-0"
              style={{ background: e.color }}
            />
            <div>
              <p className="font-syne font-semibold text-[0.95rem]">{e.role}</p>
              <p className="text-[13px] mb-0.5" style={{ color: e.color }}>{e.company}</p>
              <p className="text-[12px] text-[#888] mb-1.5">{e.period}</p>
              <p className="text-[13px] text-[#666] leading-relaxed">{e.detail}</p>
            </div>
          </div>
        ))}

        {/* Education */}
        <div
          className="flex gap-4 items-start rounded-xl px-5 py-4"
          style={{ background: '#111113', border: '1px solid rgba(255,255,255,0.07)' }}
        >
          <span className="w-2 h-2 rounded-full mt-1.5 shrink-0" style={{ background: '#34d399' }} />
          <div>
            <p className="font-syne font-semibold text-[0.95rem]">{PORTFOLIO.education.degree}</p>
            <p className="text-[13px] text-[#34d399] mb-0.5">{PORTFOLIO.education.institution}</p>
            <p className="text-[12px] text-[#888]">{PORTFOLIO.education.period}</p>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <p className="text-[11px] uppercase tracking-[2.5px] text-[#888] font-medium mb-3">
        certifications & achievements
      </p>
      <div className="flex flex-wrap gap-2">
        {PORTFOLIO.certifications.map((c) => (
          <span
            key={c}
            className="inline-flex items-center gap-1.5 text-[12px] px-3 py-1.5 rounded-lg"
            style={{
              background: 'rgba(251,191,36,0.07)',
              border: '1px solid rgba(251,191,36,0.22)',
              color: '#fbbf24',
            }}
          >
            <Award size={12} />
            {c}
          </span>
        ))}
      </div>
    </Section>
  )
}
