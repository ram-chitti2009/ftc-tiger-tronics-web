"use client"

import Image from "next/image"

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-background py-24 sm:py-32 lg:py-40"
    >
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/3 rounded-full blur-[200px] -z-0" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/3 rounded-full blur-[200px] -z-0" />

      <div className="section-inner relative z-10">
        <div>
          <div className="mb-6">
            <span className="section-badge inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary font-mono text-xs font-semibold tracking-widest uppercase">
              About Us
            </span>
          </div>

          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-10 md:mb-14 text-balance tracking-tight leading-[0.9]">
            <span className="bg-gradient-to-r from-foreground via-foreground/90 to-primary bg-clip-text text-transparent">
              Who We Are
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8 md:space-y-10">
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
                  Tiger Tronics is an <span className="text-foreground font-medium">award-winning FTC team</span> from Dallas building competition robots with pro-level autonomy, Limelight AI vision, and precision engineering. We design, build, and program to compete at the highest level. Our first season put us <span className="text-primary font-medium">5th in the world</span>.
                </p>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
                  Our mission: inspire innovation, practice gracious professionalism, and develop the next generation of engineers and problem solvers through hands-on robotics and STEM outreach.
                </p>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
                  We're community first. We mentor FLL and VEX teams, partner with other FTC teams at scrimmages, and share what we learn. Robotics is better when we lift each other.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <span className="inline-block px-4 py-2 rounded-xl bg-card/60 border border-border/50 text-sm text-muted-foreground font-medium">Gracious professionalism</span>
                <span className="inline-block px-4 py-2 rounded-xl bg-card/60 border border-border/50 text-sm text-muted-foreground font-medium">Mentorship</span>
                <span className="inline-block px-4 py-2 rounded-xl bg-card/60 border border-border/50 text-sm text-muted-foreground font-medium">Community first</span>
                <span className="inline-block px-4 py-2 rounded-xl bg-card/60 border border-border/50 text-sm text-muted-foreground font-medium">Coopertition</span>
              </div>
              <div className="flex gap-4 sm:gap-6 pt-2 flex-wrap md:justify-start">
                <div className="group relative text-center p-8 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-primary/30 hover:bg-card/70 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 min-w-[200px] flex-1 max-w-[280px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="text-6xl font-black text-primary mb-4 bg-gradient-to-br from-primary via-primary to-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500">1</div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold group-hover:text-foreground transition-colors">Year Active</div>
                  </div>
                </div>
                <div className="group relative text-center p-8 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-primary/30 hover:bg-card/70 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 min-w-[200px] flex-1 max-w-[280px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="text-6xl font-black text-primary mb-4 bg-gradient-to-br from-primary via-primary to-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500">12</div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold group-hover:text-foreground transition-colors">Team Members</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mt-12 md:mt-0 md:pl-4">
              <div className="relative aspect-square max-w-lg mx-auto md:max-w-none bg-gradient-to-br from-card via-card/80 to-card border border-border/50 rounded-3xl overflow-hidden shadow-2xl shadow-primary/5 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
                <Image
                  src="/images/work-in-progress/image-1.jpg"
                  alt="Team working on robotics project"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10 blur-2xl" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/10 rounded-2xl -z-10 blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
