"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-card/50 border border-primary/20 rounded-full backdrop-blur-xl">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary font-medium text-sm tracking-wider uppercase">FTC Team #32561</span>
          </div>

          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tight leading-none">
            Tiger<span className="gradient-text">Tronics</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Engineering excellence through robotics innovation and competitive spirit
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 h-12 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
              asChild
            >
              <a href="#team">Meet the Team</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-border hover:bg-card hover:border-primary/50 font-semibold px-8 h-12 rounded-lg transition-all duration-300 hover:scale-105 bg-transparent"
              asChild
            >
              <a href="#robots">View Robots</a>
            </Button>
          </div>
        </div>

        <a
          href="#about"
          className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          aria-label="Scroll to about section"
        >
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  )
}
