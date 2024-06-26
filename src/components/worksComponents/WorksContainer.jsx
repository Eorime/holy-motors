import React from "react";
import {
  Container,
  WorkSliderContainer,
  WorksParagraph,
  WorksTextContainer,
} from "./style";

const WorksContainer = () => {
  return (
    <Container>
      <WorkSliderContainer>
        <WorksTextContainer>
          <WorksParagraph></WorksParagraph>
          <WorksParagraph></WorksParagraph>
        </WorksTextContainer>
      </WorkSliderContainer>
    </Container>
  );
};

export default WorksContainer;
