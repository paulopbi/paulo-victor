import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { experience } from "@/constants/experience-constant";

const AccordionContainer = () => {
  return (
    <Accordion>
      {experience.map(
        ({ icon: Icon, description, subtitle, time, title, value }) => (
          <AccordionItem
            key={value}
            value={value}
            className="border-b-transparent"
          >
            {/* head */}
            <AccordionTrigger className="hover:no-underline cursor-pointer flex justify-center items-center gap-4">
              <div className="flex items-center justify-center gap-1 bg-primary/20 p-1.5 rounded-full border border-primary">
                {<Icon className="size-6 text-primary" />}
              </div>
              <div className="flex flex-col">
                <h2 className="font-semibold text-base tracking-tighter">
                  {title}
                </h2>
                <h6 className="text-muted-foreground">{subtitle}</h6>
              </div>
            </AccordionTrigger>

            {/* body */}
            <AccordionContent>
              <div className="*:text-muted-foreground">
                <p className="text-sm lg:text-base ml-13 max-w-[80ch] text-pretty">
                  {description}
                </p>
                <span className="text-right block">{time}</span>
              </div>
            </AccordionContent>
          </AccordionItem>
        ),
      )}
    </Accordion>
  );
};

export default AccordionContainer;
