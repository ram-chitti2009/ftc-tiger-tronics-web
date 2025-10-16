"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button, Input, Textarea } from "@/components/ui"


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

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#robots", label: "Robots" },
    { href: "#team", label: "Team" },
    { href: "#sponsors", label: "Sponsors" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-background/60 backdrop-blur-xl border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => {
              const element = document.getElementById('home')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }
            }}
            className="text-2xl font-bold tracking-tight hover:scale-105 transition-transform"
          >
            <span className="text-foreground">Tiger</span>
            <span className="text-primary">Tronics</span>
          </button>

          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => {
                  const element = document.getElementById(link.href.replace('#', ''))
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-border/50">
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => {
                    const element = document.getElementById(link.href.replace('#', ''))
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                    setIsMobileMenuOpen(false)
                  }}
                  className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  {link.label}
                </button>
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
      <ParticleEffects />
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-[200px] animate-pulse-glow" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-card/50 border border-primary/20 rounded-full backdrop-blur-xl">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary font-medium text-sm tracking-wider uppercase">FTC Team #12345</span>
          </div>

          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tight leading-none">
            <span className="animate-text-reveal inline-block" style={{ animationDelay: '0.2s' }}>Tiger</span>
            <span className="gradient-text animate-text-reveal inline-block animate-gradient" style={{ animationDelay: '0.4s' }}>Tronics</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.6s' }}>
            Engineering excellence through robotics innovation and competitive spirit
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="btn-enhanced text-primary-foreground font-semibold px-10 h-14 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 text-lg magnetic"
              onClick={() => {
                const element = document.getElementById('team')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
            >
              Meet the Team
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-border hover:bg-card hover:border-primary/50 font-semibold px-10 h-14 rounded-xl transition-all duration-300 hover:scale-105 bg-transparent text-lg magnetic glass"
              onClick={() => {
                const element = document.getElementById('robots')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
            >
              View Our Robots
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="bg-secondary hover:bg-secondary/80 text-secondary-foreground font-semibold px-10 h-14 rounded-xl transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg text-lg magnetic"
              onClick={() => {
                const element = document.getElementById('sponsors')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
            >
              Our Sponsors
            </Button>
          </div>
        </div>

        <button
          onClick={() => {
            const element = document.getElementById('about')
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
          }}
          className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          } group`}
          aria-label="Scroll to about section"
        >
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2 group-hover:border-primary/60 transition-colors">
            <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
          </div>
        </button>
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

// Enhanced Section Divider Component
function SectionDivider() {
  return (
    <div className="relative py-20 flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent h-px" />
      <div className="bg-background px-8 relative">
        <div className="w-6 h-6 bg-primary rounded-full animate-pulse-glow relative">
          <div className="absolute inset-0 w-6 h-6 bg-primary rounded-full animate-ping opacity-20" />
        </div>
        <div className="absolute -top-2 -left-2 w-10 h-10 border-2 border-primary/20 rounded-full animate-rotate" />
        <div className="absolute -bottom-2 -right-2 w-8 h-8 border border-accent/30 rounded-full animate-rotate" style={{ animationDirection: 'reverse' }} />
      </div>
    </div>
  )
}

// About Section Component
function AboutSection() {
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
      className="min-h-screen flex items-center py-24 px-6 bg-background relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-0 animate-float" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl -z-0 animate-float" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-primary/3 rounded-full blur-2xl -z-0 animate-pulse-glow" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="mb-6">
            <span className="text-primary font-mono text-sm font-bold tracking-widest uppercase">About Us</span>
          </div>

          <h2 className="text-6xl md:text-8xl font-black mb-12 text-balance tracking-tight section-title">Who We Are</h2>

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

// Robots Section Component
function RobotsSection() {
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

  const robots = [
    {
      name: "TigerBot 2024",
      year: "2024",
      description: "Our latest competition robot featuring advanced autonomous capabilities and precision engineering.",
      image: "/images/robots/tigerbot-2024.jpg",
      features: ["Autonomous Navigation", "Precision Manipulation", "Advanced Sensors"]
    },
    {
      name: "TigerBot 2023",
      year: "2023",
      description: "Previous season's robot with innovative design and reliable performance.",
      image: "/images/robots/tigerbot-2023.jpg",
      features: ["Modular Design", "High Speed", "Reliable Systems"]
    },
    {
      name: "TigerBot 2022",
      year: "2022",
      description: "Award-winning robot that demonstrated our team's engineering excellence.",
      image: "/images/robots/tigerbot-2022.jpg",
      features: ["Award Winner", "Innovative Solutions", "Team Collaboration"]
    }
  ]

  return (
    <section
      id="robots"
      ref={sectionRef}
      className="min-h-screen flex items-center py-24 px-6 bg-background relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl -z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="mb-6">
            <span className="text-primary font-mono text-sm font-bold tracking-widest uppercase">Our Robots</span>
          </div>

          <h2 className="text-6xl md:text-8xl font-black mb-20 text-balance tracking-tight section-title">Robot Arsenal</h2>

          <div className="grid lg:grid-cols-3 gap-12">
            {robots.map((robot, index) => (
              <div
                key={index}
                className="group bg-card border-2 border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/10 interactive-card magnetic"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={robot.image}
                    alt={robot.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
                    {robot.year}
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">{robot.name}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{robot.description}</p>
                  
                  <div className="space-y-2">
                    {robot.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
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

  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Team Captain",
      specialization: "Programming & Strategy",
      image: "/images/team/alex-chen.jpg",
      bio: "Leads the team with 3 years of FTC experience and expertise in autonomous programming."
    },
    {
      name: "Sarah Johnson",
      role: "Lead Engineer",
      specialization: "Mechanical Design",
      image: "/images/team/sarah-johnson.jpg",
      bio: "Designs and builds our robots with precision engineering and innovative solutions."
    },
    {
      name: "Marcus Rodriguez",
      role: "Programming Lead",
      specialization: "Autonomous Systems",
      image: "/images/team/marcus-rodriguez.jpg",
      bio: "Develops advanced autonomous algorithms and computer vision systems."
    },
    {
      name: "Emma Thompson",
      role: "Build Team Lead",
      specialization: "Fabrication & Assembly",
      image: "/images/team/emma-thompson.jpg",
      bio: "Oversees robot construction with attention to detail and quality craftsmanship."
    },
    {
      name: "David Kim",
      role: "Strategy Coordinator",
      specialization: "Game Analysis",
      image: "/images/team/david-kim.jpg",
      bio: "Analyzes game rules and develops winning strategies for competitions."
    },
    {
      name: "Zoe Williams",
      role: "Outreach Director",
      specialization: "Community Engagement",
      image: "/images/team/zoe-williams.jpg",
      bio: "Manages team outreach, sponsorships, and community involvement initiatives."
    }
  ]

  return (
    <section
      id="team"
      ref={sectionRef}
      className="min-h-screen flex items-center py-24 px-6 bg-background relative overflow-hidden"
    >
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="mb-6">
            <span className="text-primary font-mono text-sm font-bold tracking-widest uppercase">Meet the Team</span>
          </div>

          <h2 className="text-6xl md:text-8xl font-black mb-20 text-balance tracking-tight section-title">Our Team</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-card border-2 border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 interactive-card magnetic glass"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-2 border-primary/20">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2 text-foreground">{member.name}</h3>
                  <p className="text-primary font-semibold mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.specialization}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
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

  const sponsors = [
    {
      name: "TechCorp Industries",
      tier: "Platinum Sponsor",
      logo: "/images/sponsors/techcorp.png",
      description: "Supporting innovation in robotics education"
    },
    {
      name: "Engineering Solutions Inc",
      tier: "Gold Sponsor", 
      logo: "/images/sponsors/engineering-solutions.png",
      description: "Empowering the next generation of engineers"
    },
    {
      name: "RoboTech Foundation",
      tier: "Silver Sponsor",
      logo: "/images/sponsors/robotech.png",
      description: "Advancing robotics education worldwide"
    },
    {
      name: "Future Builders",
      tier: "Bronze Sponsor",
      logo: "/images/sponsors/future-builders.png",
      description: "Building tomorrow's innovators today"
    }
  ]

  return (
    <section
      id="sponsors"
      ref={sectionRef}
      className="min-h-screen flex items-center py-24 px-6 bg-background relative overflow-hidden"
    >
      <div className="absolute top-0 right-1/3 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl -z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="mb-6">
            <span className="text-primary font-mono text-sm font-bold tracking-widest uppercase">Our Partners</span>
          </div>

          <h2 className="text-6xl md:text-8xl font-black mb-20 text-balance tracking-tight section-title">Sponsors</h2>

          <div className="text-center mb-16">
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're grateful for the support of our sponsors who make our robotics journey possible. 
              Their investment in STEM education helps us build the future.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="group bg-card border-2 border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 interactive-card magnetic glass"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative h-20 mb-6 flex items-center justify-center">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={120}
                    height={80}
                    className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                
                <div className="text-center">
                  <h3 className="text-lg font-bold mb-2 text-foreground">{sponsor.name}</h3>
                  <p className="text-primary font-semibold mb-3 text-sm">{sponsor.tier}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{sponsor.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-card border-2 border-border rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Interested in Sponsoring?</h3>
              <p className="text-muted-foreground mb-6">
                Join our mission to inspire the next generation of engineers and innovators. 
                Contact us to learn about sponsorship opportunities.
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => {
                  const element = document.getElementById('contact')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
              >
                Become a Sponsor
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Contact Section Component
function ContactSection() {
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

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      label: "Email",
      value: "team@tigertronics.com",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      label: "Phone",
      value: "(555) 123-4567",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      label: "Location",
      value: "Your School Name, City, State",
    },
  ]

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen flex items-center py-24 px-6 bg-background relative overflow-hidden"
    >
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-0" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="mb-6">
            <span className="text-primary font-mono text-sm font-bold tracking-widest uppercase">Get in Touch</span>
          </div>

          <h2 className="text-6xl md:text-8xl font-black mb-20 text-balance tracking-tight section-title">Contact Us</h2>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                Have questions about our team, want to sponsor us, or interested in joining? We'd love to hear from you.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-5 p-6 bg-card border-2 border-border rounded-2xl hover:border-primary/50 transition-all duration-300"
                    >
                      <div className="p-4 bg-primary/20 rounded-xl border border-primary/30 text-primary">
                        {info.icon}
                      </div>
                      <div>
                        <p className="font-bold mb-2 text-lg">{info.label}</p>
                        <p className="text-muted-foreground text-base">{info.value}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="bg-card border-2 border-border rounded-3xl p-10 shadow-2xl shadow-primary/5">
              <form className="space-y-7">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold mb-3 tracking-wide">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" className="bg-background border-2 h-12 text-base" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold mb-3 tracking-wide">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-background border-2 h-12 text-base"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold mb-3 tracking-wide">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us what you're interested in..."
                    rows={6}
                    className="bg-background border-2 text-base"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-14 text-lg font-bold rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-primary/20"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          <div className="mt-24 pt-10 border-t-2 border-border text-center">
            <p className="text-muted-foreground text-base">© 2025 Tiger Tronics. All rights reserved.</p>
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
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <RobotsSection />
      <SectionDivider />
      <TeamSection />
      <SectionDivider />
      <SponsorsSection />
      <SectionDivider />
      <ContactSection />
    </div>
  )
}
