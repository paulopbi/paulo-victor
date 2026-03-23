import type { Variants } from "motion";

export const entranceAnimation: Variants = {
  hidden: { opacity: 0, y: -10, filter: "blur(20px)" },
  show: { opacity: 1, y: "initial", filter: "blur(0px)" },
};

export const navbarContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

export const navbarItemVariants: Variants = {
  hidden: { y: -20, opacity: 0, filter: "blur(24px)" },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.4 },
  },
};
