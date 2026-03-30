import { ArrowUpRight } from "lucide-react";
import { InteractiveHoverButton } from "../magic-ui/interactive-hover-button";

const ContactContent = () => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-1/2 flex flex-col gap-4 items-center justify-center flex-wrap w-full">
      <h6 className="text-lg font-bold text-white md:text-2xl">
        Me siga nas redes sociais
      </h6>
      <InteractiveHoverButton icon={<ArrowUpRight className="size-icon" />}>
        Acessar todos os links
      </InteractiveHoverButton>
    </div>
  );
};

export default ContactContent;
