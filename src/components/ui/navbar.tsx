"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Logo from "@/components/ui/logo";
import MenuDesktop from "@/components/ui/menu-desktop";
import MobileMenu from "@/components/ui/menu-mobile";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isMounted, setIsMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { setTheme } = useTheme();

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setScrolled(true);
      return;
    }
    setScrolled(false);
  };

  const changeThemeColor = (e: KeyboardEvent) => {
    if (e.key === "d" || e.key === "D") {
      setTheme("dark");
      return;
    }

    if (e.key === "l" || e.key === "L") {
      setTheme("light");
      return;
    }

    return;
  };

  useEffect(() => {
    // fix the next.js hydration
    setIsMounted(true);

    // change the background of navbar
    window.addEventListener("scroll", changeBackground);

    // change the theme color
    window.addEventListener("keydown", changeThemeColor);

    return () => {
      window.removeEventListener("scroll", changeBackground);
      window.removeEventListener("keydown", changeThemeColor);
    };
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
