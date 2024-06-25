import React from "react";
import { Container, NavContainer, NavElement, StyledLink } from "./style";

const NavigationPage = () => {
  return (
    <Container>
      <NavContainer>
        <StyledLink>
          <NavElement>
            OUR <span>PROJECTS</span>
          </NavElement>
        </StyledLink>
        <StyledLink>
          <NavElement>
            OUR <span>WORKS</span>
          </NavElement>
        </StyledLink>
        <StyledLink>
          <NavElement>
            OUR <span>CLIENTS</span>
          </NavElement>
        </StyledLink>
        <StyledLink>
          <NavElement>
            OUR <span>STORY</span>
          </NavElement>
        </StyledLink>
      </NavContainer>
    </Container>
  );
};

export default NavigationPage;
