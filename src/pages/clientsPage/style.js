import styled from "styled-components";

export const Container = styled.div``;

export const ClientsContainer = styled.div`
  background-color: #000000;
  height: 1050px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1500px) {
    height: 640px;
  }

  @media screen and (max-width: 995px) {
    height: 1024px;
  }

  @media screen and (max-width: 740px) {
    height: 900px;
  }

  @media screen and (max-width: 500px) {
    height: 568px;
  }
`;

export const ClientsHeader = styled.h1`
  font-family: "Mango", sans-serif;
  font-size: 230px;
  color: #ffffff;
  margin-top: 186px;
  margin-bottom: 110px;

  @media screen and (max-width: 1500px) {
    font-size: 135px;
    margin-top: 94px;
    margin-bottom: 70px;
  }

  @media screen and (max-width: 995px) {
    font-size: 100px;
  }

  @media screen and (max-width: 740px) {
    font-size: 80px;
    margin-bottom: 40px;
  }

  @media screen and (max-width: 500px) {
    font-size: 60px;
    margin-top: 40px;
  }
`;
