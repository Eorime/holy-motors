import styled from "styled-components";
import { keyframes } from "styled-components";

const slide1 = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const slide2 = keyframes`
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
`;

export const ContainerWrapper = styled.div`
  overflow: hidden;
  width: 100%;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const Container = styled.div`
  align-items: center;
  overflow: hidden;
  width: 100%;
  white-space: nowrap;

  @media screen and (max-width: 768px) {
    padding-left: 122px;
  }
`;

export const ScrollContainer1 = styled.div`
  display: inline-block;
  margin-bottom: 70px;
  animation: ${slide1} 15s infinite linear;

  @media screen and (max-width: 768px) {
    animation: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    margin-top: 20px;
  }
`;

export const ScrollContainer2 = styled.div`
  display: inline-block;
  animation: ${slide2} 15s infinite linear;

  @media screen and (max-width: 768px) {
    animation: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 75px;
    margin-bottom: 10px;
  }
`;

export const ClientLogo = styled.img`
  object-fit: contain;
  margin-right: 140px;

  @media screen and (max-width: 1024px) {
    max-width: 90px;
  }

  @media screen and (max-width: 768px) {
    max-width: 180px;
  }
`;
