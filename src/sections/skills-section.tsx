import MarqueeCard from "@/components/skills/marquee-card";
import {
  Header,
  HeaderDescription,
  HeaderSeparator,
  HeaderTitle,
} from "@/components/ui/header";

const Skills = () => {
  return (
    <section id="habilidades" className="main-container section-margin-top">
      {/* header */}
      <Header>
        <HeaderTitle>Habilidades</HeaderTitle>
        <HeaderDescription>
          Conheça as ferramentas que venho dominando para transformar ideias em
          código.
        </HeaderDescription>
        <HeaderSeparator />
      </Header>

      {/* marquee */}
      <div className="relative mt-8">
        <MarqueeCard />
      </div>
      <div className="relative mt-8">
        <MarqueeCard reverse />
      </div>
    </section>
  );
};

export default Skills;
