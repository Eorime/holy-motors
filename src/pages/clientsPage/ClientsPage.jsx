import React from "react";
import { ClientsContainer, ClientsHeader, Container } from "./style";
import InfiniteScroll from "../../components/clientsComponents/infiniteScroll/InfiniteScroll";

const ClientsPage = () => {
  return (
    <Container id="clients">
      <ClientsContainer>
        <ClientsHeader>CLIENTS</ClientsHeader>
        <InfiniteScroll />
      </ClientsContainer>
    </Container>
  );
};

export default ClientsPage;
