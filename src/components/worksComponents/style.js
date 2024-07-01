import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 40px;

  @media screen and (max-width: 1500px) {
    padding: 60px 20px;
  }

  @media screen and (max-width: 995px) {
    padding: 40px 20px;
  }
`;

export const WorkSliderContainer = styled.div`
  max-width: 100%;
  position: relative;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;

  @media screen and (max-width: 1500px) {
    height: 944px;
    height: 800px;
  }
`;

export const WorksImage = styled.img`
  max-width: 100%;

  @media screen and (max-width: 1500px) {
    object-fit: cover;
    height: 480px;
  }

  @media screen and (max-width: 995px) {
    height: 100%;
  }

  @media screen and (max-width: 740px) {
    height: 100%;
  }
`;

export const WorksImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 99.5%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 2%, rgba(0, 0, 0, 0));
  pointer-events: none;

  @media screen and (max-width: 1500px) {
    height: 480px;
  }

  @media screen and (max-width: 995px) {
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.9) 2%,
      rgba(0, 0, 0, 0)
    );
  }
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

  @media screen and (max-width: 1500px) {
    font-size: 16px;
    max-width: 480px;
    top: 65%;
    position: absolute;
    left: -20px;
  }

  @media screen and (max-width: 995px) {
    font-size: 24px;
    max-width: 688px;
    top: 38%;
    padding-left: 40px;
  }

  @media screen and (max-width: 740px) {
    font-size: 20px;
    top: 48%;
  }
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

  @media screen and (max-width: 1500px) {
    font-size: 16px;
    max-width: 480px;
    top: 60%;
    left: -20px;
  }

  @media screen and (max-width: 995px) {
    font-size: 24px;
    max-width: 688px;
    top: 40%;
    padding-left: 40px;
  }

  @media screen and (max-width: 740px) {
    font-size: 20px;
    top: 50%;
  }
`;

export const WorksNameContainer = styled.div`
  background-color: #ff0000;
  padding-top: 30px;
  padding-left: 30px;
  position: absolute;
  display: inline-block;
  bottom: -25px;
  right: -1px;

  @media screen and (max-width: 1500px) {
    bottom: 47.5%;
    padding-left: 18px;
    padding-top: 15px;
  }

  @media screen and (max-width: 995px) {
    right: -2px;
    bottom: -2%;
  }

  @media screen and (max-width: 740px) {
    bottom: -1.5%;
  }
`;

export const WorksName = styled.h1`
  font-family: "Mango", sans-serif;
  font-size: 110px;
  color: #ffffff;
  max-width: 570px;
  margin: 0;
  padding: 0;
  position: relative;

  @media screen and (max-width: 1500px) {
    font-size: 60px;
    max-width: 312px;
  }

  @media screen and (max-width: 740px) {
    max-width: 230px;
    font-size: 45px;
  }
`;

export const SliderButton = styled.button`
  position: absolute;
  top: 9%;
  transform: translateY(-50%);
  background: #000000;
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

  @media screen and (max-width: 1500px) {
    height: 20px;
    width: 20px;
    font-size: 11px;
    top: 5.5%;
  }

  @media screen and (max-width: 995px) {
    height: 40px;
    width: 40px;
    font-size: 24px;
    top: 95.5%;
  }

  @media screen and (max-width: 740px) {
    height: 30px;
    width: 30px;
    font-size: 18px;
  }
`;

export const PrevButton = styled(SliderButton)`
  right: 85px;

  @media screen and (max-width: 1500px) {
    right: 60px;
  }

  @media screen and (max-width: 995px) {
    right: 58%;
  }

  @media screen and (max-width: 740px) {
    right: 70%;
  }
`;

export const NextButton = styled(SliderButton)`
  right: 40px;

  @media screen and (max-width: 1500px) {
    right: 30px;
  }

  @media screen and (max-width: 995px) {
    right: 50%;
  }

  @media screen and (max-width: 740px) {
    right: 60%;
  }
`;

export const SliderContainer = styled.div`
  position: absolute;
  bottom: 765px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 15px;
  z-index: 10;

  @media screen and (max-width: 1500px) {
    bottom: 920px;
  }

  @media screen and (max-width: 740px) {
    top: 4%;
  }
`;

export const SliderBar = styled.div`
  width: 390px;
  height: 6px;
  background-color: #d9d9d9;
  transition: background-color 0.3s ease-in-out;

  &.active {
    background-color: #ff0000;
  }

  @media screen and (max-width: 1500px) {
    height: 5px;
    width: 220px;
  }

  @media screen and (max-width: 995px) {
    width: 150px;
  }

  @media screen and (max-width: 740px) {
    width: 80px;
  }
`;

export const SliderCounter = styled.p`
  font-size: 45px;
  font-family: "Mango", sans-serif;
  color: #000000;
  position: absolute;
  top: 2%;
  left: 40px;
  z-index: 1;

  @media screen and (max-width: 1500px) {
    font-size: 40px;
    top: 0.5%;
  }

  @media screen and (max-width: 995px) {
    font-size: 40px;
    top: 90.5%;
    left: 20px;
  }

  @media screen and (max-width: 740px) {
    top: 88.5%;
  }
`;
