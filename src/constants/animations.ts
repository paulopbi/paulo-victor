import type { Variants } from "motion";

export const navbarContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delay: 0.2,
      staggerChildren: 0.4,
      ease: "easeInOut",
    },
  },
};

export const navbarLinksVariants: Variants = {
  hidden: { y: -20, opacity: 0, filter: "blur(20px)" },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
  },
};

export const slideLeftWithBlur: Variants = {
  hidden: { x: -20, opacity: 0, filter: "blur(20px)" },
  show: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
  },
};

export const slideRightWithBlur: Variants = {
  hidden: { x: 40, opacity: 0, filter: "blur(20px)" },
  show: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
  },
};

export const slideTopWithBlur: Variants = {
  hidden: { y: -20, opacity: 0, filter: "blur(20px)" },
  show: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
  },
};

export const slideTop: Variants = {
  hidden: { y: -20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
  },
};

export const arrowDownAnimation: Variants = {
  show: { y: [0, 10, 0] },
};
