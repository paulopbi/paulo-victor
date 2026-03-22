import AccordionHeading from "@/components/accordion-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Header,
  HeaderDescription,
  HeaderSeparator,
  HeaderTitle,
} from "@/components/ui/header";
import { journey } from "@/constants/journey-constant";

const Journey = () => {
  return (
    <section id="experiencia" className="main-container section-margin-top">
      <Header>
        <HeaderTitle>Jornada</HeaderTitle>
        <HeaderDescription>
          Aqui estão os principais momentos da minha trajetória profissional
        </HeaderDescription>
        <HeaderSeparator />
      </Header>

      <div className="mt-6 max-w-200 mx-auto">
        <Accordion>
          {journey.map(
            ({ icon, description, subtitle, time, title, value }) => (
              <AccordionItem
                key={value}
                value={value}
                className="border-b-transparent"
              >
                <AccordionTrigger className="hover:no-underline cursor-pointer flex justify-center items-center gap-4">
                  <AccordionHeading
                    Icon={icon}
                    title={title}
                    subtitle={subtitle}
                  />
                </AccordionTrigger>
                <AccordionContent>
                  <div className="*:text-muted-foreground *:text-sm *:leading-relaxed *:text-balance">
                    <p className="text-sm lg:text-base ml-13">{description}</p>
                    <span className="text-right block">{time}</span>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ),
          )}
        </Accordion>
      </div>
    </section>
  );
};

export default Journey;
