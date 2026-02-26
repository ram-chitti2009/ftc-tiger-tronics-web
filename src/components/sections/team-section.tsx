"use client"

import { useState } from "react"
import Image from "next/image"

const teamMembers = [
  { name: "Gafoor", role: "Team Captain", specialization: "CAD, Build & Strategy", image: "/images/team/cad-lead.png" },
  { name: "Wadood", role: "Co-Captain", specialization: "Programming & Autonomous", image: "/images/team/prog-lead.png" },
  { name: "Jayden", role: "Technical Lead", specialization: "Build & Strategy", image: "/images/team/build-lead.png" },
  { name: "Christopher", role: "Marketing & Outreach Lead", specialization: "Outreach & Community", image: "/images/team/marketing-outreach-lead.png" },
  { name: "Jay Jay", role: "Award Coordinator", specialization: "Design & Engineering", image: "/images/team/outreach-awards-lead.png" },
]

export function TeamSection() {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({})

  return (
    <section
      id="team"
      className="relative overflow-hidden bg-background py-24 sm:py-32 lg:py-40"
    >
      <div className="absolute bottom-0 left-1/4 w-[800px] h-[800px] bg-primary/3 rounded-full blur-[200px] -z-0" />

      <div className="section-inner relative z-10">
        <div>
          <div className="mb-6">
            <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary font-mono text-xs font-semibold tracking-widest uppercase">
              Meet the Team
            </span>
          </div>

          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 md:mb-8 text-balance tracking-tight leading-[0.9]">
            <span className="bg-gradient-to-r from-foreground via-foreground/90 to-primary bg-clip-text text-transparent">
              Leadership
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mb-10 md:mb-12">
            The people who drive our robot and our outreach. We lead on the field and in the community.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-6 md:p-8 hover:border-primary/30 hover:bg-card/70 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 flex flex-col"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex flex-col items-center text-center">
                  <div className="relative w-28 h-28 mx-auto mb-4 md:mb-6 rounded-2xl overflow-hidden border border-primary/20 shadow-lg flex-shrink-0">
                    {imageErrors[index] ? (
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary font-bold text-xl">
                        {member.name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)}
                      </div>
                    ) : (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        onError={() => setImageErrors((prev) => ({ ...prev, [index]: true }))}
                      />
                    )}
                  </div>

                  <div>
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
