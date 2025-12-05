import { Trophy } from "lucide-react";
import React from "react";

export function AchievementsSection() {
    const achievements: Array<{
        title: string;
        event: string;
        year: string;
        description: string;
        icon: React.ReactElement;
    }> = []

    return (
        <section
            id="achievements"
            className="min-h-screen flex items-center py-24 px-6 bg-background relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-0" />
            
            <div className="max-w-7xl mx-auto relative z-10 w-full">
                <div>
                    <div className="mb-6">
                        <span className="text-primary font-mono text-sm font-bold tracking-widest uppercase">Our Achievements</span>
                    </div>

                    <h2 className="text-6xl md:text-8xl font-black mb-20 text-balance tracking-tight section-title bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
                        Awards & Recognition
                    </h2>

                    {achievements.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {achievements.map((achievement, index) => (
                                <div
                                    key={index}
                                    className="group bg-card border-2 border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 interactive-card magnetic"
                                >
                                    <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20">
                                        {achievement.icon}
                                    </div>
                                    <div className="text-primary text-sm font-bold mb-2">{achievement.year}</div>
                                    <h3 className="text-xl font-bold mb-2 text-foreground">{achievement.title}</h3>
                                    <p className="text-xs text-muted-foreground mb-2 font-medium">{achievement.event}</p>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{achievement.description}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 border-2 border-primary/20 mb-6">
                                <Trophy className="w-12 h-12 text-primary/50" />
                            </div>
                            <p className="text-xl text-muted-foreground mb-4">Awards coming soon!</p>
                            <p className="text-muted-foreground">We're working hard to earn our first recognition.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
