import React from "react";
import { Container, StoryLogo } from "./style";
import TPN from "../../../assets/images/storyLogos/logo-01.png";
import WarnerMedia from "../../../assets/images/storyLogos/logo-02.png";
import Disney from "../../../assets/images/storyLogos/logo-03.png";

const StoryLogos = () => {
  return (
    <Container>
      <StoryLogo src={TPN} />
      <StoryLogo src={WarnerMedia} />
      <StoryLogo src={Disney} />
    </Container>
  );
};

export default StoryLogos;
