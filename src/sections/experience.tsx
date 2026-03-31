import {
  ExperienceBody,
  ExperienceBodyDescription,
  ExperienceBodyTime,
} from "@/components/experience/experience-body";
import {
  ExperienceHeader,
  ExperienceHeaderContent,
  ExperienceHeaderIcon,
  ExperienceHeaderSubtitle,
  ExperienceHeaderTitle,
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
import { experiencesInfo } from "@/constants/info";
import type { SectionProps } from "@/types";

const ExperienceSection = ({ ...props }: SectionProps) => {
  return (
    <section {...props} className="main-container section-margin-top">
      <Header>
        <HeaderTitle>Experiência</HeaderTitle>
        <HeaderDescription>
          Cada passo aqui foi parte da minha formação, não só técnica, mas
          também pessoal.
        </HeaderDescription>
        <HeaderSeparator />
      </Header>

      <Accordion className="mt-10 max-w-225 mx-auto">
        {experiencesInfo.map(
          ({ icon, description, subtitle, time, title, value }) => (
            <AccordionItem key={value} value={value} className="border-none">
              <AccordionTrigger className="hover:no-underline cursor-pointer">
                <ExperienceHeader>
                  <ExperienceHeaderIcon Icon={icon} />
                  <ExperienceHeaderContent>
                    <ExperienceHeaderTitle>{title}</ExperienceHeaderTitle>
                    <ExperienceHeaderSubtitle>
                      {subtitle}
                    </ExperienceHeaderSubtitle>
                  </ExperienceHeaderContent>
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
    </section>
  );
};

export default ExperienceSection;
