import CTA from "@/components/call-to-action";
import { ALL_MY_LINKS } from "@/constants/external-links";

const ContactContent = () => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-1/2 flex flex-col gap-4 items-center justify-center flex-wrap w-full">
      <h6 className="text-lg font-bold text-white md:text-2xl">
        Me siga nas redes sociais
      </h6>

      <CTA href={ALL_MY_LINKS}>Todos os meus links</CTA>
    </div>
  );
};

export default ContactContent;
