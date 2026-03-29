import type { LucideProps } from "lucide-react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";
import type { ChildrenProp } from "@/types";

export const ExperienceHeader = ({ children }: ChildrenProp) => {
  return (
    <div className="flex justify-center items-center gap-4">{children}</div>
  );
};

export const ExperienceHeaderIcon = ({
  Icon,
}: {
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}) => {
  return (
    <div className="flex items-center justify-center gap-1 p-2 rounded-full border bg-primary/10 border-primary/30 dark:border-chart-1/30 dark:bg-chart-1/15">
      {<Icon className="icon-size text-primary dark:text-chart-1" />}
    </div>
  );
};

export const ExperienceHeaderContent = ({ children }: ChildrenProp) => {
  return <div className="flex flex-col gap-1">{children}</div>;
};

export const ExperienceHeaderTitle = ({ children }: ChildrenProp) => {
  return <h2 className="font-semibold text-base">{children}</h2>;
};

export const ExperienceHeaderSubtitle = ({ children }: ChildrenProp) => {
  return (
    <h6 className="text-muted-foreground font-medium text-sm">{children}</h6>
  );
};
