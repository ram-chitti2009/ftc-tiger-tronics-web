"use client"

import Image from "next/image"

const robots = [
  {
    name: "Mufasa",
    year: "2025",
    description: "DECODE season competition robot. PedroPathing with deadwheel localization, Limelight AI vision pipeline for AprilTag alignment and scoring, and mecanum drive for full omnidirectional control.",
    image: "/images/robot-images/V1/image-1.jpg",
    images: ["/images/robot-images/V1/image-1.jpg", "/images/robot-images/V1/image-2.jpg", "/images/robot-images/V1/image-3.jpg", "/images/robot-images/V1/image-4.jpg", "/images/robot-images/V1/image-5.jpg"],
    features: ["PedroPathing & Deadwheel Localization", "Limelight AI Vision Pipeline", "AprilTag Alignment & Scoring", "Mecanum Omnidirectional Drive"],
  },
  {
    name: "Simba",
    year: "WIP",
    description: "Next-gen build in progress. Upgraded slide torque, beveled drivetrain, and refined claw for higher reliability and scoring.",
    image: "/images/robot-images/V2/v2%20cad.png",
    video: "/images/robot-images/V2/v2-wip.mp4",
    features: ["Iterative Design", "QA-Focused Build", "Consistent, Reliable Scoring"],
  },
]

export function RobotsSection() {
  return (
    <section
      id="robots"
      className="relative overflow-hidden bg-background py-24 sm:py-32 lg:py-40"
    >
      <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-accent/3 rounded-full blur-[200px] -z-0" />

      <div className="section-inner relative z-10">
        <div>
          <div className="mb-6">
            <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary font-mono text-xs font-semibold tracking-widest uppercase">
              Our Robots
            </span>
          </div>

          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 md:mb-10 text-balance tracking-tight leading-[0.9]">
            <span className="bg-gradient-to-r from-foreground via-foreground/90 to-primary bg-clip-text text-transparent">
              Robot Arsenal
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mb-10 md:mb-12">
            Built for competition. Engineered to win. We share our build process and learn from other teams so the whole community gets stronger.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {robots.map((robot, index) => (
              <div
                key={index}
                className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl overflow-hidden hover:border-primary/30 hover:bg-card/70 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative aspect-video overflow-hidden bg-card">
                  {"video" in robot && robot.video ? (
                    <video
                      src={robot.video}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      muted
                      loop
                      playsInline
                      autoPlay
                      aria-label={robot.name}
                    />
                  ) : (
                    <Image
                      src={robot.image}
                      alt={robot.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                  <div className="absolute top-5 right-5 bg-primary/90 backdrop-blur-sm text-primary-foreground px-4 py-1.5 rounded-full text-xs font-bold tracking-wide shadow-lg">
                    {robot.year}
                  </div>
                </div>

                <div className="relative p-8">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{robot.name}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm">{robot.description}</p>

                  <div className="space-y-3">
                    {robot.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span className="text-sm text-muted-foreground font-light">{feature}</span>
                      </div>
                    ))}
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
