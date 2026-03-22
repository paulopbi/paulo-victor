"use client";

import { useTheme } from "next-themes";
import { Particles } from "@/components/ui/particles";
import Hero from "@/sections/hero-section";
import Experience from "@/sections/journey-section";
import Projects from "@/sections/projects-section";
import Skills from "@/sections/skills-section";

export default function HomePage() {
  const { resolvedTheme } = useTheme();
  return (
    <main>
      <Hero />
      <section className="relative h-full w-full overflow-hidden">
        <Particles
          className="absolute inset-0 z-0 size-full"
          quantity={80}
          color={`${resolvedTheme === "dark" ? "#bdbdbd" : "#575757"}`}
        />
        <Skills />
        <Experience />
        <Projects />
      </section>
    </main>
  );
}
