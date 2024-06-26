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
`;

export const StorySubHeader = styled.h6`
  font-family: "InterTightSemiBold", sans-serif;
  font-size: 35px;
  color: #ffffff;
  max-width: 520px;
  margin-top: 20px;
`;

export const StoryParagraph = styled.p`
  font-family: "InterTightLight", sans-serif;
  font-size: 26px;
  color: #ffffff;
  max-width: 520px;
`;
