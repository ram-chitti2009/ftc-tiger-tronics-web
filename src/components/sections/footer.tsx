"use client"

import { Facebook, Github, Instagram, MailIcon, MapPin, Twitter, Youtube } from "lucide-react";

// Smooth scroll helper function
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

export function FooterSection() {
    return (
        <footer className="relative border-t-2 border-border bg-card/50 backdrop-blur-xl">
            <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 py-16">
                <div className="flex flex-col gap-12 mb-12">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold tracking-tight">
                                <span className="text-foreground">Tiger</span>
                                <span className="text-primary">Tronics</span>
                            </span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Engineering excellence through robotics innovation and competitive spirit
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a
                                href="https://www.instagram.com/hsi_tiger_tronics/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg bg-card border border-border hover:border-primary/50 flex items-center justify-center transition-all hover:scale-110 group"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                            </a>
                            <a
                                href="https://youtube.com/@tigertronics"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg bg-card border border-border hover:border-primary/50 flex items-center justify-center transition-all hover:scale-110 group"
                                aria-label="YouTube"
                            >
                                <Youtube className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                            </a>
                            <a
                                href="https://twitter.com/tigertronics"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg bg-card border border-border hover:border-primary/50 flex items-center justify-center transition-all hover:scale-110 group"
                                aria-label="Twitter"
                            >
                                <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                            </a>
                            <a
                                href="https://github.com/tigertronics"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg bg-card border border-border hover:border-primary/50 flex items-center justify-center transition-all hover:scale-110 group"
                                aria-label="GitHub"
                            >
                                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <a 
                                  href="#about" 
                                  onClick={(e) => {
                                    e.preventDefault()
                                    scrollToSection('about')
                                  }}
                                  className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a 
                                  href="#robots" 
                                  onClick={(e) => {
                                    e.preventDefault()
                                    scrollToSection('robots')
                                  }}
                                  className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                                >
                                    Our Robots
                                </a>
                            </li>
                            <li>
                                <a 
                                  href="#team" 
                                  onClick={(e) => {
                                    e.preventDefault()
                                    scrollToSection('team')
                                  }}
                                  className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                                >
                                    Our Team
                                </a>
                            </li>
                            <li>
                                <a 
                                  href="#sponsors" 
                                  onClick={(e) => {
                                    e.preventDefault()
                                    scrollToSection('sponsors')
                                  }}
                                  className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                                >
                                    Sponsors
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4">Get in Touch</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li className="flex items-start gap-2">
                                <MailIcon className="w-4 h-4 mt-0.5" />
                                <span>hsitigertronics@gmail.com</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <MapPin className="w-4 h-4 mt-0.5" />
                                <span>Harmony School of Innovation - Dallas, Texas</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="border-t border-border">
                <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 py-6">
                    <p className="text-sm text-muted-foreground text-center">
                        © {new Date().getFullYear()} HSI Tiger Tronics. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}