"use client"

import { useState } from "react"
import Image from "next/image"
import type { LucideIcon } from "lucide-react"
import { Building2, Users } from "lucide-react"

type OutreachItem = {
  name: string
  description: string
  category: string
  image: string | null
}

type OutreachTabId = "all" | "corporate" | "community"

type OutreachTab = {
  id: OutreachTabId
  label: string
  icon: LucideIcon
}

const outreachTabs: OutreachTab[] = [
  { id: "all", label: "All", icon: Building2 },
  { id: "corporate", label: "Corporate & Engineering", icon: Building2 },
  { id: "community", label: "Community & Mentorship", icon: Users },
]

const corporateOutreach: OutreachItem[] = [
  { name: "Texas Instruments", description: "TI Development Center. Engineering labs and best practices.", category: "corporate", image: "/images/outreach/Texas-Instruments/image-1.jpg" },
  { name: "McKesson", description: "Tech mentorship, team website, AI assistant for outreach.", category: "corporate", image: "/images/outreach/McKesson%20Sponsorship%20and%20Outreach.jpeg" },
  { name: "Avirso", description: "Robot demo & engineering iteration with SMEs.", category: "corporate", image: "/images/outreach/Avirso-Outreach.jpeg" },
  { name: "Toyota", description: "Corporate outreach. Automation and engineering parallels.", category: "corporate", image: null },
  { name: "Noor Engineering", description: "Design reviews, structural & functional iteration.", category: "corporate", image: null },
  { name: "Taz Realty", description: "Community partnership & marketing.", category: "corporate", image: null },
  { name: "UT Dallas (Hadi & Yumna Khan)", description: "Mentorship. Maintainable code and best practices.", category: "corporate", image: "/images/outreach/UTD%20Engineering%20Mentorship.jpeg" },
  { name: "Accenture & Broadridge", description: "Industry ops, scalable systems, autonomous navigation.", category: "corporate", image: "/images/outreach/Accenture%20and%20BroadRidge.jpeg" },
  { name: "Collins Aerospace", description: "Industry insights with Accenture & Broadridge.", category: "corporate", image: "/images/outreach/Accenture%20and%20BroadRidge.jpeg" },
  { name: "Paramvaasam / Premvaasam", description: "Social media marketing & sponsorship.", category: "corporate", image: null },
]

const communityOutreach: OutreachItem[] = [
  { name: "Dallas City Council", description: "Team & robot presentation to Councilwoman Cara Mendelsohn.", category: "community", image: "/images/outreach/councilady.png" },
  { name: "Perot Museum", description: "FTC robotics for DFW students. Hands-on STEM.", category: "community", image: "/images/outreach/perot.png" },
  { name: "HSI-Dallas Fall Festival", description: "Organized schedule, volunteers, setup & teardown.", category: "community", image: "/images/outreach/Fall%20Festival%20Organization.jpeg" },
  { name: "Science Fair Organization", description: "Robot showcase & FTC impact for families.", category: "community", image: "/images/outreach/Science%20Fair%20Organization%20Help.jpeg" },
  { name: "Harmony Carrollton (HuskyBot & Br@1nD3@d)", description: "Mentored HuskyBot #25659 & Br@1nD3@d #32663.", category: "community", image: "/images/outreach/Hsa-carrolton.jpeg" },
  { name: "Epic Labs Scrimmage", description: "FTC scrimmage. Strategies, robots, collaboration.", category: "community", image: "/images/outreach/Epic%20Labs%20Collaboration.jpeg" },
  { name: "Rusty Crabs Scrimmage", description: "Practice matches & prep for competition.", category: "community", image: "/images/outreach/rusty%20crabs.jpeg" },
  { name: "First Lego League Mentorship", description: "FLL teams. Research, design, programming.", category: "community", image: "/images/outreach/fll%20mentorship.jpeg" },
  { name: "VEX Robotics (HSI-Dallas MS)", description: "Middle school VEX mentorship.", category: "community", image: "/images/vex-mentoring.png" },
  { name: "Itkan Rangers", description: "Robot design and programming. Dallas team.", category: "community", image: null },
  { name: "Itkan Girls", description: "Women in STEM. Design, programming, confidence.", category: "community", image: null },
  { name: "FTC Team - North Carolina", description: "Remote mentorship. Design and strategy.", category: "community", image: null },
  { name: "TechTalks & Community Connect", description: "Sprint-based mentorship across campuses.", category: "community", image: null },
]

const allOutreach = [...corporateOutreach, ...communityOutreach]

export function OutreachSection() {
  const [activeTab, setActiveTab] = useState<OutreachTabId>("all")

  const items =
    activeTab === "all"
      ? allOutreach
      : activeTab === "corporate"
        ? corporateOutreach
        : communityOutreach

  return (
    <section
      id="outreach"
      className="min-h-screen flex items-center py-40 px-6 md:px-8 lg:px-12 bg-background relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px] -z-0" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[200px] -z-0" />

      <div className="max-w-[1400px] mx-auto relative z-10 w-full">
        <div>
          <div className="mb-8">
            <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary font-mono text-xs font-semibold tracking-widest uppercase">
              Learning from our community
            </span>
          </div>

          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 text-balance tracking-tight leading-[0.9]">
            <span className="bg-gradient-to-r from-foreground via-foreground/90 to-primary bg-clip-text text-transparent">
              Outreach
            </span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
            Engineering mentorship, DECODE outreach, and community partnerships. Team #32561.
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-12">
            {outreachTabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                      : "bg-card/50 border border-border/50 text-muted-foreground hover:border-primary/30 hover:text-foreground"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              )
            })}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:border-primary/30 hover:bg-card/70 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {item.image ? (
                  <div className="relative aspect-video overflow-hidden bg-card">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-lg font-bold text-white drop-shadow-md">{item.name}</h3>
                    </div>
                  </div>
                ) : (
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-2">{item.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="mt-12 text-center text-sm text-muted-foreground">
            All events are not featured due to space. Please refer to Engineering Notebook for full list.
          </p>
        </div>
      </div>
    </section>
  )
}
