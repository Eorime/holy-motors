import React from "react";
import NavigationPage from "../navigationPage/NavigationPage";
import ProjectsPage from "../projectsPage/ProjectsPage";
import WorksPage from "../worksPage/WorksPage";
import ClientsPage from "../clientsPage/ClientsPage";
import StoryPage from "../storyPage/StoryPage";

const LandingPage = () => {
  return (
    <div>
      <NavigationPage />
      <ProjectsPage />
      <WorksPage />
      <ClientsPage />
      <StoryPage />
    </div>
  );
};

export default LandingPage;
