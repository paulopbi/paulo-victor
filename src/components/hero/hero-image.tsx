"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { slideTop } from "@/constants/animations";
import HERO_IMG from "../../../public/img/hero-img.webp";

const HeroImage = () => {
  return (
    <motion.div
      variants={slideTop}
      initial="hidden"
      animate="show"
      transition={{ ease: "linear", duration: 0.5, delay: 0.2 }}
      className="size-70 rounded-full overflow-hidden border-2 border-foreground hover:shadow-lg hover:-translate-y-4 transition-all"
    >
      <Image
        src={HERO_IMG}
        width={400}
        height={400}
        className="object-cover object-center aspect-square size-full pointer-events-none"
        alt="Imagem do programador Paulo Victor"
      />
    </motion.div>
  );
};

export default HeroImage;
