import { Download } from "lucide-react";
import {
  HeroAction,
  HeroContent,
  HeroDescription,
  HeroImage,
  HeroSubtitle,
  HeroTitle,
} from "@/components/hero/hero-content";
import InfinityArrow from "@/components/hero/infinity-arrow";
import LiquidBackground from "@/components/hero/liquid-background";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import HERO_IMG from "../../public/img/hero-img.webp";

const HeroSection = () => {
  return (
    <section className="relative h-dvh overflow-hidden" id="sobre">
      <LiquidBackground />

      <HeroContent>
        <HeroImage src={HERO_IMG} />
        <HeroSubtitle>Me chamo Paulo Victor</HeroSubtitle>
        <HeroTitle>Desenvolvedor Fullstack</HeroTitle>
        <HeroDescription>
          É um prazer ter você aqui! Explore meu portfólio e descubra as
          tecnologias que domino, os projetos que desenvolvi e muito mais sobre
          a minha trajetória. Role para baixo e vamos juntos nessa jornada!
        </HeroDescription>

        <HeroAction>
          <a href="#" className="size-fit inline-block">
            <InteractiveHoverButton icon={<Download />}>
              Curriculo
            </InteractiveHoverButton>
          </a>
        </HeroAction>
      </HeroContent>

      <InfinityArrow />
    </section>
  );
};

export default HeroSection;
