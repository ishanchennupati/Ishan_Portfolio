# Ishan Chennupati — Developer Portfolio

Modern AI-powered developer portfolio built with Next.js 15, TypeScript, and Tailwind CSS.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (available, add animations as needed)
- **Lucide React** icons

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### 3. Build for production
```bash
npm run build
npm start
```

## Customization

All portfolio content lives in **one file**:
```
src/lib/data.ts
```

Edit projects, skills, experience, certifications, and contact info there — the whole site updates automatically.

### Add GitHub / Demo links
In `src/lib/data.ts`, replace `'#'` in project entries with your actual GitHub URLs and live demo links.

### Connect a real AI API
In `src/components/sections/AiChat.tsx`, replace the `getBotReply()` function with a fetch call to your backend:

```typescript
const res = await fetch('/api/chat', {
  method: 'POST',
  body: JSON.stringify({ message: q }),
  headers: { 'Content-Type': 'application/json' },
})
const data = await res.json()
return data.reply
```

Then create `src/app/api/chat/route.ts` with your Gemini / OpenAI API call.

## Deployment

### Vercel (recommended)
1. Push to GitHub
2. Import project at vercel.com
3. Deploy — zero config needed

### Environment Variables (when you add AI)
Create `.env.local`:
```
GEMINI_API_KEY=your_key_here
# or
OPENAI_API_KEY=your_key_here
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Fonts, metadata, root layout
│   └── page.tsx          # Main page — assembles all sections
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx    # Sticky nav with mobile menu
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── JourneySection.tsx
│   │   ├── ContactSection.tsx
│   │   └── AiChat.tsx    # Floating AI assistant
│   └── ui/
│       └── Section.tsx   # Reusable section wrapper
├── lib/
│   ├── data.ts           # ← ALL content lives here
│   └── utils.ts          # cn() utility
└── styles/
    └── globals.css
public/
├── passport_photo.jpeg
└── ishan_resume_tcs_updated.pdf
```
