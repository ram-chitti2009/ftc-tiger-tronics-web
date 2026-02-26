"use client"

import { Navbar } from "@/components/sections/navbar"
import { HeroSection } from "@/components/sections/hero-section"
import { ScrollProgress } from "@/components/sections/scroll-progress"
import { AboutSection } from "@/components/sections/about-section"
import { TimelineSection } from "@/components/sections/timeline"
import { RobotsSection } from "@/components/sections/robots-section"
import { TeamSection } from "@/components/sections/team-section"
import { VideosSection } from "@/components/sections/videos-section"
import { GallerySection } from "@/components/sections/gallery"
import { OutreachSection } from "@/components/sections/outreach"
import { AchievementsSection } from "@/components/sections/achievements"
import { SponsorsSection } from "@/components/sections/sponsors-section"
import { ContactSection } from "@/components/sections/contact-section"
import { FooterSection } from "@/components/sections/footer"

export default function Home() {
  return (
    <div className="relative">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:shadow-lg"
      >
        Skip to main content
      </a>
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <RobotsSection />
      <TeamSection />
      <VideosSection />
      <GallerySection />
      <OutreachSection />
      <AchievementsSection />
      <SponsorsSection />
      <ContactSection />
      <FooterSection />
    </div>
  )
}
