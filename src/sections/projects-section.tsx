import ProjectCard from "@/components/project-card";
import {
  Header,
  HeaderDescription,
  HeaderSeparator,
  HeaderTitle,
} from "@/components/ui/header";
import { ProjectContent } from "@/constants/projects-constants";

const Projects = () => {
  return (
    <section id="projetos" className="main-container section-margin-top">
      {/* header */}
      <Header>
        <HeaderTitle>Projetos</HeaderTitle>
        <HeaderDescription>
          Uma seleção dos meus projetos mais recentes e relevantes.
        </HeaderDescription>
        <HeaderSeparator />
      </Header>

      {/* card container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 my-8 place-content-center max-w-225 mx-auto">
        {ProjectContent.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
