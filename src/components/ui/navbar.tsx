"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks, socialLinks } from "@/constants/links";
import { cn } from "@/lib/utils";
import MY_IMG from "../../../public/img/hero-img.webp";

export default function Navbar() {
  const [isMounted, setIsMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 40) {
      setScrolled(true);
      return;
    }

    setScrolled(false);
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: it need to run only once
  useEffect(() => {
    setIsMounted(true);
    changeBackground();

    window.addEventListener("scroll", changeBackground);

    return () => window.removeEventListener("scroll", changeBackground);
  }, []);

  if (!isMounted) return null;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 p-4 border-b",
        scrolled ? "glass-effect" : "bg-transparent border-none",
      )}
    >
      <div className="main-container flex items-center justify-between gap-4">
        {/* left */}
        <div>
          <a
            href="#sobre"
            className="flex items-center justify-center gap-3 size-9 overflow-hidden rounded-full hover:rotate-360 transition-all duration-200"
          >
            <Image
              src={MY_IMG}
              width={200}
              height={200}
              alt="Minha foto"
              className="object-center object-cover size-full"
            />
          </a>
        </div>

        {/* mobile */}
        <div className="md:hidden flex items-center justify-end gap-6">
          <AnimatedThemeToggler />

          <Sheet>
            <SheetTrigger>
              <Menu className="size-5 text-foreground" />
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
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="inline-block font-medium tracking-normal text-base md:text-lg hover:text-primary transition-colors"
                    >
                      {link.label}
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
        </div>

        {/* desktop */}
        <div className="hidden md:flex items-center justify-end gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="inline-block font-medium tracking-normal text-base hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}

          <AnimatedThemeToggler />
        </div>
      </div>
    </nav>
  );
}
