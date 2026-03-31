import { Github } from "lucide-react";
import { InteractiveHoverButton } from "@/components/magic-ui/interactive-hover-button";
import { GH_ALL_PROJECTS } from "@/constants/external-links";

const ProjectCTA = () => {
  return (
    <div className="grid place-items-center mt-14">
      <a
        href={GH_ALL_PROJECTS}
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
