"use client";

import { motion } from "framer-motion";
import { Calendar, Building2, Briefcase } from "lucide-react";

const experiences = [
    {
        company: "Neurealm, Chennai",
        role: "Architect - Flutter Application Development",
        period: "Mar 2023 - PRESENT",
        description: "Building a hybrid Super App in Android, iOS, and Web mobile apps with Flutter and FlutterFlow for Aditya Birla Capital Digital and apps for Aditya Birla Sun Life AMC.",
        highlights: [
            "End-to-end architecture for ABCD (SuperApp) and ABSLAMC (Mutual fund).",
            "SDKs integrations like Clevertap, Mixpanel, Appsflyer, UPI, UserExperior, JustPay, RazorPay, App Security with AppProtect, Cobrowse, etc.",
            "Modular architecture for different app modules",
            "Implementation of a core library for modules to have shared core finalities",
            "CI/CD with XCode Cloud and GitHub Actions",
            "App development proposals, planning and execution",
            "Joined as a Lead and promoted in 6 months to work on large-scale SuperApp ecosystems"
        ]
    },
    {
        company: "Nativewit Technologies Pvt Ltd, Chennai",
        role: "Mobile Application Developer",
        period: "Sep 2021 - Mar 2023",
        description: "Developing hybrid Android and iOS mobile apps and maintaining the apps in production.",
        highlights: []
    },
    {
        company: "CBNITS India Pvt Ltd, Kolkata",
        role: "Mobile Application Developer",
        period: "Oct 2020 - Sep 2021",
        description: "Developing hybrid Android and iOS mobile apps and maintaining the apps in production.",
        highlights: []
    },
    {
        company: "Newgen Knowledge Works, Chennai",
        role: "Project Manager",
        period: "Aug 2019 - Dec 2020",
        description: "Client Management and Project Management.",
        highlights: []
    },
    {
        company: "SPi Technologies, Chennai",
        role: "Project Manager",
        period: "Feb 2018 - Aug 2019",
        description: "Client Management and Project Management.",
        highlights: []
    },
    {
        company: "HCL Technologies, Chennai",
        role: "Project Manager",
        period: "Jul 2016 - Feb 2018",
        description: "Client Management and Project Management.",
        highlights: []
    },
    {
        company: "TNQ Technologies, Chennai",
        role: "Associate – Copy editor",
        period: "Oct 2014 - Jul 2016",
        description: "Client Management and Project Management.",
        highlights: []
    }
];

export function Experience() {
    return (
        <section id="experience" className="py-20 px-4 md:px-6">
            <div className="container mx-auto max-w-5xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-center mb-16"
                >
                    Work Experience
                </motion.h2>

                <div className="relative space-y-12">
                    {/* Timeline Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-4 md:left-1/2 top-0 w-4 h-4 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background hidden md:block" />

                            <div className="flex-1 md:w-1/2">
                                <div className={`glass-card p-6 rounded-xl border-l-4 border-l-primary md:border-l-0 md:border-t-4 md:border-t-primary hover:bg-white/5 transition-colors ${index % 2 === 0 ? "md:text-left" : "md:text-right"
                                    }`}>
                                    <div className={`flex items-center gap-2 text-primary mb-2 ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                                        }`}>
                                        <Building2 className="w-4 h-4" />
                                        <span className="font-semibold">{exp.company}</span>
                                    </div>

                                    <h3 className="text-xl font-bold mb-1">{exp.role}</h3>

                                    <div className={`flex items-center gap-2 text-sm text-muted-foreground mb-4 ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                                        }`}>
                                        <Calendar className="w-4 h-4" />
                                        <span>{exp.period}</span>
                                    </div>

                                    <p className="text-muted-foreground mb-4">{exp.description}</p>

                                    {exp.highlights.length > 0 && (
                                        <ul className={`space-y-2 text-sm text-muted-foreground/80 ${index % 2 === 0 ? "text-left" : "md:text-right text-left"
                                            }`}>
                                            {exp.highlights.map((highlight, i) => (
                                                <li key={i} className="flex gap-2 items-start justify-start md:justify-inherit">
                                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                                    <span>{highlight}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>

                            {/* Empty space for the other side of timeline */}
                            <div className="flex-1 md:w-1/2 hidden md:block" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
