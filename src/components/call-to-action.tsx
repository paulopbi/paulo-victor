import { ArrowUpRight } from "lucide-react";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { InteractiveHoverButton } from "./magic-ui/interactive-hover-button";

const CTA = ({ href, children, className, ...props }: ComponentProps<"a">) => {
  return (
    <a
      href={href}
      rel="noreferrer"
      target="_blank"
      className={cn("size-fit inline-block", className)}
      {...props}
    >
      <InteractiveHoverButton icon={<ArrowUpRight className="size-icon" />}>
        {children}
      </InteractiveHoverButton>
    </a>
  );
};

export default CTA;
