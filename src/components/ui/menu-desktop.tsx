import { motion } from "motion/react";
import {
  navbarContainerVariants,
  navbarItemVariants,
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
          <motion.li variants={navbarItemVariants} key={label}>
            <a
              href={href}
              className="inline-block font-medium tracking-normal text-base text-foreground/80 hover:text-primary hover:-translate-y-1 transition-all duration-200"
            >
              {label}
            </a>
          </motion.li>
        ))}

        <li className="flex items-center justify-center gap-4">
          <AnimatedThemeToggler className="toggle-theme-button" />
        </li>
      </motion.ul>
    </nav>
  );
};

export default MenuDesktop;
