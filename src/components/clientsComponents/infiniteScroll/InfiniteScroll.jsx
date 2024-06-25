import React from "react";
import { ClientLogo, Container, ScrollContainer } from "./style";
import WB from "../../../assets/images/clientLogos/client-01.png";

const InfiniteScroll = () => {
  return (
    <Container>
      <ScrollContainer>
        <ClientLogo src={WB} />
      </ScrollContainer>
    </Container>
  );
};

export default InfiniteScroll;
