import { slideTopWithBlur } from "@/constants/animations";
import { motion } from "motion/react";
import Image from "next/image";
import MY_IMAGE from "../../../public/img/hero-img.webp";

const Logo = () => {
  return (
    <motion.div
      variants={slideTopWithBlur}
      initial="hidden"
      animate="show"
      transition={{ duration: 1, ease: "easeInOut" }}
      className="size-9 overflow-hidden rounded-full ring shadow-sm pointer-events-none"
    >
      <Image
        src={MY_IMAGE}
        width={100}
        height={100}
        alt="Foto do programador Paulo Victor"
        className="object-center object-cover size-full aspect-square"
      />
    </motion.div>
  );
};

export default Logo;
