"use client";

import { motion } from "framer-motion";

export function Summary() {
    return (
        <section id="summary" className="py-20 px-4 md:px-6 bg-secondary/10">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">About Me</h2>
                    <div className="glass-card p-8 rounded-2xl space-y-6 text-lg text-muted-foreground leading-relaxed">
                        <p>
                            Over the course of <span className="text-foreground font-semibold">11 years</span>, I worked in multiple companies as my career naturally evolved from Project Management into Engineering and Flutter Architecture. Each transition was intentional—focused on gaining deeper technical exposure, solving bigger problems, and contributing to products end-to-end.
                        </p>
                        <p>
                            Rather than staying in my comfort zone, I consistently moved toward roles that offered stronger learning opportunities, leadership challenges, modern tech stacks, and increased ownership. This journey shaped me into a versatile <span className="text-primary font-semibold">Architect and problem-solver</span> who can deliver high-quality mobile experiences at scale.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
