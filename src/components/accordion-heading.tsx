import type { LucideProps } from "lucide-react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";

type AccordionHeadingProps = {
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  title: string;
  subtitle: string;
};

const AccordionHeading = ({ Icon, title, subtitle }: AccordionHeadingProps) => {
  return (
    <>
      <div className="flex items-center justify-center gap-1 bg-primary/20 p-1.5 rounded-full border border-primary">
        {<Icon className="size-6 text-primary" />}
      </div>
      <div className="flex flex-col">
        <h2 className="font-semibold text-base tracking-tighter">{title}</h2>
        <h6 className="text-muted-foreground">{subtitle}</h6>
      </div>
    </>
  );
};

export default AccordionHeading;
