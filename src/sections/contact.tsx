import { ExternalLink } from "lucide-react";
import { InteractiveHoverButton } from "@/components/magic-ui/interactive-hover-button";
import Grainient from "@/components/react-bits/grainient";
import { GRAINIET_PROPS } from "@/constants/props";
import type { SectionProps } from "@/types";

const ContactSection = ({ ...props }: SectionProps) => {
  return (
    <section
      className="main-container h-90 overflow-hidden section-margin-top"
      {...props}
    >
      <div className="size-full relative">
        <Grainient
          {...GRAINIET_PROPS}
          className="size-full rounded-2xl absolute inset-0 z-0"
        />

        <div className="absolute left-1/2 top-1/2 -translate-1/2 flex flex-col gap-4 items-center justify-center flex-wrap w-full">
          <h6 className="text-base md:text-lg font-medium">
            Me siga nas redes sociais
          </h6>
          <InteractiveHoverButton icon={<ExternalLink className="icon-size" />}>
            Todos os contatos
          </InteractiveHoverButton>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
