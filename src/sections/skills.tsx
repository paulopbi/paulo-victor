import MarqueeCard from "@/components/skills/marquee-card";
import {
  Header,
  HeaderDescription,
  HeaderSeparator,
  HeaderTitle,
} from "@/components/ui/header";

const SkillsSection = () => {
  return (
    <section id="habilidades" className="main-container section-margin-top">
      <Header>
        <HeaderTitle>Habilidades</HeaderTitle>
        <HeaderDescription>
          Conheça as ferramentas que venho dominando para transformar ideias em
          código.
        </HeaderDescription>
        <HeaderSeparator />
      </Header>

      <div className="flex flex-col gap-4 relative mt-8">
        <MarqueeCard />
        <MarqueeCard reverse />
      </div>
    </section>
  );
};

export default SkillsSection;
