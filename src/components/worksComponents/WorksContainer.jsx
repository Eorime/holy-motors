import React, { useState } from "react";
import {
  Container,
  ImageWrapper,
  NextButton,
  PrevButton,
  SliderBar,
  SliderContainer,
  SliderCounter,
  SliderProgress,
  WorkSliderContainer,
  WorksImage,
  WorksImageOverlay,
  WorksMainPar,
  WorksName,
  WorksNameContainer,
  WorksParagraph,
  WorksTextContainer,
} from "./style";
import { worksData } from "../../data/worksData";

const WorksContainer = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const work = worksData[currentSlideIndex];

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % worksData.length);
  };

  const prevSlide = () => {
    setCurrentSlideIndex(
      (prev) => (prev - 1 + worksData.length) % worksData.length
    );
  };

  return (
    <Container>
      <WorkSliderContainer>
        <SliderContainer>
          {worksData.map((_, index) => (
            <SliderBar
              key={index}
              className={index === currentSlideIndex ? "active" : ""}
            />
          ))}
        </SliderContainer>
        <ImageWrapper>
          <WorksImage src={work.image} />
          <WorksImageOverlay />
        </ImageWrapper>

        <WorksTextContainer>
          <WorksMainPar>{work.textOne}</WorksMainPar>
          <WorksParagraph>{work.textTwo}</WorksParagraph>
        </WorksTextContainer>
        <WorksNameContainer>
          <WorksName>{work.name}</WorksName>
        </WorksNameContainer>
      </WorkSliderContainer>

      <SliderCounter>{work.id}</SliderCounter>
      <PrevButton onClick={prevSlide}>&#10094;</PrevButton>
      <NextButton onClick={nextSlide}>&#10095;</NextButton>
    </Container>
  );
};

export default WorksContainer;
