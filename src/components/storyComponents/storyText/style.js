import styled from "styled-components";

export const Container = styled.div``;

export const StoryMainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
  padding-top: 65px;
  gap: 45px;

  @media screen and (max-width: 1500px) {
    gap: 31px;
  }

  @media screen and (max-width: 995px) {
    flex-direction: column;
  }
`;

export const StoryLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StoryRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
`;

export const StorytHeader = styled.h1`
  font-family: "Mango", sans-serif;
  font-size: 230px;
  color: #ffffff;
  margin-bottom: -30px;
  padding-top: 10px;

  @media screen and (max-width: 1500px) {
    font-size: 135px;
  }

  @media screen and (max-width: 995px) {
    font-size: 100px;
    margin-bottom: 2px;
    margin-top: 560px;
  }
`;

export const StorySubHeader = styled.h6`
  font-family: "InterTightSemiBold", sans-serif;
  font-size: 35px;
  color: #ffffff;
  max-width: 520px;
  margin-top: 20px;

  @media screen and (max-width: 1500px) {
    font-size: 21px;
    max-width: 309px;
    margin-top: 10px;
  }

  @media screen and (max-width: 995px) {
    font-size: 32px;
    max-width: 650.6px;
    margin-top: 20px;
    margin-bottom: -35px;
  }
`;

export const StoryParagraph = styled.p`
  font-family: "InterTightLight", sans-serif;
  font-size: 26px;
  color: #ffffff;
  max-width: 520px;

  @media screen and (max-width: 1500px) {
    font-size: 16px;
    max-width: 309px;
  }

  @media screen and (max-width: 995px) {
    font-size: 24px;
    max-width: 650.6px;
  }
`;
