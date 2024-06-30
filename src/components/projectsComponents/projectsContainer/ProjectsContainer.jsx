import React, { useEffect, useState } from "react";
import {
  Container,
  MainContainer,
  NextButton,
  PrevButton,
  ProjectsHeader,
  ProjectsParagraph,
  ProjectsSliderContainer,
  ProjectsSliderImage,
  ProjectsSliderName,
  ProjectsSliderNameContainer,
  ProjectsTextContainer,
  SliderBar,
  SliderContainer,
  SliderCounter,
} from "./style";
import { projectsData } from "../../../data/projectsData";

const ProjectsContainer = () => {
  const [largeScreen, setLargeScreen] = useState(window.innerWidth >= 768);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const project = projectsData[currentSlideIndex];

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % projectsData.length);
  };

  const prevSlide = () => {
    setCurrentSlideIndex(
      (prev) => (prev - 1 + projectsData.length) % projectsData.length
    );
  };

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
            <ProjectsHeader>{project.header}</ProjectsHeader>
            <ProjectsParagraph>{project.textOne}</ProjectsParagraph>
            <ProjectsParagraph>{project.textTwo}</ProjectsParagraph>
          </ProjectsTextContainer>

          <ProjectsSliderContainer>
            <SliderContainer>
              {projectsData.map((_, index) => (
                <SliderBar
                  key={index}
                  className={index === currentSlideIndex ? "active" : ""}
                />
              ))}
              <SliderCounter>{project.id}</SliderCounter>
              <PrevButton onClick={prevSlide}>&#10094;</PrevButton>
              <NextButton onClick={nextSlide}>&#10095;</NextButton>
            </SliderContainer>
            <ProjectsSliderImage src={project.image} />
            <ProjectsSliderNameContainer>
              <ProjectsSliderName>{project.name}</ProjectsSliderName>
            </ProjectsSliderNameContainer>
          </ProjectsSliderContainer>
        </MainContainer>
      ) : (
        <MainContainer>
          <ProjectsSliderContainer>
            <SliderContainer>
              {projectsData.map((_, index) => (
                <SliderBar
                  key={index}
                  className={index === currentSlideIndex ? "active" : ""}
                />
              ))}
              <SliderCounter>{project.id}</SliderCounter>
              <PrevButton onClick={prevSlide}>&#10094;</PrevButton>
              <NextButton onClick={nextSlide}>&#10095;</NextButton>
            </SliderContainer>
            <ProjectsSliderImage src={project.image} />
            <ProjectsSliderNameContainer>
              <ProjectsSliderName>{project.name}</ProjectsSliderName>
            </ProjectsSliderNameContainer>
          </ProjectsSliderContainer>
          <ProjectsTextContainer>
            <ProjectsHeader>{project.header}</ProjectsHeader>
            <ProjectsParagraph>{project.textOne}</ProjectsParagraph>
            <ProjectsParagraph>{project.textTwo}</ProjectsParagraph>
          </ProjectsTextContainer>
        </MainContainer>
      )}
    </Container>
  );
};

export default ProjectsContainer;
