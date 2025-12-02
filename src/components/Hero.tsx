"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] bg-gradient-to-br from-blue-900/40 via-blue-950/20 to-transparent rounded-full blur-[120px] opacity-70" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] bg-gradient-to-tl from-blue-900/40 via-blue-950/20 to-transparent rounded-full blur-[120px] opacity-70" />
            </div>

            <div className="container px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-center md:items-start text-center md:text-left space-y-6"
                    >
                        <div className="inline-block rounded-full bg-secondary/50 px-3 py-1 text-sm text-secondary-foreground backdrop-blur-sm border border-white/10">
                            Available for new opportunities
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/50">
                            Ananth Kumar
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground max-w-[600px]">
                            Frontend Architect - specializing in Flutter, Firebase, and Modern Web Technologies.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
                            <Button
                                size="lg"
                                className="rounded-full group transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
                                onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                View Skills
                                <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                            </Button>
                        </div>

                        <div className="flex gap-6 text-muted-foreground pt-4">
                            <a href="https://github.com/ananthrockz91" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                <Github className="h-6 w-6" />
                                <span className="sr-only">GitHub</span>
                            </a>
                            <a href="https://www.linkedin.com/in/ananth-kumar-maharajan/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                <Linkedin className="h-6 w-6" />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                            <a href="mailto:ananthrockz91@gmail.com" className="hover:text-primary transition-colors">
                                <Mail className="h-6 w-6" />
                                <span className="sr-only">Email</span>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative h-[400px] md:h-[600px] w-full flex items-end justify-center md:justify-end"
                    >
                        <div className="relative w-full h-full max-w-[500px] select-none pointer-events-none">

                            <Image
                                src="/ananth.png"
                                alt="Ananth Kumar"
                                fill
                                className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-500 [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)]"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
