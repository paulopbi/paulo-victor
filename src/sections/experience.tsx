import {
  ExperienceBody,
  ExperienceBodyDescription,
  ExperienceBodyTime,
} from "@/components/experience/experience-body";
import {
  ExperienceHeader,
  ExperienceHeaderContent,
  ExperienceHeaderIcon,
} from "@/components/experience/experience-header";
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
import { experienceInfo } from "@/constants/experience-constant";

const ExperienceSection = () => {
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

      <div className="mt-6 max-w-225 mx-auto">
        <Accordion>
          {experienceInfo.map(
            ({ icon: Icon, description, subtitle, time, title, value }) => (
              <AccordionItem
                key={value}
                value={value}
                className="border-b-transparent"
              >
                <AccordionTrigger className="hover:no-underline cursor-pointer">
                  <ExperienceHeader>
                    <ExperienceHeaderIcon Icon={Icon} />
                    <ExperienceHeaderContent
                      title={title}
                      subtitle={subtitle}
                    />
                  </ExperienceHeader>
                </AccordionTrigger>

                <AccordionContent>
                  <ExperienceBody>
                    <ExperienceBodyDescription>
                      {description}
                    </ExperienceBodyDescription>
                    <ExperienceBodyTime>{time}</ExperienceBodyTime>
                  </ExperienceBody>
                </AccordionContent>
              </AccordionItem>
            ),
          )}
        </Accordion>
      </div>
    </section>
  );
};

export default ExperienceSection;
