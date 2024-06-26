import React from "react";
import { Container, ProjectsContainerStyle } from "./style";
import ProjectsContainer from "../../components/projectsComponents/projectsContainer/ProjectsContainer";

const ProjectsPage = () => {
  return (
    <Container>
      <ProjectsContainerStyle id="projects">
        <ProjectsContainer />
      </ProjectsContainerStyle>
    </Container>
  );
};

export default ProjectsPage;
