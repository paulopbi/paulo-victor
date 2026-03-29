import { Ban, ExternalLink, Github } from "lucide-react";
import type { projectsInfo } from "@/constants/projects-info";
import { Button } from "../ui/button";

type ProjectButtonsProps = Pick<
  (typeof projectsInfo)[number],
  "github" | "deploy"
>;

const ProjectButtons = ({ github, deploy }: ProjectButtonsProps) => {
  return (
    <>
      {!github && !deploy && (
        <Button
          size="lg"
          variant="destructive"
          disabled
          className="cursor-pointer"
          title="Cique para acessar a demonstração"
        >
          Indisponível
          <Ban className="size-icon" />
        </Button>
      )}

      {github && (
        <Button
          size="lg"
          className="cursor-pointer"
          variant="outline"
          title="Clique para acessar o github"
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

      {deploy && (
        <Button
          size="lg"
          variant="outline"
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
            <ExternalLink className="size-icon" />
          </a>
        </Button>
      )}
    </>
  );
};

export default ProjectButtons;
