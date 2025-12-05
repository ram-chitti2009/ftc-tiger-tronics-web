"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Copy, Check } from "lucide-react"

export function ContactSection() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText("hsitigertronics@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "hsitigertronics@gmail.com",
      isEmail: true,
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Harmony School of Innovation - Dallas, Texas",
      isEmail: false,
    },
  ]

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center py-32 px-6 bg-background relative overflow-hidden"
    >
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-0" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div>
          <div className="mb-6">
            <span className="text-primary font-mono text-sm font-bold tracking-widest uppercase">Get in Touch</span>
          </div>

          <h2 className="text-6xl md:text-8xl font-black mb-20 text-balance tracking-tight section-title bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
            Contact Us
          </h2>

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
                      <div className="flex-1">
                        <p className="font-bold mb-2 text-lg">{info.label}</p>
                        {info.isEmail ? (
                          <div className="flex items-center justify-between gap-2">
                            <a 
                              href={`mailto:${info.value}`}
                              className="text-muted-foreground text-base hover:text-primary transition-colors break-all"
                            >
                              {info.value}
                            </a>
                            <button
                              onClick={copyEmail}
                              className="ml-2 p-2 hover:bg-card rounded-lg transition-colors flex-shrink-0"
                              aria-label={copied ? "Email copied to clipboard" : "Copy email address"}
                              title={copied ? "Copied!" : "Copy email"}
                            >
                              {copied ? (
                                <Check className="w-4 h-4 text-primary" />
                              ) : (
                                <Copy className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
                              )}
                            </button>
                          </div>
                        ) : (
                          <p className="text-muted-foreground text-base">{info.value}</p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="bg-card border-2 border-border rounded-3xl p-10 shadow-2xl shadow-primary/5">
              <div className="space-y-6 text-center">
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Have questions about our team, want to sponsor us, or interested in joining? 
                  Send us an email and we'll get back to you as soon as possible!
                </p>
                <a
                  href="mailto:hsitigertronics@gmail.com?subject=Contact from Tiger Tronics Website"
                  className="inline-block"
                >
                  <Button
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-14 text-lg font-bold rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-primary/20"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Email Us
                  </Button>
                </a>
                <p className="text-sm text-muted-foreground">
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
