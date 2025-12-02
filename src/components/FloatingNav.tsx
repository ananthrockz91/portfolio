"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Award, Briefcase, Code, Home, Mail, Trophy, User } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
    { id: "hero", label: "Home", icon: Home },
    { id: "summary", label: "About", icon: User },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "skills", label: "Skills", icon: Code },
    { id: "awards", label: "Awards", icon: Trophy },
    { id: "projects", label: "Projects", icon: Award },
    { id: "contact", label: "Contact", icon: Mail },
];

export function FloatingNav() {
    const [activeSection, setActiveSection] = useState("hero");
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 100], [0, 1]);
    const y = useTransform(scrollY, [0, 100], [20, 0]);

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => item.id);
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        } else if (id === "hero") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <motion.nav
            style={{ opacity, y }}
            className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:block"
        >
            <div className="rounded-2xl px-3 py-6 flex flex-col items-center gap-3 backdrop-blur-xl bg-background/60 shadow-lg shadow-black/20 border border-white/10">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.id;

                    return (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`
                                relative p-3 rounded-xl transition-all duration-300 group
                                ${isActive
                                    ? "text-primary-foreground"
                                    : "text-muted-foreground hover:text-foreground"
                                }
                            `}
                            title={item.label}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="activeSection"
                                    className="absolute inset-0 bg-primary rounded-xl"
                                    transition={{ type: "spring", duration: 0.6 }}
                                />
                            )}
                            <Icon className="w-5 h-5 relative z-10" />
                        </button>
                    );
                })}
            </div>
        </motion.nav>
    );
}
