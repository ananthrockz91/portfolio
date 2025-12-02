"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
    return (
        <section id="contact" className="py-20 px-4 md:px-6 bg-secondary/20">
            <div className="container mx-auto max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">Get In Touch</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
                        I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <div className="flex flex-col items-center space-y-4 p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-white/5">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <Mail className="w-6 h-6" />
                            </div>
                            <h3 className="font-semibold">Email</h3>
                            <a href="mailto:ananthrockz91@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                ananthrockz91@gmail.com
                            </a>
                        </div>

                        <div className="flex flex-col items-center space-y-4 p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-white/5">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <Phone className="w-6 h-6" />
                            </div>
                            <h3 className="font-semibold">Phone</h3>
                            <a href="tel:+918098097790" className="text-muted-foreground hover:text-primary transition-colors">
                                +91 8098097790
                            </a>
                        </div>

                        <div className="flex flex-col items-center space-y-4 p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-white/5">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <h3 className="font-semibold">Location</h3>
                            <p className="text-muted-foreground">
                                Shollinganallur, Chennai
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-center gap-6">
                        <Button variant="outline" size="lg" className="rounded-full" asChild>
                            <a href="mailto:ananthrockz91@gmail.com">
                                Say Hello
                            </a>
                        </Button>
                    </div>
                </motion.div>

                <footer className="mt-20 pt-8 border-t border-white/5 text-center text-muted-foreground text-sm">
                    <p>© {new Date().getFullYear()} Ananth Kumar. All rights reserved.</p>
                </footer>
            </div>
        </section>
    );
}
