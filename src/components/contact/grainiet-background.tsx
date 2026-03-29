"use client";
import { GRAINIET_PROPS } from "@/constants/props";
import Grainient from "../react-bits/grainient";

const GrainietBackground = () => {
  return (
    <Grainient
      {...GRAINIET_PROPS}
      className="size-full rounded-2xl absolute inset-0 z-0"
    />
  );
};

export default GrainietBackground;
