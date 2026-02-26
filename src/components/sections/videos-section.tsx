"use client"

import { Play } from "lucide-react"

export function VideosSection() {
  return (
    <section
      id="videos"
      className="relative overflow-hidden bg-background py-24 sm:py-32 lg:py-40"
    >
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-accent/4 rounded-full blur-[180px] -z-0" />
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] -z-0" />

      <div className="section-inner relative z-10">
        <div>
          <div className="mb-6 flex items-center gap-2">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary font-mono text-xs font-semibold tracking-widest uppercase">
              <Play className="w-3.5 h-3.5" aria-hidden />
              Guides & Build Logs
            </span>
          </div>

          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 md:mb-8 text-balance tracking-tight leading-[0.9]">
            <span className="bg-gradient-to-r from-foreground via-foreground/90 to-primary bg-clip-text text-transparent">
              Knowledge Hub
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mb-10 md:mb-12">
            We share what we learn. Build guides, walkthroughs, and behind-the-scenes from our robotics journey so the whole community can grow. Learn how we go from CAD to competition.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl overflow-hidden hover:border-primary/30 hover:bg-card/70 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative aspect-video overflow-hidden bg-card">
                <video
                  src="/yt_videos/JaydenVideo.mp4"
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                  aria-label="Robot build guide: From CAD to competition"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/90 backdrop-blur-sm text-primary-foreground rounded-lg text-xs font-bold tracking-wide shadow-lg">
                    Build
                  </span>
                  <span className="text-white/90 text-sm font-medium drop-shadow-md">From CAD to Competition</span>
                </div>
              </div>
              <div className="relative p-8">
                <h3 className="text-2xl font-bold mb-2 text-foreground">Robot Build Deep-Dive</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A walkthrough of our build process: design, fabrication, and integration from the shop to the field.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
