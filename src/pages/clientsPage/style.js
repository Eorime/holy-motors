import styled from "styled-components";

export const Container = styled.div``;

export const ClientsContainer = styled.div`
  background-color: #000000;
  height: 1050px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1024px) {
    height: 640px;
  }

  @media screen and (max-width: 995px) {
    height: 1024px;
  }
`;

export const ClientsHeader = styled.h1`
  font-family: "Mango", sans-serif;
  font-size: 230px;
  color: #ffffff;
  margin-top: 186px;
  margin-bottom: 110px;

  @media screen and (max-width: 1024px) {
    font-size: 135px;
    margin-top: 94px;
    margin-bottom: 70px;
  }

  @media screen and (max-width: 995px) {
    font-size: 100px;
  }
`;
