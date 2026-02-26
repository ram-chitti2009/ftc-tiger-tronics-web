"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui"
import { X, Menu } from "lucide-react"
import { scrollToSection } from "@/lib/scroll"

const navLinks = [
  { href: "#about", label: "About", id: "about" },
  { href: "#timeline", label: "Timeline", id: "timeline" },
  { href: "#robots", label: "Robots", id: "robots" },
  { href: "#achievements", label: "Results", id: "achievements" },
  { href: "#team", label: "Team", id: "team" },
  { href: "#videos", label: "Videos", id: "videos" },
  { href: "#gallery", label: "Gallery", id: "gallery" },
  { href: "#outreach", label: "Outreach", id: "outreach" },
  { href: "#sponsors", label: "Sponsors", id: "sponsors" },
  { href: "#contact", label: "Contact", id: "contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleScrollToSection = (id: string) => {
    scrollToSection(id)
    setIsMobileMenuOpen(false)
  }

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
            onClick={(e) => { e.preventDefault(); handleScrollToSection("home") }}
            className="flex items-center gap-2 sm:gap-3 hover:scale-105 transition-transform cursor-pointer"
          >
            <div className="relative w-8 h-8 sm:w-10 sm:h-10">
              <Image src="/images/logo.png" alt="Tiger Tronics Logo" width={40} height={40} className="object-contain" />
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
                onClick={(e) => { e.preventDefault(); handleScrollToSection(link.id) }}
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
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/50 bg-background/95 backdrop-blur-xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleScrollToSection(link.id) }}
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
