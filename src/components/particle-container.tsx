"use client";

import { useTheme } from "next-themes";
import { Particles } from "./ui/particles";

const ParticleContainer = () => {
  const { resolvedTheme } = useTheme();

  const colors = {
    light: "#ddd",
    dark: "#222",
  };
  return (
    <Particles
      className="absolute inset-0 -z-10 size-full"
      quantity={130}
      size={0.8}
      color={resolvedTheme === "dark" ? colors.light : colors.dark}
    />
  );
};

export default ParticleContainer;
