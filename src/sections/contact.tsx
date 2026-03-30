import ContactContent from "@/components/contact/contact-content";
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

        <ContactContent />
      </div>
    </section>
  );
};

export default ContactSection;
