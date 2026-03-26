import { motion } from "motion/react";
import { AuroraText } from "@/components/magic-ui/aurora-text";
import { slideLeftWithBlur, slideRightWithBlur } from "@/constants/animations";

const Texts = () => {
  return (
    <div className="flex flex-col gap-2 mt-4">
      {/* name */}
      <motion.h2
        variants={slideLeftWithBlur}
        initial="hidden"
        animate="show"
        transition={{ ease: "easeInOut", delay: 0.5, duration: 1 }}
        className="text-center text-2xl font-medium tracking-tighter text-muted-foreground"
      >
        Me chamo Paulo Victor
      </motion.h2>

      {/* title */}
      <motion.h1
        variants={slideRightWithBlur}
        initial="hidden"
        animate="show"
        transition={{ ease: "easeInOut", delay: 0.7, duration: 1 }}
        className="text-center text-3xl text-pretty max-w-[35ch] mx-auto tracking-wide font-bold"
      >
        Sou um{" "}
        <AuroraText
          className="font-bold font-sans"
          colors={["#3C00DB", "#DB0075", "#9810fa", "#CB00DB"]}
          speed={1.5}
        >
          Desenvolvedor Fullstack
        </AuroraText>
      </motion.h1>

      {/* description */}
      <motion.p
        variants={slideLeftWithBlur}
        initial="hidden"
        animate="show"
        transition={{ ease: "easeInOut", delay: 0.9, duration: 1 }}
        className="text-center text-sm max-w-[50ch] mx-auto text-pretty text-black/80 dark:text-white/80 md:text-base"
      >
        É um prazer ter você aqui! Explore meu portfólio e descubra as
        tecnologias que domino, os projetos que desenvolvi e muito mais sobre a
        minha trajetória. Role para baixo e vamos juntos nessa jornada!
      </motion.p>
    </div>
  );
};

export default Texts;
