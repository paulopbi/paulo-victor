"use client";

import { motion } from "motion/react";
import CTA from "@/components/call-to-action";
import InfinityArrow from "@/components/hero/animated-arrow-down";
import {
  HeroBadge,
  HeroContainer,
  HeroDescription,
  HeroImage,
  HeroTitle,
} from "@/components/hero/hero-content";
import LiquidEther from "@/components/react-bits/liquid-ether";
import { slideRightWithBlur } from "@/constants/animations";
import { CV_URL } from "@/constants/external-links";
import { LIQUID_ETHER_PROPS } from "@/constants/props";
import type { SectionProps } from "@/types";
import HERO_IMG from "../../public/img/me-optimized.webp";

const HeroSection = ({ ...props }: SectionProps) => {
  return (
    <section {...props} className="relative h-dvh overflow-hidden">
      <LiquidEther
        {...LIQUID_ETHER_PROPS}
        className="size-full z-0 inset-0 absolute"
      />

      <HeroContainer>
        <HeroBadge>Disponível Para Trabalho</HeroBadge>
        <HeroImage src={HERO_IMG} alt="Imagem do programador Paulo Victor" />
        <HeroTitle>Desenvolvedor Fullstack</HeroTitle>
        <HeroDescription>
          Olá mundo, me chamo Paulo Victor, é um prazer ter você aqui! Explore
          meu portfólio e descubra as tecnologias que domino, os projetos que
          desenvolvi e muito mais sobre a minha trajetória. Role para baixo e
          vamos juntos nessa jornada!
        </HeroDescription>

        <motion.div
          variants={slideRightWithBlur}
          initial="hidden"
          animate="show"
          transition={{ ease: "easeInOut", delay: 0.6, duration: 1 }}
        >
          <CTA href={CV_URL}>Curriculo</CTA>
        </motion.div>
      </HeroContainer>

      <InfinityArrow />
    </section>
  );
};

export default HeroSection;
