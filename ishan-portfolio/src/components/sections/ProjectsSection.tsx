'use client'
import { Github, ExternalLink, FileText } from 'lucide-react'
import Section from '@/components/ui/Section'
import { PORTFOLIO } from '@/lib/data'

export default function ProjectsSection() {
  return (
    <Section id="projects" label="work" title={<>Featured <span className="text-[#8b5cf6]">Projects</span></>}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {PORTFOLIO.projects.map((p) => (
          <div
            key={p.id}
            className="group relative rounded-2xl p-6 transition-all duration-300 cursor-default"
            style={{ background: '#111113', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            {/* Top accent line */}
            <div
              className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'linear-gradient(90deg, #6366f1, #8b5cf6)' }}
            />

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-[11px] px-2 py-0.5 rounded"
                  style={{
                    background: 'rgba(99,102,241,0.1)',
                    border: '1px solid rgba(99,102,241,0.25)',
                    color: '#a78bfa',
                  }}
                >
                  {t}
                </span>
              ))}
              {p.badge && (
                <span
                  className="text-[11px] px-2 py-0.5 rounded"
                  style={
                    p.badgeColor === 'gold'
                      ? { background: 'rgba(251,191,36,0.08)', border: '1px solid rgba(251,191,36,0.25)', color: '#fbbf24' }
                      : { background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.25)', color: '#a78bfa' }
                  }
                >
                  {p.badge}
                </span>
              )}
            </div>

            <h3 className="font-syne font-semibold text-[1rem] mb-1.5">{p.title}</h3>
            <p className="text-[13px] text-[#888] leading-relaxed mb-5">{p.description}</p>

            {/* Links */}
            <div className="flex flex-wrap gap-2">
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[12px] text-[#888] hover:text-[#6366f1] px-3 py-1.5 rounded-lg transition-colors no-underline"
                  style={{ border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <Github size={13} /> GitHub
                </a>
              )}
              {p.demo && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[12px] text-[#888] hover:text-[#6366f1] px-3 py-1.5 rounded-lg transition-colors no-underline"
                  style={{ border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <ExternalLink size={13} /> Demo
                </a>
              )}
              {'paper' in p && p.paper && (
                <a
                  href={p.paper}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[12px] px-3 py-1.5 rounded-lg transition-colors no-underline hover:opacity-80"
                  style={{ color: '#fbbf24', border: '1px solid rgba(251,191,36,0.3)' }}
                >
                  <FileText size={13} /> Paper
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
