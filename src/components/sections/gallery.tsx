"use client"

import { useState } from "react"
import Image from "next/image"
import { ImageIcon } from "lucide-react"

type GalleryCategory = "all" | "robot" | "outreach" | "team" | "competition"

type GalleryImageItem = {
  src: string
  alt: string
  category: Exclude<GalleryCategory, "all">
}

const galleryTabs: { id: GalleryCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "robot", label: "Robot" },
  { id: "outreach", label: "Outreach" },
  { id: "team", label: "Team" },
  { id: "competition", label: "Competition" },
]

const galleryImages: GalleryImageItem[] = [
  // Robot
  { src: "/images/robot-images/V1/image-1.jpg", alt: "Mufasa", category: "robot" },
  { src: "/images/robot-images/V1/image-2.jpg", alt: "Mufasa build", category: "robot" },
  { src: "/images/robot-images/V1/image-3.jpg", alt: "Mufasa detail", category: "robot" },
  { src: "/images/robot-images/V1/image-4.jpg", alt: "Mufasa in action", category: "robot" },
  { src: "/images/robot-images/V1/image-5.jpg", alt: "Mufasa", category: "robot" },
  { src: "/images/robot-images/V1/v1%20pic.png", alt: "Mufasa V1", category: "robot" },
  { src: "/images/robot-images/V2/v2%20cad.png", alt: "Simba V2 CAD", category: "robot" },
  { src: "/images/initial-design-early-back-in-the-day.jpeg", alt: "Initial design", category: "robot" },
  // Outreach
  { src: "/images/outreach/Texas-Instruments/image-1.jpg", alt: "Texas Instruments", category: "outreach" },
  { src: "/images/outreach/Texas-Instruments/image-2.jpg", alt: "TI Development Center", category: "outreach" },
  { src: "/images/outreach/McKesson%20Sponsorship%20and%20Outreach.jpeg", alt: "McKesson", category: "outreach" },
  { src: "/images/outreach/Avirso-Outreach.jpeg", alt: "Avirso", category: "outreach" },
  { src: "/images/outreach/Accenture%20and%20BroadRidge.jpeg", alt: "Accenture & Broadridge", category: "outreach" },
  { src: "/images/outreach/UTD%20Engineering%20Mentorship.jpeg", alt: "UT Dallas", category: "outreach" },
  { src: "/images/outreach/councilady.png", alt: "Dallas City Council", category: "outreach" },
  { src: "/images/outreach/perot.png", alt: "Perot Museum", category: "outreach" },
  { src: "/images/outreach/Fall%20Festival%20Organization.jpeg", alt: "Fall Festival", category: "outreach" },
  { src: "/images/outreach/Science%20Fair%20Organization%20Help.jpeg", alt: "Science Fair", category: "outreach" },
  { src: "/images/outreach/Hsa-carrolton.jpeg", alt: "HSA Carrollton", category: "outreach" },
  { src: "/images/outreach/Epic%20Labs%20Collaboration.jpeg", alt: "Epic Labs", category: "outreach" },
  { src: "/images/outreach/rusty%20crabs.jpeg", alt: "Rusty Crabs", category: "outreach" },
  { src: "/images/outreach/fll%20mentorship.jpeg", alt: "FLL Mentorship", category: "outreach" },
  { src: "/images/vex-mentoring.png", alt: "VEX Mentoring", category: "outreach" },
  // Team
  { src: "/images/team/cad-lead.png", alt: "CAD Lead", category: "team" },
  { src: "/images/team/prog-lead.png", alt: "Programming Lead", category: "team" },
  { src: "/images/team/build-lead.png", alt: "Build Lead", category: "team" },
  { src: "/images/team/marketing-outreach-lead.png", alt: "Marketing & Outreach", category: "team" },
  { src: "/images/team/outreach-awards-lead.png", alt: "Awards Lead", category: "team" },
  { src: "/images/work-in-progress/image-1.jpg", alt: "Build session", category: "team" },
  { src: "/images/work-in-progress/image-2.jpg", alt: "Work in progress", category: "team" },
  { src: "/images/work-in-progress/wadood-prog.jpeg", alt: "Programming", category: "team" },
  { src: "/images/work-in-progress/working-on-robot.jpeg", alt: "Working on robot", category: "team" },
  // Competition
  { src: "/images/Competition%20Moments/Competition%20Moment%20-1.jpeg", alt: "Competition", category: "competition" },
  { src: "/images/Competition%20Moments/competition%20moment-2.jpeg", alt: "Competition moment", category: "competition" },
  { src: "/images/Competition%20Moments/competition-team-pic.jpeg", alt: "Team at competition", category: "competition" },
  { src: "/images/Competition%20Moments/competition-team-pic-2.jpeg", alt: "Team at competition", category: "competition" },
]

function GalleryImage({ src, alt, index }: { src: string; alt: string; index: number }) {
  const [imageError, setImageError] = useState(false)

  if (imageError) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/5 flex items-center justify-center">
        <div className="text-center p-4">
          <ImageIcon className="w-12 h-12 mx-auto mb-2 text-primary/30" />
          <p className="text-xs text-muted-foreground">{alt}</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover group-hover:scale-110 transition-transform duration-500"
        onError={() => setImageError(true)}
        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
        <p className="absolute bottom-4 left-4 right-4 text-white text-sm font-medium">
          {alt}
        </p>
      </div>
    </>
  )
}

export function GallerySection() {
  const [activeTab, setActiveTab] = useState<GalleryCategory>("all")

  const filteredImages: GalleryImageItem[] =
    activeTab === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeTab)

  return (
    <section
      id="gallery"
      className="min-h-screen flex items-center py-32 px-6 md:px-8 lg:px-12 bg-background relative overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl -z-0" />

      <div className="max-w-[1400px] mx-auto relative z-10 w-full">
        <div>
          <div className="mb-6">
            <span className="text-primary font-mono text-sm font-bold tracking-widest uppercase">
              Media Gallery
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-10 text-balance tracking-tight section-title bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
            Competition Moments
          </h2>

          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {galleryTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "bg-card/50 border border-border/50 text-muted-foreground hover:border-primary/30 hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {filteredImages.length > 0 ? (
              filteredImages.map((image, index) => (
                <div
                  key={`${image.src}-${index}`}
                  className="group relative aspect-square overflow-hidden rounded-xl border-2 border-border hover:border-primary/50 transition-all duration-500 hover:scale-[1.02]"
                >
                  <GalleryImage src={image.src} alt={image.alt} index={index} />
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-16 text-muted-foreground">
                No images in this category yet. Add photos to the gallery for &quot;{activeTab}&quot;.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
