import GrainietBackground from "@/components/contact/grainiet-background";
import LinksContainer from "@/components/contact/links-container";

import type { SectionProps } from "@/types";

const ContactSection = ({ ...props }: SectionProps) => {
  return (
    <section
      className="main-container h-90 overflow-hidden section-margin-top"
      {...props}
    >
      <div className="size-full relative">
        <GrainietBackground />
        <LinksContainer />
      </div>
    </section>
  );
};

export default ContactSection;
