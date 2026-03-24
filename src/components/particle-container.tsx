"use client";

import { useTheme } from "next-themes";
import { Particles } from "./ui/particles";

const ParticleContainer = () => {
  const { resolvedTheme } = useTheme();

  const colors = {
    light: "#fff",
    dark: "#000",
  };
  return (
    <Particles
      className="absolute inset-0 -z-10 size-full"
      quantity={108}
      color={resolvedTheme === "dark" ? colors.light : colors.dark}
    />
  );
};

export default ParticleContainer;
