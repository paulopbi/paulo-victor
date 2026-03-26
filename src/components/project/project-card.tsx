import { ExternalLink, Github } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import type { ComponentProps } from "react";
import { MagicCard } from "@/components/magic-ui/magic-card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { capitalizeFirstLetter } from "@/utils/capitalize-first-letter";

const MAGIC_CARD_PROPS = {
  gradientColor: "var(--secondary)",
  gradientFrom: "var(--chart-1)",
  gradientTo: "var(--chart-5)",
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
}: {
  src: string | StaticImageData | null;
  title: string;
}) => {
  if (!src) {
    return (
      <div className="h-62.5 rounded-3xl overflow-hidden flex flex-col items-center justify-center gap-2 border-2 bg-linear-210 from-chart-3 to-chart-5">
        <span className="grid place-content-center text-3xl font-bold size-16 bg-secondary/20 text-secondary rounded-xl">
          {capitalizeFirstLetter(title)}
        </span>
        <span className="text-lg font-semibold text-background tracking-tighter">
          {title}
        </span>
      </div>
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
        width={800}
        height={800}
      />
    </MagicCard>
  );
};

export const ProjectCardTitle = ({
  children,
  ...props
}: ComponentProps<"h6">) => {
  return (
    <h6 className="text-xl md:text-2xl font-bold tracking-tighter" {...props}>
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
      className="text-muted-foreground text-sm lg:text-base line-clamp-3 text-balance mt-1"
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
          +{remainingCount}
        </MagicCard>
      )}
    </div>
  );
};

export const ProjectCardActions = ({
  github,
  deploy,
  className,
}: {
  github: string | null;
  deploy: string | null;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col gap-3 mt-2", className)}>
      {github && (
        <Button
          size="lg"
          className="cursor-pointer"
          title="Clique para acessar o github"
        >
          <a
            rel="noopener noreferrer"
            href={github}
            target="_blank"
            className="flex items-center justify-center gap-2 size-full"
          >
            Github
            <Github className="size-4" />
          </a>
        </Button>
      )}

      {deploy && (
        <Button
          size="lg"
          variant="secondary"
          className="cursor-pointer"
          title="Cique para acessar a demonstração"
        >
          <a
            rel="noopener noreferrer"
            href={deploy}
            target="_blank"
            className="flex items-center justify-center gap-2 size-full"
          >
            Demonstração
            <ExternalLink className="size-4" />
          </a>
        </Button>
      )}
    </div>
  );
};
