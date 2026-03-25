import AccordionContainer from "@/components/experience/accordion-container";
import {
  Header,
  HeaderDescription,
  HeaderSeparator,
  HeaderTitle,
} from "@/components/ui/header";

const Experience = () => {
  return (
    <section id="experiencia" className="main-container section-margin-top">
      <Header>
        <HeaderTitle>Experiência</HeaderTitle>
        <HeaderDescription>
          Cada passo aqui foi parte da minha formação, não só técnica, mas
          também pessoal.
        </HeaderDescription>
        <HeaderSeparator />
      </Header>

      <div className="mt-6 max-w-200 mx-auto">
        <AccordionContainer />
      </div>
    </section>
  );
};

export default Experience;
