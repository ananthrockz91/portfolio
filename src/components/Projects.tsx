"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaAndroid, FaApple, FaGlobe } from "react-icons/fa";

const projects = [
    {
        title: "ABCD (SuperApp)",
        description: "A comprehensive Super App for Aditya Birla Capital Digital. 4+ rating with 50L+ downloads. Integrates multiple business verticals into a single unified experience.",
        tags: ["Flutter", "Dart", "SuperApp", "Micro-frontends"],
        fullstack: false,
        links: {
            android: "https://play.google.com/store/apps/details?id=com.adityabirlacapitaldigital.OneApp",
            ios: "https://apps.apple.com/in/app/abcd-aditya-birla-capital-app/id6477909524"
        }
    },
    {
        title: "ABSLAMC (Mutual Fund)",
        description: "Mobile application for Aditya Birla Sun Life AMC. 5 rating with 1K+ downloads. Features complex financial data visualization and secure transactions.",
        tags: ["Flutter", "Analytics", "Security", "Micro-frontends", "Modular Architecture"],
        fullstack: false,
        links: {
            android: "https://play.google.com/store/apps/details?id=prod.abslamc.investor",
            ios: "https://apps.apple.com/in/app/abslmf-investor-app/id6751316406"
        }
    },
    {
        title: "Tech Recruiter",
        description: "An AI-powered recruitment platform that leverages Gemini AI to streamline the hiring process. Built with React, Next.js, and Firebase.",
        tags: ["ReactJS", "Firebase", "Gemini AI", "Cloud Functions", "Razoray"],
        fullstack: true,
        links: {
            demo: "http://techrecruiter.in/"
        }
    },
    {
        title: "Free Image Optimizer",
        description: "A web-based image optimization tool hosted on Firebase. Uses modern web technologies to compress and optimize images efficiently.",
        tags: ["NextJS", "Firebase", "Image Processing"],
        fullstack: true,
        links: {
            demo: "https://freeimageoptimizer.web.app/"
        }
    },
    {
        title: "Family Connect",
        description: "Health care application for family connectivity and monitoring.",
        tags: ["Flutter", "Android", "iOS", "Healthcare"],
        fullstack: false,
        links: {
            android: "https://play.google.com/store/apps/details?id=com.centriafamilyconnect.app",
            ios: "https://apps.apple.com/in/app/centria-family-connect-app/id6755112783"
        }
    },
    {
        title: "Pebl",
        description: "Fintech application simplifying payments and transactions.",
        tags: ["Flutter", "Fintech", "Android", "iOS"],
        fullstack: false,
        links: {
            android: "https://play.google.com/store/apps/details?id=co.pebl.app",
            ios: "https://apps.apple.com/au/app/pebl/id1580839694"
        }
    },
    {
        title: "UpTrendz",
        description: "Ecommerce application built with Flutter web and Firebase cloud functions.",
        tags: ["Flutter Web", "Firebase", "Cloud Functions", "Ecommerce"],
        fullstack: true,
        links: {
            demo: "https://uptrendz-dev-71b1b.web.app/#/products"
        }
    },
    {
        title: "Electrol Data Fetcher",
        description: "Flutter web app to extract data from PDFs using Python backend and Gemini AI model on CloudRun.",
        tags: ["Flutter Web", "Python", "Gemini AI", "CloudRun"],
        fullstack: true,
        links: {
            demo: "https://amma-electoral-app.web.app/"
        }
    },
    {
        title: "HomeCare Professionals",
        description: "Internal tool for home care service company built with Flutter web and Firebase full stack.",
        tags: ["Flutter Web", "Firebase", "Internal Tool"],
        fullstack: true,
        links: {}
    },
    {
        title: "Penni",
        description: "Fintech app for the Australian market.",
        tags: ["Flutter", "Fintech", "Android", "iOS"],
        fullstack: false,
        links: {}
    },
    {
        title: "Rotoratrade",
        description: "Internal web app tool for aircraft reseller.",
        tags: ["Flutter Web", "Android", "iOS"],
        fullstack: false,
        links: {}
    },
    {
        title: "Eztrade",
        description: "Internal tool for a fintech customer.",
        tags: ["Flutter", "Android", "iOS", "Fintech"],
        fullstack: false,
        links: {}
    },
    {
        title: "Portfolio Website",
        description: "A modern, high-performance portfolio website built with Next.js, Tailwind CSS, and Framer Motion.",
        tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
        fullstack: false,
        links: {
            github: "https://github.com/ananthrockz91/portfolio"
        }
    }
];

export function Projects() {
    return (
        <section id="projects" className="py-20 px-4 md:px-6">
            <div className="container mx-auto max-w-6xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-center mb-16"
                >
                    Featured Projects
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative rounded-2xl overflow-hidden glass-card hover:bg-secondary/40 transition-colors flex flex-col"
                        >
                            <div className="p-6 space-y-4 flex-1 flex flex-col">
                                <div className="flex justify-between items-start">
                                    <div className="flex gap-3 mb-4">
                                        {/* Logic to determine icons based on tags or links */}
                                        {(() => {
                                            const isAndroid = project.tags.includes("Android") || project.links.android;
                                            const isIOS = project.tags.includes("iOS") || project.links.ios;
                                            const isWeb = project.tags.includes("React") || project.tags.includes("Next.js") || project.tags.includes("Flutter Web") || project.links.demo;

                                            return (
                                                <>
                                                    {isAndroid && (
                                                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                                            <FaAndroid className="w-6 h-6" />
                                                        </div>
                                                    )}
                                                    {isIOS && (
                                                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                                            <FaApple className="w-6 h-6" />
                                                        </div>
                                                    )}
                                                    {isWeb && !isAndroid && !isIOS && (
                                                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                                            <FaGlobe className="w-6 h-6" />
                                                        </div>
                                                    )}
                                                </>
                                            );
                                        })()}
                                    </div>
                                    {project.fullstack && (
                                        <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium border border-accent/20 h-fit">
                                            <Layers className="w-3 h-3" />
                                            Fullstack
                                        </div>
                                    )}
                                </div>

                                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-1">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground border border-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-white/5">
                                    {project.links.demo && (
                                        <Button variant="ghost" size="sm" className="flex-1" asChild>
                                            <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                                                <FaGlobe className="w-4 h-4 mr-2" />
                                                Web
                                            </a>
                                        </Button>
                                    )}
                                    {project.links.android && (
                                        <Button variant="ghost" size="sm" className="flex-1" asChild>
                                            <a href={project.links.android} target="_blank" rel="noopener noreferrer">
                                                <FaAndroid className="w-4 h-4 mr-2" />
                                                Android
                                            </a>
                                        </Button>
                                    )}
                                    {project.links.ios && (
                                        <Button variant="ghost" size="sm" className="flex-1" asChild>
                                            <a href={project.links.ios} target="_blank" rel="noopener noreferrer">
                                                <FaApple className="w-4 h-4 mr-2" />
                                                iOS
                                            </a>
                                        </Button>
                                    )}
                                    {project.links.github && (
                                        <Button variant="ghost" size="sm" className="flex-1" asChild>
                                            <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                                                <Github className="w-4 h-4 mr-2" />
                                                Code
                                            </a>
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
