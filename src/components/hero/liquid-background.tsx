import type { ComponentProps } from "react";
import LiquidEther from "../react-bits/liquid-ether";

const LiquidBackground = ({
  colors,
  ...props
}: ComponentProps<"div"> & { colors?: string[] }) => {
  return (
    <div {...props}>
      <LiquidEther
        colors={colors}
        mouseForce={20}
        cursorSize={100}
        isViscous
        viscous={30}
        iterationsViscous={32}
        iterationsPoisson={32}
        resolution={0.5}
        isBounce={false}
        autoDemo
        autoSpeed={0.5}
        autoIntensity={2.2}
        takeoverDuration={0.25}
        autoResumeDelay={1000}
        autoRampDuration={0.6}
      />
    </div>
  );
};

export default LiquidBackground;
