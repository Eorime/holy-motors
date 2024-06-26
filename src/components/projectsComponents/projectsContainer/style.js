import styled from "styled-components";

export const Container = styled.div``;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 100px 40px;
  justify-content: center;
  gap: 40px;
`;

export const ProjectsTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProjectsHeader = styled.h1`
  width: 780px;
  font-family: "InterTightSemiBold", sans-serif;
  font-size: 44px;
  color: #d9d9d9;
  line-height: 130%;
`;

export const ProjectsParagraph = styled.p`
  max-width: 800px;
  color: #d9d9d9;
  font-family: "InterTightLight", sans-serif;
  font-size: 38px;
  line-height: 140%;
  margin-bottom: 20px;
`;

export const ProjectsSliderContainer = styled.div`
  position: relative;
  max-width: 800px;
  width: 100%;
`;

export const ProjectsSliderImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  max-height: 800px;
`;

export const ProjectsSliderNameContainer = styled.div`
  background-color: #000000;
  padding-top: 30px;
  padding-left: 30px;
  display: inline-block;
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const ProjectsSliderName = styled.h1`
  font-family: "Mango", sans-serif;
  font-size: 110px;
  color: #d9d9d9;
  margin: 0;
`;
