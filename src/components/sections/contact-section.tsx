"use client"

import { Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui"

const contactInfo = [
  { icon: <Mail className="w-6 h-6" />, label: "Email", value: "hsitigertronics@gmail.com" },
  { icon: <MapPin className="w-6 h-6" />, label: "Location", value: "Harmony School of Innovation - Dallas, Texas" },
]

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-background py-24 sm:py-32 lg:py-40"
    >
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-primary/3 rounded-full blur-[200px] -z-0" />

      <div className="section-inner relative z-10">
        <div>
          <div className="mb-6">
            <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary font-mono text-xs font-semibold tracking-widest uppercase">
              Get in Touch
            </span>
          </div>

          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-10 md:mb-14 text-balance tracking-tight leading-[0.9]">
            <span className="bg-gradient-to-r from-foreground via-foreground/90 to-primary bg-clip-text text-transparent">
              Contact Us
            </span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed font-light">
                Judges, sponsors, and future teammates: we'd love to connect. We're always open to mentoring, partnering with other teams, or just chatting with the community. Questions about our team, robot, or outreach? Reach out.
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
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
                ))}
              </div>
            </div>

            <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-10 shadow-2xl shadow-primary/5">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-3xl" />
              <div className="relative space-y-6 text-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Get in Touch</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed font-light">
                    Have questions about our team, want to sponsor us, or interested in joining? Send us an email and
                    we'll get back to you as soon as possible!
                  </p>
                </div>
                <a href="mailto:hsitigertronics@gmail.com?subject=Contact from Tiger Tronics Website" className="inline-block">
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
                  <a href="mailto:hsitigertronics@gmail.com" className="text-primary hover:underline">
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
