/** biome-ignore-all lint/correctness/useExhaustiveDependencies: the useEffect don't have any dependency */
"use client";

import { useEffect, useState } from "react";
import Logo from "@/components/ui/logo";
import MenuDesktop from "@/components/ui/menu-desktop";
import MobileMenu from "@/components/ui/menu-mobile";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isMounted, setIsMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setScrolled(true);
      return;
    }
    setScrolled(false);
  };

  useEffect(() => {
    setIsMounted(true);
    changeBackground();

    window.addEventListener("scroll", changeBackground);

    return () => window.removeEventListener("scroll", changeBackground);
  }, []);

  if (!isMounted) return null;

  return (
    <header
      className={cn(
        "main-container fixed top-0 left-0 right-0 z-50 py-3 px-4 transition-all duration-300 bg-transparent border border-transparent",
        scrolled &&
          "glass-effect shadow-lg md:border-border/75 md:rounded-xl md:translate-y-2",
      )}
    >
      <div className="flex items-center justify-between gap-8">
        <Logo />
        <MobileMenu />
        <MenuDesktop />
      </div>
    </header>
  );
}
