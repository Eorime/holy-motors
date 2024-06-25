import React from "react";
import {
  Container,
  StoryLeftContainer,
  StoryMainContainer,
  StoryParagraph,
  StoryRightContainer,
  StorySubHeader,
  StorytHeader,
} from "./style";

const StoryText = () => {
  return (
    <Container>
      <StoryMainContainer>
        <StoryLeftContainer>
          <StorytHeader>STORY</StorytHeader>
          <StoryParagraph>
            On the first day of April, 3 years ago holistic design agency Holy
            Motors opened for business.
          </StoryParagraph>
          <StorySubHeader>
            HOLY MOTORS IS A HOLISTIC DESIGN AGENCY HELPING BRANDS LEAVE THEIR
            MARK ON CULTURE.
          </StorySubHeader>
        </StoryLeftContainer>
        <StoryRightContainer>
          <StoryParagraph>
            With multidisciplinary teams of designers, developers, strategists,
            writers, creators, and artists, we work closely with founders and
            brand owners through all stages of bringing their vision to life.
          </StoryParagraph>
          <StoryParagraph>
            {" "}
            As most glorious human endeavours often are, Holy Motors was created
            out of nothing when Georgia’s renowned creative duo Giorgi Avaliani
            and Nick Kumbari joined their forces to be reborn. Bringing together
            years of creative and design excellence.
          </StoryParagraph>
        </StoryRightContainer>
      </StoryMainContainer>
    </Container>
  );
};

export default StoryText;
