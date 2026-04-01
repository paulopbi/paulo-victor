import Image, { type StaticImageData } from "next/image";
import type { ComponentProps } from "react";
import { MagicCard } from "@/components/magic-ui/magic-card";
import { MAGIC_CARD_PROPS, PROJECT_MAX_VISIBLE_TAGS } from "@/constants/props";
import { cn } from "@/lib/utils";
import { capitalizeFirstLetter } from "@/utils/capitalize-first-letter";

export const ProjectContainer = ({
  children,
  className,
}: ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 my-8 place-content-center max-w-225 mx-auto",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const ProjectCard = ({
  children,
  className,
  ...props
}: ComponentProps<"article">) => {
  return (
    <article
      className={cn(
        "flex flex-col gap-2 even:mt-6 hover:-translate-y-2 transition-transform duration-300",
        className,
      )}
      {...props}
    >
      {children}
    </article>
  );
};

export const ProjectCardImage = ({
  src,
  title,
  unoptimized = false,
  width = 300,
  height = 300,
}: {
  src: string | StaticImageData | null;
  title: string;
  unoptimized?: boolean;
  width?: number;
  height?: number;
}) => {
  const noImageUrl = `https://placehold.co/${width}x${height}?text=${capitalizeFirstLetter(title)}&font=geist`;
  return (
    <Image
      src={src ? src : noImageUrl}
      alt={`Imagem do projeto ${title}`}
      className="h-63 rounded-2xl aspect-square overflow-hidden object-center object-cover border border-border hover:scale-[105%] transition-transform z-10"
      width={width}
      height={height}
      unoptimized={unoptimized}
    />
  );
};

export const ProjectCardTitle = ({
  children,
  className,
  ...props
}: ComponentProps<"h6">) => {
  return (
    <h6 className={cn("text-xl md:text-2xl font-bold", className)} {...props}>
      {children}
    </h6>
  );
};

export const ProjectCardDescription = ({
  children,
  className,
  ...props
}: ComponentProps<"p">) => {
  return (
    <p
      className={cn(
        "text-muted-foreground text-sm lg:text-base line-clamp-4 text-balance",
        className,
      )}
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
  const visibleTags = tags.slice(0, PROJECT_MAX_VISIBLE_TAGS);
  const remainingCount = tags.length - PROJECT_MAX_VISIBLE_TAGS;

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
