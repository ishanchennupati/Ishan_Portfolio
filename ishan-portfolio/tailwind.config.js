/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        syne: ['var(--font-syne)', 'sans-serif'],
        dm: ['var(--font-dm-sans)', 'sans-serif'],
      },
      colors: {
        bg: '#0a0a0b',
        bg2: '#111113',
        bg3: '#18181c',
        accent: '#6366f1',
        accent2: '#8b5cf6',
        muted: '#888888',
      },
      animation: {
        pulse2: 'pulse2 2s infinite',
        ring: 'ring 2.2s infinite',
        dot1: 'dot 1.2s infinite',
        dot2: 'dot 1.2s 0.2s infinite',
        dot3: 'dot 1.2s 0.4s infinite',
      },
      keyframes: {
        pulse2: { '0%,100%': { opacity: '1' }, '50%': { opacity: '0.4' } },
        ring: { '0%': { transform: 'scale(1)', opacity: '0.6' }, '100%': { transform: 'scale(1.55)', opacity: '0' } },
        dot: { '0%,80%,100%': { opacity: '0.3' }, '40%': { opacity: '1' } },
      },
    },
  },
  plugins: [],
}
