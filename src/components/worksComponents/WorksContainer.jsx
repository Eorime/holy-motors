import React from "react";
import {
  Container,
  ImageWrapper,
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
  const work = worksData[3];

  return (
    <Container>
      <WorkSliderContainer>
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
    </Container>
  );
};

export default WorksContainer;
