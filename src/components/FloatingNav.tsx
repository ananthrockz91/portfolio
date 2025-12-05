"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Award, Briefcase, Code, Home, Mail, Trophy, User, BookOpen } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    { id: "hero", label: "Home", icon: Home },
    { id: "summary", label: "About", icon: User },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "skills", label: "Skills", icon: Code },
    { id: "awards", label: "Awards", icon: Trophy },
    { id: "projects", label: "Projects", icon: Award },
    { id: "blogs", label: "Blogs", icon: BookOpen, link: "/blogs" },
    { id: "contact", label: "Contact", icon: Mail },
];

export function FloatingNav() {
    const [activeSection, setActiveSection] = useState("hero");
    const { scrollY } = useScroll();
    const pathname = usePathname();
    const isHomePage = pathname === "/";

    const opacity = useTransform(scrollY, [0, 100], [0, 1]);
    const y = useTransform(scrollY, [0, 100], [20, 0]);

    useEffect(() => {
        if (!isHomePage) return;

        const handleScroll = () => {
            const sections = navItems.filter(item => !item.link).map(item => item.id);
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
    }, [isHomePage]);

    const scrollToSection = (id: string) => {
        if (!isHomePage) return; // Should navigate via Link if not home

        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        } else if (id === "hero") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const currentActiveSection = (!isHomePage && pathname.startsWith('/blogs')) ? 'blogs' : activeSection;

    return (
        <>
            {/* Desktop Navigation - Right Side */}
            <motion.nav
                style={{ opacity: isHomePage ? opacity : 1, y: isHomePage ? y : 0 }}
                initial={!isHomePage ? { opacity: 1, y: 0 } : {}}
                className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:block"
            >
                <div className="rounded-2xl px-3 py-6 flex flex-col items-center gap-3 backdrop-blur-xl bg-background/60 shadow-lg shadow-black/20 border border-white/10">
                    {navItems.filter(item => item.id !== 'hero').map((item) => {
                        const Icon = item.icon;
                        const isActive = currentActiveSection === item.id;

                        const content = (
                            <>
                                {isActive && (
                                    <motion.div
                                        layoutId="activeSection"
                                        className="absolute inset-0 bg-primary rounded-xl"
                                        transition={{ type: "spring", duration: 0.6 }}
                                    />
                                )}
                                <Icon className="w-5 h-5 relative z-10" />
                            </>
                        );

                        const commonClasses = `
                            relative p-3 rounded-xl transition-all duration-300 group flex items-center justify-center
                            ${isActive
                                ? "text-primary-foreground"
                                : "text-muted-foreground hover:text-foreground"
                            }
                        `;

                        if (item.link) {
                            return (
                                <Link
                                    key={item.id}
                                    href={item.link}
                                    className={commonClasses}
                                    title={item.label}
                                >
                                    {content}
                                </Link>
                            );
                        }

                        // If we are not on home page, section links should go to home + section
                        if (!isHomePage) {
                            return (
                                <Link
                                    key={item.id}
                                    href={`/#${item.id}`}
                                    className={commonClasses}
                                    title={item.label}
                                >
                                    {content}
                                </Link>
                            );
                        }

                        return (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={commonClasses}
                                title={item.label}
                            >
                                {content}
                            </button>
                        );
                    })}
                </div>
            </motion.nav>

            {/* Mobile Navigation - Bottom Bar */}
            <motion.nav
                style={{ opacity: isHomePage ? opacity : 1 }}
                initial={!isHomePage ? { opacity: 1 } : {}}
                className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
            >
                <div className="mx-4 mb-4 rounded-2xl px-2 py-3 backdrop-blur-xl bg-background/80 shadow-lg shadow-black/30 border border-white/10">
                    <div className="flex items-center justify-around gap-1">
                        {navItems.filter(item => item.id !== 'hero').map((item) => {
                            const Icon = item.icon;
                            const isActive = currentActiveSection === item.id;

                            const content = (
                                <>
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeSectionMobile"
                                            className="absolute inset-0 bg-primary rounded-xl"
                                            transition={{ type: "spring", duration: 0.6 }}
                                        />
                                    )}
                                    <Icon className="w-5 h-5 relative z-10 flex-shrink-0" />
                                    {isActive && (
                                        <motion.span
                                            initial={{ opacity: 0, y: -5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -5 }}
                                            transition={{ duration: 0.2 }}
                                            className="text-[10px] font-medium relative z-10 whitespace-nowrap text-center leading-tight"
                                        >
                                            {item.label}
                                        </motion.span>
                                    )}
                                </>
                            );

                            const commonClasses = `
                                relative flex flex-col items-center justify-center gap-1 px-2 py-2 rounded-xl transition-all duration-300
                                ${isActive ? 'min-w-[60px]' : 'min-w-[48px]'}
                                ${isActive
                                    ? "text-primary-foreground"
                                    : "text-muted-foreground active:text-foreground"
                                }
                            `;

                            if (item.link) {
                                return (
                                    <Link
                                        key={item.id}
                                        href={item.link}
                                        className={commonClasses}
                                    >
                                        {content}
                                    </Link>
                                );
                            }

                            if (!isHomePage) {
                                return (
                                    <Link
                                        key={item.id}
                                        href={`/#${item.id}`}
                                        className={commonClasses}
                                    >
                                        {content}
                                    </Link>
                                );
                            }

                            return (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={commonClasses}
                                >
                                    {content}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </motion.nav>
        </>
    );
}

