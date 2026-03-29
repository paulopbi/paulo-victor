"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { arrowDownAnimation } from "@/constants/animations";

const AnimatedArrowDown = () => {
  return (
    <motion.div
      variants={arrowDownAnimation}
      animate="show"
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        duration: 1,
      }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
    >
      <ChevronDown className="size-icon" />
    </motion.div>
  );
};

export default AnimatedArrowDown;
