import styled from "styled-components";

export const Container = styled.div``;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 80px 40px;
  justify-content: center;
  gap: 40px;

  @media screen and (max-width: 1024px) {
    padding: 40px 20px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 40px 25px;
  }
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
  margin-bottom: 180px;
  margin-top: 0;

  @media screen and (max-width: 1024px) {
    font-size: 32px;
    max-width: 483px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 768px) {
    max-width: 570px;
    margin-top: -15px;
  }
`;

export const ProjectsParagraph = styled.p`
  max-width: 800px;
  color: #d9d9d9;
  font-family: "InterTightLight", sans-serif;
  font-size: 38px;
  line-height: 140%;
  margin-bottom: 20px;

  @media screen and (max-width: 1024px) {
    font-size: 24px;
    max-width: 483px;
    margin-bottom: 25px;
  }

  @media screen and (max-width: 768px) {
    max-width: 728px;
    font-size: 26px;
  }
`;

export const ProjectsSliderContainer = styled.div`
  position: relative;
  width: 800px;
  height: 800px;

  @media screen and (max-width: 1024px) {
    width: 481px;
    height: 517px;
  }

  @media screen and (max-width: 768px) {
    width: 728px;
    height: 510px;
  }
`;

export const ProjectsSliderImage = styled.img`
  width: 100%;
  height: 100%;
  margin: 0;
`;

export const ProjectsSliderNameContainer = styled.div`
  background-color: #000000;
  padding-top: 20px;
  padding-left: 30px;
  position: absolute;
  bottom: -30px;
  right: -2px;
  display: inline-block;

  @media screen and (max-width: 1024px) {
    bottom: -17px;
    padding-left: 18px;
    padding-top: 15px;
  }
`;

export const ProjectsSliderName = styled.h1`
  font-family: "Mango", sans-serif;
  font-size: 110px;
  color: #d9d9d9;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 1024px) {
    font-size: 60px;
  }
`;
