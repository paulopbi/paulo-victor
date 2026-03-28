import Image, { type StaticImageData } from "next/image";
import type { ComponentProps } from "react";
import { MagicCard } from "@/components/magic-ui/magic-card";
import { cn } from "@/lib/utils";
import { capitalizeFirstLetter } from "@/utils/capitalize-first-letter";

const MAGIC_CARD_PROPS = {
  gradientColor: "var(--background)",
  gradientFrom: "#8E2DE2",
  gradientTo: "#4A00E0",
} as const;

const MAX_VISIBLE_TAGS = 4;

export const ProjectCard = ({
  children,
  ...props
}: ComponentProps<"article">) => {
  return (
    <article
      className="flex flex-col gap-2 even:mt-6 hover:-translate-y-2 transition-transform duration-300"
      {...props}
    >
      {children}
    </article>
  );
};

export const ProjectCardImage = ({
  src,
  title,
  optimized = true,
}: {
  src: string | StaticImageData | null;
  title: string;
  optimized?: boolean;
}) => {
  if (!src) {
    return (
      <MagicCard
        {...MAGIC_CARD_PROPS}
        className="h-62.5 rounded-3xl overflow-hidden flex flex-col items-center justify-center gap-2 border-2 bg-muted"
      >
        <span className="grid place-content-center text-3xl font-bold size-16 rounded-xl bg-muted text-muted-foreground">
          {capitalizeFirstLetter(title)}
        </span>
      </MagicCard>
    );
  }

  return (
    <MagicCard
      {...MAGIC_CARD_PROPS}
      className="h-63 rounded-3xl overflow-hidden border-2"
    >
      <Image
        src={src}
        alt={`Imagem do projeto ${title}`}
        className="size-full object-center object-cover hover:scale-[1.1] transition-transform"
        width={300}
        height={300}
        unoptimized={optimized}
      />
    </MagicCard>
  );
};

export const ProjectCardTitle = ({
  children,
  ...props
}: ComponentProps<"h6">) => {
  return (
    <h6
      className="text-xl md:text-2xl font-bold hover:text-primary transition-colors"
      {...props}
    >
      {children}
    </h6>
  );
};

export const ProjectCardDescription = ({
  children,
  ...props
}: ComponentProps<"p">) => {
  return (
    <p
      className="text-muted-foreground text-sm lg:text-base line-clamp-3 text-balance"
      {...props}
    >
      {children}
    </p>
  );
};

export const ProjectCardBadge = ({
  tags,
  className,
}: {
  tags: string[];
  className?: string;
}) => {
  const visibleTags = tags.slice(0, MAX_VISIBLE_TAGS);
  const remainingCount = tags.length - MAX_VISIBLE_TAGS;

  return (
    <div className={cn("flex gap-2 mt-2 flex-wrap", className)}>
      {visibleTags.map((tag) => (
        <MagicCard
          {...MAGIC_CARD_PROPS}
          mode="gradient"
          key={tag}
          className="project-tag"
        >
          {tag}
        </MagicCard>
      ))}

      {remainingCount > 0 && (
        <MagicCard
          {...MAGIC_CARD_PROPS}
          mode="gradient"
          className="project-tag font-sans"
        >
          + {remainingCount}
        </MagicCard>
      )}
    </div>
  );
};

export const ProjectCardActions = ({
  children,
  className,
  ...props
}: ComponentProps<"div">) => {
  return (
    <div className={cn("flex flex-col gap-4 mt-2", className)} {...props}>
      {children}
    </div>
  );
};
