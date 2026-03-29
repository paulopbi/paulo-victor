import { Download } from "lucide-react";
import {
  HeroActions,
  HeroContainer,
  HeroDescription,
  HeroImage,
  HeroSubtitle,
  HeroTitle,
} from "@/components/hero/hero-content";
import InfinityArrow from "@/components/hero/infinity-arrow";
import LiquidBackground from "@/components/hero/liquid-background";
import { InteractiveHoverButton } from "@/components/magic-ui/interactive-hover-button";
import type { SectionProps } from "@/types";
import HERO_IMG from "../../public/img/hero-img.webp";

const HeroSection = ({ ...props }: SectionProps) => {
  return (
    <section {...props} className="relative h-dvh overflow-hidden">
      {/* background */}
      <LiquidBackground />

      {/* middle */}
      <HeroContainer>
        <HeroImage src={HERO_IMG} />
        <HeroSubtitle>Me chamo Paulo Victor</HeroSubtitle>
        <HeroTitle>Desenvolvedor Fullstack</HeroTitle>
        <HeroDescription>
          É um prazer ter você aqui! Explore meu portfólio e descubra as
          tecnologias que domino, os projetos que desenvolvi e muito mais sobre
          a minha trajetória. Role para baixo e vamos juntos nessa jornada!
        </HeroDescription>

        <HeroActions>
          <a href="#" className="size-fit inline-block">
            <InteractiveHoverButton icon={<Download className="size-5" />}>
              Curriculo
            </InteractiveHoverButton>
          </a>
        </HeroActions>
      </HeroContainer>

      {/* bottom */}
      <InfinityArrow />
    </section>
  );
};

export default HeroSection;
