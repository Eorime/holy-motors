import styled from "styled-components";
import background from "../../assets/images/storyBackground.png";

export const Container = styled.div``;

export const StoryContainer = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  height: 1120px;
  background-position: calc(50% - 30px) calc(50% + 10px);
`;
