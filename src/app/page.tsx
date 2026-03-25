import ParticleContainer from "@/components/particle-container";
import Experience from "@/sections/experience-section";
import Hero from "@/sections/hero-section";
import Projects from "@/sections/projects-section";
import Skills from "@/sections/skills-section";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <div className="relative h-full w-full overflow-hidden">
        <Skills />
        <Experience />
        <Projects />
        <ParticleContainer />
      </div>
    </main>
  );
}
