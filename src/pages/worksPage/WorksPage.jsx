import React from "react";
import { Container, WorksContainerStyle } from "./style";
import WorksContainer from "../../components/worksComponents/WorksContainer";

const WorksPage = () => {
  return (
    <Container id="works">
      <WorksContainerStyle>
        <WorksContainer />
      </WorksContainerStyle>
    </Container>
  );
};

export default WorksPage;
