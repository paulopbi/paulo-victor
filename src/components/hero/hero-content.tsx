"use client";

import { AuroraText } from "@/components/magic-ui/aurora-text";
import {
  slideLeftWithBlur,
  slideRightWithBlur,
  slideTop,
} from "@/constants/animations";
import { AURORA_GRADIENT_PROPS } from "@/constants/props";
import { cn } from "@/lib/utils";
import type { ChildrenProp } from "@/types";
import { motion } from "motion/react";
import Image, { type StaticImageData } from "next/image";
import type { ComponentProps } from "react";

export const HeroContainer = ({
  children,
  className,
  ...props
}: ComponentProps<"div">) => {
  return (
    <div
      {...props}
      className={cn(
        "absolute inset-0 flex flex-col items-center justify-center size-full z-10",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const HeroBadge = ({ children }: ChildrenProp) => {
  return (
    <motion.span
      variants={slideLeftWithBlur}
      initial="hidden"
      animate="show"
      transition={{ ease: "easeInOut", delay: 0.3, duration: 1 }}
      className="backdrop-blur-2xl text-white/80 border border-white/10 px-4 py-1 rounded-full font-medium flex items-center justify-center gap-2 mb-6"
    >
      <div className="size-2 rounded-full bg-white/80 animate-pulse" />
      {children}
    </motion.span>
  );
};

export const HeroImage = ({
  src,
  alt,
}: {
  src: string | StaticImageData;
  alt: string;
}) => {
  return (
    <motion.div
      variants={slideTop}
      initial="hidden"
      animate="show"
      transition={{ ease: "easeInOut", duration: 1 }}
      className="size-64 rounded-full aspect-square overflow-hidden border-2 border-white/25 mb-4 hover:border-white/50 transition-colors"
    >
      <Image
        src={src}
        width={400}
        height={400}
        className="object-cover object-center size-full hover:scale-[110%] transition-transform"
        alt={alt}
      />
    </motion.div>
  );
};

export const HeroTitle = ({ children }: ChildrenProp) => {
  return (
    <motion.h1
      variants={slideRightWithBlur}
      initial="hidden"
      animate="show"
      transition={{ ease: "easeInOut", delay: 0.4, duration: 1 }}
    >
      <AuroraText
        className="text-center text-2xl md:text-3xl lg:text-4xl text-balance mb-1 max-w-[35ch] px-4 mx-auto tracking-wide font-bold md:px-0 font-sans"
        {...AURORA_GRADIENT_PROPS}
      >
        {children}
      </AuroraText>
    </motion.h1>
  );
};

export const HeroDescription = ({ children }: ChildrenProp) => {
  return (
    <motion.p
      variants={slideLeftWithBlur}
      initial="hidden"
      animate="show"
      transition={{ ease: "easeInOut", delay: 0.5, duration: 1 }}
      className="text-center text-sm md:text-base max-w-[50ch] px-4 mx-auto text-pretty mb-4 text-white md:px-0"
    >
      {children}
    </motion.p>
  );
};
