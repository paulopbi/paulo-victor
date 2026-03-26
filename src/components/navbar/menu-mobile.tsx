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
import { socialLinks } from "@/constants/social-links";

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
                  className="inline-block font-medium tracking-normal text-base md:text-lg hover:text-primary transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>

            <div className="self-center flex items-center justify-end gap-4">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  title={label}
                  href={href}
                  key={label}
                  target="_blank"
                  className="p-3 rounded-full flex items-center justify-center gap-2 transition-all border-transparent hover:bg-primary/10 text-muted-foreground hover:text-primary hover:border-primary hover:-translate-y-1"
                >
                  {<Icon className="size-6" />}
                  <span className="sr-only">{label}</span>
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
