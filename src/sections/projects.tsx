import { ArrowRight, ChevronRight } from "lucide-react";
import {
  ProjectCard,
  ProjectCardActions,
  ProjectCardBadge,
  ProjectCardDescription,
  ProjectCardImage,
  ProjectCardTitle,
} from "@/components/project/project-card";
import {
  Header,
  HeaderDescription,
  HeaderSeparator,
  HeaderTitle,
} from "@/components/ui/header";
import { ShimmerButton } from "@/components/ui/shimmer-button";

import { projectsContent } from "@/constants/projects-content";

const ProjectsSection = () => {
  return (
    <section id="projetos" className="main-container section-margin-top">
      {/* header */}
      <Header>
        <HeaderTitle>Projetos</HeaderTitle>
        <HeaderDescription>
          Ideias que saíram do papel e viraram código, aqui você encontra uma
          seleção dos projetos que desenvolvi, entre pessoais, acadêmicos e
          profissionais.
        </HeaderDescription>
        <HeaderSeparator />
      </Header>

      {/* cards container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 my-8 place-content-center max-w-225 mx-auto">
        {projectsContent.map(
          ({ title, imageUrl, description, tags, github, deploy }) => (
            <ProjectCard key={title}>
              <ProjectCardImage
                src={imageUrl}
                title={title}
                optimized={false}
              />

              <ProjectCardTitle>{title}</ProjectCardTitle>
              <ProjectCardDescription title={description}>
                {description}
              </ProjectCardDescription>
              <ProjectCardBadge tags={tags} />

              <ProjectCardActions github={github} deploy={deploy} />
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
          <ShimmerButton
            className="flex items-center justify-center gap-2 text-white font-medium text-base"
            background="var(--primary)"
            shimmerSize="0.2em"
          >
            Todos os projetos <ChevronRight className="icon-size" />
          </ShimmerButton>
        </a>
      </div>
    </section>
  );
};

export default ProjectsSection;
