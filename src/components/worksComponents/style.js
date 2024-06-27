import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 40px;
`;

export const WorkSliderContainer = styled.div`
  max-width: 100%;
  position: relative;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const WorksImage = styled.img`
  max-width: 100%;
`;

export const WorksImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 99.5%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 2%, rgba(0, 0, 0, 0));
  pointer-events: none;
`;

export const WorksTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 200px;
`;

export const WorksMainPar = styled.p`
  position: relative;
  color: #ffffff;
  font-size: 26px;
  max-width: 800px;
  font-family: "InterTightLight", sans-serif;
  line-height: 130%;
  padding-left: 40px;
  margin-top: -300px;
`;

export const WorksParagraph = styled.p`
  color: #ffffff;
  font-size: 26px;
  max-width: 800px;
  font-family: "InterTightLight", sans-serif;
  line-height: 130%;
  padding-left: 40px;
  margin-top: -210px;
  position: absolute;
`;

export const WorksNameContainer = styled.div`
  background-color: #ff0000;
  padding-top: 30px;
  padding-left: 30px;
  position: absolute;
  display: inline-block;
  bottom: -25px;
  right: -1px;
`;

export const WorksName = styled.h1`
  font-family: "Mango", sans-serif;
  font-size: 110px;
  color: #ffffff;
  max-width: 570px;
  margin: 0;
  padding: 0;
  position: relative;
`;