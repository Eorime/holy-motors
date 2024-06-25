import React from "react";
import NavigationPage from "../navigationPage/NavigationPage";
import ProjectsPage from "../projectsPage/ProjectsPage";
import WorksPage from "../worksPage/WorksPage";
import ClientsPage from "../clientsPage/ClientsPage";
import StoryPage from "../storyPage/StoryPage";
import { Container } from "./style";

const LandingPage = () => {
  return (
    <Container>
      <NavigationPage />
      <ProjectsPage />
      <WorksPage />
      <ClientsPage />
      <StoryPage />
    </Container>
  );
};

export default LandingPage;
