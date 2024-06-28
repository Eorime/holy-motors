import React, { useEffect, useState } from "react";
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
  const [largeScreen, setLargeScreen] = useState(window.innerWidth >= 768);
  const firstProject = projectsData[0];

  useEffect(() => {
    const handleResize = () => {
      const isLarge = window.innerWidth >= 770;
      setLargeScreen(isLarge);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container>
      {largeScreen ? (
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
      ) : (
        <MainContainer>
          <ProjectsSliderContainer>
            <ProjectsSliderImage src={firstProject.image} />
            <ProjectsSliderNameContainer>
              <ProjectsSliderName>{firstProject.name}</ProjectsSliderName>
            </ProjectsSliderNameContainer>
          </ProjectsSliderContainer>
          <ProjectsTextContainer>
            <ProjectsHeader>{firstProject.header}</ProjectsHeader>
            <ProjectsParagraph>{firstProject.textOne}</ProjectsParagraph>
            <ProjectsParagraph>{firstProject.textTwo}</ProjectsParagraph>
          </ProjectsTextContainer>
        </MainContainer>
      )}
    </Container>
  );
};

export default ProjectsContainer;
