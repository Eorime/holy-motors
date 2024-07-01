import styled from "styled-components";

export const Container = styled.div``;

export const WorksContainerStyle = styled.div`
  background-color: #ff0000;
  height: 1000px;

  @media screen and (max-width: 1500px) {
    height: 597px;
  }

  @media screen and (max-width: 995px) {
    height: 1034px;
  }

  @media screen and (max-width: 740px) {
    height: 900px;
  }

  @media screen and (max-width: 500px) {
    height: 568px;
  }
`;
