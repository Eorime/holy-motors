import { Link } from "react-scroll";
import styled from "styled-components";

export const Container = styled.div``;

export const NavContainer = styled.div`
  background-color: #d9d9d9;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
  margin-top: 0px;
  width: 100%;
  height: 1170px;
  padding-left: 70px;
  padding-top: 70px;
  padding-bottom: 32px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;

export const NavElement = styled.h1`
  font-family: "Mango", sans-serif;
  color: #000000;
  font-size: 270px;
  margin-top: 0px;
  margin-bottom: -20px;

  span {
    color: #ff0000;

    &:hover {
      color: #8c0000;
    }
  }
`;
