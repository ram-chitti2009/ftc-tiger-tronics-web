"use client"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ImageIcon } from "lucide-react"

// Gallery Image Component with error handling
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
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
        <p className="absolute bottom-4 left-4 right-4 text-white text-sm font-medium">
          {alt}
        </p>
      </div>
    </>
  )
}

export function GallerySection(){
      // Replace with your actual gallery images
      const galleryImages = [
        { src: "/images/gallery/1.jpg", alt: "Team at competition" },
        { src: "/images/gallery/2.jpg", alt: "Robot in action" },
        { src: "/images/gallery/3.jpg", alt: "Team working together" },
        { src: "/images/gallery/4.jpg", alt: "Competition setup" },
        { src: "/images/gallery/5.jpg", alt: "Awards ceremony" },
        { src: "/images/gallery/6.jpg", alt: "Robot testing" },
        { src: "/images/outreach/Texas-Instruments/image-1.jpg", alt: "Texas Instruments visit and engagement" },
      ]

      return(
        <section
        id = "gallery"
        className = "min-h-screen flex items-center py-32 px-6 bg-background relative overflow-hidden">
        
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl -z-0" />
        
        <div className = "max-w-7xl mx-auto relative z-10 w-full">
        <div>
            <div className="mb-6">
            <span className="text-primary font-mono text-sm font-bold tracking-widest uppercase">Media Gallery</span>

            </div>
            <h2 className="text-6xl md:text-8xl font-black mb-20 text-balance tracking-tight section-title bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
            Competition Moments
          </h2>

          <div className = "grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-xl border-2 border-border hover:border-primary/50 transition-all duration-500 hover:scale-105"
              >
                <GalleryImage src={image.src} alt={image.alt} index={index} />
              </div>
            ))}
          </div>
          </div>
        </div>
        </section>
      )
}
