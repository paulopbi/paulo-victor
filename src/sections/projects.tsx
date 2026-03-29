import { Ban, ExternalLink, Github } from "lucide-react";
import { InteractiveHoverButton } from "@/components/magic-ui/interactive-hover-button";
import {
  ProjectCard,
  ProjectCardActions,
  ProjectCardBadge,
  ProjectCardDescription,
  ProjectCardImage,
  ProjectCardTitle,
} from "@/components/project/project-card";
import { Button } from "@/components/ui/button";
import {
  Header,
  HeaderDescription,
  HeaderSeparator,
  HeaderTitle,
} from "@/components/ui/header";
import { projectsContent } from "@/constants/projects-content";

const ProjectsSection = () => {
  return (
    <section id="projetos" className="main-container section-margin-top">
      <Header>
        <HeaderTitle>Projetos</HeaderTitle>
        <HeaderDescription>
          Ideias que saíram do papel e viraram código, aqui você encontra uma
          seleção dos projetos que desenvolvi, entre pessoais, acadêmicos e
          profissionais.
        </HeaderDescription>
        <HeaderSeparator />
      </Header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 my-8 place-content-center max-w-225 mx-auto">
        {projectsContent.map(
          ({ title, imageUrl, description, tags, github, deploy }) => (
            <ProjectCard key={title}>
              {/* top */}
              <ProjectCardImage
                src={imageUrl}
                title={title}
                unoptimized={true}
              />

              {/* middle */}
              <ProjectCardTitle>{title}</ProjectCardTitle>
              <ProjectCardDescription title={description}>
                {description}
              </ProjectCardDescription>
              <ProjectCardBadge tags={tags} />

              {/* bottom */}
              <ProjectCardActions>
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
              </ProjectCardActions>
            </ProjectCard>
          ),
        )}
      </div>

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
    </section>
  );
};

export default ProjectsSection;
