'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { PORTFOLIO } from '@/lib/data'

const NAV_LINKS = [
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#journey' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollTo = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(10,10,11,0.92)' : 'rgba(10,10,11,0.6)',
        backdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-14">
        <Link href="/" className="font-syne font-bold text-[17px] tracking-tight text-[#f0f0f0] no-underline">
          ishan<span className="text-[#6366f1]">.</span>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex gap-7 list-none">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => scrollTo(l.href)}
                className="text-[#888] text-sm hover:text-[#f0f0f0] transition-colors bg-transparent border-none cursor-pointer font-dm"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => scrollTo('#contact')}
          className="hidden md:block bg-[#6366f1] hover:bg-[#5254cc] text-white text-[13px] px-4 py-2 rounded-lg transition-colors font-dm cursor-pointer border-none"
        >
          Let&apos;s connect
        </button>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#888] hover:text-white transition-colors bg-transparent border-none cursor-pointer p-1"
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <>
                <line x1="4" y1="4" x2="16" y2="16" />
                <line x1="16" y1="4" x2="4" y2="16" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="17" y2="6" />
                <line x1="3" y1="11" x2="17" y2="11" />
                <line x1="3" y1="16" x2="17" y2="16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t px-6 py-4 flex flex-col gap-3"
          style={{ borderColor: 'rgba(255,255,255,0.07)', background: 'rgba(10,10,11,0.97)' }}
        >
          {NAV_LINKS.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-left text-[#888] hover:text-[#f0f0f0] text-sm transition-colors bg-transparent border-none cursor-pointer font-dm py-1"
            >
              {l.label}
            </button>
          ))}
          <a
            href={PORTFOLIO.resume}
            download
            className="mt-1 bg-[#6366f1] text-white text-[13px] px-4 py-2 rounded-lg text-center no-underline"
          >
            Download Resume
          </a>
        </div>
      )}
    </nav>
  )
}
