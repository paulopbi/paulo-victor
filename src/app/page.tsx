import ParticleContainer from "@/components/particle-container";
import ContactSection from "@/sections/contact";
import ExperienceSection from "@/sections/experience";
import Hero from "@/sections/hero-section";
import ProjectsSection from "@/sections/projects";
import Skills from "@/sections/skills-section";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <div className="relative h-full w-full overflow-hidden">
        <Skills />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
        <ParticleContainer />
      </div>
    </main>
  );
}
