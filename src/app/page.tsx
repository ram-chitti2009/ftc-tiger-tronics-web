"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button, Input, Textarea } from "@/components/ui"
import { FooterSection } from "@/components/sections/footer"
import { AchievementsSection } from "@/components/sections/achievements"
import { GallerySection } from "@/components/sections/gallery"
import { TimelineSection } from "@/components/sections/timeline"
import { OutreachSection } from "@/components/sections/outreach"
import { X, Menu, Mail, MapPin, Bot, DollarSign } from "lucide-react"

// Smooth scroll helper function (accessible to all components)
const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    const navbarHeight = 80 // Height of navbar
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - navbarHeight

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

// Navbar Component
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Smooth scroll function with navbar offset
  const handleScrollToSection = (id: string) => {
    scrollToSection(id)
    setIsMobileMenuOpen(false)
  }

  // All navigation links
  const navLinks = [
    { href: "#about", label: "About", id: "about" },
    { href: "#timeline", label: "Timeline", id: "timeline" },
    { href: "#robots", label: "Robots", id: "robots" },
    { href: "#team", label: "Team", id: "team" },
    { href: "#gallery", label: "Gallery", id: "gallery" },
    { href: "#outreach", label: "Outreach", id: "outreach" },
    { href: "#achievements", label: "Achievements", id: "achievements" },
    { href: "#sponsors", label: "Sponsors", id: "sponsors" },
    { href: "#contact", label: "Contact", id: "contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/30 shadow-lg shadow-primary/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              handleScrollToSection('home')
            }}
            className="flex items-center gap-2 sm:gap-3 hover:scale-105 transition-transform cursor-pointer"
          >
            <div className="relative w-8 h-8 sm:w-10 sm:h-10">
              <Image
                src="/images/logo.png"
                alt="Tiger Tronics Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight">
              <span className="text-foreground">Tiger</span>
              <span className="text-primary">Tronics</span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleScrollToSection(link.id)
                }}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 relative group px-1 cursor-pointer whitespace-nowrap"
                aria-label={`Navigate to ${link.label} section`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/50 bg-background/95 backdrop-blur-xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleScrollToSection(link.id)
                  }}
                  className="text-base font-medium text-muted-foreground hover:text-foreground hover:text-primary transition-all duration-200 text-left py-2.5 px-4 rounded-lg hover:bg-primary/5 cursor-pointer"
                  aria-label={`Navigate to ${link.label} section`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

// Hero Section Component
function HeroSection() {
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

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 py-40 text-center">
        <div
          className={`transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="inline-flex items-center gap-2 mb-10 px-5 py-2.5 bg-card/30 backdrop-blur-md border border-primary/20 rounded-full">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary font-semibold text-xs tracking-widest uppercase">FTC Team #32561</span>
          </div>

          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tight leading-[0.9]">
            <span className="text-foreground">Tiger</span><span className="gradient-text">Tronics</span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed font-light">
            Geared For Success, Driven By Instinct.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#team"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('team')
              }}
              className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 h-12 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 cursor-pointer"
              aria-label="Navigate to team section"
            >
              Meet the Team
            </a>
            <a
              href="#robots"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('robots')
              }}
              className="inline-flex items-center justify-center border border-border/50 hover:bg-card/50 hover:border-primary/30 font-semibold px-8 h-12 rounded-xl transition-all duration-300 hover:scale-105 bg-transparent backdrop-blur-sm cursor-pointer"
              aria-label="Navigate to robots section"
            >
              View Our Robots
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('contact')
              }}
              className="inline-flex items-center justify-center border border-primary/30 hover:bg-primary/10 font-semibold px-8 h-12 rounded-xl transition-all duration-300 hover:scale-105 bg-transparent backdrop-blur-sm cursor-pointer"
              aria-label="Navigate to contact section to join our team"
            >
              Join Our Team
            </a>
          </div>
        </div>

        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection('about')
          }}
          className={`absolute bottom-16 left-1/2 -translate-x-1/2 transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          } group cursor-pointer`}
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

// Scroll Progress Component
function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', updateScrollProgress)
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return (
    <div 
      className="scroll-progress"
      style={{ transform: `scaleX(${scrollProgress / 100})` }}
    />
  )
}

// Particle Effects Component
function ParticleEffects() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([])

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        delay: Math.random() * 8
      }))
      setParticles(newParticles)
    }

    generateParticles()
  }, [])

  return (
    <div className="particles">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`
          }}
        />
      ))}
    </div>
  )
}

// About Section Component
function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-40 px-6 md:px-8 lg:px-12 bg-background relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/3 rounded-full blur-[200px] -z-0" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/3 rounded-full blur-[200px] -z-0" />

      <div className="max-w-[1400px] mx-auto relative z-10 w-full">
        <div>
          <div className="mb-8">
            <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary font-mono text-xs font-semibold tracking-widest uppercase">
              About Us
            </span>
          </div>

          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-16 text-balance tracking-tight leading-[0.9]">
            <span className="bg-gradient-to-r from-foreground via-foreground/90 to-primary bg-clip-text text-transparent">
              Who We Are
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
                  Tiger Tronics is an FTC team building competition robots with pro-level autonomy, Limelight AI vision, and
                  precision engineering. We design, build, and program robots that compete at the highest level.
                </p>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
                  Our mission: inspire innovation, foster teamwork, and develop the next generation of engineers and
                  problem solvers through hands-on robotics.
                </p>
              </div>
              <div className="flex gap-6 pt-4 justify-center flex-wrap">
                <div className="group relative text-center p-8 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-primary/30 hover:bg-card/70 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 min-w-[200px] flex-1 max-w-[280px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="text-6xl font-black text-primary mb-4 bg-gradient-to-br from-primary via-primary to-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500">1</div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold group-hover:text-foreground transition-colors">Year Active</div>
                  </div>
                </div>
                <div className="group relative text-center p-8 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-primary/30 hover:bg-card/70 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 min-w-[200px] flex-1 max-w-[280px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="text-6xl font-black text-primary mb-4 bg-gradient-to-br from-primary via-primary to-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500">12</div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold group-hover:text-foreground transition-colors">Team Members</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-square bg-gradient-to-br from-card via-card/80 to-card border border-border/50 rounded-3xl overflow-hidden shadow-2xl shadow-primary/5 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
                <Image
                  src="/images/work-in-progress/image-1.jpg"
                  alt="Team working on robotics project"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10 blur-2xl" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/10 rounded-2xl -z-10 blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Robots Section Component
function RobotsSection() {
  const robots = [
    {
      name: "Mufasa",
      year: "2025",
      description: "DECODE season competition robot. PedroPathing with deadwheel localization, Limelight AI vision pipeline for AprilTag alignment and scoring, and mecanum drive for full omnidirectional control.",
      image: "/images/robot-images/V1/image-1.jpg",
      images: ["/images/robot-images/V1/image-1.jpg", "/images/robot-images/V1/image-2.jpg", "/images/robot-images/V1/image-3.jpg", "/images/robot-images/V1/image-4.jpg", "/images/robot-images/V1/image-5.jpg"],
      features: ["PedroPathing & Deadwheel Localization", "Limelight AI Vision Pipeline", "AprilTag Alignment & Scoring", "Mecanum Omnidirectional Drive"]
    },
    {
      name: "Simba",
      year: "WIP",
      description: "Next-gen build in progress. Upgraded slide torque, beveled drivetrain, and refined claw for higher reliability and scoring.",
      image: "/images/robot-images/V2/v2%20cad.png",
      video: "/images/robot-images/V2/v2-wip.mp4",
      features: ["Iterative Design", "QA-Focused Build", "Next Season Ready"]
    },
  ]

  return (
    <section
      id="robots"
      className="min-h-screen flex items-center py-40 px-6 md:px-8 lg:px-12 bg-background relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-accent/3 rounded-full blur-[200px] -z-0" />

      <div className="max-w-[1400px] mx-auto relative z-10 w-full">
        <div>
          <div className="mb-8">
            <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary font-mono text-xs font-semibold tracking-widest uppercase">
              Our Robots
            </span>
          </div>

          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-20 text-balance tracking-tight leading-[0.9]">
            <span className="bg-gradient-to-r from-foreground via-foreground/90 to-primary bg-clip-text text-transparent">
              Robot Arsenal
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mb-12">
            Competition-ready robots built with pro-level autonomy, vision, and drive systems.
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            {robots.map((robot, index) => (
              <div
                key={index}
                className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl overflow-hidden hover:border-primary/30 hover:bg-card/70 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative aspect-video overflow-hidden bg-card">
                  {"video" in robot && robot.video ? (
                    <video
                      src={robot.video}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      muted
                      loop
                      playsInline
                      autoPlay
                      aria-label={robot.name}
                    />
                  ) : (
                    <Image
                      src={robot.image}
                      alt={robot.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                  <div className="absolute top-5 right-5 bg-primary/90 backdrop-blur-sm text-primary-foreground px-4 py-1.5 rounded-full text-xs font-bold tracking-wide shadow-lg">
                    {robot.year}
                  </div>
                </div>
                
                <div className="relative p-8">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{robot.name}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm">{robot.description}</p>
                  
                  <div className="space-y-3">
                    {robot.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span className="text-sm text-muted-foreground font-light">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Team Section Component
function TeamSection() {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({})

  const teamMembers = [
    { name: "Gafoor", role: "Team Captain", specialization: "CAD, Build & Strategy", image: "/images/team/cad-lead.png" },
    { name: "Wadood", role: "Co-Captain", specialization: "Programming & Autonomous", image: "/images/team/prog-lead.png" },
    { name: "Jayden", role: "Technical Lead", specialization: "Build & Strategy", image: "/images/team/build-lead.png" },
    { name: "Christopher", role: "Marketing & Outreach Lead", specialization: "Outreach & Community", image: "/images/team/marketing-outreach-lead.png" },
    { name: "Jay Jay", role: "Award Coordinator", specialization: "Design & Engineering", image: "/images/team/outreach-awards-lead.png" },
  ]

  return (
    <section
      id="team"
      className="min-h-screen flex items-center py-40 px-6 md:px-8 lg:px-12 bg-background relative overflow-hidden"
    >
      <div className="absolute bottom-0 left-1/4 w-[800px] h-[800px] bg-primary/3 rounded-full blur-[200px] -z-0" />

      <div className="max-w-[1400px] mx-auto relative z-10 w-full">
        <div>
          <div className="mb-8">
            <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary font-mono text-xs font-semibold tracking-widest uppercase">
              Meet the Team
            </span>
          </div>

          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-20 text-balance tracking-tight leading-[0.9]">
            <span className="bg-gradient-to-r from-foreground via-foreground/90 to-primary bg-clip-text text-transparent">
              Leadership
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 hover:border-primary/30 hover:bg-card/70 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                <div className="relative w-28 h-28 mx-auto mb-6 rounded-2xl overflow-hidden border border-primary/20 shadow-lg">
                  {imageErrors[index] ? (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary font-bold text-xl">
                      {member.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)}
                    </div>
                  ) : (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={() => setImageErrors(prev => ({ ...prev, [index]: true }))}
                    />
                  )}
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2 text-foreground">{member.name}</h3>
                  <p className="text-primary font-semibold mb-2 text-sm">{member.role}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">{member.specialization}</p>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Sponsors Section Component
function SponsorsSection() {
  const [logoErrors, setLogoErrors] = useState<Record<number, boolean>>({})

  const sponsors = [
    {
      name: "Texas Instruments",
      tier: "Platinum Sponsor",
      logo: "/images/sponsors/TI-logo.jpg",
      description: "Empowering the next generation of engineers and innovators through STEM education",
    },
    {
      name: "McKesson",
      tier: "Platinum Sponsor",
      logo: "/images/sponsors/mckesson.jpg",
      description: "Technical mentorship, digital development, and AI-powered outreach tools for our team.",
    },
  ]

  return (
    <section
      id="sponsors"
      className="min-h-screen flex items-center py-40 px-6 md:px-8 lg:px-12 bg-background relative overflow-hidden"
    >
      <div className="absolute top-0 right-1/3 w-[800px] h-[800px] bg-accent/3 rounded-full blur-[200px] -z-0" />

      <div className="max-w-[1400px] mx-auto relative z-10 w-full">
        <div>
          <div className="mb-8">
            <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary font-mono text-xs font-semibold tracking-widest uppercase">
              Our Partners
            </span>
          </div>

          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-20 text-balance tracking-tight leading-[0.9]">
            <span className="bg-gradient-to-r from-foreground via-foreground/90 to-primary bg-clip-text text-transparent">
              Sponsors
            </span>
          </h2>

          <div className="text-center mb-16">
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're grateful for the support of our sponsors who make our robotics journey possible. 
              Their investment in STEM education helps us build the future.
            </p>
          </div>

          {sponsors.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {sponsors.map((sponsor, index) => (
                <div
                  key={index}
                  className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-10 hover:border-primary/30 hover:bg-card/70 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative h-28 min-h-[112px] mb-6 flex items-center justify-center px-4">
                    {logoErrors[index] ? (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary mb-1">{sponsor.name.slice(0, 2).toUpperCase()}</div>
                          <p className="text-xs text-muted-foreground">{sponsor.name}</p>
                        </div>
                      </div>
                    ) : (
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        width={180}
                        height={112}
                        className="object-contain w-auto h-auto max-h-full max-w-full filter grayscale group-hover:grayscale-0 transition-all duration-300"
                        onError={() => setLogoErrors(prev => ({ ...prev, [index]: true }))}
                      />
                    )}
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-lg font-bold mb-2 text-foreground">{sponsor.name}</h3>
                    <p className="text-primary font-semibold mb-3 text-sm">{sponsor.tier}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{sponsor.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 border-2 border-primary/20 mb-6">
                <DollarSign className="w-12 h-12 text-primary/50" />
              </div>
              <p className="text-xl text-muted-foreground mb-4">We're actively seeking sponsors!</p>
              <p className="text-muted-foreground">Your support helps us build the future of robotics.</p>
            </div>
          )}

          <div className="mt-16 text-center">
            <div className="bg-card border-2 border-border rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Interested in Sponsoring?</h3>
              <p className="text-muted-foreground mb-6">
                Join our mission to inspire the next generation of engineers and innovators. 
                Contact us to learn about sponsorship opportunities.
              </p>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('contact')
                }}
                className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 h-11 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/20 cursor-pointer"
              >
                Become a Sponsor
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Contact Section Component
function ContactSection() {

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "hsitigertronics@gmail.com",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Harmony School of Innovation - Dallas, Texas",
    },
  ]

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center py-40 px-6 md:px-8 lg:px-12 bg-background relative overflow-hidden"
    >
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-primary/3 rounded-full blur-[200px] -z-0" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div>
          <div className="mb-8">
            <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary font-mono text-xs font-semibold tracking-widest uppercase">
              Get in Touch
            </span>
          </div>

          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-20 text-balance tracking-tight leading-[0.9]">
            <span className="bg-gradient-to-r from-foreground via-foreground/90 to-primary bg-clip-text text-transparent">
              Contact Us
            </span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed font-light">
                Have questions about our team, want to sponsor us, or interested in joining? We'd love to hear from you.
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  return (
                    <div
                      key={index}
                      className="group flex items-start gap-5 p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-primary/30 hover:bg-card/70 transition-all duration-500"
                    >
                      <div className="p-3 bg-primary/10 rounded-xl border border-primary/20 text-primary group-hover:bg-primary/20 transition-colors">
                        {info.icon}
                      </div>
                      <div>
                        <p className="font-semibold mb-1.5 text-sm uppercase tracking-wider text-muted-foreground">{info.label}</p>
                        <p className="text-foreground text-base font-light">{info.value}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-10 shadow-2xl shadow-primary/5">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-3xl" />
              <div className="relative space-y-6 text-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Get in Touch</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed font-light">
                    Have questions about our team, want to sponsor us, or interested in joining? 
                    Send us an email and we'll get back to you as soon as possible!
                  </p>
                </div>
                <a
                  href="mailto:hsitigertronics@gmail.com?subject=Contact from Tiger Tronics Website"
                  className="inline-block"
                >
                  <Button
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-14 text-base font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-primary/20"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Email Us
                  </Button>
                </a>
                <p className="text-xs text-muted-foreground font-light">
                  Or reach out to us directly at{" "}
                  <a 
                    href="mailto:hsitigertronics@gmail.com" 
                    className="text-primary hover:underline"
                  >
                    hsitigertronics@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Main Home Component
export default function Home() {
  return (
    <div className="relative">
      {/* Skip to content link for accessibility */}
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
      <GallerySection />
      <OutreachSection />
      <AchievementsSection />
      <SponsorsSection />
      <ContactSection />
      <FooterSection />
    </div>
  )
}
