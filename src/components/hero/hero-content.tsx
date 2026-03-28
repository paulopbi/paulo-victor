"use client";

import { motion } from "motion/react";
import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import { MagicCard } from "@/components/magic-ui/magic-card";
import {
  slideLeftWithBlur,
  slideRightWithBlur,
  slideTop,
} from "@/constants/animations";
import { AuroraText } from "../magic-ui/aurora-text";

export const HeroContent = ({ children }: { children: ReactNode }) => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 size-full z-10">
      {children}
    </div>
  );
};

export const HeroImage = ({ src }: { src: string | StaticImageData }) => {
  const gradientColors = {
    gradientFrom: "var(--chart-2)",
    gradientTo: "var(--chart-4)",
  };
  return (
    <motion.div
      variants={slideTop}
      initial="hidden"
      animate="show"
      transition={{ ease: "linear", duration: 0.5, delay: 0.2 }}
      className="size-70 rounded-full overflow-hidden hover:shadow-lg hover:-translate-y-4 transition-all"
    >
      <MagicCard {...gradientColors} className="border-2">
        <Image
          src={src}
          width={400}
          height={400}
          className="object-cover object-center aspect-square size-full pointer-events-none"
          alt="Imagem do programador Paulo Victor"
        />
      </MagicCard>
    </motion.div>
  );
};

export const HeroSubtitle = ({ children }: { children: ReactNode }) => {
  return (
    <motion.h2
      variants={slideLeftWithBlur}
      initial="hidden"
      animate="show"
      transition={{ ease: "easeInOut", delay: 0.2, duration: 1 }}
      className="text-center text-2xl font-medium tracking-tighter text-muted-foreground"
    >
      {children}
    </motion.h2>
  );
};

export const HeroTitle = ({ children }: { children: ReactNode }) => {
  const gradientColors = ["#3C00DB", "#DB0075", "#9810fa", "#CB00DB"];
  return (
    <motion.h1
      variants={slideRightWithBlur}
      initial="hidden"
      animate="show"
      transition={{ ease: "easeInOut", delay: 0.5, duration: 1 }}
      className="text-center text-3xl text-pretty max-w-[35ch] mx-auto tracking-wide font-bold"
    >
      <AuroraText
        className="font-bold font-sans"
        colors={gradientColors}
        speed={1.5}
      >
        {children}
      </AuroraText>
    </motion.h1>
  );
};

export const HeroDescription = ({ children }: { children: ReactNode }) => {
  return (
    <motion.p
      variants={slideLeftWithBlur}
      initial="hidden"
      animate="show"
      transition={{ ease: "easeInOut", delay: 0.8, duration: 1 }}
      className="text-center text-sm max-w-[50ch] mx-auto text-pretty text-black/80 dark:text-white/80 md:text-base"
    >
      {children}
    </motion.p>
  );
};

export const HeroAction = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      variants={slideRightWithBlur}
      initial="hidden"
      animate="show"
      transition={{ ease: "easeInOut", delay: 1, duration: 1 }}
      className="flex items-center justify-center gap-4 mt-3"
    >
      {children}
    </motion.div>
  );
};
