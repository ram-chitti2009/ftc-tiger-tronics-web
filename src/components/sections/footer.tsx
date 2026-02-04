"use client"

import { Instagram } from "lucide-react"

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    const navbarHeight = 80
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - navbarHeight
    window.scrollTo({ top: offsetPosition, behavior: "smooth" })
  }
}

export function FooterSection() {
  return (
    <footer className="relative border-t-2 border-border bg-card/50 backdrop-blur-xl">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 py-12">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 lg:items-start">
          <div className="space-y-3">
            <span className="text-2xl font-bold tracking-tight">
              <span className="text-foreground">Tiger</span>
              <span className="text-primary">Tronics</span>
            </span>
            <p className="text-sm text-muted-foreground max-w-xs">
              Geared For Success, Driven By Instinct.
            </p>
            <a
              href="https://www.instagram.com/hsi_tiger_tronics/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-10 h-10 rounded-lg bg-card border border-border hover:border-primary/50 items-center justify-center transition-all hover:scale-110 group"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
          <div>
            <h3 className="font-bold text-sm mb-4 text-foreground uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  onClick={(e) => { e.preventDefault(); scrollToSection("about") }}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#robots"
                  onClick={(e) => { e.preventDefault(); scrollToSection("robots") }}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  Robots
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  onClick={(e) => { e.preventDefault(); scrollToSection("team") }}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#timeline"
                  onClick={(e) => { e.preventDefault(); scrollToSection("timeline") }}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  Timeline
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  onClick={(e) => { e.preventDefault(); scrollToSection("gallery") }}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#outreach"
                  onClick={(e) => { e.preventDefault(); scrollToSection("outreach") }}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  Outreach
                </a>
              </li>
              <li>
                <a
                  href="#sponsors"
                  onClick={(e) => { e.preventDefault(); scrollToSection("sponsors") }}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  Sponsors
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); scrollToSection("contact") }}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 py-4">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} HSI Tiger Tronics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
