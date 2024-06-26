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
  height: 1170px;
  padding-left: 70px;
  padding-top: 70px;
  padding-bottom: 32px;

  @media screen and (max-width: 1500px) {
    padding-top: 30px;
    margin-bottom: -450px;
    padding-left: 20px;
  }

  @media screen and (max-width: 995px) {
    padding-top: 417px;
    height: 1024px;
  }

  @media screen and (max-width: 740px) {
    height: 900px;
    padding-bottom: 20px;
  }

  @media screen and (max-width: 500px) {
    height: 568px;
    margin-top: -120px;
    padding-bottom: 150px;
  }
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

  @media screen and (max-width: 1500px) {
    font-size: 200px;
    margin-bottom: -40px;
  }

  @media screen and (max-width: 995px) {
    font-size: 160px;
  }

  @media screen and (max-width: 740px) {
    font-size: 130px;
  }

  @media screen and (max-width: 500px) {
    font-size: 70px;
    margin-bottom: -20px;
  }
`;
