"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

const InfinityArrow = () => {
  return (
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        duration: 2,
      }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <ChevronDown className="icon-size text-muted-foreground" />
    </motion.div>
  );
};

export default InfinityArrow;
