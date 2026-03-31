import { ArrowUpRight } from "lucide-react";
import InfinityArrow from "@/components/hero/animated-arrow-down";
import {
  HeroActions,
  HeroBadge,
  HeroContainer,
  HeroDescription,
  HeroImage,
  HeroTitle,
} from "@/components/hero/hero-content";
import { InteractiveHoverButton } from "@/components/magic-ui/interactive-hover-button";
import LiquidEther from "@/components/react-bits/liquid-ether";
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
        <HeroBadge>Me chamo Paulo Victor</HeroBadge>
        <HeroImage src={HERO_IMG} alt="Imagem do programador Paulo Victor" />
        <HeroTitle>Desenvolvedor Fullstack</HeroTitle>
        <HeroDescription>
          É um prazer ter você aqui! Explore meu portfólio e descubra as
          tecnologias que domino, os projetos que desenvolvi e muito mais sobre
          a minha trajetória. Role para baixo e vamos juntos nessa jornada!
        </HeroDescription>

        <HeroActions>
          <a
            href={CV_URL}
            className="size-fit inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InteractiveHoverButton
              icon={<ArrowUpRight className="size-icon" />}
            >
              Curriculo
            </InteractiveHoverButton>
          </a>
        </HeroActions>
      </HeroContainer>

      <InfinityArrow />
    </section>
  );
};

export default HeroSection;
