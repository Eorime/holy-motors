import React from "react";
import {
  Container,
  ImageWrapper,
  WorkSliderContainer,
  WorksImage,
  WorksImageOverlay,
  WorksName,
  WorksNameContainer,
  WorksParagraph,
  WorksTextContainer,
} from "./style";
import { worksData } from "../../data/worksData";

const WorksContainer = () => {
  const work = worksData[0];

  return (
    <Container>
      <WorkSliderContainer>
        <ImageWrapper>
          <WorksImage src={work.image} />
          <WorksImageOverlay />
        </ImageWrapper>

        <WorksNameContainer>
          <WorksName>{work.name}</WorksName>
        </WorksNameContainer>
        <WorksTextContainer>
          <WorksParagraph></WorksParagraph>
          <WorksParagraph></WorksParagraph>
        </WorksTextContainer>
      </WorkSliderContainer>
    </Container>
  );
};

export default WorksContainer;
