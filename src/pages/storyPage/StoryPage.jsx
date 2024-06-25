import React from "react";
import { Container, StoryContainer } from "./style";
import StoryLogos from "../../components/storyComponents/storyLogos/StoryLogos";
import StoryText from "../../components/storyComponents/storyText/StoryText";

const StoryPage = () => {
  return (
    <Container id="story">
      <StoryContainer>
        <StoryText />
        <StoryLogos />
      </StoryContainer>
    </Container>
  );
};

export default StoryPage;
