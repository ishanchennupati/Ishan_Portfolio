'use client'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import SkillsSection from '@/components/sections/SkillsSection'
import AboutSection from '@/components/sections/AboutSection'
import JourneySection from '@/components/sections/JourneySection'
import ContactSection from '@/components/sections/ContactSection'
import AiChat from '@/components/sections/AiChat'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-6">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
        <JourneySection />
        <ContactSection />
      </main>
      <Footer />
      <AiChat />
    </>
  )
}
