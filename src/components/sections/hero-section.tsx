"use client"

import { useState, useEffect } from "react"
import { Trophy, Zap } from "lucide-react"
import { scrollToSection } from "@/lib/scroll"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-primary/3 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-accent/3 rounded-full blur-[200px]" />
      </div>

      <div className="relative z-10 section-inner py-24 sm:py-32 lg:py-40 text-center">
        <div className={`transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <div className="section-badge inline-flex items-center gap-2 mb-10 px-5 py-2.5 bg-card/30 backdrop-blur-md border border-primary/20 rounded-full">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary font-semibold text-xs tracking-widest uppercase">FTC Team #32561 • Dallas, TX</span>
          </div>

          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tight leading-[0.9]">
            <span className="text-foreground">Tiger</span>
            <span className="gradient-text">Tronics</span>
          </h1>

          <p
            className="text-lg md:text-xl lg:text-2xl text-foreground/90 font-medium mb-4 max-w-3xl mx-auto leading-relaxed transition-all duration-700 ease-out"
            style={{
              transitionDelay: isVisible ? "120ms" : "0ms",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(8px)",
            }}
          >
            Geared For Success. Driven By Instinct.
          </p>

          <div
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-12 transition-all duration-700 ease-out"
            style={{
              transitionDelay: isVisible ? "200ms" : "0ms",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(8px)",
            }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border border-primary/30 text-primary font-bold text-sm">
              <Trophy className="w-4 h-4" aria-hidden />
              5th in the World
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border border-primary/30 text-primary font-bold text-sm">
              <Zap className="w-4 h-4" aria-hidden />
              #1 Autonomous
            </span>
          </div>

          <p
            className="text-base md:text-lg text-muted-foreground mb-14 max-w-2xl mx-auto leading-relaxed transition-all duration-700 ease-out"
            style={{
              transitionDelay: isVisible ? "260ms" : "0ms",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(8px)",
            }}
          >
            Award-winning robotics. Pro-level autonomy, vision, and engineering, from Dallas to the world. We compete hard and give back to our community.
          </p>

          <div
            className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center transition-all duration-700 ease-out"
            style={{
              transitionDelay: isVisible ? "360ms" : "0ms",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(12px)",
            }}
          >
            <a
              href="#achievements"
              onClick={(e) => { e.preventDefault(); scrollToSection("achievements") }}
              className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 h-12 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 cursor-pointer"
              aria-label="See our competition results and achievements"
            >
              <Trophy className="w-5 h-5 mr-2" aria-hidden />
              See Our Results
            </a>
            <a
              href="#robots"
              onClick={(e) => { e.preventDefault(); scrollToSection("robots") }}
              className="inline-flex items-center justify-center bg-primary/10 hover:bg-primary/20 border border-primary/30 text-primary font-semibold px-8 h-12 rounded-xl transition-all duration-300 hover:scale-105 cursor-pointer"
              aria-label="View our competition robots"
            >
              Our Robots
            </a>
            <a
              href="#team"
              onClick={(e) => { e.preventDefault(); scrollToSection("team") }}
              className="inline-flex items-center justify-center border border-border/50 hover:bg-card/50 hover:border-primary/30 font-semibold px-8 h-12 rounded-xl transition-all duration-300 hover:scale-105 bg-transparent backdrop-blur-sm cursor-pointer"
              aria-label="Meet the team"
            >
              Meet the Team
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollToSection("contact") }}
              className="inline-flex items-center justify-center border border-primary/30 hover:bg-primary/10 font-semibold px-8 h-12 rounded-xl transition-all duration-300 hover:scale-105 bg-transparent backdrop-blur-sm cursor-pointer"
              aria-label="Contact us or join our team"
            >
              Get in Touch
            </a>
          </div>
        </div>

        <a
          href="#about"
          onClick={(e) => { e.preventDefault(); scrollToSection("about") }}
          className={`absolute bottom-12 sm:bottom-16 left-1/2 -translate-x-1/2 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"} group cursor-pointer`}
          aria-label="Scroll to about section"
        >
          <div className="w-6 h-10 border border-primary/30 rounded-full flex items-start justify-center p-2 group-hover:border-primary/60 group-hover:bg-primary/5 transition-all duration-300">
            <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  )
}
