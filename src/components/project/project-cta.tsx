import { Github } from "lucide-react";
import { InteractiveHoverButton } from "../magic-ui/interactive-hover-button";

const ProjectCTA = () => {
  return (
    <div className="grid place-items-center mt-14">
      <a
        href="https://github.com/paulopbi?tab=repositories"
        rel="noreferrer"
        target="_blank"
        className="size-fit flex items-center justify-center gap-2"
      >
        <InteractiveHoverButton icon={<Github className="size-icon" />}>
          Todos os projetos
        </InteractiveHoverButton>
      </a>
    </div>
  );
};

export default ProjectCTA;
