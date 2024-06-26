import React from "react";
import {
  Container,
  MainContainer,
  ProjectsHeader,
  ProjectsParagraph,
  ProjectsSliderContainer,
  ProjectsSliderImage,
  ProjectsSliderName,
  ProjectsSliderNameContainer,
  ProjectsTextContainer,
} from "./style";
import { projectsData } from "../../../data/projectsData";

const ProjectsContainer = () => {
  const firstProject = projectsData[0];

  return (
    <Container>
      <MainContainer>
        <ProjectsTextContainer>
          <ProjectsHeader>{firstProject.header}</ProjectsHeader>
          <ProjectsParagraph>{firstProject.textOne}</ProjectsParagraph>
          <ProjectsParagraph>{firstProject.textTwo}</ProjectsParagraph>
        </ProjectsTextContainer>
        <ProjectsSliderContainer>
          <ProjectsSliderImage src={firstProject.image} />
          <ProjectsSliderNameContainer>
            <ProjectsSliderName>{firstProject.name}</ProjectsSliderName>
          </ProjectsSliderNameContainer>
        </ProjectsSliderContainer>
      </MainContainer>
    </Container>
  );
};

export default ProjectsContainer;
