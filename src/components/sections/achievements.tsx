"use client"

import Image from "next/image"

const stats = [
  {
    image: "/images/flex/5th%20world%20rank.jpeg",
    title: "5th World Rank",
    subtitle: "Global recognition",
  },
  {
    image: "/images/flex/num1auton.png",
    title: "#1 Autonomous",
    subtitle: "Top auton performance",
  },
  {
    image: "/images/stats-snap.png",
    title: "Stats",
    subtitle: "Competition metrics",
  },
]

export function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="min-h-screen flex items-center py-24 px-6 md:px-8 lg:px-12 bg-background relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-0" />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div>
          <div className="mb-6">
            <span className="text-primary font-mono text-sm font-bold tracking-widest uppercase">
              Awards & Recognition
            </span>
          </div>

          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-16 text-balance tracking-tight bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
            Stats & Highlights
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500"
              >
                <div className="relative aspect-video bg-card/50">
                  <Image
                    src={stat.image}
                    alt={stat.title}
                    fill
                    className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-lg font-bold text-foreground">{stat.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{stat.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
