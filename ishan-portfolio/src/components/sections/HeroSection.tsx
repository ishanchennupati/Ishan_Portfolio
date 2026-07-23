'use client'
import Image from 'next/image'
import { Download, LayoutGrid } from 'lucide-react'
import { PORTFOLIO } from '@/lib/data'

export default function HeroSection() {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-20 md:py-28 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
      {/* LEFT */}
      <div>
        {/* Status badge */}
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-[#888] mb-6"
          style={{ background: '#18181c', border: '1px solid rgba(255,255,255,0.12)' }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full bg-green-400 pulse-dot"
            style={{ boxShadow: '0 0 6px #22c55e' }}
          />
          {PORTFOLIO.status}
        </div>

        {/* Name */}
        <h1 className="font-syne text-[clamp(2.8rem,8vw,4.8rem)] font-extrabold leading-[1.04] tracking-[-2.5px] mb-2">
          {PORTFOLIO.firstName}
          <br />
          <span
            style={{
              background: 'linear-gradient(135deg, #6366f1, #a78bfa, #60a5fa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Chennupati
          </span>
        </h1>

        <p className="text-lg text-[#888] font-light mb-5">
          <strong className="text-[#c4b5fd] font-medium">{PORTFOLIO.title}</strong>
        </p>

        <p className="text-[0.95rem] text-[#555] max-w-[440px] leading-relaxed mb-8">
          {PORTFOLIO.subtitle}
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 mb-8">
          <button
            onClick={scrollToProjects}
            className="inline-flex items-center gap-2 bg-[#6366f1] hover:bg-[#5254cc] text-white text-sm px-6 py-2.5 rounded-[9px] transition-all hover:-translate-y-0.5 border-none cursor-pointer font-dm"
          >
            <LayoutGrid size={16} />
            View Projects
          </button>
          <a
            href={PORTFOLIO.resume}
            download
            className="inline-flex items-center gap-2 text-[#f0f0f0] text-sm px-6 py-2.5 rounded-[9px] transition-all no-underline hover:text-[#6366f1] hover:border-[#6366f1]"
            style={{ border: '1px solid rgba(255,255,255,0.12)' }}
          >
            <Download size={16} />
            Resume
          </a>
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {PORTFOLIO.techTags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-[#888] px-3 py-1 rounded-md cursor-default transition-colors hover:text-[#6366f1]"
              style={{ background: '#18181c', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* RIGHT — Photo */}
      <div
        className="order-first md:order-last justify-self-end md:justify-self-auto"
        style={{
          width: 148, height: 148, borderRadius: '50%',
          overflow: 'hidden',
          border: '2px solid rgba(255,255,255,0.12)',
          boxShadow: '0 0 50px rgba(99,102,241,0.2)',
          flexShrink: 0,
        }}
      >
        <Image
          src={PORTFOLIO.photo}
          alt={PORTFOLIO.name}
          width={148}
          height={148}
          className="object-cover w-full h-full"
          priority
        />
      </div>
    </section>
  )
}
