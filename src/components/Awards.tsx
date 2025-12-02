"use client";

import { motion } from "framer-motion";
import { Award, Trophy } from "lucide-react";

const awards = [
    {
        title: "Neu AI Trailblazer of Q1",
        organization: "Neurealm",
        year: "2025",
        icon: Trophy
    },
    {
        title: "Star Performer of Q1",
        organization: "Neurealm",
        year: "2024",
        icon: Award
    },
    {
        title: "Best Performer of the Q2",
        organization: "HCL",
        period: "AMJ 2017",
        icon: Trophy
    },
    {
        title: "Star Performer of the Month",
        organization: "HCL",
        period: "October 2015 & January 2016",
        icon: Award
    },
    {
        title: "Best Kaizen of the Month",
        organization: "HCL",
        period: "April 2015 & July 2015",
        icon: Award
    },
    {
        title: "Best Kaizen of the Year",
        organization: "TNQ",
        year: "2015",
        icon: Trophy
    }
];

export function Awards() {
    return (
        <section id="awards" className="py-20 px-4 md:px-6">
            <div className="container mx-auto max-w-6xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-center mb-16"
                >
                    Awards & Recognition
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {awards.map((award, index) => {
                        const Icon = award.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative rounded-2xl overflow-hidden glass-card hover:bg-secondary/40 transition-all p-6"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform flex-shrink-0">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-lg font-bold group-hover:text-primary transition-colors mb-2">
                                            {award.title}
                                        </h3>
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <span className="font-medium text-accent">{award.organization}</span>
                                            <span>•</span>
                                            <span>{award.year || award.period}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
