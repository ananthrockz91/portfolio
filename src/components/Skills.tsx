"use client";

import { motion } from "framer-motion";

const skillCategories = [
    {
        title: "Primary Technical Skills",
        skills: [
            { name: "Dart", level: 95 },
            { name: "Flutter (Android, iOS, Web)", level: 95 },
            { name: "FlutterFlow", level: 90 },
            { name: "Firebase Cloud Functions", level: 85 },
            { name: "Serverpod", level: 80 },
            { name: "Firebase DB", level: 90 },
            { name: "GCP Infra", level: 80 },
        ]
    },
    {
        title: "Other Technical Skills",
        skills: [
            { name: "MySQL / PostgreSQL", level: 50 },
            { name: "CloudRun", level: 60 },
            { name: "NextJS", level: 50 },
            { name: "Python / FastAPI", level: 60 },
            { name: "GitHub Actions (CI/CD)", level: 80 },
            { name: "GenAI", level: 70 },
        ]
    },
    {
        title: "Professional Skills",
        skills: [
            { name: "Delivery Management", level: 90 },
            { name: "Client Coordination", level: 95 },
            { name: "Communication", level: 95 },
            { name: "Solution Architecture", level: 90 },
        ]
    }
];

export function Skills() {
    return (
        <section id="skills" className="py-20 px-4 md:px-6 bg-secondary/10">
            <div className="container mx-auto max-w-6xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-center mb-16"
                >
                    Skills & Expertise
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-6 rounded-2xl"
                        >
                            <h3 className="text-xl font-bold mb-6 text-primary">{category.title}</h3>
                            <div className="space-y-4">
                                {category.skills.map((skill, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between mb-1">
                                            <span className="text-sm font-medium">{skill.name}</span>
                                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                                                className="h-full bg-gradient-to-r from-primary to-accent"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
