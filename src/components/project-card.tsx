import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { MagicCard } from "@/components/magic-ui/magic-card";
import { Button } from "@/components/ui/button";
import type { ProjectContentProps } from "@/constants/projects-constants";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";

const ProjectCard = ({
  description,
  imageUrl,
  tags,
  title,
  deploy,
  github,
}: ProjectContentProps) => {
  return (
    <article className="flex flex-col gap-2 even:mt-6 hover:-translate-y-2 transition-transform duration-300">
      {imageUrl ? (
        // image with link
        <MagicCard
          gradientColor="var(--secondary)"
          gradientFrom="var(--chart-1)"
          gradientTo="var(--chart-5)"
          className="h-62.5 rounded-3xl overflow-hidden"
        >
          <Image
            src={imageUrl}
            alt={title}
            className="size-full object-center object-cover aspect-square hover:scale-[1.15] transition-transform"
            width={800}
            height={800}
          />
        </MagicCard>
      ) : (
        // image without link
        <div className="h-62.5 rounded-3xl overflow-hidden flex flex-col items-center justify-center gap-2 border-2 bg-linear-210 from-chart-3 to-chart-5">
          <span className="grid place-content-center text-3xl font-bold size-16 bg-primary/40 text-primary rounded-xl">
            {capitalizeFirstLetter(title)}
          </span>
          <span className="text-lg font-semibold text-background tracking-tighter">
            {title}
          </span>
        </div>
      )}

      {/* title, description and badge container */}
      <div className="px-1.5">
        <h3 className="text-xl md:text-2xl font-bold tracking-tighter">
          {title}
        </h3>

        <p className="text-muted-foreground text-sm lg:text-base line-clamp-3 text-balance mt-1">
          {description}
        </p>

        {/* badge */}
        <div className="flex gap-2 mt-2">
          {/* show only the first 4 tags */}
          {tags.slice(0, 4).map((tag) => (
            <MagicCard
              gradientColor="var(--secondary)"
              gradientFrom="var(--chart-1)"
              gradientTo="var(--chart-5)"
              mode="gradient"
              key={tag}
              className="project-tag"
            >
              {tag}
            </MagicCard>
          ))}

          {/* if have more than 4 tags, it show the other tag */}
          {tags.length > 4 && (
            <MagicCard
              gradientColor="var(--secondary)"
              gradientFrom="var(--chart-1)"
              gradientTo="var(--chart-5)"
              mode="gradient"
              className="project-tag font-sans"
            >
              + {tags.length - 4}
            </MagicCard>
          )}
        </div>
      </div>

      {/* links button */}
      <div className="flex flex-col gap-3 mt-2">
        <Button
          size="lg"
          disabled={!github}
          className="cursor-pointer"
          title="Acesso ao github"
        >
          <a
            href={github ? github : ""}
            target="_blank"
            className="flex items-center justify-center gap-2 size-full"
          >
            {!github ? "Indisponível" : "Github"}
            <Github className="size-4" />
          </a>
        </Button>
        <Button
          size="lg"
          variant="secondary"
          disabled={!deploy}
          className="cursor-pointer"
          title="Acesso ao deploy"
        >
          <a
            href={deploy ? deploy : ""}
            target="_blank"
            className="flex items-center justify-center gap-2 size-full"
          >
            {!deploy ? "Indisponível" : "Deploy"}
            <ExternalLink className="size-4" />
          </a>
        </Button>
      </div>
    </article>
  );
};

export default ProjectCard;
