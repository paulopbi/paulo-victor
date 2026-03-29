import ParticleContainer from "@/components/particle-container";
import ContactSection from "@/sections/contact";
import ExperienceSection from "@/sections/experience";
import HeroSection from "@/sections/hero";
import ProjectsSection from "@/sections/projects";
import SkillsSection from "@/sections/skills";

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <HeroSection id="sobre" />
      <div className="relative">
        <ParticleContainer />
        <SkillsSection id="habilidades" />
        <ExperienceSection id="experiencias" />
        <ProjectsSection id="projetos" />
        <ContactSection id="contatos" />
      </div>
    </main>
  );
}
