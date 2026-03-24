"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import Buttons from "@/components/hero/buttons";
import HeroImage from "@/components/hero/hero-image";
import LiquidBackground from "@/components/hero/liquid-background";
import Texts from "@/components/hero/texts";

export default function Hero() {
  const { resolvedTheme } = useTheme();

  const liquidLightColors = ["#f4f4f5", "#DB0075", "#9810fa"];
  const liquidDarkColors = ["#DB0075", "#3C00DB", "#9810fa"];

  return (
    <section className="relative h-dvh overflow-hidden" id="sobre">
      {/* liquid effect */}
      <LiquidBackground
        className="size-full -z-10 inset-0 absolute"
        colors={resolvedTheme === "dark" ? liquidDarkColors : liquidLightColors}
      />

      {/* content */}
      <div className="flex flex-col items-center justify-center gap-2 size-full">
        <HeroImage />
        <Texts />
        <Buttons />
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, repeatType: "loop", duration: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="icon-size text-muted-foreground" />
      </motion.div>
    </section>
  );
}
