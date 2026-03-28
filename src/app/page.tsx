import ParticleContainer from "@/components/particle-container";
import ContactSection from "@/sections/contact";
import ExperienceSection from "@/sections/experience";
import HeroSection from "@/sections/hero";
import ProjectsSection from "@/sections/projects";
import SkillsSection from "@/sections/skills";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <div className="relative h-full w-full overflow-hidden">
        <ParticleContainer />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </main>
  );
}
