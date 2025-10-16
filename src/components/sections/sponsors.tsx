"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen flex items-center py-32 px-6 bg-background relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="mb-6">
            <span className="text-primary font-mono text-sm font-bold tracking-widest uppercase">About Us</span>
          </div>

          <h2 className="text-6xl md:text-8xl font-black mb-12 text-balance tracking-tight">Who We Are</h2>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <p className="text-xl text-muted-foreground leading-relaxed">
                Tiger Tronics is a competitive robotics team participating in the FIRST Tech Challenge. We're a group of
                passionate students dedicated to designing, building, and programming robots that compete at the highest
                level.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Our mission is to inspire innovation, foster teamwork, and develop the next generation of engineers and
                problem solvers through hands-on robotics competition.
              </p>
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors">
                  <div className="text-5xl font-black text-primary mb-3">5+</div>
                  <div className="text-sm text-muted-foreground font-medium">Years Active</div>
                </div>
                <div className="text-center p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors">
                  <div className="text-5xl font-black text-primary mb-3">20+</div>
                  <div className="text-sm text-muted-foreground font-medium">Team Members</div>
                </div>
                <div className="text-center p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors">
                  <div className="text-5xl font-black text-primary mb-3">15+</div>
                  <div className="text-sm text-muted-foreground font-medium">Awards Won</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-card border-2 border-primary/20 rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
                <Image
                  src="/robotics-team-working-on-robot.jpg"
                  alt="Tiger Tronics team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-primary/20 rounded-2xl -z-10 blur-xl" />
              <div className="absolute -top-8 -left-8 w-40 h-40 bg-primary/10 rounded-2xl -z-10 blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
