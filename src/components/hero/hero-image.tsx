import { motion } from "motion/react";
import Image from "next/image";
import { entranceAnimation } from "@/constants/animations";
import HERO_IMG from "../../../public/img/hero-img.webp";

const HeroImage = () => {
  return (
    <motion.div
      variants={entranceAnimation}
      initial="hidden"
      animate="show"
      transition={{ ease: "easeIn" }}
      className="size-80 rounded-full overflow-hidden border-2 border-foreground hover:-translate-y-4 hover:shadow-lg hover:scale-[1.1] transition-all duration-100"
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
