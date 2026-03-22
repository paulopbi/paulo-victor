import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import Buttons from "@/components/hero/buttons";
import HeroImage from "@/components/hero/hero-image";
import LiquidBackground from "@/components/hero/liquid-background";
import Texts from "@/components/hero/texts";

export default function Hero() {
  return (
    <section className="relative h-dvh overflow-hidden" id="sobre">
      {/* liquid effect */}
      <LiquidBackground
        className="size-full -z-10 inset-0 absolute"
        colors={["#8400DB", "var(--secondary)", "var(--chart-4)"]}
      />

      {/* content */}
      <div className="flex flex-col items-center justify-center gap-2 size-full">
        <HeroImage />
        <Texts />
        <Buttons />
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, repeatType: "loop", duration: 1.8 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="icon-size text-muted-foreground" />
      </motion.div>
    </section>
  );
}
