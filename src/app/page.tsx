import ParticleContainer from "@/components/particle-container";
import Hero from "@/sections/hero-section";
import Experience from "@/sections/journey-section";
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
