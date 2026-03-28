"use client";

import { useTheme } from "next-themes";
import LiquidEther from "../react-bits/liquid-ether";

const LiquidBackground = () => {
  const { resolvedTheme } = useTheme();

  const liquidLightColors = ["#f4f4f5", "#DB0075", "#9810fa"];
  const liquidDarkColors = ["#DB0075", "#3C00DB", "#9810fa"];
  return (
    <LiquidEther
      colors={resolvedTheme === "dark" ? liquidDarkColors : liquidLightColors}
      mouseForce={80}
      cursorSize={50}
      iterationsViscous={80}
      iterationsPoisson={30}
      autoDemo
      autoResumeDelay={0.5}
      className="size-full z-0 inset-0 absolute"
    />
  );
};

export default LiquidBackground;
