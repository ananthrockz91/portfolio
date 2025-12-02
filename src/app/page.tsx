import { Hero } from "@/components/Hero";
import { Summary } from "@/components/Summary";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Awards } from "@/components/Awards";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { FloatingNav } from "@/components/FloatingNav";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/20">
      <FloatingNav />
      <div id="hero">
        <Hero />
      </div>
      <Summary />
      <Experience />
      <Skills />
      <Awards />
      <Projects />
      <Contact />
    </main>
  );
}
