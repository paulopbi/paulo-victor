"use client";

import { motion } from "motion/react";
import Image, { type StaticImageData } from "next/image";
import type { ComponentProps } from "react";
import { AuroraText } from "@/components/magic-ui/aurora-text";
import {
  slideLeftWithBlur,
  slideRightWithBlur,
  slideTop,
} from "@/constants/animations";
import { AURORA_GRADIENT_PROPS } from "@/constants/props";
import { cn } from "@/lib/utils";
import type { ChildrenProp } from "@/types";

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
      className="bg-lime-400/10 text-lime-900 border border-lime-900 dark:bg-lime-300/10 dark:text-lime-600 dark:border-lime-600 px-4 py-1 rounded-full font-medium flex items-center justify-center gap-2 mb-4"
    >
      <div className="size-2 rounded-full bg-lime-900 dark:bg-lime-600 animate-pulse" />
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
      className="size-64 rounded-full aspect-square overflow-hidden ring-2 mb-4"
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
      className="text-center text-sm md:text-base max-w-[50ch] px-4 mx-auto text-pretty mb-4 text-foreground/90 dark:text-muted-foreground md:px-0"
    >
      {children}
    </motion.p>
  );
};
