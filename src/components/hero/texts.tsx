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
        className="text-center text-sm max-w-[50ch] mx-auto tracking-tighter text-pretty text-black/90 dark:text-white/90 md:text-base"
      >
        É um prazer ter você aqui, me conheça um pouco mais atráves do meu
        portfólio, nele você irá encontrar as técnologias, projetos, contatos e
        mais sobre mim. Role para baixo para continuar!
      </motion.p>
    </div>
  );
};

export default Texts;
