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

export const SliderButton = styled.button`
  position: absolute;
  top: 94.5%;
  transform: translateY(-50%);
  background: #ff0000;
  color: white;
  border: none;
  height: 30px;
  width: 30px;
  cursor: pointer;
  z-index: 1;
  font-size: 20px;
  padding-bottom: 5px;
  transition: background 0.3s ease;

  &:hover {
    background: #ffffff;
    color: #000000;
  }
`;

export const PrevButton = styled(SliderButton)`
  right: 390px;
`;

export const NextButton = styled(SliderButton)`
  right: 345px;
`;

export const SliderContainer = styled.div`
  position: absolute;
  bottom: 765px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 15px;
  z-index: 10;
`;

export const SliderBar = styled.div`
  width: 233px;
  height: 6px;
  background-color: #d9d9d9;
  transition: background-color 0.3s ease-in-out;

  &.active {
    background-color: #ff0000;
  }
`;

export const SliderCounter = styled.p`
  font-size: 40px;
  font-family: "Mango", sans-serif;
  color: #ff0000;
  position: absolute;
  top: 87%;
  left: 30px;
  z-index: 1;
`;
