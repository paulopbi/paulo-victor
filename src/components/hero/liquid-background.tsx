"use client";

import { LIQUID_ETHER_PROPS } from "@/constants/props";
import LiquidEther from "../react-bits/liquid-ether";

const LiquidBackground = () => {
  return (
    <LiquidEther
      {...LIQUID_ETHER_PROPS}
      className="size-full z-0 inset-0 absolute"
    />
  );
};

export default LiquidBackground;
