import Section from '@/components/ui/Section'
import { PORTFOLIO } from '@/lib/data'

export default function SkillsSection() {
  return (
    <Section id="skills" label="capabilities" title={<>Skills & <span className="text-[#8b5cf6]">Stack</span></>}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {PORTFOLIO.skills.map((group) => (
          <div
            key={group.category}
            className="rounded-xl p-5"
            style={{ background: '#111113', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <p className="text-[11px] uppercase tracking-[1.5px] text-[#8b5cf6] font-medium mb-3">
              {group.category}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-[12px] text-[#888] px-2.5 py-1 rounded-md"
                  style={{ background: '#18181c', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
