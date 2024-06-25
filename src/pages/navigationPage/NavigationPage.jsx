import React from "react";
import { Container, NavContainer, NavElement, StyledLink } from "./style";

const NavigationPage = () => {
  return (
    <Container>
      <NavContainer>
        <StyledLink to="projects" smooth={true} duration={600}>
          <NavElement>
            OUR <span>PROJECTS</span>
          </NavElement>
        </StyledLink>
        <StyledLink to="works" smooth={true} duration={600}>
          <NavElement>
            OUR <span>WORKS</span>
          </NavElement>
        </StyledLink>
        <StyledLink to="clients" smooth={true} duration={600}>
          <NavElement>
            OUR <span>CLIENTS</span>
          </NavElement>
        </StyledLink>
        <StyledLink to="story" smooth={true} duration={600}>
          <NavElement>
            OUR <span>STORY</span>
          </NavElement>
        </StyledLink>
      </NavContainer>
    </Container>
  );
};

export default NavigationPage;
