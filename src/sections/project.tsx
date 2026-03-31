import CTA from "@/components/call-to-action";
import ProjectButtons from "@/components/project/project-buttons";
import {
  ProjectCard,
  ProjectCardActions,
  ProjectCardBadge,
  ProjectCardDescription,
  ProjectCardImage,
  ProjectCardTitle,
  ProjectContainer,
} from "@/components/project/project-card";
import {
  Header,
  HeaderDescription,
  HeaderSeparator,
  HeaderTitle,
} from "@/components/ui/header";
import { ALL_PROJECTS } from "@/constants/external-links";
import { projectsInfo } from "@/constants/projects-info";
import type { SectionProps } from "@/types";

const ProjectSection = ({ ...props }: SectionProps) => {
  return (
    <section {...props} className="main-container section-margin-top">
      <Header>
        <HeaderTitle>Projetos</HeaderTitle>
        <HeaderDescription>
          Ideias que saíram do papel e viraram código, aqui você encontra uma
          seleção dos projetos que desenvolvi, entre pessoais, acadêmicos e
          profissionais.
        </HeaderDescription>
        <HeaderSeparator />
      </Header>

      <ProjectContainer>
        {projectsInfo.map(
          ({ title, imageUrl, description, tags, github, deploy }) => (
            <ProjectCard key={title}>
              <ProjectCardImage
                width={600}
                height={600}
                src={imageUrl}
                title={title}
                unoptimized={true}
              />

              <ProjectCardTitle>{title}</ProjectCardTitle>
              <ProjectCardDescription title={description}>
                {description}
              </ProjectCardDescription>
              <ProjectCardBadge tags={tags} />

              <ProjectCardActions>
                <ProjectButtons github={github} deploy={deploy} />
              </ProjectCardActions>
            </ProjectCard>
          ),
        )}
      </ProjectContainer>

      <CTA href={ALL_PROJECTS} className="grid place-items-center w-full">
        Todos os projetos
      </CTA>
    </section>
  );
};

export default ProjectSection;
