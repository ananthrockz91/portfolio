"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-50 animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] opacity-50 animate-pulse delay-1000" />
            </div>

            <div className="container px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4"
                    >
                        <div className="inline-block rounded-full bg-secondary/50 px-3 py-1 text-sm text-secondary-foreground backdrop-blur-sm border border-white/10">
                            Available for new opportunities
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/50">
                            Ananth Kumar
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground max-w-[600px] mx-auto">
                            Frontend Architect - specializing in Flutter, Firebase, and Modern Web Technologies.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-wrap gap-4 justify-center"
                    >


                        <Button
                            size="lg"
                            className="rounded-full group transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
                            onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            View Skills
                            <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex gap-6 text-muted-foreground"
                    >
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
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
