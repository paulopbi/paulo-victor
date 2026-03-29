"use client";

import { motion } from "motion/react";
import Image, { type StaticImageData } from "next/image";
import type { ComponentProps, ReactNode } from "react";
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
        "absolute inset-0 flex flex-col items-center justify-center gap-2 size-full z-10",
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
      transition={{ ease: "easeInOut", delay: 0.2, duration: 1 }}
      className="relative text-center text-base tracking-wide text-foreground/70 glass-effect px-4 py-1 rounded-full border border-border/30"
    >
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
      transition={{ ease: "linear", duration: 0.5, delay: 0.2 }}
      className="size-64 rounded-full aspect-square overflow-hidden ring-2 mt-4 hover:ring-primary transition-colors"
    >
      <Image
        src={src}
        width={400}
        height={400}
        className="object-cover object-center size-full"
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
      transition={{ ease: "easeInOut", delay: 0.5, duration: 1 }}
      className="text-center text-2xl text-pretty max-w-[35ch] px-4 mx-auto tracking-wide font-bold md:text-3xl md:px-0"
    >
      <AuroraText className="font-bold font-sans" {...AURORA_GRADIENT_PROPS}>
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
      transition={{ ease: "easeInOut", delay: 0.8, duration: 1 }}
      className="text-center text-sm max-w-[50ch] px-4 mx-auto text-pretty text-foreground md:text-base md:px-0"
    >
      {children}
    </motion.p>
  );
};

export const HeroActions = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      variants={slideRightWithBlur}
      initial="hidden"
      animate="show"
      transition={{ ease: "easeInOut", delay: 1, duration: 1 }}
      className={cn("flex items-center justify-center gap-4 mt-3", className)}
    >
      {children}
    </motion.div>
  );
};
