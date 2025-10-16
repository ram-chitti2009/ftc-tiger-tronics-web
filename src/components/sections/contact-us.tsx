"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
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
      className="min-h-screen flex items-center py-32 px-6 bg-background relative overflow-hidden"
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

          <h2 className="text-6xl md:text-8xl font-black mb-20 text-balance tracking-tight">Contact Us</h2>

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
