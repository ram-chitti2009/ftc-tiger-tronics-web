"use client"

import type { LucideIcon } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { Calendar, Rocket, Users, Building2, GraduationCap, MapPin, Trophy } from "lucide-react"

type TimelineEvent = {
  date: string
  title: string
  category: string
  icon: LucideIcon
}

const timelineEvents: TimelineEvent[] = [
  { date: "December 15, 2024", title: "Recruitment Announcement for HSI-Dallas Robotics Club", category: "milestone", icon: Rocket },
  { date: "May 11, 2025", title: "Sign Up for HSI-Dallas' 25-26 Clubs Starts", category: "milestone", icon: Calendar },
  { date: "August 29, 2025", title: "First Official Meeting of HSI-Dallas' Robotics Club", category: "milestone", icon: Users },
  { date: "September 6, 2025", title: "FTC Kickoff for 2025-2026 DECODE Season at Marcus High School", category: "competition", icon: Trophy },
  { date: "September 27, 2025", title: "Outreach with McKesson", category: "outreach", icon: Building2 },
  { date: "October 18, 2025", title: "Outreach with Noor Engineering", category: "outreach", icon: Building2 },
  { date: "October 25, 2025", title: "Outreach with Toyota", category: "outreach", icon: Building2 },
  { date: "November 8, 2025", title: "Outreach with Paramvaasam", category: "outreach", icon: Building2 },
  { date: "November 12, 2025", title: "Outreach and Field Trip to Texas Instruments (TI)", category: "outreach", icon: MapPin },
  { date: "November 14, 2025", title: "Outreach at HSI-Dallas' Fall Festival", category: "outreach", icon: Users },
  { date: "December 4, 2025", title: "Mentorship to HSI-Dallas' Middle School VEX Robotics Team", category: "mentorship", icon: GraduationCap },
  { date: "December 16, 2025", title: "Visit from Dallas City Council Member Cara Mendelsohn", category: "outreach", icon: Building2 },
  { date: "December 17, 2025", title: "Outreach at Perot Museum of Nature and Science", category: "outreach", icon: MapPin },
  { date: "January 3, 2026", title: "Meeting with Avirso", category: "outreach", icon: Building2 },
  { date: "January 16, 2026", title: "Visit to HSA-Carrollton's Robotics Teams (HuskyBot #25659 & Br@1nD3@d #32663)", category: "mentorship", icon: GraduationCap },
  { date: "January 17, 2026", title: "Meeting with Collins Aerospace, Accenture, and Broadridge", category: "outreach", icon: Building2 },
]

const ROW_HEIGHT = 108
const N = timelineEvents.length
const TOTAL_HEIGHT = N * ROW_HEIGHT
const CENTER = 100
const AMP = 48

function buildWavePath(): string {
  let d = `M ${CENTER} 0`
  for (let i = 0; i < N; i++) {
    const bulge = i % 2 === 0 ? 1 : -1
    const x = CENTER + AMP * bulge
    const y0 = i * ROW_HEIGHT
    const y1 = (i + 1) * ROW_HEIGHT
    d += ` C ${x} ${y0}, ${x} ${y1}, ${CENTER} ${y1}`
  }
  return d
}

function getNodeOffset(index: number): number {
  const bulge = index % 2 === 0 ? 1 : -1
  return bulge * (AMP * 0.75)
}

const wavePathD = buildWavePath()

export function TimelineSection() {
  const [visibleIndices, setVisibleIndices] = useState<Set<number>>(new Set())
  const [lineProgress, setLineProgress] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const section = entry.target
          const cards = section.querySelectorAll("[data-timeline-item]")
          cards.forEach((_, i) => {
            setTimeout(() => {
              setVisibleIndices((prev: Set<number>) => new Set([...prev, i]))
            }, 60 * i)
          })
        })
      },
      { threshold: 0.05, rootMargin: "0px 0px -80px 0px" }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const vh = window.innerHeight
      const top = rect.top
      const h = rect.height
      if (top < vh * 0.9 && top + h > 0) {
        const p = Math.min(1, Math.max(0, (vh * 0.45 - top) / (h * 0.85)))
        setLineProgress(p)
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <section
      id="timeline"
      ref={sectionRef}
      className="min-h-screen flex items-center py-32 px-6 md:px-8 lg:px-12 bg-background relative overflow-hidden"
    >
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/6 rounded-full blur-[200px] -z-0" />
      <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-primary/4 rounded-full blur-[180px] -z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_50%_0%,rgba(220,38,38,0.04),transparent_70%)] -z-0" />

      <div className="max-w-[1200px] mx-auto relative z-10 w-full">
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary font-mono text-xs font-semibold tracking-[0.2em] uppercase mb-5">
            Our Journey
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              25-26 Event Timeline
            </span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm lg:text-base">
            From club launch to DECODE season. See Engineering Notebook for full list.
          </p>
        </div>

        <div className="relative" style={{ minHeight: TOTAL_HEIGHT }}>
          {/* Swirly wave spine (SVG) - sits behind content, centered */}
          <div className="absolute inset-0 hidden lg:block pointer-events-none overflow-visible">
            <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2" style={{ width: 120 }}>
              <svg
                viewBox={`0 0 200 ${TOTAL_HEIGHT}`}
                preserveAspectRatio="none"
                className="w-full h-full"
                style={{ minHeight: TOTAL_HEIGHT }}
                aria-hidden
              >
                <defs>
                  <linearGradient id="timeline-wave-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="rgb(220 38 38)" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="rgb(185 28 28)" stopOpacity="0.5" />
                  </linearGradient>
                  <filter id="timeline-glow">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                {/* Full track (subtle) */}
                <path
                  d={wavePathD}
                  fill="none"
                  stroke="rgb(30 41 59 / 0.4)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Progress: wave draws on scroll */}
                <path
                  d={wavePathD}
                  fill="none"
                  stroke="url(#timeline-wave-gradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  pathLength={1}
                  strokeDasharray="1"
                  strokeDashoffset={1 - lineProgress}
                  style={{ transition: "stroke-dashoffset 0.4s ease-out" }}
                  filter="url(#timeline-glow)"
                />
                {/* Nodes on the wave */}
                {timelineEvents.map((_, i) => {
                  const x = CENTER + getNodeOffset(i)
                  const y = i * ROW_HEIGHT + ROW_HEIGHT / 2
                  const revealed = lineProgress >= (i + 0.5) / N
                  return (
                    <g key={i}>
                      <circle
                        cx={x}
                        cy={y}
                        r="6"
                        fill="rgb(8 12 16)"
                        stroke="rgb(220 38 38)"
                        strokeWidth="2"
                        opacity={revealed ? 1 : 0.3}
                        style={{ transition: "opacity 0.3s ease-out" }}
                      />
                      <circle cx={x} cy={y} r="3" fill="rgb(220 38 38)" opacity={revealed ? 1 : 0.4} style={{ transition: "opacity 0.3s ease-out" }} />
                    </g>
                  )
                })}
              </svg>
            </div>
          </div>

          {/* Rows: cards + connector to wave */}
          <div className="relative space-y-4 lg:space-y-0">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon
              const isVisible = visibleIndices.has(index)
              const isLeft = index % 2 === 0
              const nodeOffsetPx = getNodeOffset(index)

              return (
                <div
                  key={index}
                  data-timeline-item
                  className="relative flex items-center min-h-[90px] lg:min-h-[108px] lg:py-0"
                  style={{ minHeight: ROW_HEIGHT }}
                >
                  {/* Card side */}
                  <div
                    className={`flex-1 flex w-full lg:w-auto ${isLeft ? "lg:justify-end lg:pr-0" : "lg:justify-start lg:pl-0"} lg:max-w-[calc(50%-48px)]`}
                  >
                    <div
                      className={`w-full max-w-md mx-auto lg:mx-0 transition-all duration-500 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
                      style={{ transitionDelay: `${index * 35}ms` }}
                    >
                      <div
                        className={`group relative rounded-2xl border border-border/50 bg-card/70 backdrop-blur-md p-5 shadow-lg shadow-black/5 transition-all duration-300 hover:border-primary/40 hover:bg-card/80 hover:shadow-xl hover:shadow-primary/10 ${
                          isLeft ? "lg:mr-0" : "lg:ml-0"
                        }`}
                      >
                        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 to-primary/20 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="flex gap-4 items-start">
                          <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/15 transition-colors">
                            <Icon className="w-5 h-5" strokeWidth={1.75} />
                          </div>
                          <div className="min-w-0 flex-1 pt-0.5">
                            <p className="text-[11px] font-mono font-semibold text-primary/90 tracking-wider mb-1">
                              {event.date}
                            </p>
                            <h3 className="text-sm lg:text-base font-bold text-foreground leading-snug">
                              {event.title}
                            </h3>
                            <span className="inline-block mt-1.5 text-[10px] font-medium text-muted-foreground uppercase tracking-wider">
                              {event.category}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Connector from card to wave (line only; node is in SVG) */}
                  <div
                    className="absolute left-1/2 top-1/2 hidden lg:block z-10 pointer-events-none"
                    style={{ transform: `translate(calc(-50% + ${nodeOffsetPx}px), -50%)` }}
                  >
                    <div
                      className={`absolute top-1/2 -translate-y-1/2 h-px w-7 ${
                        isLeft ? "right-full mr-0.5 bg-gradient-to-l from-primary/60 to-transparent" : "left-full ml-0.5 bg-gradient-to-r from-primary/60 to-transparent"
                      }`}
                      aria-hidden
                    />
                  </div>

                  <div className={`flex-1 hidden lg:block ${!isLeft ? "order-first" : ""}`} />
                </div>
              )
            })}
          </div>
        </div>

        <p className="mt-12 text-center text-xs text-muted-foreground/60">
          Not all events shown. See Engineering Notebook for full list.
        </p>
      </div>
    </section>
  )
}
