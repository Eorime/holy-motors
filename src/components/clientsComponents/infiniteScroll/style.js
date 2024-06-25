import styled from "styled-components";
import { keyframes } from "styled-components";

const slide1 = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const slide2 = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(50%);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  width: 100%;
  white-space: nowrap;
`;

export const ScrollContainer1 = styled.div`
  display: inline-block;
  margin-bottom: 70px;
  margin-left: 150px;
  animation: ${slide1} 15s infinite linear;
  animation-fill-mode: both;
`;

export const ScrollContainer2 = styled.div`
  display: inline-block;
  margin-left: 320px;
  margin-right: 200px;
  animation: ${slide2} 15s infinite linear;
  animation-fill-mode: both;
`;

export const ClientLogo = styled.img`
  object-fit: contain;
  margin-right: 140px;
`;
