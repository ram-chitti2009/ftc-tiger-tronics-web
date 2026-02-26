"use client"

import { useState } from "react"
import Image from "next/image"
import { DollarSign } from "lucide-react"
import { scrollToSection } from "@/lib/scroll"

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

export function SponsorsSection() {
  const [logoErrors, setLogoErrors] = useState<Record<number, boolean>>({})

  return (
    <section
      id="sponsors"
      className="relative overflow-hidden bg-background py-24 sm:py-32 lg:py-40"
    >
      <div className="absolute top-0 right-1/3 w-[800px] h-[800px] bg-accent/3 rounded-full blur-[200px] -z-0" />

      <div className="section-inner relative z-10">
        <div>
          <div className="mb-6">
            <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary font-mono text-xs font-semibold tracking-widest uppercase">
              Our Partners
            </span>
          </div>

          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-10 md:mb-14 text-balance tracking-tight leading-[0.9]">
            <span className="bg-gradient-to-r from-foreground via-foreground/90 to-primary bg-clip-text text-transparent">
              Sponsors
            </span>
          </h2>

          <div className="text-center mb-10 md:mb-14">
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're grateful for the support of our sponsors who make our robotics journey possible. Their investment in
              STEM education helps us compete, mentor, and give back to our community.
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
                        onError={() => setLogoErrors((prev) => ({ ...prev, [index]: true }))}
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
                Join our mission to inspire the next generation of engineers and innovators. Contact us to learn about
                sponsorship opportunities.
              </p>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollToSection("contact") }}
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
