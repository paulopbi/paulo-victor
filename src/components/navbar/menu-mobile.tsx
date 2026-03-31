"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { internalLinks } from "@/constants/internal-links";

const MenuMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = (openState: boolean) => {
    setIsOpen(openState);
  };

  return (
    <nav className="md:hidden flex items-center justify-end gap-6">
      <AnimatedThemeToggler className="toggle-theme-button" />

      <Sheet open={isOpen} onOpenChange={handleClose}>
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
              {internalLinks.map(({ href, label }) => (
                <a
                  onClick={() => setIsOpen(false)}
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
