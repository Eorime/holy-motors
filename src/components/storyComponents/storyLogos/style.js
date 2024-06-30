import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 115px;
  justify-content: center;

  @media screen and (max-width: 1500px) {
    gap: 66px;
    margin-top: -20px;
  }

  @media screen and (max-width: 995px) {
    gap: 66px;
    margin-top: 80px;
    padding-bottom: 80px;
  }
`;

export const StoryLogo = styled.img`
  object-fit: contain;

  @media screen and (max-width: 1500px) {
    max-width: 160px;
  }
`;
