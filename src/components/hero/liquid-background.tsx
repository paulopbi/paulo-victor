import type { ComponentProps } from "react";
import LiquidEther from "../react-bits/liquid-ether";

const LiquidBackground = ({
  colors,
  delay,
  ...props
}: ComponentProps<"div"> & { colors?: string[]; delay?: number }) => {
  return (
    <div {...props}>
      <LiquidEther
        colors={colors}
        mouseForce={80}
        cursorSize={50}
        iterationsViscous={80}
        iterationsPoisson={30}
        autoDemo
        autoResumeDelay={delay}
      />
    </div>
  );
};

export default LiquidBackground;
