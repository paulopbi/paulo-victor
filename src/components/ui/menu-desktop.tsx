import { navigationLinks } from "@/constants/navigation-links";
import { AnimatedThemeToggler } from "./animated-theme-toggler";

const MenuDesktop = () => {
  return (
    <nav className="hidden md:flex items-center justify-end gap-5">
      <div className="flex items-center gap-4">
        {navigationLinks.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="inline-block font-medium tracking-normal text-base text-foreground/80 hover:text-primary hover:-translate-y-1 transition-all duration-200"
          >
            {label}
          </a>
        ))}
      </div>

      <div className="flex items-center justify-center gap-4">
        <AnimatedThemeToggler className="toggle-theme-button" />
      </div>
    </nav>
  );
};

export default MenuDesktop;
