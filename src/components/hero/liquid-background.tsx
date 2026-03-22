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
        mouseForce={80}
        cursorSize={50}
        iterationsViscous={80}
        iterationsPoisson={30}
        resolution={0.7}
        isBounce={true}
        autoDemo
      />
    </div>
  );
};

export default LiquidBackground;
