import { Ban, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { projectsInfos } from "@/constants/projects-infos";

type ProjectButtonsProps = Pick<
  (typeof projectsInfos)[number],
  "github" | "deploy"
>;

const ProjectButtons = ({ github, deploy }: ProjectButtonsProps) => {
  const hasNoLinks = !github && !deploy;
  const hasGithubLink = !!github;
  const hasDeployLink = !!deploy;
  return (
    <>
      {hasNoLinks && (
        <Button
          size="lg"
          variant="destructive"
          disabled
          className="cursor-not-allowed"
          title="Link não disponível"
        >
          Indisponível
          <Ban className="size-icon" />
        </Button>
      )}

      {hasGithubLink && (
        <Button
          size="lg"
          className="cursor-pointer"
          variant="secondary"
          title="Clique para acessar o repositório no GitHub"
        >
          <a
            rel="noopener noreferrer"
            href={github}
            target="_blank"
            className="flex items-center justify-center gap-2 size-full"
          >
            Github
            <Github className="size-icon" />
          </a>
        </Button>
      )}

      {hasDeployLink && (
        <Button
          size="lg"
          className="cursor-pointer"
          variant="secondary"
          title="Clique para acessar a demonstração ao vivo"
        >
          <a
            rel="noopener noreferrer"
            href={deploy}
            target="_blank"
            className="flex items-center justify-center gap-2 size-full"
          >
            Demonstração
            <ExternalLink className="size-icon" />
          </a>
        </Button>
      )}
    </>
  );
};

export default ProjectButtons;
