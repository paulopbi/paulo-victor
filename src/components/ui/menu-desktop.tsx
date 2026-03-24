import { motion } from "motion/react";
import {
  navbarContainerVariants,
  navbarLinksVariants,
  slideTopWithBlur,
} from "@/constants/animations";
import { navigationLinks } from "@/constants/navigation-links";
import { AnimatedThemeToggler } from "./animated-theme-toggler";

const MenuDesktop = () => {
  return (
    <nav className="hidden md:flex items-center justify-end gap-5">
      <motion.ul
        className="flex items-center justify-end gap-4"
        variants={navbarContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {navigationLinks.map(({ label, href }) => (
          <motion.li variants={navbarLinksVariants} key={label}>
            <a
              href={href}
              className="inline-block font-medium tracking-normal text-base border-b border-transparent pb-0.5 text-foreground hover:border-b-primary hover:text-primary dark:hover:text-chart-1 hover:-translate-y-1 transition-all duration-200"
            >
              {label}
            </a>
          </motion.li>
        ))}

        <motion.li
          variants={slideTopWithBlur}
          initial="hidden"
          animate="show"
          transition={{ duration: 1, ease: "easeInOut", delay: 2.9 }}
          className="flex items-center justify-center gap-4 p-1 rounded-full border border-transparent hover:border-primary/80 hover:bg-primary/20 hover:text-primary dark:hover:border-chart-1/60 dark:hover:bg-primary dark:hover:text-chart-1 transition-all"
        >
          <AnimatedThemeToggler className="cursor-pointer" />
        </motion.li>
      </motion.ul>
    </nav>
  );
};

export default MenuDesktop;
