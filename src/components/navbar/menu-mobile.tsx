import { Menu } from "lucide-react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navigationLinks } from "@/constants/navigation-links";

const MenuMobile = () => {
  return (
    <nav className="md:hidden flex items-center justify-end gap-6">
      <AnimatedThemeToggler className="toggle-theme-button" />

      <Sheet>
        <SheetTrigger>
          <Menu className="icon-size cursor-pointer hover:text-primary transition-colors" />
          <span className="sr-only">Mobile Menu</span>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="text-muted-foreground">
              Para onde você quer ir?
            </SheetTitle>
          </SheetHeader>

          <div className="flex flex-col size-full items-stretch justify-between">
            <div className="flex flex-col pl-4 gap-6">
              {navigationLinks.map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="inline-block font-medium tracking-normal pb-1 text-base md:text-lg hover:text-primary dark:hover:text-chart-1 hover:-translate-y-1 transition-all duration-200"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MenuMobile;
