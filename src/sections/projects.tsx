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
              <ProjectCardImage src={imageUrl} title={title} />

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
    </section>
  );
};

export default ProjectsSection;
