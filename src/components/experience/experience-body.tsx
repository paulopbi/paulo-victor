import type { ChildrenProp } from "@/types";

export const ExperienceBody = ({ children }: ChildrenProp) => {
  return <>{children}</>;
};

export const ExperienceBodyDescription = ({ children }: ChildrenProp) => {
  return (
    <p className="text-sm md:text-base ml-14 max-w-[80ch] text-pretty text-muted-foreground">
      {children}
    </p>
  );
};

export const ExperienceBodyTime = ({ children }: ChildrenProp) => {
  return (
    <span className="block text-right text-muted-foreground text-sm">
      {children}
    </span>
  );
};
