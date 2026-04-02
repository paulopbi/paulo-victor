import { motion } from "motion/react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import {
  navbarContainerVariants,
  navbarLinksVariants,
  slideTopWithBlur,
} from "@/constants/animations";
import { INTERNAL_LINKS } from "@/constants/internal-links";

const MenuDesktop = () => {
  return (
    <nav className="hidden md:flex items-center justify-end gap-5">
      <motion.ul
        className="flex items-center justify-end gap-4"
        variants={navbarContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {INTERNAL_LINKS.map(({ label, href }) => (
          <motion.li variants={navbarLinksVariants} key={label}>
            <a
              href={href}
              className="inline-block font-semibold text-base text-foreground text-hover hover:-translate-y-1 transition-all"
            >
              {label}
            </a>
          </motion.li>
        ))}

        <motion.li
          variants={slideTopWithBlur}
          initial="hidden"
          animate="show"
          transition={{ duration: 1, delay: 1.5 }}
          className="flex items-center justify-center gap-4 hover:-translate-y-1 transition-transform"
        >
          <AnimatedThemeToggler className="cursor-pointer text-hover transition-colors" />
        </motion.li>
      </motion.ul>
    </nav>
  );
};

export default MenuDesktop;
